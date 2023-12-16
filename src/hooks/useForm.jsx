import { getNestedKey, setNestedKey, swapElements } from "@/utils/util";

export const useForm = (pages, setPages) => {
  const handleChangeTextInput = (pageIndex, ev) => {
    const { name, value } = ev.target;

    const selectedPageData = { ...pages[pageIndex].data, ...setNestedKey(name, pages[pageIndex].data, value) };
    const newPages = structuredClone(pages);
    newPages[pageIndex].data = selectedPageData;

    setPages(newPages);
  };

  const handleChangeCheckbox = (pageIndex, ev) => {
    const { name } = ev.target;

    const prevValue = getNestedKey(name, pages[pageIndex].data);
    const selectedPageData = { ...pages[pageIndex].data, ...setNestedKey(name, pages[pageIndex].data, !prevValue) };
    const newPages = { ...pages };
    newPages[pageIndex].data = selectedPageData;

    setPages(newPages);
  };

  const handleChangeContentEditable = (pageIndex, name, value) => {
    const selectedPageData = { ...pages[pageIndex].data, ...setNestedKey(name, pages[pageIndex].data, value) };
    const newPages = structuredClone(pages);
    newPages[pageIndex].data = selectedPageData;

    setPages(newPages);
  };

  const handleChangePage = (currentIndex, ev) => {
    const newPages = structuredClone(pages);
    const newIndex = ev.target.valueAsNumber;

    if (newIndex === 0) return;

    if (typeof newPages[newIndex] === "object") {
      swapElements(newPages, currentIndex, newIndex);
    }

    setPages(newPages);
  };

  const handleAddFile = (e) => {
    const type = e.target.name;
    const pageNumbers = Object.keys(pages).sort();
    const latestIndex = parseInt(pageNumbers[pageNumbers.length - 1]);

    const newPages = { ...pages };
    newPages[latestIndex + 1] = { id: uuidv4(), type, data: {} };

    setPages(newPages);
  };

  const handleDeleteFile = (pageIndex) => {
    let newPages = Object.values(structuredClone(pages));
    newPages.splice(parseInt(pageIndex) - 1, 1);
    newPages = newPages.reduce((result, item, index) => {
      result[index + 1] = item;
      return result;
    }, {});

    setPages(newPages);
  };

  return {
    handleAddFile,
    handleChangeCheckbox,
    handleChangePage,
    handleChangeTextInput,
    handleDeleteFile,
    handleChangeContentEditable,
  };
};
