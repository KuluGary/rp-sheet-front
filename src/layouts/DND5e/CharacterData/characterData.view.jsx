import backgroundImage from "@/assets/dnd5e/character-data.jpg";
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
  const page = pages[pageIndex]?.data;
  const data = useCharacterData({ page, handleChangeCheckbox, handleChangeTextInput });

  return (
    <Sheet
      background={backgroundImage}
      pageIndex={pageIndex}
      handleChangePage={handleChangePage}
      handleDeletePage={handleDeletePage}
    >
      {data}
    </Sheet>
  );
};

export default CharacterData;
