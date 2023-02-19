import ErrorHandler from "@/components/ErrorHandler/ErrorHandler";
import NavBar from "@/components/NavBar/NavBar";
import { animated, useTransition } from "@react-spring/web";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import CharacterData from "./CharacterData/characterData.view";
import CharacterFlavor from "./CharacterFlavor/characterFlavor.view";
import { getNestedKey, setNestedKey, swapElements } from "@/utils/util";

const components = {
  data: CharacterData,
  flavor: CharacterFlavor,
};

const FATECore = () => {
  const [pages, setPages] = useState({
    1: { id: uuidv4(), type: "data", data: {} },
    2: { id: uuidv4(), type: "flavor", data: {} },
  });

  const transitions = useTransition(
    Object.keys(pages).map((key, i) => ({ ...pages[key], pageIndex: key, y: i * 700 })),
    {
      from: { position: "absolute", opacity: 0 },
      leave: { height: 0, opacity: 0 },
      enter: ({ y }) => ({ y, opacity: 1 }),
      update: ({ y }) => ({ y }),
      key: (data) => `${data?.id ?? uuidv4()}`,
    }
  );

  const handleChangeTextInput = (pageIndex, ev) => {
    const { name, value } = ev.target;

    const selectedPageData = { ...pages[pageIndex].data, ...setNestedKey(name, pages[pageIndex].data, value) };
    const newPages = structuredClone(pages);
    newPages[pageIndex].data = selectedPageData;

    setPages(newPages);
  };

  const handleChangeCheckbox = (ev) => {
    const { name } = ev.target;

    const prevValue = getNestedKey(name, pages[pageIndex].data);
    const selectedPageData = { ...pages[pageIndex].data, ...setNestedKey(name, pages[pageIndex].data, !prevValue) };
    const newPages = { ...pages };
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

  return (
    <ErrorHandler>
      <NavBar data={pages} setData={setPages} type={"fate-core"} onAddFile={handleAddFile} />
      <div className="flex justify-center mt-16">
        {transitions(({ y, ...rest }, page, { key }) => {
          const Component = components[page.type];
          const pageIndex = page.pageIndex;

          return (
            <animated.div
              key={key}
              style={{
                transform: y.to((y) => `translate3d(0,${y}px,0)`),
                ...rest,
                margin: "10px auto",
              }}
            >
              <Component
                pages={pages}
                setPages={setPages}
                pageIndex={pageIndex}
                handleChangeTextInput={(ev) => handleChangeTextInput(pageIndex, ev)}
                handleChangeCheckbox={(ev) => handleChangeCheckbox(pageIndex, ev)}
                handleChangePage={(ev) => handleChangePage(pageIndex, ev)}
              />
            </animated.div>
          );
        })}
      </div>

      {/* <div className="mt-20">
        <Sheet background={backgroundImage} disposition="horizontal">
          {inputs}
        </Sheet>
      </div> */}
    </ErrorHandler>
  );
};

export default FATECore;
