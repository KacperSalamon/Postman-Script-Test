pm.test("Two-part last name present", () => {
    pm.response.json().forEach(function(object) {
        pm.expect(object.last_name.split(" ").length).to.equal(2);
    });
});

pm.test("Polish name present", () => {
    pm.response.json().forEach(function(object) {
        pm.expect(object.first_name).to.match(/^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]*$/);
    });
});
