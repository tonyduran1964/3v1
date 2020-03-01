// All the skills (actions) used in the game.

var skill = [];

skill[0] = {
  Name:"Sizzle", 
  Type: "Fire",
  Cost: 15,
  Does: "Inflicts Burn",
  Desc: "Controlled flame blast scorching your target",
  Text: "(NAME) casts a ball of fire at (TARG).  (TARG) was burned!"
  };

skill[1] = {
  Name:"Flame Blast", 
  Type: "Fire",
  Cost: 40,
  Does: "Deals 250 HP",
  Desc: "Controlled flame blast scorching your target",
  Text: "(NAME) spewed scorching flames from his hands! (TARG) took (DMG) damage!"
  };

skill[2] = {
  Name:"Heal Prayer", 
  Type: "Life",
  Cost: 20,
  Does: "Heals 200 HP",
  Desc: "A prayer for an ally to be healed",
  Text: "(NAME) prayed intentially for good health. (TARG) recovered (DMG) health!"
  };

skill[3] = {
  Name:"Restore", 
  Type: "Life",
  Cost: 30,
  Does: "Removes Status Effects",
  Desc: "Heal an ally of any status effects or debuffs",
  Text: "(NAME) casts a restoring spell. (TARG) is no longer (STATUS)."
  };

skill[4] = {
  Name:"Taze", 
  Type: "Electric",
  Cost: 30,
  Does: "Deals 50 HP + Paralysis",
  Desc: "A small jolt that might paralyze a target",
  Text: "(NAME) casts a controlled shock! (TARG) took (DMG) damage."
  };

skill[5] = {
  Name:"Thunderbolt", 
  Type: "Electric",
  Cost: 30,
  Does: "Deals 200 HP",
  Desc: "Cast a bolt of lightning to strike your opponent.",
  Text: "(NAME) casts an intense bolt of lightning! (TARG) took (DMG) damage!"
  };

skill[6] = {
  Name:"Weaken", 
  Type: "Psychic",
  Cost: 25,
  Does: "Decrease Defense by 5",
  Desc: "Force your opponent to lower their defense.",
  Text: "(NAME) got into (TARG)'s head and lowered his defense! (TARG) lost (DMG) defense!"
  };

skill[7] = {
  Name:"Psybeam", 
  Type: "Psychic",
  Cost: 50,
  Does: "Deals 350 HP",
  Desc: "A telekinetic beam shoots out from your mind.",
  Text: "(NAME) fired a massive beam from his mind! (TARG) took (DMG) damage!"
  };

skill[8] = {
  Name:"Aqua Heal", 
  Type: "Water",
  Cost: 40,
  Does: "Heals 80 HP for 3 turns",
  Desc: "Douse your ally with healing water. Lasts for 3 turns.",
  Text: "(NAME) doused (TARG) with healing water!"
  };

skill[9] = {
  Name:"Hydro Blast", 
  Type: "Water",
  Cost: 40,
  Does: "Heals 200 HP",
  Desc: "Cannon of high pressurized water.",
  Text: "(NAME) fired a blast of water from a cannon! (TARG) took (DMG) damage!"
  };

skill[10] = {
  Name:"Intimidate", 
  Type: "Dark",
  Cost: 25,
  Does: "Decrease attack by 5",
  Desc: "Shoot a piercing gaze that intimates the target.",
  Text: "(NAME) looked at (TARG) with a tough glare. (TARG) lost (DMG) attack!"
  };

skill[11] = {
  Name:"Shadow Shot", 
  Type: "Dark",
  Cost: 35,
  Does: "Deals 200 HP",
  Desc: "Conjure a shot of dark energy to fire at your opponent.",
  Text: "(NAME) casts dark energy forward! (TARG) took (DMG) damage!"
  };

skill[12] = {
  Name:"Encourage", 
  Type: "Normal",
  Cost: 35,
  Does: "Increase Attack by 8",
  Desc: "Encourage and ally to attack stronger.",
  Text: "(NAME) gave a motivational speech to (TARG).  (TARG) gained (DMG) attack!"
  };

skill[13] = {
  Name:"Fortify", 
  Type: "Normal",
  Cost: 40,
  Does: "Increase Defense by 5",
  Desc: "Give armor to an ally.",
  Text: "(NAME) took out plates of armor and gave them to (TARG).  (TARG) gained (DMG) defense!"
  };

elementType = 
  ["Fire", "Water", "Life", "Electric", "Dark", "Psychic", "Normal"]
//NOTE:
//  Water > Fire
//  Fire > Life
//  Life > Dark 
//  Dark > Psychic
//  Psychic > Electric
//  Electric > Water  
//  Normal has no strenght or weakness. 
  