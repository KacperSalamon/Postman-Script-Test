pm.test("Check if field has correct value", function() {
    var jsonData = pm.response.json();
    var fieldName = "status";
    var expectedValue = "active";
    
    pm.expect(jsonData[fieldName]).to.equal(expectedValue);
});