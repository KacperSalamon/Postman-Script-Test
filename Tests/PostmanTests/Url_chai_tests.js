// 1 part of CHAI tests for url - https://1wtbn3ao24.api.quickmocker.com/articles/1/posts

let Body = pm.response.json() //konwertujemy naszą odpowiedzi aby można było czytać JSON-a i pisać dalsze testy

console.log(Body)

pm.test("Response code/status", () => {
    pm.response.to.have.status("OK");
    pm.expect(pm.response.code).to.eql(200)

})

pm.test("Verify responseTime", () => {
    pm.expect(pm.response.responseTime).to.be.below(250)
    pm.expect(pm.response.responseTime).to.be.greaterThan(1)
})

pm.test("Any errors", () => {
    pm.response.to.have.not.error;
})

pm.test("Id is number for body[0]", () => {
    pm.expect(Body.results[0].id).is.a("number")
})

pm.test("All id is number", () => {
    Body.results.map(iteration => {
        pm.expect(iteration.id).is.a("number")
    })
})

pm.test("All article_id is number", () => {
    Body.results.map(iteration => {
        pm.expect(iteration.article_id).is.a("number") 
})

let cookies = pm.expect(pm.response.cookies).to.exist;

if(cookies){
    pm.test("Cookies is exist")
}else(
    pm.test("Cookies is not exist")
)

pm.test("Where is name = first post", () => {
    let name = _.find(Body.results, {"content": "First post"})
    console.log(name) // w consoli możemy znaleźć gdzie przykładowo znajduje się taki element
})

pm.test("ALl content inlude post", () => {
    Body.results.map(iteration => {
        pm.expect(iteration.content).to.include("post")
    })
})

pm.test("Endpoint have header Connection", function() {
    pm.response.to.have.header("Connection");
})


// 2 part of CHAI tests for url - https://1wtbn3ao24.api.quickmocker.com/articles/

pm.test("Status is ok?", () => {
    pm.expect(pm.response.code).to.eql(200)
})

pm.test("Endpoint haven't error", () => {
    pm.response.to.have.not.error;
})