
const input=document.querySelector("#input");
const button=document.querySelector("#btn");
const c=document.querySelector("#c");
const r=document.querySelector("#r");
const ul=document.querySelector("#tasklist");


const di=document.querySelector(".header");

c.addEventListener("click",function(e){

    
    if(confirm("Are you sure you want to delete?")){
       $("li").hide();

    };

});



r.addEventListener("click",function(e){
    document.querySelector("li").style.backgroundColor="red";
});





    
   
    
 
    
   button.addEventListener("click",addNewItem);
    
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
    
            ul.classList.add("list-group");
            li.classList.add("list-group-item");
            
            input.value="";
            e.preventDefault();
        }
    
        
    
    
    }






    
    
    
    
    
    
    
    






document.querySelector(".container").addEventListener("mouseover",function(e) {

    $(".bilgilendirme").removeClass("bilgilendirme").addClass("yenibilgilendirme");

});

$(document).ready(function() {
    $("#iconbilgi").click(function(){
        $(".yenibilgilendirme").hide(2000);

    });
});