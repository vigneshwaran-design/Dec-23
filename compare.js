var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };




var flag=true;


if(Object.keys(obj1).length==Object.keys(obj2).length){
    for(key in obj1) { 
        if(obj1[key] == obj2[key]) {
            continue;
        }
        else {
            flag=false;
            break;
        }
    }
}
else {
    flag=false;
}
console.log("is object equal"+flag);
