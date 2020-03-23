////////////////////
// MAIN GAME LOOP //
////////////////////

initialize();

//Attack button has been pressed.
function attackButton()
{  
  msg(attackOrder[currentAttacker] + " attacked!");

  getNextAttacker()

}

//Defend button has been pressed.
function defendButton()
{
  msg(attackOrder[currentAttacker] + " defended!");

  getNextAttacker()

}

  //Are all heroes dead?
  //  if (gameOver == 1)
  //      lostGame();

  //Is boss dead?  
  //  if (gameOver == 2)
  //    wongame()
