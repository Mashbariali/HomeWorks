/*

Creating a page where every time the user hits the "Roll Dice" button, the screen randomly updates the two dice. Use the html and css code included in the starter code folder to get started.

1) Write down pseudocode for the following program.

2) Follow the steps below to write your code.
* generate a random number between 1 - 6 and store to a variable, random1
* generate a random number between 1 - 6 and store to a variable, random2
* combine 'dice-' and random1 to form the random class for the first die, firstDie
* combine 'dice-' and random2 to form the random class for the second die, secondDie
* get the first die by ID and update the class to firstDie (hint: document.getElementById)
* get the first die by ID and update the class to secondDie (hint:document.getElementById)

3) Check to see if the Dice Roll has been hit, if it has run the diceRoll function.

*/


 let firstDie = document.getElementById("first-die")
 let secondDie = document.getElementById("second-die")
 let rolldice = document.getElementById("roll-dice")
  rolldice.onclick = function(){diceRoll()}

 console.log(firstDie,secondDie)

 function diceRoll(){
    
random1 = Math.floor(( Math.random()*6) +1)
random2 = Math.floor(( Math.random()*6) +1)

console.log(random1,random2)

for (i=1 ; i<=6 ; i++){
firstDie.classList.remove('dice-' +i)
if (random1 === i){
    firstDie.classList.add('dice-' +i)
}
}
for (j=1 ; j<=6 ; j++){
    secondDie.classList.remove('dice-' +j)
    if (random2 === j){
        secondDie.classList.add('dice-' +j)

 }
}

 }