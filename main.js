// NOTE: remnove CSS to show Johnsters.


////////////////////
// MAIN GAME LOOP //
////////////////////

initialize();

while (gameOver == 0)
{

  ////  ROUND START  \\\\

  //Randomly sort the fighters in attack order.
  shuffleArray(attackOrder);

  //Show the attack order on screen.
  lblAttackOrder1.innerText = attackOrder[0];
  lblAttackOrder2.innerText = attackOrder[1];
  lblAttackOrder3.innerText = attackOrder[2];
  lblAttackOrder4.innerText = attackOrder[3];

  //"Activate" the current attacker.
  if (attackOrder[currentAttacker] == "Snark")  activate('divHero1');
  if (attackOrder[currentAttacker] == "Plunky")  activate('divHero2');
  if (attackOrder[currentAttacker] == "Sizzeal")  activate('divHero3');
  if (attackOrder[currentAttacker] == "The Crazed Jester")  activate('divBoss1');

  //loop thru all fighters
  //  if this is the boss, 
  //    turn off hero action buttons.
  //    do boss actions
  //  else
  //    set action button values for the current hero.
  //    turn on hero action buttons.
  //  Is boss dead?  
  //    gameOver = 1; break loop
  //  Are all heroes dead?
  //    gameOver = 2; break loop
  //  add 1 to currentAttacker
  //end loop

}


//if (gameOver == 1)
//    lostGame();

//if (gameOver == 2)
//  wongame()

