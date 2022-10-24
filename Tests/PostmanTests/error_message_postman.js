if(pm.collectionVariables.name.includes("test")) {
    throw new Error (`The ${pm.environment.name} has invalid name`)
}