var btnDone = document.getElementById('btnDone');
var listOrder = document.getElementsByClassName('handle-form');
var btnProcessing = document.getElementById('btnProcessing');
var btnReceive = document.getElementById('btnReceive');
var test = document.getElementsByClassName('test');
var dataTest = [{CustomerID: 0001,
ListOfFood :[
    {nameOfFood: "Rice", Amount: 1, Price: "5.000VND"},
    {nameOfFood: "Noodle", Amount: 2, Price: "10.000VND"},
    {nameOfFood: "Soup", Amount: 3, Price: "15.000VND"}
]  
}
]
btnDone.onclick = () => {
    if(listOrder[0].className.split(' ').length == 1){
        listOrder[0].className += ' hidden';
    }
    listOrder[1].className = listOrder[1].className.replace(' hidden','');
    test[0].innerHTML = `<p> ${dataTest[0].CustomerID} </p>`;
}

btnProcessing.onclick = () => {
    if(listOrder[1].className.split(' ').length == 1){
        listOrder[1].className += ' hidden';
    }
    listOrder[0].className = listOrder[0].className.replace(' hidden','');
}

function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

readTextFile("./data.json", function(text){
    data = JSON.parse(text);
    console.log(dataTest[0].CustomerID);
});