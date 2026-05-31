import { PageListType, PageType } from "@/types/types";
import { useTransition } from "@react-spring/web";
import { v4 as uuidv4 } from "uuid";

export const useTransitions = (pages: PageListType, pageSize: number) => {
  return useTransition(
    Object.keys(pages).map((key, i) => ({ ...pages[parseInt(key)], pageIndex: key, y: i * pageSize })),
    {
      from: { position: "absolute", opacity: 0 },
      leave: { height: 0, opacity: 0 },
      enter: ({ y }) => ({ y, opacity: 1 }),
      update: ({ y }) => ({ y }),
      key: (data: PageType["data"]) => `${data?.id ?? uuidv4()}`,
    }
  );
};
