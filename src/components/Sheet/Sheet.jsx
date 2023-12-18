import Cancel from "@/components/Icons/Cancel";
import React from "react";
import classNames from "./Sheet.module.css";

const Sheet = ({ children, background, disposition = "vertical", pageIndex, handleChangePage, handleDeletePage }) => {
  return (
    <div className={classNames.wrapper}>
      <div
        className={`${classNames.container} ${classNames[disposition]} m-[1px]`}
        style={{ backgroundImage: `url(${background})`, backgroundRepeat: "no-repeat", backgroundPositionX: "center" }}
      >
        {children}
        <img src={background} className="w-auto h-full -z-10 mx-auto screen:hidden" />
      </div>
      {pageIndex && (
        <div className="absolute bottom-2 w-full text-center print:hidden">
          <input value={pageIndex} onChange={handleChangePage} className="text-center" type="number" />
        </div>
      )}
      {handleDeletePage && (
        <button
          onClick={handleDeletePage}
          className={`${classNames["cancel-button"]} absolute right-1 top-1 hover:bg-neutral-300 rounded-full p-1 grid place-items-center print:hidden`}
        >
          <Cancel size={24} />
        </button>
      )}
    </div>
  );
};

export default Sheet;
