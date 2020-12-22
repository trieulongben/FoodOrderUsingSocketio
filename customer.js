// var foodlist=[
//     {"name":"mi","value":0,"baseprice":30},
//     {"name":"mi2","value":0,"baseprice":20},
//     {"name":"com","value":0,"baseprice":40},
//     {"name":"com2","value":0,"baseprice":50},
//     {"name":"soda","value":0,"baseprice":60},
//     {"name":"nuoc","value":0,"baseprice":60}]
//     var price=0;
//     var total;
//     function opencart() {
//         document.getElementById("popup").style.display = "block";
//       }
      
//       function closecart() {
//         document.getElementById("popup").style.display = "none";
//       }
    
//     function clearlist(){
//       document.getElementById("Cartlist").innerHTML="";
//     }
//     function updatePrice(){
//       price=0;
//       for(var i=0;i<foodlist.length;i++){
//         if(foodlist[i]["value"]>=1){
//       price+=foodlist[i]["value"]*foodlist[i]["baseprice"];
      
//         }}
//     }
//     function Send(){
//       data=JSON.stringify(foodlist);
//       xmlhttp= new XMLHttpRequest();
//       xmlhttp.onreadystatechange=function(){
//         if(this.readyState==4 && this.status==200){
    
//         }
//       }
//     }
//     /*
//     function updateTotalPrice(){
//       for (var i=0;i<foodlist.length;i++)
//       {
//         if(foodlist[i]["value"]>=1){
//       price += foodlist[i]["baseprice"]*foodlist[i]["value"];
//       var template2=document.createElement("p");    
//       var liss="Total price :" + price;
//       template2.innerText=liss;
//       document.getElementById("Cartlist").appendChild(template2);
//     }}}
//     */
//     function Listshow(){
//       clearlist();
//         var myEl =document.getElementsByClassName('addbutton');
        
//       for(var i=0;i<foodlist.length;i++){
//         if(foodlist[i]["value"]>=1){
//         var template= document.createElement("li");
//         var y="Food:" +""+foodlist[i]["name"]+ ""+"Amount"+" " + foodlist[i]["value"] +"Price=" + (foodlist[i]["value"]*foodlist[i]["baseprice"]);
//         template.innerText=y;
//         document.getElementById('Cartlist').appendChild(template);
    
    
//         }
//       }
    
//       console.log(total);
//       }
    
//     function additem(){
//         var lisorder=[];
//         var myEl =document.getElementsByClassName('addbutton');
//         for (let i=0;i<myEl.length;i++){
//             myEl[i].addEventListener("click",function(){
//               var x= myEl[i].value;
//               foodlist[x]["value"]++;
//               updatePrice();
//                     Listshow();
//                     var template2=document.createElement("p");    
//                     var liss="Total price :" + price;
//                     template2.innerText=liss;
//                     document.getElementById("Cartlist").appendChild(template2);
                    
        
//           });
//           }
    
     
//         }
//     additem();
    
//     /* Button saveorder to json */
//     function Saveorder(){
//       var button =document.getElementById("Savebutton").addEventListener("click",Saveorder());
//       data=JSON.stringify(foodlist);
//     fs.writeFile('data.json', data, 'utf8', callback);
//     }
    
//     /*
    
//         $(document).ready(function(){
//             $("#addbutton").click(function(){ 
//                 var x= $("#addbutton").value();
//                 console.log(x);
//                 lisorder.push(lisorder);
//                 console.log(json.stringtify(lisorder));
//                 Listshow(lisorder);
    
//     })
//     })
//     }
//     */
    
//     /*!
//     $(document).ready(function(){
//       $("button").click(function(){
//         var x = $("form").serializeArray();
//         var returnArray = {};
//         for (var i = 0; i < x.length; i++){
//             returnArray[x[i]['name']] = x[i]['value'];
//         }
//         console.log(returnArray);
//       });
//     });
//     */