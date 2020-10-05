/* form */


document.querySelector(".control-buttons span").onclick = function () {
    "use strict";
    let yourName = prompt(' whats your name ?');
    document.getElementById('back').play();
    let person = document.querySelector('.person');
    localStorage.setItem(person,yourName);
    person.innerHTML = localStorage.getItem(person, yourName);
        
    if ( yourName == "null" || yourName =="") {
    document.querySelector(".name span").innerHTML = "No Name";
}
        else
        {
         document.querySelector(".name span").innerHTML = yourName;
        
        }
		document.querySelector(".control-buttons").remove();
};

let duration = 1000;
let gameblock = document.querySelector(".memory-game-block");
let blocks = Array.from(gameblock.children);

let orderRange = Array.from(Array(blocks.length).keys());
console.log(gameblock);

shuffle(orderRange);

blocks.forEach((block, index) => {
  block.style.order = orderRange[index];

  block.addEventListener('click', function() {
    
    
    filb(block);

    

  });

  
 });

 function filb(selectbolck) {

     selectbolck.classList.add ('is-flipped');

     let allflibedblocks = blocks.filter(flipblock=> flipblock.classList.contains('is-flipped'));

     if(allflibedblocks.length === 2){
         stopclicking();
         matched(allflibedblocks[0],allflibedblocks[1]);
         finsh(allflibedblocks[0],allflibedblocks[1]);
        
       
      left()  
      }
    
      //left()
 }

function stopclicking() {

    gameblock.classList.add('no-klicking');

  setTimeout(() => {

    gameblock.classList.remove('no-klicking');
      
  }, duration);

};

function shuffle(array) {
    let current = array.length,
        temp,
        random;
    while (current > 0) {
        random = Math.floor(Math.random() * current);

        current--;

        temp = array[current]; 

        array[current] = array[random];

        array[random] = temp ;
    }
    return array;
};
function matched (frist ,sceond) {
    let tries = document.querySelector('.tries span');
    let cont = 0;

    if(frist.dataset.techonlogy === sceond.dataset.techonlogy){
        frist.classList.remove('is-flipped');
        sceond.classList.remove('is-flipped');

        frist.classList.add('has-match');
        sceond.classList.add('has-match');
        }
        return;
}
function finsh (frist ,sceond) {
    let tries = document.querySelector('.tries span');
    if(frist.dataset.techonlogy !== sceond.dataset.techonlogy){
    
        tries.innerHTML = parseInt(tries.innerHTML) +1;
        setTimeout(() => {
        frist.classList.remove('is-flipped');
        sceond.classList.remove('is-flipped')
            
        }, duration);
       let tri = document.querySelector('.tri')
       localStorage.setItem(tri, parseInt(tries.innerHTML));
       tri.innerHTML = localStorage.getItem(tri, parseInt(tries.innerHTML));

        
    }
}
 

function left(){
    let flibedblocks = blocks.filter(flipblock=> flipblock.classList.contains('has-match'));
    if (flibedblocks.length === 20){
        alert('goooooooooooood')
    }
}
