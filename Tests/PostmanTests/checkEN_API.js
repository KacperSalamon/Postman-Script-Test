let JsonBody = pm.response.json();

pm.test("Verify all object in BODY have en language", () => {
    let languageWithoutEN = [];
    JsonBody.forEach(element => {
        if(!element.language.includes("en")) {
            languageWithoutEN.push(element.language);
        }
    });

    if (languagesWithoutEn.length > 0) {
        console.log("Languages without en: " + languagesWithoutEn.join(", "));
        pm.expect(languagesWithoutEn.length).to.equal(0);
    } else {
        pm.expect(languagesWithoutEn.length).to.equal(0);
    }
});


pm.test("Any FR language in objects?", () => {
    JsonBody.map(element => {
        if(element.language.includes("fr")) {
            console.log(_.find(JsonBody.language, {"language" : "fr"}))
        }
    })
}) 