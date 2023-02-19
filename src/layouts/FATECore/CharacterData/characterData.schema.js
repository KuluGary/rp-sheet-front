export const characterDataSchema = {
  name: {
    position: { y: 58, x: 18 },
    className: "absolute h-4 w-[484px] text-sm",
    placeholder: "Nombre...",
    type: "input",
  },
  description: {
    position: { y: 84, x: 18 },
    className: "absolute h-[46px] w-[484px] text-sm",
    placeholder: "Descripción...",
    type: "textarea",
  },
  refresh: {
    position: { y: 84, x: 518 },
    className: "absolute h-10 w-16 text text-center",
    type: "input",
  },
  "high-concept": {
    position: { y: 174, x: 18 },
    className: "absolute h-4 w-[307px] text-xs",
    type: "input",
  },
  trouble: {
    position: { y: 198, x: 18 },
    className: "absolute h-4 w-[307px] text-xs",
    type: "input",
  },
  "other-aspect-1": {
    position: { y: 224, x: 18 },
    className: "absolute h-4 w-[307px] text-xs",
    type: "input",
  },
  "other-aspect-2": {
    position: { y: 250, x: 18 },
    className: "absolute h-4 w-[307px] text-xs",
    type: "input",
  },
  "other-aspect-3": {
    position: { y: 276, x: 18 },
    className: "absolute h-4 w-[307px] text-xs",
    type: "input",
  },
  "consequence-mild": {
    position: { y: 480, x: 262 },
    className: "absolute h-4 w-[272px] text-xs",
    type: "input",
  },
  "consequence-moderate": {
    position: { y: 504, x: 262 },
    className: "absolute h-4 w-[272px] text-xs",
    type: "input",
  },
  "consequence-severe": {
    position: { y: 530, x: 262 },
    className: "absolute h-4 w-[272px] text-xs",
    type: "input",
  },
  "consequence-mild-2": {
    position: { y: 480, x: 560 },
    className: "absolute h-4 w-[272px] text-xs",
    type: "input",
  },
  extras: {
    position: { y: 338, x: 16 },
    className: "absolute h-24 w-[392px] text-sm",
    type: "textarea",
  },
  stunts: {
    position: { y: 338, x: 424 },
    className: "absolute h-24 w-[406px] text-sm",
    type: "textarea",
  },
};

export const characterSkillsSchema = {
  superb: {
    startsAt: { x: 434, y: 175 },
  },
  great: {
    startsAt: { x: 434, y: 200 },
  },
  good: {
    startsAt: { x: 434, y: 225 },
  },
  fair: {
    startsAt: { x: 434, y: 250 },
  },
  average: {
    startsAt: { x: 434, y: 276 },
  },
};

export const characterStressSchema = {
  mentalstress: {
    startsAt: { y: 531, x: 26 },
    distanceOffset: 48,
    size: 4,
    className: "absolute w-4 h-4",
  },
  physicalstress: {
    startsAt: { y: 479, x: 26 },
    distanceOffset: 48,
    size: 4,
    className: "absolute w-4 h-4",
  },
};
