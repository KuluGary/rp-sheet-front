import React, { useEffect } from "react";
import classNames from "./Checkbox.module.css";

const Checkbox = (props) => {
  return (
    <input type="checkbox" onClick={props.onClick} className={`${classNames.checkbox} accent-black`} {...props} />
  );
};

export default Checkbox;
