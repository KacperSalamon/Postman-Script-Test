let jsonData = pm.response.json();
let searchValue = "text text etx";
let foundInField = "";

for (let field in jsonData) {
    if (jsonData[field] === searchValue) {
        foundInField = field;
        break;
    } else if (typeof jsonData[field] === "object") {
        for (let subfield in jsonData[field]) {
            if (jsonData[field][subfield] === searchValue) {
                foundInField = field + "." + subfield;
                break;
            }
        }
    }
}

pm.test("Search value found in field", function() {
    pm.expect(foundInField).to.not.be.empty;
});

console.log("Search value found in: " + foundInField);
