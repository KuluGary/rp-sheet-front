import { SchemaType } from "@/types/types";

export const characterFeaturesSchema: SchemaType = {
  feature: {
    type: "textarea",
    position: { y: 30, x: 40 },
    className: "absolute w-[720px] h-[945px] text-sm",
  },
};
