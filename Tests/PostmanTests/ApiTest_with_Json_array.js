pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Response should be a JSON array", function () {
    pm.response.to.be.json;
    let array = pm.expect(pm.response.json()).to.be.an("array");
    if(array){
        pm.test("All items should have a name and a price field", function () {
            pm.response.json().forEach(function (item) {
                pm.expect(item).to.have.property("name");
                pm.expect(item).to.have.property("price");
            });
        });

        pm.test("All prices should be positive numbers", function () {
            pm.response.json().forEach(function (item) {
                pm.expect(item.price).to.be.a("number");
                pm.expect(item.price).to.be.above(0);
            });
        });

        pm.test("All names should be strings", function () {
            pm.response.json().forEach(function (item) {
                pm.expect(item.name).to.be.a("string");
            });
        });
        
        pm.test("All names should have at least 2 characters", function () {
            pm.response.json().forEach(function (item) {
                pm.expect(item.name.length).to.be.above(1);
            });
        });

        pm.test("All items should have unique names", function () {
            var names = pm.response.json().map(function (item) {
                return item.name;
            });
            pm.expect(names).to.have.unique.members;
        });
    }else{
        console.log("Sorry this is not a array, so the forEach & map funtion will be not working")
    }
});

pm.test("Response should have at least 10 items", function () {
    pm.expect(pm.response.json().length).to.be.at.least(10);
});