import Cancel from "@/components/Icons/Cancel";
import React from "react";
import classNames from "./Sheet.module.css";

const Sheet = ({ children, background, disposition = "vertical", pageIndex, handleChangePage, handleDeletePage }) => {

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
      {handleDeletePage && (
        <button
          onClick={handleDeletePage}
          className={`${classNames["cancel-button"]} absolute right-1 top-1 hover:bg-neutral-300 rounded-full p-1 grid place-items-center`}
        >
          <Cancel size={24} />
        </button>
      )}
    </div>
  );
};

export default Sheet;
