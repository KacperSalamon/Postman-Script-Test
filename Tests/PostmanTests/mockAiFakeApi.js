let Body = pm.response.json();

pm.test("Status verify", () => {
    pm.expect(pm.response.code).to.eql(200);
    pm.response.to.have.status("OK")
})

let random = Math.floor(Math.random() * 4)
console.log(random)


pm.test(`Random name for ${random} number`, () => {
    pm.expect(Body[random].name).to.include("a");
})

let resTime = pm.expect(pm.response.responseTime)

if(resTime > 1000){
    pm.test("Time is bad")
}else if(resTime <= 200){
    pm.test("Time is so good")
}else{
    pm.test("Time is ok")
}

let cityOfEurope = ["London", "Madrid", "Paris"];

pm.test("All city are from Europe", () => {
    Body.map(iteration => {
        pm.expect(iteration.city).is.oneOf(cityOfEurope);
    })
})

// test for URI ---> https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8