debugger;
let count = 1;
let block1 = document.getElementById("1");
let step = document.getElementById("step");
let blocks= [];
var isClicked = false;

for(let i = 1; i<=9; i++){
    blocks[i] = document.getElementById(i);
}

blocks.forEach(function(block){
block.addEventListener("click", function(){
    if(count == 1 && block.innerHTML == ""){
        block.innerHTML = '<p id="step">X</p>';
        count = 2;
    }else if(count == 2 && block.innerHTML == ""){
        block.innerHTML = '<p id="step">O</p>';
        count = 1;
    }else{
        alert("Choose another block")
    }
})
})

