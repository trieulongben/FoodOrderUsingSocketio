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
function Listshow(lisorder){
    var counter=_.countBy(lisorder);
  console.log(_.countBy(lisorder));
    var template= document.createElement("li");
    console.log(template);
    template.innerText=JSON.stringify(counter);
    document.getElementById('Cartlist').appendChild(template);
;

  }

function additem(){
    var lisorder=[];
    var myEl =document.getElementsByClassName('addbutton');
    console.log(myEl);
    console.log(myEl[0]);
    console.log(myEl.length);
    for (let i=0;i<myEl.length;i++){
        console.log("aaa");
        myEl[i].addEventListener("click",function(){
          console.log("fk");
          var x= myEl[i].value;
                console.log(x);
                lisorder.push(x);
                console.log(lisorder);
                Listshow(lisorder);
    
      });
      }

 
    }
additem();
/*

    $(document).ready(function(){
        $("#addbutton").click(function(){
            var x= $("#addbutton").value();
            console.log(x);
            lisorder.push(lisorder);
            console.log(json.stringtify(lisorder));
            Listshow(lisorder);

})
})
}
*/

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


