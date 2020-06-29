function Order(idOrder, timeOut) {
    console.log("ID Odred = " + idOrder);
    ProsesOrder(idOrder, timeOut);
}

function ProsesOrder(idOrder, timeOut) {
    setTimeout(function () {
        console.log("ID Order = "+idOrder+" ~ Processed");
    }, timeOut);
}

// Eksekusi
Order(101, 5000);
Order(102, 2000);
Order(103, 3000);

