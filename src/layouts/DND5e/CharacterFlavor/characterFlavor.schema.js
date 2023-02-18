export const characterFlavorSchema = {
  name: {
    type: "input",
    position: { y: 60, x: 48 },
    placeholder: "Nombre de personaje...",
  },
  age: {
    type: "input",
    position: { y: 40, x: 340 },
    className: "w-32",
  },
  height: {
    type: "input",
    position: { y: 40, x: 480 },
    className: "w-32",
  },
  weight: {
    type: "input",
    position: { y: 40, x: 620 },
    className: "w-32",
  },
  eyes: {
    type: "input",
    position: { y: 75, x: 340 },
    className: "w-32",
  },
  skin: {
    type: "input",
    position: { y: 75, x: 480 },
    className: "w-32",
  },
  hair: {
    type: "input",
    position: { y: 75, x: 620 },
    className: "w-32",
  },
  personality: {
    type: "textarea",
    position: { y: 150, x: 282 },
    className: "absolute w-[480px] h-[270px] text-sm",
  },
  appearance: {
    type: "textarea",
    position: { y: 460, x: 282 },
    className: "absolute w-[480px] h-[195px] text-sm",
  },
  backstory: {
    type: "textarea",
    position: { y: 690, x: 282 },
    className: "absolute w-[480px] h-[285px] text-sm",
  },
  organizations: {
    type: "textarea",
    position: { y: 490, x: 32 },
    className: "absolute w-[225px] h-[485px] text-sm",
  },
};
