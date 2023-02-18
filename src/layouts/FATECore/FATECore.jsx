import backgroundImage from "@/assets/fate-core-sheet.jpg";
import ErrorHandler from "@/components/ErrorHandler/ErrorHandler";
import NavBar from "@/components/NavBar/NavBar";
import Sheet from "@/components/Sheet/Sheet";
import { setNestedKey } from "@/utils/util";
import React, { useState } from "react";
import { getNestedKey } from "../../utils/util";
import useFateCore from "./useFateCore";

const FATECore = () => {
  const [data, setData] = useState({});

  const handleChangeTextInput = (ev) => {
    const { name, value } = ev.target;

    const newData = { ...data, ...setNestedKey(name, data, value) };

    setData(newData);
  };

  const handleChangeCheckbox = (ev) => {
    const { name } = ev.target;

    const prevValue = getNestedKey(name, data);
    const newData = { ...data, ...setNestedKey(name, data, !prevValue) };

    setData(newData);
  };

  const inputs = useFateCore({ page: data, handleChangeTextInput, handleChangeCheckbox });

  return (
    <ErrorHandler>
      <NavBar data={data} setData={setData} type={"fate-core"} />
      <div className="mt-20">
        <Sheet background={backgroundImage} disposition="horizontal">
          {inputs}
        </Sheet>
      </div>
    </ErrorHandler>
  );
};

export default FATECore;
