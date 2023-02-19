import backgroundImage from "@/assets/fate-core-sheet-notes.jpg";
import Sheet from "@/components/Sheet/Sheet";
import React from "react";
import useCharacterFlavor from "./useCharacterFlavor";

const CharacterFlavor = ({ pages, pageIndex, handleChangeTextInput, handleChangePage }) => {
  const page = pages[pageIndex].data;
  const data = useCharacterFlavor({ page, handleChangeTextInput });

  return (
    <Sheet background={backgroundImage} disposition="horizontal" pageIndex={pageIndex} handleChangePage={handleChangePage}>
      {data}
    </Sheet>
  );
};

export default CharacterFlavor;
