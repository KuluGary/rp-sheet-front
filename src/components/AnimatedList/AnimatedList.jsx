import React from "react";
import { animated } from "@react-spring/web";
import classNames from "./AnimatedList.module.css";

const AnimatedList = ({ transitions, components, pages, setPages, formActions, direction }) => {
  const {
    handleChangeTextInput,
    handleChangeCheckbox,
    handleChangePage,
    handleDeleteFile,
    handleChangeContentEditable,
  } = formActions;

  return (
    <>
      <div
        className={`flex flex-col items-center gap-0 screen:hidden ${classNames["print-row"]} ${
          classNames[`print-row-${direction}`]
        }`}
      >
        {Object.entries(pages).map(([key, page]) => {
          const Component = components[page.type];
          const pageIndex = key;

          return (
            <div key={key} className={`${classNames["print-item"]}`}>
              <Component
                pages={pages}
                setPages={setPages}
                pageIndex={pageIndex}
                handleChangeTextInput={(ev) => handleChangeTextInput(pageIndex, ev)}
                handleChangeCheckbox={(ev) => handleChangeCheckbox(pageIndex, ev)}
                handleChangePage={(ev) => handleChangePage(pageIndex, ev)}
                handleChangeContentEditable={(name, value) => handleChangeContentEditable(pageIndex, name, value)}
                handleDeletePage={() => handleDeleteFile(pageIndex)}
              />
            </div>
          );
        })}
      </div>
      <div className="flex justify-center mt-16 print:mt-0 print:hidden">
        {transitions(({ y, ...rest }, page, { key }) => {
          const Component = components[page.type];
          const pageIndex = page.pageIndex;

          return (
            <animated.div
              key={key}
              className="my-10 mx-auto print:my-0"
              style={{
                transform: y.to((y) => `translate3d(0,${y}px,0)`),
                ...rest,
              }}
            >
              <Component
                pages={pages}
                setPages={setPages}
                pageIndex={pageIndex}
                handleChangeTextInput={(ev) => handleChangeTextInput(pageIndex, ev)}
                handleChangeCheckbox={(ev) => handleChangeCheckbox(pageIndex, ev)}
                handleChangePage={(ev) => handleChangePage(pageIndex, ev)}
                handleDeletePage={() => handleDeleteFile(pageIndex)}
              />
            </animated.div>
          );
        })}
      </div>
    </>
  );
};

export default AnimatedList;
