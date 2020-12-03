class Food{
  constructor(name,value){
    this.name=name;
    this.description=this.description;
  }
  getName(){
    return this.name;
  }
  getValue(){
    return this.value;
  }
  addValue(){
    this.value+=1;
  }
}


var mi=new Food(mi,0);
var com=new Food(com,0);
var soda=new Food(soda,0);
var com2=new Food(com2,0);
var mi2=new Food(mi2,0);
var nuoc=new Food(nuoc,0);









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
function Listshow(x){
    if(x>0){
      template.innerText=JSON.stringify(counter[i]);
      document.getElementById('Cartlist').appendChild(template);
    }
  }
var lisorder=[];
var lisname=["mi","soda","mi2","com","com2","nuoc"];
lisname.forEach(function(name) {
  var singleObj = {}
  singleObj['name'] = name;
  singleObj['value'] =0;
  lisorder.push(singleObj);
  console.log(lisorder);
});

function additem(lisorder){
    var myEl =document.getElementsByClassName('addbutton');
    console.log(myEl);
    console.log(myEl[0]);
    console.log(myEl.length);
    for (let i=0;i<myEl.length;i++){
        myEl[i].addEventListener("click",function(){
          var x= myEl[i].value;
          if(x in lisorder[name])
          {
            lisorder[x]
          }
          console.log(x);
          console.log(x.getValue);
          Listshow(x);
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


