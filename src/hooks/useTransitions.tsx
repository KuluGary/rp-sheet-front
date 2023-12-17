import { v4 as uuidv4 } from "uuid";
import { animated, useTransition } from "@react-spring/web";

export const useTransitions = (pages) => {
  return useTransition(
    Object.keys(pages).map((key, i) => ({ ...pages[key], pageIndex: key, y: i * 1120 })),
    {
      from: { position: "absolute", opacity: 0 },
      leave: { height: 0, opacity: 0 },
      enter: ({ y }) => ({ y, opacity: 1 }),
      update: ({ y }) => ({ y }),
      key: (data) => `${data?.id ?? uuidv4()}`,
    }
  );
};
