// NOTE: remnove CSS to show Johnsters.

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

//Get the index of each hero using their names.
// (Might not need this.)
var snark = hero.findIndex(i => i.Name === "Snark");
var plunky = hero.findIndex(i => i.Name === "Plunky");
var sizzeal = hero.findIndex(i => i.Name === "Sizzeal");
//alert("Snark is Hero: " + snark )
//alert("Sizzeal health: " + hero[sizzeal].Health)
//alert("Hero 0 1st Skill: " + hero[0].Skills[0] )

//var divHero1 = document.getElementById('divHero1');
//divHero1.className = "active';"

//// Declare game variables. \\\\







///////////////////////////
//  GAME INITIALIZATION  //
///////////////////////////

//// Populate the screen elements \\\\

//Hero1 stats
lblHero1Name.innerText  = hero[0].Name;
lblHero1Health.innerText  = hero[0].Health;
lblHero1Attack.innerText  = hero[0].Attack;
lblHero1Luck.innerText  = hero[0].Luck;
lblHero1Defense.innerText  = hero[0].Defense;
lblHero1SkillPoints.innerText  = hero[0].SkillPoints;
lblHero1Recovery.innerText  = hero[0].Recovery;

//Hero2 stats
lblHero2Name.innerText  = hero[1].Name;
lblHero2Health.innerText  = hero[1].Health;
lblHero2Attack.innerText  = hero[1].Attack;
lblHero2Luck.innerText  = hero[1].Luck;
lblHero2Defense.innerText  = hero[1].Defense;
lblHero2SkillPoints.innerText  = hero[1].SkillPoints;
lblHero2Recovery.innerText  = hero[1].Recovery;

//Hero3 stats
lblHero3Name.innerText  = hero[2].Name;
lblHero3Health.innerText  = hero[2].Health;
lblHero3Attack.innerText  = hero[2].Attack;
lblHero3Luck.innerText  = hero[2].Luck;
lblHero3Defense.innerText  = hero[2].Defense;
lblHero3SkillPoints.innerText  = hero[2].SkillPoints;
lblHero3Recovery.innerText  = hero[2].Recovery;

//Boss stats
lblBossName.innerText  = boss[0].Name;
lblBossHealth.innerText  = boss[0].Health;
lblBossAttack.innerText  = boss[0].Attack;
lblBossDefense.innerText  = boss[0].Defense;

//Roll initiative.

//Display intro messages and order of initiative.

////////////////////
// MAIN GAME LOOP //
////////////////////

//Was RESTART button pressed?
//  If yes, go back to START GAME.

//Is boss dead?  
//  If yes, go to WIN GAME.

//Are all heroes dead?
//  If yes, go to LOSE GAME.

//Next hero or boss on initiative order chooses their action.

//Do the work for each action.

//Go back to MAIN GAME LOOP.

