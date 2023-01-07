pm.test("Response should not be an empty object", function () {
    var jsonData = pm.response.json();
    pm.expect(Object.keys(jsonData).length).to.be.gt(0);
});