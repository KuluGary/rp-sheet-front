export const characterSpellsSchema = {
  spellcastingClass: {
    type: "input",
    position: { y: 64, x: 48 },
    placeholder: "Nombre de la clase..."
  },
  spellmodifier: {
    type: "input",
    position: { y: 54, x: 370 },
    className: "h-8 w-20 text-lg text-center",
  },
  spelldc: {
    type: "input",
    position: { y: 54, x: 505 },
    className: "h-8 w-20 text-lg text-center",
  },
  spellbonus: {
    type: "input",
    position: { y: 54, x: 645 },
    className: "h-8 w-20 text-lg text-center",
  },
};

export const characterSpellsSpellSchema = {
  cantrips: {
    startsAt: { y: 209, x: 40 },
    checked: false,
    size: 8,
  },
  "level-1": {
    startsAt: { y: 455, x: 45 },
    checked: true,
    size: 12,
    slotTitle: { y: 400, x: 54 },
  },
  "level-2": {
    startsAt: { y: 740, x: 45 },
    checked: true,
    size: 13,
    slotTitle: { y: 705, x: 54 },
  },
  "level-3": {
    startsAt: { y: 210, x: 298 },
    checked: true,
    size: 13,
    slotTitle: { y: 177, x: 306 },
  },
  "level-4": {
    startsAt: { y: 512, x: 298 },
    checked: true,
    size: 13,
    slotTitle: { y: 477, x: 306 },
  },
  "level-5": {
    startsAt: { y: 814, x: 298 },
    checked: true,
    size: 9,
    slotTitle: { y: 780, x: 306 },
  },
  "level-6": {
    startsAt: { y: 210, x: 547 },
    checked: true,
    size: 9,
    slotTitle: { y: 177, x: 556 },
  },
  "level-7": {
    startsAt: { y: 438, x: 547 },
    checked: true,
    size: 9,
    slotTitle: { y: 403, x: 556 },
  },
  "level-8": {
    startsAt: { y: 663, x: 547 },
    checked: true,
    size: 7,
    slotTitle: { y: 630, x: 556 },
  },
  "level-9": {
    startsAt: { y: 850, x: 547 },
    checked: true,
    size: 7,
    slotTitle: { y: 817, x: 556 },
  },
};
