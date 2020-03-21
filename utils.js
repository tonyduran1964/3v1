/////////////////////////
//  UTILITY FUNCTIONS  //
/////////////////////////

//Change a character element to "active" styling.
function activate(element){
  document.getElementById('divHero1').className = "";
  document.getElementById('divHero2').className = "";
  document.getElementById('divHero3').className = "";
  document.getElementById('divBoss1').className = "";
  
  document.getElementById(element).className = "active";
}

//Use Fisher-Yates sort algorithm to randomize order of an array.
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function getNames(value, index, array) {
  if (index == 0){
    if (attackOrder[index] == 1)  lblAttackOrder1.innerText = hero[0].Name;
    if (attackOrder[index] == 2)  lblAttackOrder1.innerText = hero[0].Name;
    if (attackOrder[index] == 3)  lblAttackOrder1.innerText = hero[0].Name;
    if (attackOrder[index] == 4)  lblAttackOrder1.innerText = boss[0].Name;
  }  
}

function msg(text){
  var msg = document.getElementById('areaStatusMessages'); 
  msg.value += "\n" + text;
  msg.scrollTop = msg.scrollHeight;
}

function statusCheck()
{
  alert(currentAttacker);
  if (currentAttacker > 3 || currentAttacker < 0)
  {    
    //Randomly sort the fighters in attack order.
    shuffleArray(attackOrder);
    currentAttacker = 0;

    msg("================ NEW ROUND ================");
    msg(attackOrder[currentAttacker] + " goes first.");

  } 

  alert(currentAttacker);

  if (attackOrder[currentAttacker] == "The Crazed Jester")
  {
    msg("The Crazed Jester attacked!");
  }



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

  currentAttacker += 1;

  /*
  while (gameOver == 0)
  {
    ////  ROUND START  \\\\


    //Show the attack order on screen.
    lblAttackOrder1.innerText = attackOrder[0];
    lblAttackOrder2.innerText = attackOrder[1];
    lblAttackOrder3.innerText = attackOrder[2];
    lblAttackOrder4.innerText = attackOrder[3];


    for (i = 0; i < attackOrder.length; i++) {  

      //  if this is the boss, 
      {

        alert("Jester Attacks!");
      //    turn off hero action buttons.
      //    do boss actions
      }
      else
      {
        alert("A hero Attacks!");
      //    set action button values for the current hero.
      //    turn on hero action buttons.

      }

      //  Is boss dead?  
      //    gameOver = 1; break loop

      //  Are all heroes dead?
      //    gameOver = 2; break loop

    }

    gameOver = 1;

  }
  */

  //if (gameOver == 1)
  //    lostGame();

  //if (gameOver == 2)
  //  wongame()


}


