pm.test("Test API - Advanced JSON validation", () => {
    let jsonData = pm.response.json();

    pm.expect(jsonData).to.have.property("tvTitel");
    pm.expect(jsonData).to.have.property("year");
    pm.expect(jsonData).to.have.property("episodes");
    pm.expect(jsonData).to.have.property("rating");

    pm.expect(jsonData.tvTitel).to.be.a("string");
    pm.expect(jsonData.year).to.be.a("number");
    pm.expect(jsonData.episodes).to.be.a("number");
    pm.expect(jsonData.rating).to.be.a("number");

    pm.expect(jsonData.episodes).to.be.above(0);

    pm.expect(jsonData.rating).to.be.within(0, 10);

})