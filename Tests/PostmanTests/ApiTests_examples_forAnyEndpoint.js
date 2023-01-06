pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Response should be a JSON object", function () {
    pm.response.to.be.json;
});

pm.test("Response should have a userId field", function () {
    pm.response.to.have.jsonBody("userId");
});

pm.test("User ID should be a positive integer", function () {
    var userId = pm.response.json().userId;
    pm.expect(userId).to.be.a("number");
    pm.expect(userId).to.be.above(0);
});

pm.test("Response should have a name field", function () {
    pm.response.to.have.jsonBody("name");
});

pm.test("Name should be a string", function () {
    var name = pm.response.json().name;
    pm.expect(name).to.be.a("string");
});

pm.test("Name should have at least 2 characters", function () {
    var name = pm.response.json().name;
    pm.expect(name.length).to.be.above(1);
});
