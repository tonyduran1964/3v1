function heroAttack() {
  
  var heroName = attackOrder[currentAttacker]; 
  
  var currentHero = hero.findIndex(i => i.Name === heroName);

  var damage = hero[currentHero].Attack + (Math.floor(Math.random() * 21)) - 10;

  lblBossHealth.innerText -= damage;

  msg(heroName + " dealt " + damage + " damage!");

}