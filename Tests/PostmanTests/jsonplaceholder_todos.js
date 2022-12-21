let random = Math.floor(Math.random() * 199)

console.log(random)

let Body = pm.response.json()

pm.test(`Is exist completed for ${random} object`, () => {
    pm.expect(Body[random].completed).is.exist;      //PASS
})

pm.test("For all object conplted is FALSE", () => {
    Body.map(iteration => {
        pm.expect(iteration.completed).to.eql(false); //FAIL
    })
})

pm.test("Try to verify language of title", () => {
    let header = pm.response.to.have.header("Content-Language");  //FAIL

    if(header){
    pm.test("Second step - is it english", () => {
        pm.expect(pm.response.headers.get("Content-Language")).to.eql("en-US");
    })
    }else{
        console.log("Sorry - no header Content-language")
    }
})


pm.test("Extract specific words of NOT english language", () => {
    let EnglishLanguage = ["and", "is", "for", "not", "yes", "at"];
    Body.map(iteration => {
        pm.expect(iteration.title).is.include.oneOf(EnglishLanguage);
    }) 
})

pm.test("All id is not null & are > 0", () => {
    Body.map(iteration => {
        pm.expect(iteration.id).is.not.null;
        pm.expect(iteration.id).is.greaterThan(0);
    })
})

pm.test("userId is greater by one in every 20 id's", () => {
    
    pm.expect(Body[20].userId).is.eql(2);
    pm.expect(Body[40].userId).is.eql(3);
    pm.expect(Body[60].userId).is.eql(4);
})

let randomv2 = random / 10
let randomv3 = (Math.floor(randomv2 / 2 + 1))
console.log(randomv3)

pm.test(`The ${random} id number is inside of ${randomv3}`, () => {   
})

pm.test("Cookies exist", () => {
    pm.expect(pm.response.cookie).to.exist;
})

pm.test("The id is eql the number of object", () => {
    pm.expect(Body[random - 1].id).is.eql(random) // we need to - 1 because object start from 0 not 1!
})

pm.test("Title's are string and completed's are BOOL", () => {
    Body.map(iteration => {
        pm.expect(iteration.title).is.a("string");
        pm.expect(iteration.completed).is.a("boolean");
    })
})
