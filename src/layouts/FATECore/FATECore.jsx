import ErrorHandler from "@/components/ErrorHandler/ErrorHandler";
import NavBar from "@/components/NavBar/NavBar";
import { animated } from "@react-spring/web";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useForm } from "../../hooks/useForm";
import { useTransitions } from "../../hooks/useTransitions";
import CharacterData from "./CharacterData/characterData.view";
import CharacterFlavor from "./CharacterFlavor/characterFlavor.view";
import classNames from "./FATECore.module.css";

const components = {
  data: CharacterData,
  flavor: CharacterFlavor,
};

const FATECore = () => {
  const [pages, setPages] = useState({
    1: { id: uuidv4(), type: "data", data: {} },
    2: { id: uuidv4(), type: "flavor", data: {} },
  });

  const transitions = useTransitions(pages, 700);

  const { handleAddFile, handleChangeTextInput, handleChangeCheckbox, handleChangePage, handleDeleteFile } = useForm(
    pages,
    setPages
  );

  return (
    <div className={classNames.container}>
      <ErrorHandler>
        <NavBar data={pages} setData={setPages} type={"fate-core"} onAddFile={handleAddFile} />
        <div className="flex justify-center mt-16 print:mt-0">
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
      </ErrorHandler>
    </div>
  );
};

export default FATECore;
