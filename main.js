// NOTE: remnove CSS to show Johnsters.


////////////////////
// MAIN GAME LOOP //
////////////////////

initialize();

//Attack button has been pressed.
function attackButton()
{  
  msg(attackOrder[currentAttacker] + " attacks!");

  statusCheck()

}

//Defend button has been pressed.
function defendButton()
{
  msg(attackOrder[currentAttacker] + " defends!");

  statusCheck()
 
}

