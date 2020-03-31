// All the heros in the game.

var hero = [];

hero[0] = {
  Name: "Snark",
  Health: 1000,
  Attack: 100,
  AttackDesc: "Snark swung his sword!",
  Note1: "90-110",
  Luck: 10,
  Defense: 10,
  DefendDesc: "Snark held out a shield!",
  Note2: "90% damage",
  SkillPoints: 200,
  Recovery: 25,
  Skills: ["Shadow Shot", "Intimidate", "Taze"],
  Skill1Desc: "Snark conjured a blast of dark energy and fired!",
  Skill2Desc: "Snark gaze his foe a piercing gaze. The Crazed Jester was intimidated",
  Skill3Desc: "Snark casts a small jolt of electricity!",
  Speed: 0 
}

hero[1] = {
  Name: "Plunky",
  Health: 1250,
  Attack: 85,
  AttackDesc: "Plunky slammed his mace to the ground!", 
  Note1: "75-95",
  Luck: 15,
  Defense: 20,
  DefendDesc: "Plunky braced for impact!",
  Note2: "80% damage",
  SkillPoints: 250,
  Recovery: 20,
  Skills: ["Encourage", "Fortify", "Weaken"],
  Skill1Desc: "Plunky told his team that tacos would be on him if they won!",
  Skill2Desc: "Plunky took out some armor plates and passed them around.",
  Skill3Desc: "Plunky told the Crazed Jester his shoes were untied. Crazed Jester lowered his gaurd!",
  Speed: 0 
}

hero[2] = {
  Name: "Sizzeal",
  Health: 800,
  Attack: 70,
  AttackDesc: "Sizzeal shot a magic missle!",
  Note1: "60-80",
  Luck: 18,
  Defense: 0,
  DefendDesc: "Sizzeal hid behind his scarf...",
  Note2: "100% damage",
  SkillPoints: 300,
  Recovery: 30,
  Skills: ["Sizzle", "Heal Prayer", "Aqua Heal"],
  Skill1Desc: "Sizzeal casts a controlled flame!",
  Skill2Desc: "Sizzeal prayed for the health of the team... His prayer was answered!",
  Skill3Desc: "Sizzeal took out a flask of healing water! He poured it on a team member?",
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

