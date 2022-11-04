//next tests for request - https://jsonplaceholder.typicode.com/posts

pm.test("All object.id has got value", () => {
    postBody.map(iteration => {
        pm.expect(iteration.id).to.have.a("number");
        pm.expect(iteration.id).to.have.exist;
    })
})

pm.test("Every body is a string", () => {
    postBody.map(iteration => {
        pm.expect(iteration.body).to.be.a("string")
    })
})

let allObject = Object.keys(postBody).length

if(allObject < 101){
    pm.test(`In all body are ${allObject} objects`)
}else{
    console.log("Objects in postBody is too much")
}

pm.collectionVariables.set("All object in response", allObject)

pm.test("Should not more than 11 userId", () => {
    postBody.map(iteration => {
        pm.expect(iteration.userId).is.not.greaterThan(11)
    })
})