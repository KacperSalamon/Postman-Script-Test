pm.test("Request should include an Authorization header", function () {
    var authorizationHeader = pm.request.headers.get("Authorization");
    pm.expect(authorizationHeader).to.exist;
});
