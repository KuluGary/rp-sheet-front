import React from "react";
import classNames from "./Checkbox.module.css";

const Checkbox = (props) => {
  return (
    <button
      data-checked={`${props.checked ?? false}`}
      onClick={props.onClick}
      {...props}
      className={`${classNames.checkbox} ${props.className}`}
    />
  );
};

export default Checkbox;
