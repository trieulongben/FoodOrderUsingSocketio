
function List(arr) {
  var out = "";
  var i;
for(i = 0; i<arr.length; i++) {
    out += '<li> ' + arr[i].name +" " + 
      arr[i].value + '</li><br>';
  }
document.getElementById("list").innerHTML = out;
}
List(food);

function getdata(){
var obj = $('order').serializeJSON();
var jsonString = JSON.stringify(obj);
}
