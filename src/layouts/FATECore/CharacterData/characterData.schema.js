export const characterDataSchema = {
  name: {
    position: { y: 9.6, x: 2 },
    size: { height: 3, width: 57.5 },
    className: "absolute text-sm",
    placeholder: "Nombre...",
    type: "input",
  },
  description: {
    position: { y: 14, x: 2 },
    size: { height: 8, width: 57.5 },
    className: "absolute text-sm",
    placeholder: "Descripción...",
    type: "textarea",
  },
  refresh: {
    position: { y: 14, x: 60.5 },
    size: { height: 8, width: 9 },
    className: "absolute text-center",
    type: "input",
  },
  "high-concept": {
    position: { y: 29, x: 2 },
    size: { height: 3, width: 36.2 },
    className: "absolute text-xs",
    type: "input",
  },
  trouble: {
    position: { y: 33.1, x: 2 },
    size: { height: 3, width: 36.2 },
    className: "absolute text-xs",
    type: "input",
  },
  "other-aspect-1": {
    position: { y: 37.7, x: 2 },
    size: { height: 3, width: 36.2 },
    className: "absolute text-xs",
    type: "input",
  },
  "other-aspect-2": {
    position: { y: 41.9, x: 2 },
    size: { height: 3, width: 36.2 },
    className: "absolute text-xs",
    type: "input",
  },
  "other-aspect-3": {
    position: { y: 46.2, x: 2 },
    size: { height: 3, width: 36.2 },
    className: "absolute text-xs",
    type: "input",
  },
  "consequence-mild": {
    position: { y: 80.5, x: 30.5 },
    size: { height: 3, width: 32.5 },
    className: "absolute text-xs",
    type: "input",
  },
  "consequence-moderate": {
    position: { y: 84.7, x: 30.5 },
    size: { height: 3, width: 32.5 },
    className: "absolute text-xs",
    type: "input",
  },
  "consequence-severe": {
    position: { y: 89, x: 30.5 },
    size: { height: 3, width: 32.5 },
    className: "absolute text-xs",
    type: "input",
  },
  "consequence-mild-2": {
    position: { y: 80.5, x: 65.8 },
    size: { height: 3, width: 32.5 },
    className: "absolute text-xs",
    type: "input",
  },
  extras: {
    position: { y: 56.4, x: 2 },
    size: { height: 17, width: 46.5 },
    className: "absolute h-24 w-[392px] text-sm",
    type: "textarea",
  },
  stunts: {
    position: { y: 56.4, x: 49.9 },
    size: { height: 17, width: 48.4 },
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
