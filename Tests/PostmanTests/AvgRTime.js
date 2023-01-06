let responseTimes = [];

pm.test("Average response time is under 500ms", function () {
    let responseTime = pm.response.responseTime;
    responseTimes.push(responseTime);

    let averageResponseTime = responseTimes.reduce((x, y) => x + y) / responseTimes.length;
    pm.expect(averageResponseTime).to.be.below(500);
});
