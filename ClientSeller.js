var btnDone = document.getElementById('btnDone');
var listOrder = document.getElementsByClassName('handle-form');
var btnProcessing = document.getElementById('btnProcessing');
var btnReceive = document.getElementById('btnReceive');
var test = document.getElementsByClassName('test');
var innerCustomerID = document.getElementsByClassName('Check');
var btnCheck = document.getElementById('btn-check');

// var dataTest = [{CustomerID: 0001,
// ListOfFood :[
//     {nameOfFood: "Rice", Amount: 1, Price: "5.000VND"},
//     {nameOfFood: "Noodle", Amount: 2, Price: "10.000VND"},
//     {nameOfFood: "Soup", Amount: 3, Price: "15.000VND"}
// ]  
// }
// ]
btnDone.onclick = () => {
    if(listOrder[0].className.split(' ').length == 1){
        listOrder[0].className += ' hidden';
    }
    listOrder[1].className = listOrder[1].className.replace(' hidden','');
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

// readTextFile("./data.json", function(text){
//     data = JSON.parse(text);
//     console.log(dataTest[0].CustomerID);
// });

btnCheck.onclick = () => {
    htmlList.innerHTML = '';
    htmlDone.innerHTML = contentCustomerID.join('');
}
var data = [{"CustomerID": "0001",
"ListOfFood" :[
    {"nameOfFood": "Rice", "Amount": "1", "Price": "5.000VND"},
    {"nameOfFood": "Noodle", "Amount": "2", "Price": "10.000VND"},
    {"nameOfFood": "Soup", "Amount": "3", "Price": "15.000VND"}
]  
}
]

var contentNOF = data[0].ListOfFood.map(function(item){
    return '<div class="Check index-text">' + item.nameOfFood + '</div>';
});

var contentAmount = data[0].ListOfFood.map(function(item){
    return '<div class="Check index-text">' + item.Amount + '</div>';
});

var contentPrice = data[0].ListOfFood.map(function(item){
    return '<div class="Check index-text">' + item.Price + '</div>';
});

var htmlList = document.getElementById('todo-List');
// var contentListOfFood = data[1].map(function(item){
    //     return '<div class="listOrder index-text"><p>' + item.nameOfFood + '</p></div>';
    // })
    var contentCustomerID = data.map(function(item){
        return '<li><div class="food-order Check"><p class="index-text">' + item.CustomerID + '</p></div>'+ '<div class="food-order">' +  contentNOF + '</div>' +'<div class="food-order">' + contentAmount + '</div>' + '<div class="food-order">' + contentPrice +'</div></li>';
        
    });
    
    htmlList.innerHTML = contentCustomerID.join('');

var htmlDone = document.getElementById('done-list');


