pm.test("Expected element is in response body ", function () {
    let responseBody = pm.response.text();
    let lines = responseBody.split("\n");
    let elementFound = false;
    let elementLine;

    lines.forEach(function(line, index) {
        if (line.includes("aut consectetur in blanditiis deserunt quia sed laboriosam")) {
            elementFound = true;
            elementLine = index + 1;
        }
    });

    pm.expect(elementFound).to.be.true;
    pm.test("Expected element found on line " + elementLine);
});