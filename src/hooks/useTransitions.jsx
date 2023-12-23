import { useTransition } from "@react-spring/web";
import { v4 as uuidv4 } from "uuid";

export const useTransitions = (pages, pageSize) => {
  return useTransition(
    Object.keys(pages).map((key, i) => ({ ...pages[key], pageIndex: key, y: i * pageSize })),
    {
      from: { position: "absolute", opacity: 0 },
      leave: { height: 0, opacity: 0 },
      enter: ({ y }) => ({ y, opacity: 1 }),
      update: ({ y }) => ({ y }),
      key: (data) => `${data?.id ?? uuidv4()}`,
    }
  );
};
