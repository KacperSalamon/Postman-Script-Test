pm.test("Check if URL not contains variables", function() {
    var url = pm.request.url;
    var urlString = String(url);
    var regex = /\{(.*?)\}/g;
    var match = urlString.match(regex);
    pm.expect(match).not.to.be.null;
});