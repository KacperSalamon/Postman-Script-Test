let Body = pm.response.json()
console.log(pm.response)

pm.test("Verify error", () => {
    pm.response.to.have.not.error;
})

let Body = pm.response.json()

pm.test("Check the id have a any number", () => {
    let number = [0,1,2,3,4,5,6,7,8,9]
    pm.expect(Body.Id).to.include.oneOf(number)
})

let cookies = pm.expect(pm.response.cookie).to.not.exist

if (cookies) {
    pm.test("NO COOKIES", () => {

    })
}else{
    pm.test("COOKIES INCLUDE OF RESPONSE", () => {

    })
}

pm.test("Url check", () => {
    pm.expect(JsonBody.url).to.be.a("string")
    pm.expect(JsonBody.url).to.include("/")
    
    let protcolType = pm.expect(JsonBody.url).to.include("https");

    if (protcolType){
        console.log("Type of protocol = https")
    }else{
        console.log("Type of protocol is NOT https")
    }
})

pm.test("Response code/status", () => {
    pm.response.to.have.status("OK");
    pm.expect(pm.response.code).to.eql(200)
    pm.expect(pm.response.code).to.not.eql.oneOf([400,401,403,404,405,409,453,500,503,504])
})

pm.test("Verify responseTime", () => {
    pm.expect(pm.response.responseTime).to.be.below(200)
    pm.expect(pm.response.responseTime).to.be.lessThan(200)
    pm.expect(pm.response.responseTime).to.be.greaterThan(1)
})


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

pm.test("Any empty object's?", () => {
    let emptyObject = {}
    Body.map(iteration => {
        pm.expect(iteration).to.include(emptyObject)
    })
})

const regex = /^\d{8}-\d{4}-\d{4}-\d{4}-\d{12}$/

if (pm.expect(Body[1].SyncId) === regex) {
    pm.test("SyncId = regex format", () => {

    })
}else{
    console.log("SyncId <> regex format")
}

let name = pm.expect(Body[0].Values[0].Name).to.exist

if (name){
    pm.test("Name should be a 'subscription'", () => {
        pm.expect(name).to.be.eql("test")
    })
}

pm.test("Body does not have IP adress", () => {
    return pm.expect(pm.response.json(), "Body have IP adress").to.not.include("IP adress");
})

let objectArray = Object.keys(Body).length;

console.log(objectArray);

if(objectArray === 10){
    pm.test(`In Body are ${objectArray} object`, () => {
        
    }) 
}
