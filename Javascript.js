function List(arr) {
    var out = "";
    var i;
  for(i = 0; i<arr.length; i++) {
      out += '<li> ' + arr[i].name +" " + 
        arr[i].value + '</li><br>';
    }
}
function opencart() {
    document.getElementById("popup").style.display = "block";
  }
  
  function closecart() {
    document.getElementById("popup").style.display = "none";
  }
function objectifyForm(formArray) {
    //serialize data function
    var returnArray = {};
    for (var i = 0; i < formArray.length; i++){
        returnArray[formArray[i]['name']] = formArray[i]['value'];
    }
    return returnArray;
}

function additem(){
    var lisorder=[];
    $(document).ready(function(){
        $("#addbutton").click(function(){
            var x= $("#addbutton").value();
            lisorder.push(x);

}
    }
}

/*!
$(document).ready(function(){
  $("button").click(function(){
    var x = $("form").serializeArray();
    var returnArray = {};
    for (var i = 0; i < x.length; i++){
        returnArray[x[i]['name']] = x[i]['value'];
    }
    console.log(returnArray);
  });
});
*/


