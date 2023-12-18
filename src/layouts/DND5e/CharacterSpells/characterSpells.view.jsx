import backgroundImage from "@/assets/dnd5e/character-spells.jpg";
import Sheet from "@/components/Sheet/Sheet";
import React from "react";
import useCharacterSpells from "./useCharacterSpells";

const CharacterSpells = ({
  pages,
  pageIndex,
  handleChangeTextInput,
  handleChangeCheckbox,
  handleChangePage,
  handleDeletePage,
}) => {
  const page = pages[pageIndex]?.data;
  const data = useCharacterSpells({ page, handleChangeTextInput, handleChangeCheckbox });

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

export default CharacterSpells;
