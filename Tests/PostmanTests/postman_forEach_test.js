if(Body){
    Body.forEach(value => {
        pm.test(`The ${value.Id} has name = ${value.Name}. The all value of object is ${objectArray}`), () => {
            pm.expect(Body.Id).to.not.be.null;
        }
    })
}