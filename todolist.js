$(document).ready(function() {



    
$("#c").click(function(){
    $("#li1").hide();
    

})







});

$(document).ready(function() {

$("#r").click(function(){
    $("#li1").addClass("j");
    console.log("tıklandı");

})});

const ul=document.querySelector("#tasklist");
const submit=document.querySelector("#btn");
const input=document.querySelector(".input-group");

const di=document.querySelector(".header");

submit.addEventListener("click",addNewItem);

function addNewItem(e){
    if(input.value===""){
   alert("add new item");
    }else{
        const li=document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        const i1=document.createElement("i");
        i1.classList="fa-solid fa-xmark";
        i1.id="r";
    
        const i2=document.createElement("i");
        i2.classList="fa-solid fa-check";
        i2.id="c";
        
        
        li.appendChild(i1);
        li.appendChild(i2);
       
        ul.appendChild(li);
        
        input.value="";
        e.preventDefault();
    }

    


}

