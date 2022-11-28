pm.test("Verify time response", function() {
    pm.expect(pm.response.responseTime).to.lessThan(200)
})

pm.collectionVariables.set("testowa", "https://test.com")

pm.response.headers.add("testKey : testoweValue")
const Body = pm.response.json()

pm.test("Photos verify", () => {
    pm.expect(Body[0].title).to.eql("accusamus beatae ad facilis cum similique qui sunt")
})

pm.test("Check all object have got ID", function() {
    let iD = Body.map(ID => {
        pm.expect(ID.id).to.exist
    })
    if (iD) {
        console.log('jest')
    }else{
        console.log('nie ma')
    }
})

console.log(pm.response)

pm.test("Cookie verify", () => {
    pm.expect(pm.response.cookie).to.not.exist
})

pm.test("Header", function() {
    pm.response.to.have.header("alt-svc")
})

pm.test("What is in alt-svc header", () => {
    pm.expect(pm.response.headers.get("alt-svc")).to.include(0)
})

pm.test("Every url are safety", () => {
    Body.map(iteration => {
        pm.expect(iteration.url).to.include("https");
    })
})

pm.test("Check ID", () => {
    pm.expect(Body[12]).to.have.property("id", 13)
})



