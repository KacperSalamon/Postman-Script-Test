pm.test("Response is Post", () => {
    pm.expect(pm.response.code).to.be.oneOf([200,201,202,204])
    pm.response.to.have.status('OK')
    pm.expect(pm.response.code).to.eql(200)
})

let errorCode = pm.expect(pm.response.code).to.not.be.greaterThan(400)

if (errorCode){
    pm.test("No error's code in our request")
}else{
    console.log("Error code is in request")
}

//let responseCode = pm.expect(pm.response.code).to.eql(200)

if (pm.expect(pm.response.code).to.eql(200)) {
    console.log("Status = 200")
}else{
    console.log("Status is stupid")
}

pm.test("Verify our body is json", function(){
    pm.response.to.be.json
    pm.response.to.not.have.error
})

const JsonBody = pm.response.json()

pm.test("Verify idBoard include numbers", () => {
    numbers = [0,1,2,3,4,5,6,7,8,9]
    pm.expect(JsonBody.idBoard).to.include.oneOf(numbers)
})

pm.collectionVariables.set("key", "4e81066d8117c56a422df076a09144f3")
pm.collectionVariables.set("token", "fc5460ebf2f22904cc597144d4ac6913ea61fcbbdb2e6a59991a15b3397ecf41")

pm.test("Is limits an object", () => {
    pm.expect(JsonBody.limits).to.be.an("object")
})


