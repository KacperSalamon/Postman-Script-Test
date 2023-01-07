let httpsEndpoint = pm.expect(url).to.have.protocol("https");

if(httpsEndpoint){
    pm.test("Endpoint use https method")
}else{
    console.log("Endpoint is not secure - contact with Dev's")
}