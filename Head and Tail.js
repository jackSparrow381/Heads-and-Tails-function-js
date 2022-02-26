 // Define variable, Get the id's
 let result = document.getElementById('result');
 

 // Creating head and tail function

 function toss() {
     let num = Math.random();

     if (num < 0.5) {
         result.innerHTML = "It's Heads";
         console.log(Head);
     } else {
         result.innerHTML = "It's Tails";
         console.log(Tails);

     }
 }