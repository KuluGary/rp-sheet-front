import ErrorHandler from "@/components/ErrorHandler/ErrorHandler";
import NavBar from "@/components/NavBar/NavBar";
import { animated } from "@react-spring/web";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useForm } from "../../hooks/useForm";
import { useTransitions } from "../../hooks/useTransitions";
import CharacterData from "./CharacterData/characterData.view";

const components = {
  data: CharacterData,
};

function KidsOnBikes() {
  const [pages, setPages] = useState({
    1: { id: uuidv4(), type: "data", data: {} },
  });

  const transitions = useTransitions(pages);
  const {
    handleAddFile,
    handleChangeTextInput,
    handleChangeCheckbox,
    handleChangePage,
    handleDeleteFile,
    handleChangeContentEditable,
  } = useForm(pages, setPages);

  return (
    <ErrorHandler>
      <NavBar data={pages} setData={setPages} type={"kids-on-bikes"} onAddFile={handleAddFile} />
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
                handleDeletePage={() => handleDeleteFile(pageIndex)}
                handleChangeContentEditable={(name, value) => handleChangeContentEditable(pageIndex, name, value)}
              />
            </animated.div>
          );
        })}
      </div>
    </ErrorHandler>
  );
}

export default KidsOnBikes;
