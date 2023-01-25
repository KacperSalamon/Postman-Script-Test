pm.test("Check if all objects have 'car' element and 'car' is European", () => {
    europeanCar = ["Mercedes", "BMW", "Audi", "Opel", "Citroen", "Fiat", "Ferrari", "Dacia", "Renault", "Volkswagen", "Skoda", "Seat",
    "Volvo", "Mini", "Bentley", "Peugot"]
    var jsonData = pm.response.json();
    jsonData.forEach(function(element) {
        pm.expect(element).to.have.property("car");
        pm.expect(element.car).to.have.property("make");
        pm.expect(element.car.make).to.include("European");
        pm.expect(element.car).is.eql.oneOf(europeanCar);
    });
});
