pm.test("API should provide instructions for obtaining a valid API key", function() {
    pm.expect(response.code).to.be.oneOf([401, 403]);
    pm.expect(response.headers['WWW-Authenticate']).to.include('APIKey');
    pm.expect(response.body).to.include('Contact the API administrator');
  });