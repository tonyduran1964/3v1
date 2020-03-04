// All the heros in the game.

var hero = [];

hero[0] = {
  Name: "Snark",
  Health: 1000,
  Attack: 100,
  Note1: "90-110",
  Luck: 10,
  Defense: 10,
  Note2: "90% damage",
  SkillPoints: 200,
  Recovery: 25,
  Skills: ["Shadow Shot", "Intimidate", "Taze"],
  Speed: 0 
}

hero[1] = {
  Name: "Plunky",
  Health: 1250,
  Attack: 85,
  Note1: "75-95",
  Luck: 15,
  Defense: 10,
  Note2: "80% damage",
  SkillPoints: 250,
  Recovery: 20,
  Skills: ["Encourage", "Fortify", "Weaken"],
  Speed: 0 
}

hero[2] = {
  Name: "Sizzeal",
  Health: 800,
  Attack: 70,
  Note1: "60-80",
  Luck: 18,
  Defense: 0,
  Note2: "100% damage",
  SkillPoints: 300,
  Recovery: 30,
  Skills: ["Sizzle", "Heal Prayer", "Aqua Heal"],
  Speed: 0 

}

boss = [];

boss[0] = {
  Name: "The Crazed Jester",
  Health: 7000,
  Type1: "Dark",
  Type2: "Fire",
  Type3: "",
  Attack: 150,
  Note1: "140-160",
  Defense: 20,
  Note2: "80% damage",
  Speed: 0 

}

//NOTE: The complex boss attacks will be handled
//with functions for each seperate attack.

