// NOTE: remnove CSS to show Johnsters.

////////////////////
// MAIN GAME LOOP //
////////////////////

initialize();

//Attack button has been pressed.
function attackButton()
{  
  msg(attackOrder[currentAttacker] + " attacked!");

  statusCheck()

}

//Defend button has been pressed.
function defendButton()
{
  msg(attackOrder[currentAttacker] + " defended!");

  statusCheck()

}

  //  Is boss dead?  
  //    gameOver = 1; break loop

  //  Are all heroes dead?
  //    gameOver = 2; break loop'

  //if (gameOver == 1)
  //    lostGame();

  //if (gameOver == 2)
  //  wongame()


