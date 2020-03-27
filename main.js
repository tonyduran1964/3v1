////////////////////
// MAIN GAME LOOP //
////////////////////

initialize();

//Attack button has been pressed.
function attackButton()
{    
  msg(" ");
  
  heroAttack();
  
  getNextAttacker();

}

//Defend button has been pressed.
function defendButton()
{
  msg(" ");

  heroDefend();

  getNextAttacker()

}

//Skill 1 button has been pressed
function skill1Button()
{
  msg(" ");
  
  msg(attackOrder[currentAttacker] + " casts skill 1!");

  getNextAttacker()

}

//Skill 2 Button has been pressed
function skill2Button()
{
  msg(" ");
  
  msg(attackOrder[currentAttacker] + " casts skill 2!");

  getNextAttacker()
}

//Skill 3 Button has been pressed
function skill3Button()
{
  msg(" ");
 
  msg(attackOrder[currentAttacker] + " casts skill 3!");

  getNextAttacker()
}

  //Are all heroes dead?
  //  if (gameOver == 1)
  //      lostGame();

  //Is boss dead?  
  //  if (gameOver == 2)
  //    wongame()
