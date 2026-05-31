import { SchemaType } from "@/types/types";

export const characterFlavorSchema: SchemaType = {
  notes: {
    type: "textarea",
    position: { y: 60, x: 20 },
    className: "absolute h-[520px] w-[820px]",
  },
};
