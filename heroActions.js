function heroAttack() {
  
  var heroName = attackOrder[currentAttacker]; 
  
  var currentHero = hero.findIndex(i => i.Name === heroName);

  var damage = hero[currentHero].Attack + (Math.floor(Math.random() * 21)) - 10;

  lblBossHealth.innerText -= damage;

  msg(hero[currentHero].AttackDesc);

  msg(heroName + " dealt " + damage + " damage!");

}

function heroDefend() {

  var heroName = attackOrder[currentAttacker]; 
  
  var currentHero = hero.findIndex(i => i.Name === heroName);

  var newDefense = hero[currentHero].Defense + 30;

  if(heroName ===  "Snark") lblHero1Defense.innerText = newDefense;

  if(heroName === "Plunky") lblHero2Defense.innerText = newDefense;

  if(heroName === "Sizzeal") lblHero3Defense.innerText = newDefense;

  msg(hero[currentHero].DefendDesc);

  msg(heroName + " gained 30 defense for the round!");
}