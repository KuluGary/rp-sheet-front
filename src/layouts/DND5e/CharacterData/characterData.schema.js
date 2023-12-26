const stats = ["strength", "dexterity", "constitution", "intelligence", "wisdom", "charisma"];

export const characterDataSchema = {
  name: {
    type: "input",
    position: { y: 5.5, x: 7 },
    size: { width: 34, height: 2 },
    className: "absolute text-xl ",
    placeholder: "Nombre de personaje...",
  },
  class: {
    type: "input",
    position: { y: 3.8, x: 44 },
    size: { width: 18, height: 2 },
    className: "absolute",
  },
  background: {
    type: "input",
    position: { y: 3.8, x: 61.9 },
    size: { width: 16, height: 2 },
    className: "absolute",
  },
  player: {
    type: "input",
    position: { y: 3.8, x: 77.8 },
    size: { width: 16, height: 2 },
    className: "absolute",
  },
  race: {
    type: "input",
    position: { y: 7, x: 44 },
    size: { width: 18, height: 2 },
    className: "absolute",
  },
  alignment: {
    type: "input",
    position: { y: 7, x: 61.9 },
    size: { width: 16, height: 2 },
    className: "absolute",
  },
  experience: {
    type: "input",
    position: { y: 7, x: 77.8 },
    size: { width: 16, height: 2 },
    className: "absolute",
  },
  inspiration: {
    type: "checkbox",
    position: { y: 13.8, x: 15.2 },
    size: { width: 3 },
  },
  proficiency: {
    type: "input",
    position: { y: 18.2, x: 15.5 },
    size: { width: 3, height: 2 },
    className: "absolute  text-center text-xl",
  },
  ac: {
    type: "input",
    position: { y: 17, x: 37.8 },
    size: { width: 5, height: 2 },
    className: "absolute text-center text-xl",
  },
  initiative: {
    type: "input",
    position: { y: 17, x: 46.3 },
    size: { width: 7, height: 2 },
    className: "absolute text-center text-xl",
  },
  speed: {
    type: "input",
    position: { y: 17, x: 56.2 },
    size: { width: 7, height: 2 },
    className: "absolute text-center",
  },
  "hitpoints.max": {
    type: "input",
    position: { y: 21.5, x: 50.5 },
    size: { width: 12.5, height: 1.5 },
    className: "absolute  text-xs",
  },
  "hitpoints.current": {
    type: "input",
    position: { y: 23.5, x: 37.5 },
    size: { width: 25.3, height: 3.5 },
    className: "absolute  text-center text-xl",
  },
  "hitpoints.temp": {
    type: "input",
    position: { y: 30, x: 37.5 },
    size: { width: 25.3, height: 3.5 },
    className: "absolute  text-center text-xl",
  },
  "hitdie.max": {
    type: "input",
    position: { y: 36.2, x: 40 },
    size: { width: 8.2, height: 1.3 },
    className: "absolute  text-sm",
  },
  "hitdie.current": {
    type: "input",
    position: { y: 37.5, x: 37.5 },
    size: { width: 10.8, height: 3 },
    className: "absolute  text-center",
  },
  "attacks.notes": {
    type: "textarea",
    position: { y: 52, x: 35.5 },
    size: { width: 29.5, height: 14 },
    className: "absolute text-sm leading-[14px]",
  },
  otherproficiencies: {
    type: "textarea",
    position: { y: 73, x: 4 },
    size: { width: 29.5, height: 16 },
    className: "absolute text-sm leading-[14px]",
  },
  treasure: {
    position: { y: 69, x: 35.5 },
    size: { width: 29, height: 20.5 },
    className: "absolute text-sm leading-[14px]",
    placeholder: "",
    type: "contenteditable",
    block: {
      className: "float-left",
      size: { width: 30, height: 77 },
    },
    textarea: {
      className: "font-shadows w-full h-full",
    },
  },
  equipment: {
    type: "textarea",
    position: { y: 44, x: 67.5 },
    size: { width: 29.5, height: 45 },
    className: "absolute text-sm leading-[14.6px]",
  },
  passiveperception: {
    type: "input",
    position: { y: 69, x: 3.8 },
    size: { width: 4, height: 2 },
    className: " text-sm text-center",
  },
  "traits.personality": {
    type: "textarea",
    position: { y: 14.5, x: 68.5 },
    size: { width: 27.2, height: 6.5 },
    className: "absolute text-sm leading-[18px]",
  },
  "traits.ideals": {
    type: "textarea",
    position: { y: 22.8, x: 68.5 },
    size: { width: 27.2, height: 5.3 },
    className: "absolute text-sm leading-[18px]",
  },
  "traits.traits": {
    type: "textarea",
    position: { y: 29.5, x: 68.5 },
    size: { width: 27.2, height: 5.5 },
    className: "absolute text-sm leading-[18px]",
  },
  "traits.faults": {
    type: "textarea",
    position: { y: 36, x: 68.5 },
    size: { width: 27.2, height: 5.5 },
    className: "absolute text-sm leading-[18px]",
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
  startsAt: 251.5,
  secondaryElementOffset: -6,
  inputs: stats,
};

export const characterSkillsSchema = {
  distanceMultiplier: 18.1,
  startsAt: 406,
  secondaryElementOffset: -7,
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
    distanceMultiplier: 17.2,
  },
  succeeded: {
    startsAt: { y: 433, x: 452 },
    distanceMultiplier: 17.2,
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
