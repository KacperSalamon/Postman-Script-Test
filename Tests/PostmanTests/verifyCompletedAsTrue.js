pm.test("Check if all objects have 'completed' set to true", function() {
    var jsonData = pm.response.json();
    var incompleteTasks = jsonData.filter(function(task) {
        return task.completed !== true;
    });
    pm.expect(incompleteTasks.length).to.equal(0);
    if (incompleteTasks.length > 0) {
        console.log("Incomplete tasks:", incompleteTasks);
    }
});

// in above case the test will be failed for this URI - https://jsonplaceholder.typicode.com/todos. Because 110 element are in FALSE! 