import { PropsWithChildren } from "react";
import classNames from "./Sheet.module.css";
import Cancel from "../Icons/Cancel";

type Props = PropsWithChildren<{
  background?: string;
  disposition?: "vertical" | "horizontal";
  pageIndex?: number;
  handleChangePage?: () => void;
  handleDeletePage?: () => void;
}>;

const Sheet = ({
  children,
  background,
  disposition = "vertical",
  pageIndex,
  handleChangePage,
  handleDeletePage,
}: Props) => {
  return (
    <div className={classNames.wrapper}>
      <div
        className={`${classNames.container} ${classNames[disposition]}`}
        style={{ backgroundImage: `url(${background})`, backgroundRepeat: "no-repeat", backgroundPositionX: "center" }}
      >
        {children}
        <img src={background} className="w-auto h-auto -z-10 mx-auto screen:hidden" />
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
