pm.test("Response has all required fields", function () {
    var jsonData = pm.response.json();
    var requiredFields = ["id", "name", "description", "price"];
    requiredFields.forEach(function(field) {
        pm.expect(jsonData).to.have.property(field);
    });
});
