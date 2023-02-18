import backgroundImage from "@/assets/character-spells.jpg";
import Sheet from "@/components/Sheet/Sheet";
import React from "react";
import useCharacterSpells from "./useCharacterSpells";

const CharacterSpells = ({ pages, pageIndex, handleChangeTextInput, handleChangeCheckbox, handleChangePage }) => {
  const page = pages[pageIndex].data;
  const data = useCharacterSpells({ page, handleChangeTextInput, handleChangeCheckbox });

  return (
    <Sheet background={backgroundImage} pageIndex={pageIndex} handleChangePage={handleChangePage}>
      {data}
    </Sheet>
  );
};

export default CharacterSpells;
