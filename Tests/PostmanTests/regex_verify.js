pm.test("Regex verify", function() {
    pm.expect(Body[0].SyncId).to.match(/^\d{8}-\d{4}-\d{4}-\d{4}-\d{12}$/)
})

//Verify a regex in our JSON - in this case we're checking the first object 