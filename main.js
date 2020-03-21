// NOTE: remnove CSS to show Johnsters.


////////////////////
// MAIN GAME LOOP //
////////////////////

initialize();

while (! gameEnd)
{

////  ROUND START  \\\\


//Randomly sort the fighters in attack order.
shuffleArray(attackOrder);

//Show the attack order on screen.
lblAttackOrder1.innerText = attackOrder[0];
lblAttackOrder2.innerText = attackOrder[1];
lblAttackOrder3.innerText = attackOrder[2];
lblAttackOrder4.innerText = attackOrder[3];

var currentAttacker = 0;

//"Activate" the current attacker.
if (attackOrder[currentAttacker] == "Snark")  activate('divHero1');
if (attackOrder[currentAttacker] == "Plunky")  activate('divHero2');
if (attackOrder[currentAttacker] == "Sizzeal")  activate('divHero3');
if (attackOrder[currentAttacker] == "The Crazed Jester")  activate('divBoss1');

//Display intro messages and order of initiative.

//Is boss dead?  
//  If yes, go to WIN GAME.


}



//Are all heroes dead?
//  If yes, go to LOSE GAME.




//Next hero or boss on initiative order chooses their action.



//Do the work for each action.


//Go back to MAIN GAME LOOP.


