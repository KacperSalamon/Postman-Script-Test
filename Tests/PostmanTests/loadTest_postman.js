if (pm.response.code === 200 || pm.response.code === 201 || pm.response.code === 202) {
    array = pm.collectionVariables.get(perf_test_name) ? JSON.parse(pm.collectionVariables.get(perf_test_name)) : []
    array.push(pm.response.responseTime)
    pm.collectionVariables.get(perf_test_name, JSON.stringify(array))

    average = array.reduce((sum, value) => sum + value) / array.length; 
    pm.collectionVariables.set("perf_test_avg", `${parseInt(average)} ms`)
}