pm.test("Check if all objects have ID and ID is incremental", function() {
    var jsonData = pm.response.json();
    var previousId = 0;
    jsonData.forEach(function(element) {
        pm.expect(element).to.have.property("id");
        pm.expect(element.id).to.be.above(previousId);
        previousId = element.id;
    });
});
