if(_.find(Body, {"Name" : "Paid type enum"})){
    pm.test("In JSON inlcude object with name - Paid type enum");
    console.log(_.find(Body, {"Name" : "Paid type enum"}))
}else{
    console.log("error");
}

// another test for file -> postman_tests_MP.js 