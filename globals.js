////////////////////////////
//DECLARE GOBAL VARIABLES //
////////////////////////////

//// Get handle on screen elements we will change. \\\\

//Hero1 stats
var lblHero1Name = document.getElementById('lblHero1Name');
var lblHero1Health = document.getElementById('lblHero1Health');
var lblHero1Attack = document.getElementById('lblHero1Attack');
var lblHero1Luck = document.getElementById('lblHero1Luck');
var lblHero1Defense = document.getElementById('lblHero1Defense');
var lblHero1SkillPoints = document.getElementById('lblHero1SkillPoints');
var lblHero1Recovery = document.getElementById('lblHero1Recovery');

//Hero2 stats
var lblHero2Name = document.getElementById('lblHero2Name');
var lblHero2Health = document.getElementById('lblHero2Health');
var lblHero2Attack = document.getElementById('lblHero2Attack');
var lblHero2Luck = document.getElementById('lblHero2Luck');
var lblHero2Defense = document.getElementById('lblHero2Defense');
var lblHero2SkillPoints = document.getElementById('lblHero2SkillPoints');
var lblHero2Recovery = document.getElementById('lblHero2Recovery');

//Hero3 stats
var lblHero3Name = document.getElementById('lblHero3Name');
var lblHero3Health = document.getElementById('lblHero3Health');
var lblHero3Attack = document.getElementById('lblHero3Attack');
var lblHero3Luck = document.getElementById('lblHero3Luck');
var lblHero3Defense = document.getElementById('lblHero3Defense');
var lblHero3SkillPoints = document.getElementById('lblHero3SkillPoints');
var lblHero3Recovery = document.getElementById('lblHero3Recovery');

//Boss stats
var lblBossName = document.getElementById('lblBossName');
var lblBoss3Health = document.getElementById('lblBossHealth');
var lblBossAttack = document.getElementById('lblBossAttack');
var lblBossDefense = document.getElementById('lblBossDefense');

//Message Box
var msg = document.getElementById('areaStatusMessages'); 

//Get the index of each hero using their names.
// (Might not need this.)
var snark = hero.findIndex(i => i.Name === "Snark");
var plunky = hero.findIndex(i => i.Name === "Plunky");
var sizzeal = hero.findIndex(i => i.Name === "Sizzeal");
//alert("Snark is Hero: " + snark )
//alert("Sizzeal health: " + hero[sizzeal].Health)
//alert("Hero 0 1st Skill: " + hero[0].Skills[0] )

//// Declare game variables. \\\\

//Used for attack order.
var attackOrder = [
  hero[0].Name,
  hero[1].Name,
  hero[2].Name,
  boss[0].Name
]; 

//Flag for game end.
var gameOver = 0; //1=you won, 2=you lost

var currentAttacker = 3; //Set this to last attacker, to trigger a new round.
