///////////////////////////
//  GAME INITIALIZATION  //
///////////////////////////

function initialize()
{ 
  //// Set the screen elements to start values \\\\

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

  // Show Welcome message.
  msg(" ");
  msg("Welcome to a Senior Project by John Duran...");
  msg(" ");
  msg("=============================");
  msg("  CRAZED JESTER BOSS BATTLE  ");
  msg("=============================");
  msg(" ");

  getNextAttacker()

}
