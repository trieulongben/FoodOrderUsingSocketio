var btnDone = document.getElementById('btnDone');
var listOrder = document.getElementsByClassName('handle-form');
var btnProcessing = document.getElementById('btnProcessing');
var btnReceive = document.getElementById('btnReceive');

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