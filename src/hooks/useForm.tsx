import { PageListType } from "@/types/types";
import { getNestedKey, setNestedKey, swapElements } from "@/utils/util";
import { Dispatch, SetStateAction } from "react";
import { v4 as uuidv4 } from "uuid";

export const useForm = (pages: PageListType, setPages: Dispatch<SetStateAction<PageListType>>) => {
  const handleChangePages = (pageIndex: number, name: string, value: string | number | boolean) => {
    const selectedPageData = { ...pages[pageIndex].data, ...setNestedKey(name, pages[pageIndex].data, value) };
    const newPages = structuredClone(pages);
    newPages[pageIndex].data = selectedPageData;

    setPages(newPages);
  };

  const handleChangeTextInput = (pageIndex: number, ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = ev.target;

    handleChangePages(pageIndex, name, value);
  };

  const handleChangeCheckbox = (ev: React.ChangeEvent<HTMLInputElement>, pageIndex?: number) => {
    if (!pageIndex) return;

    const { name } = ev.target;

    const prevValue = getNestedKey(name, pages[pageIndex].data) as boolean;
    handleChangePages(pageIndex, name, !prevValue);
  };

  const handleChangeMultiCheckbox = (pageIndex: number, name: string, value: number) =>
    handleChangePages(pageIndex, name, value);

  const handleChangeRadioGroup = (pageIndex: number, name: string, value: number) =>
    handleChangePages(pageIndex, name, value);

  const handleChangeContentEditable = (pageIndex: number, name: string, value: string) =>
    handleChangePages(pageIndex, name, value);

  const handleChangePage = (currentIndex: number, ev: React.ChangeEvent<HTMLInputElement>) => {
    const newPages = structuredClone(pages);
    const newIndex = ev.target.valueAsNumber;

    if (newIndex === 0) return;

    if (typeof newPages[newIndex] === "object") {
      swapElements(newPages, currentIndex, newIndex);
    }

    setPages(newPages);
  };

  const handleAddFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const type = e.target.name;
    const pageNumbers = Object.keys(pages).sort();
    const latestIndex = parseInt(pageNumbers[pageNumbers.length - 1]);

    const newPages = { ...pages };
    newPages[latestIndex + 1] = { id: uuidv4(), type, data: {} };

    setPages(newPages);
  };

  const handleDeleteFile = (pageIndex: number) => {
    const pageArray = Object.values(structuredClone(pages));
    pageArray.splice(pageIndex - 1, 1);

    const newPages = pageArray.reduce((result, item, index) => {
      result[index + 1] = item;

      return result;
    }, {} as PageListType);

    setPages(newPages);
  };

  return {
    handleAddFile,
    handleChangeCheckbox,
    handleChangeMultiCheckbox,
    handleChangeRadioGroup,
    handleChangePage,
    handleChangeTextInput,
    handleDeleteFile,
    handleChangeContentEditable,
  };
};
