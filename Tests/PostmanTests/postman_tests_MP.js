let Body = pm.response.json()
console.log(pm.response)


pm.test("Check all object have got ID", function() {
    let iD = Body.map(ID => {
        pm.expect(ID.Id).to.exist
    })
    if (iD) {
        console.log('jest')
    }else{
        console.log('nie ma')
    }
})


let foo = _.find(Body, {"Id": 6})

if(foo){
    pm.test("ID = 6", () => {
    console.log(foo)
    })
}else{
    console.log("ni ma")
}

pm.test("Where is name = 'test enum'", () => {
    let name = _.find(Body, {"Name" : "test enum"})
    console.log(name)
})

pm.test("Name is exist in all Enum's", () => {
    Body.map(iteration => {
        pm.expect(iteration.Name).is.exist;
    })
})

pm.test("Any cookies", () => {
    pm.expect(pm.response.cookie).to.not.exist;
})

//random password generator

let guid = () => {
    let s4 = () => {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    //return id of format 'aaaaaaaa'-'aaaa'-'aaaa'-'aaaa'-'aaaaaaaaaaaa'
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

console.log(guid());


//another random generator function of ID

function generateRandom(maxLimit = 100){
  let rand = Math.random() * maxLimit;
  
  rand = Math.floor(rand); 
  console.log(rand); 
  return rand;
}
generateRandom(); 
generateRandom(500); 

pm.test("Header verify", () => {
    pm.response.to.have.header("Content-Type")
})

pm.test("Header name verify", () => {
    pm.expect(pm.response.headers.get("Content-Type")).to.be.oneOf(["application/json; charset=utf-8"])
})

/*pm.test("ID = 8, v2 :)", () => {
    pm.expect(Body.Id).to.have.property("Id","8")
})
*/

pm.test("All enum's have Values?", () => {
    Body.map(values => {
        pm.expect(values.Values).to.exist;
    })
})

pm.test("Check ID of position", () => {
    pm.expect(Body[0].Id).to.not.eql(generateRandom())
})

//console.log(Body.length)

pm.test("Date should include +0100", () => {
    Body.map(date => {
        pm.expect(date.LastUpdateTime).to.include.oneOf(["+0100", "+0200"])
    })
})

pm.test("EnumTypeUsage is a array?", () => {
    pm.expect(Body[0].EnumTypeUsage).to.be.an("array")
})

//założenie 8x-4x-4x-12x

pm.test("SyncId", () => {
    pm.expect(Body[1].SyncId).to.be.a("string")
    
})

const regex = /^\d{8}-\d{4}-\d{4}-\d{4}-\d{12}$/

if (pm.expect(Body[1].SyncId) === regex) {
    pm.test("SyncId = regex format", () => {

    })
}else{
    console.log("SyncId <> regex format")
}