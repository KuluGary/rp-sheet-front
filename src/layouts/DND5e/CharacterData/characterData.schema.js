const stats = ["strength", "dexterity", "constitution", "intelligence", "wisdom", "charisma"];

export const characterDataSchema = {
  name: {
    type: "input",
    position: { y: 60, x: 48 },
    placeholder: "Nombre de personaje...",
  },
  class: {
    type: "input",
    position: { y: 40, x: 340 },
    className: "w-32",
  },
  background: {
    type: "input",
    position: { y: 40, x: 480 },
    className: "w-32",
  },
  player: {
    type: "input",
    position: { y: 40, x: 620 },
    className: "w-32",
  },
  race: {
    type: "input",
    position: { y: 75, x: 340 },
    className: "w-32",
  },
  alignment: {
    type: "input",
    position: { y: 75, x: 480 },
    className: "w-32",
  },
  experience: {
    type: "input",
    position: { y: 75, x: 620 },
    className: "w-32",
  },
  inspiration: {
    type: "checkbox",
    position: { y: 155, x: 120 },
    className: "w-6 aspect-square",
  },
  proficiency: {
    type: "input",
    position: { y: 205, x: 121 },
    className: "w-6 aspect-square text-center",
  },
  ac: {
    type: "input",
    position: { y: 192, x: 306 },
    className: "text-center text-lg h-6 w-6",
  },
  initiative: {
    type: "input",
    position: { y: 192, x: 381 },
    className: "text-center text-lg h-6 w-6",
  },
  speed: {
    type: "input",
    position: { y: 192, x: 460 },
    className: "text-center text-lg h-6 w-6",
  },
  "hitpoints.max": {
    type: "input",
    position: { y: 244, x: 400 },
    className: "h-4 w-24 text-xs",
  },
  "hitpoints.current": {
    type: "input",
    position: { y: 270, x: 300 },
    className: "text-lg w-48 text-center",
  },
  "hitpoints.temp": {
    type: "input",
    position: { y: 340, x: 300 },
    className: "text-lg w-48 text-center",
  },
  "hitdie.max": {
    type: "input",
    position: { y: 408, x: 320 },
    className: "text-xs text-center h-2 w-12",
  },
  "hitdie.current": {
    type: "input",
    position: { y: 424, x: 308 },
    className: "text-center w-16",
  },
  "attacks.notes": {
    type: "textarea",
    position: { y: 594, x: 285 },
    className: "text-xs w-56 h-36",
  },
  otherproficiencies: {
    type: "textarea",
    position: { y: 820, x: 33 },
    className: "text-xs w-56 h-40",
  },
  treasure: {
    type: "textarea",
    position: { y: 780, x: 346 },
    className: "text-xs w-46 h-48",
  },
  equipment: {
    type: "textarea",
    position: { y: 500, x: 536 },
    className: "text-xs w-56 h-[480px]",
  },
  passiveperception: {
    type: "textarea",
    position: { y: 774, x: 36 },
    className: "w-4 aspect-square text-sm text-center",
  },
  "traits.personality": {
    type: "textarea",
    position: { y: 168, x: 548 },
    className: "text-sm h-12 w-52",
  },
  "traits.ideals": {
    type: "textarea",
    position: { y: 260, x: 548 },
    className: "text-sm h-12 w-52",
  },
  "traits.traits": {
    type: "textarea",
    position: { y: 332, x: 548 },
    className: "text-sm h-12 w-52",
  },
  "traits.faults": {
    type: "textarea",
    position: { y: 408, x: 548 },
    className: "text-sm h-12 w-52",
  },
};

export const characterAbilityScoresSchema = {
  distanceMultiplier: 96,
  startsAt: 230,
  secondaryElementOffset: -40,
  inputs: stats,
};

export const characterSavingThrowsSchema = {
  distanceMultiplier: 18,
  startsAt: 250,
  secondaryElementOffset: -8,
  inputs: stats,
};

export const characterSkillsSchema = {
  distanceMultiplier: 18,
  startsAt: 404,
  secondaryElementOffset: -8,
  inputs: [
    "acrobatics",
    "athletics",
    "arcana",
    "deception",
    "history",
    "performance",
    "intimidation",
    "investigation",
    "sleightofhand",
    "medicine",
    "nature",
    "perception",
    "insight",
    "persuasion",
    "religion",
    "stealth",
    "survival",
    "animalhandling",
  ],
};

export const characterDeathSavesSchema = {
  failed: {
    startsAt: { y: 413, x: 452 },
    distanceMultiplier: 16.5,
  },
  succeeded: {
    startsAt: { y: 433, x: 452 },
    distanceMultiplier: 16.5,
  },
};

export const characterAttackSchema = {
  startsAt: { y: 507, x: 289 },
  distanceMultiplier: 26,
};

export const characterCoinSchema = {
  startsAt: 782,
  distanceMultiplier: 34,
  inputs: ["copper", "silver", "electrum", "gold", "platinum"],
};
