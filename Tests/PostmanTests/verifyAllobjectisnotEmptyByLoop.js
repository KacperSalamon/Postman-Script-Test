pm.test("Response is not empty", function () {
    var jsonData = pm.response.json();
    var isValid = true;

    for (var key in jsonData) {
        if (jsonData.hasOwnProperty(key)) {
            if (jsonData[key] === null || jsonData[key] === "") {
                isValid = false;
                break;
            }
        }
    }

    pm.expect(isValid).to.be.true;
});
