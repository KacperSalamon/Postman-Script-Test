let postBody = pm.response.json();

var items = ["rer", "tet", "arr"];

var sortItems = items.sort(function(a, b) {
    return a.localeCompare(b);
}) 

let startWith = sortItems[0].startsWith("a");

if (startWith){
    pm.test("The first element in array start from 'a'")
}else{
    console.log("The first element in array NOT start from 'a'")
}

console.log(typeof postBody.body)

if(typeof postBody.body === "string") {
    pm.test("body verify of first JSON object", () => {
    let verifyBody = postBody.find(m => m.body === "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto")
    pm.expect(verifyBody).to.be.an("string")
})
}else{
    console.log("The typeof body is diffrent than string")
}

pm.test("Verify object posts/1", () => {
    pm.expect({"userId": 1,
    "id": 1}).to.be.an('object')
  .that.has.all.keys("userId", "id");
})