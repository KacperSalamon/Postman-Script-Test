pm.test("API should return a 200 status code", function() {
    pm.response.to.have.status(200);
  });
  
pm.test("API should return a JSON response", function() {
    pm.response.to.be.json;
  });
  
pm.test("API should return a non-empty response body", function() {
    pm.expect(pm.response.text()).to.not.be.empty;
  });

pm.test("API should return a user object with the correct fields", function() {
    pm.response.to.be.json;
    var jsonResponse = pm.response.json();
    pm.expect(jsonResponse).to.have.property('any important value for our api');
    pm.expect(jsonResponse).to.have.property('any important value for our api');
    pm.expect(jsonResponse).to.have.property('any important value for our api');
  });
  
  //above script show us how we can check that our response communicate correctly with DB. We checked status code, type of response, that our body isn't empty etc.