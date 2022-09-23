const JsonBody = pm.response.json()
console.log(pm.response)

pm.test("Response status", () => {
    pm.response.to.have.status("OK")
})

pm.test("Check name", () => {
    pm.expect(JsonBody.name).to.eql("new")
})

pm.test("ID check", () => {
    number = [1,2,3,4,5,6,7,8,9]
    pm.expect(JsonBody.id).to.be.a("string")
    pm.expect(JsonBody.id).to.include(number[2])
})

pm.test("Url check", () => {
    //pm.expect(JsonBody.url).to.eql("https://trello.com/b/ZBtm7MR6/new")
    pm.expect(JsonBody.url).to.be.a("string")
    pm.expect(JsonBody.url).to.include("/")
    
    let protcolType = pm.expect(JsonBody.url).to.include("https");

    if (protcolType){
        console.log("Type of protocol = https")
    }else{
        console.log("Type of protocol is NOT https")
    }
})

pm.test("Verify limits in JsonBody", () => {
    empty = {}
    pm.expect(JsonBody.limits).to.be.a("object")
    pm.expect(JsonBody.limits).to.eql(empty)
})

pm.test("Any null value?", () => {
    pm.expect(JsonBody.idEnterprise).to.eql(null)
    JsonBody.map(iteration => {
        pm.expect(iteration).to.include(null)
    })
    
})

let closed = pm.expect(JsonBody.closed).to.eql(false);

if (closed) {
    pm.test("Verify closed = false", () => {
        pm.expect(JsonBody.closed).to.not.eql(true)
        console.log("Borad is not closed :)")
    })
}else{
    console.log("Board is closed :(")
}

if (pm.response.to.have.header("Pragma")){
    if (pm.test("Value = no-cache", () => {
        pm.expect(pm.response.headers.get("Pragma")).to.eql("no-cache")
    })){
        console.log("Pragma = no-cahce")
    }else{
        console.log("Pragma = cache")
    }
   
}else{
    console.log("In our response we haven't Pragma header")
}
