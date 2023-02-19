import backgroundImage from "@/assets/fate-core-sheet.jpg";
import Sheet from "@/components/Sheet/Sheet";
import React from "react";
import useCharacterData from "./useCharacterData";

const CharacterData = ({
  pages,
  pageIndex,
  handleChangeCheckbox,
  handleChangeTextInput,
  handleChangePage,
  handleDeletePage,
}) => {
  const page = pages[pageIndex].data;
  const inputs = useCharacterData({ page, handleChangeTextInput, handleChangeCheckbox });

  return (
    <Sheet
      background={backgroundImage}
      disposition="horizontal"
      pageIndex={pageIndex}
      handleChangePage={handleChangePage}
      handleDeletePage={handleDeletePage}
    >
      {inputs}
    </Sheet>
  );
};

export default CharacterData;
