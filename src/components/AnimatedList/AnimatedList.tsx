import { animated } from "@react-spring/web";
import classNames from "./AnimatedList.module.css";
import { useTransitions } from "@/hooks/useTransitions";
import { Dispatch, ElementType, FC, ReactElement, SetStateAction } from "react";
import { FormActionsType, PageListType } from "@/types/types";

type ComponentProps = {
  pages: PageListType;
  setPages: Dispatch<SetStateAction<PageListType>>;
  pageIndex: number;
  
  handleChangePage: (ev: React.ChangeEvent<HTMLInputElement>) => void;
  handleDeletePage: () => void;
  handleChangeTextInput?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleChangeCheckbox?: (ev: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeMultiCheckbox?: (name: string, value: number) => void;
  handleChangeContentEditable?: (name: string, value: string) => void;
  handleChangeRadioGroup?: (name: string, value: number) => void;
};

type Props = {
  transitions: ReturnType<typeof useTransitions>;
  components: Record<string, FC<ComponentProps>>;
  pages: PageListType;
  setPages: Dispatch<SetStateAction<PageListType>>;
  formActions: FormActionsType;
  direction: string;
};

const AnimatedList = ({ transitions, components, pages, setPages, formActions, direction }: Props) => {
  const {
    handleChangeTextInput,
    handleChangeCheckbox,
    handleChangeMultiCheckbox,
    handleChangeRadioGroup,
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
        {/* {Object.entries(pages).map(([key, page]) => {
          const Component = components[page.type];
          const pageIndex = parseInt(key);

          return (
            <div key={key} className={`${classNames["print-item"]}`}>
              <Component
                pages={pages}
                setPages={setPages}
                pageIndex={pageIndex}
                handleChangeTextInput={(ev) => handleChangeTextInput(pageIndex, ev)}
                handleChangeCheckbox={(ev) => handleChangeCheckbox(pageIndex, ev)}
                handleChangeMultiCheckbox={(name, value) => handleChangeMultiCheckbox(pageIndex, name, value)}
                handleChangeRadioGroup={(name, value) => handleChangeRadioGroup(pageIndex, name, value)}
                handleChangeContentEditable={(name, value) => handleChangeContentEditable(pageIndex, name, value)}
                handleChangePage={(ev) => handleChangePage(pageIndex, ev)}
                handleDeletePage={() => handleDeleteFile(pageIndex)}
              />
            </div>
          );
        })} */}
      </div>
      <div className="flex justify-center mt-16 print:mt-0 print:hidden">
        {transitions(({ position, ...rest }, page, { key }) => {
          const Component = components[page.type];
          const pageIndex = parseInt(page.pageIndex);

          return (
            <animated.div
              key={key}
              className="my-10 mx-auto print:my-0"
              style={{
                transform: position.to((y) => `translate3d(0,${y}px,0)`),
                ...rest,
              }}
            >
              <Component
                pages={pages}
                setPages={setPages}
                pageIndex={pageIndex}
                handleChangeTextInput={(ev) => handleChangeTextInput(pageIndex, ev)}
                handleChangeCheckbox={(ev) => handleChangeCheckbox(pageIndex, ev)}
                handleChangeMultiCheckbox={(name, value) => handleChangeMultiCheckbox(pageIndex, name, value)}
                handleChangeRadioGroup={(name, value) => handleChangeRadioGroup(pageIndex, name, value)}
                handleChangeContentEditable={(name, value) => handleChangeContentEditable(pageIndex, name, value)}
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
