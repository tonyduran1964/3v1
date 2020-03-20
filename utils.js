/////////////////////////
//  UTILITY FUNCTIONS  //
/////////////////////////

//New Game button has been pressed.
function startButton()
{
  var msg = document.getElementById('areaStatusMessages');
  
  msg.value =  "";
  msg.value += "\n" + "Welcome to a Senior Project by John Duran...";
  msg.value += "\n" + " ";
  msg.value += "\n" + "CRAZED JESTER BOSS BATTLE";
  msg.value += "\n" + "=========================";
  msg.value += "\n" + " ";
  msg.value += "\n" + "Press New Game to start! ";
 
}

//New Game button has been pressed.
function attkButton()
{
  var msg = document.getElementById('areaStatusMessages');
  
  msg.value += "\n" + " ";
  msg.value += "\n" + "You have attacked!";

  msg.scrollTop = msg.scrollHeight;

}

//New Game button has been pressed.
function defdButton()
{
  var msg = document.getElementById('areaStatusMessages');
  
  msg.value += "\n" + " ";
  msg.value += "\n" + "You have defended!";
 
  msg.scrollTop = msg.scrollHeight;

}

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

function attackButton() {
  //alert("ATTACK");
}

function defendButton() {
  //alert("DEFEND");
}
