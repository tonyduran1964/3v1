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
