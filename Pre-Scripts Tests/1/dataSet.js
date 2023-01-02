let year = new Date().getFullYear();
console.log(year)

let month = new Date().getMonth() + 1;
console.log(month)

let day = new Date().getDay() + 1;
console.log(day)

let fullDateToTen = year + "-0" + month + "-0" + day;

let fullDateAfterTen = year + "-" + month + "-" + day;

if(month < 9 || day < 9){
    pm.collectionVariables.set("date", fullDateToTen);
}else{
    pm.collectionVariables.set("date", fullDateAfterTen);
}