import React from "react";
import classNames from "./Sheet.module.css";

const Sheet = ({ children, background, disposition = "vertical", pageIndex, handleChangePage }) => {
  return (
    <div className={classNames.wrapper}>
      <div
        className={`${classNames.container} ${classNames[disposition]}`}
        style={{ backgroundImage: `url(${background})` }}
      >
        {children}
      </div>
      {pageIndex && (
        <div className="absolute bottom-2 w-full text-center">
          <input value={pageIndex} onChange={handleChangePage} className="text-center" type="number" />
        </div>
      )}
    </div>
  );
};

export default Sheet;
