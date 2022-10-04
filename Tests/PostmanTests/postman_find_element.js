let foo = _.find(Body, {"Id": 6})

if(foo){
    pm.test("ID = 6", () => {
    console.log(foo)
    })
}else{
    console.log("ni ma")
}