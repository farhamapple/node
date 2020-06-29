var name = "Farham";
var age = 30;

function Print(){
    console.log("My Name is "+name+", Age is "+age);
}

module.exports.name = name;
module.exports.age = age;
module.exports.print = Print();

module.exports = {
    jenis_kelamin : "Laki - Laki",
    alamat : "Jalan Jalan",
    cetak : function(){
        console.log("Im In Function");
    }
}


