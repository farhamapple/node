var obj = {
    name : "Fahram",
    age : 30,
    print : function () {
        console.log(this.name+" is "+this.age+" Years Old");
        console.log(this === obj);
    }
}

// var obj2 = obj;
// obj2.age = 50; // Object Reference < berubah jadi objek yang ke 1

//console.log(obj);

function myFunction(){
    console.log("Im My Function");
    console.log(this === global);
}

obj.print();
console.log('-------------------');
myFunction();