const input= document.querySelector("#input");
const azalt=document.querySelector("#azalt");
const reset=document.querySelector("#reset");
const arttır=document.querySelector("#arttır");

let counter=0;
input.addEventListener('change', function(){
    counter = parseInt(input.value)
})

azalt.addEventListener('click', function() {
    counter--;
    input.value = counter;
});

reset.addEventListener('click', function() {
    counter = 0;
    input.value = counter;
});

arttır.addEventListener('click', function() {
    counter++;
    input.value = counter;
});
