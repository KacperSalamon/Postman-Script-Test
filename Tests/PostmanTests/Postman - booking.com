#you can also run below tests by use Newman
#If you want do it by Newman - just run this order in cmd % powershell
#newman run https://www.getpostman.com/collections/9aeb7abd6820fc7dab55

pm.test("Status code", function() {
    pm.response.to.have.status("OK");
    pm.expect(pm.response.code).to.eql(200);
    
})

pm.test("Response Time - verify", () => {
    pm.expect(pm.response.responseTime).to.be.lessThan(1500);
})

console.log(pm.response);

pm.test("ID verify", () => {
    let ID = pm.response.id
    pm.expect(ID).to.be.a("string");
    pm.expect(ID).length.greaterThan(10);
    pm.expect(ID).to.include.oneOf([0,1,2,3,4,5,6,7,8,9]);
})

pm.test("Cookies - verify", () => { 
    pm.response.cookies.get("_pxhd");
    const string = "y6lH8XdsgKEhPltvm%14pcfPHcx1odQ3msv-EtMrozUccptp%zjant6NdSTcr127S13nDx6r3xkyhZIz0CuTfg%3D%3D%3AISWH7vPNUaufI77aZUI%2FXAa3S0DM41U1MHKC3W%2FAuTdlad1pgpQZORa3rCKP1aPRKtqXavGhMti10H4%2FVchgku7AtKfvvZQL5r1MVYrbBFc%3D" 
    const changeString = string.replaceAll('%', '/')
    console.log(changeString)
    pm.expect(pm.cookies.get("_pxhd")).to.eql(changeString);
})

pm.test("Cookie verify v2", () => {
    const Cookie = pm.cookies.jar()
    const Url = "booking.com"
    Cookie.getAll(Url, (error, cookies) => {
        if(error) console.log(error);

    })

})

const htmlBody = pm.response.text()

pm.test("Html check body", () => {
    pm.expect(htmlBody).to.include('<!DOCTYPE html>')
    pm.expect(htmlBody).to.include.oneOf(['>', '<', '.'])
})

pm.test("Error", function() {
    pm.response.to.not.be.error;
    pm.response.to.not.have.body("error")
})

pm.collectionVariables.set("URL", "https://www.booking.com")

pm.globals.set("URL", "https://www.booking.com")

pm.test("Check value of test collectionVariables", () => {
    pm.expect(pm.collectionVariables.get("test")).to.eql("test")
})
