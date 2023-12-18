import backgroundImage from "@/assets/fate-core/character-flavor.jpg";
import Sheet from "@/components/Sheet/Sheet";
import React from "react";
import useCharacterFlavor from "./useCharacterFlavor";

const CharacterFlavor = ({ pages, pageIndex, handleChangeTextInput, handleChangePage, handleDeletePage }) => {
  const page = pages[pageIndex].data;
  const data = useCharacterFlavor({ page, handleChangeTextInput });

  return (
    <Sheet
      background={backgroundImage}
      disposition="horizontal"
      pageIndex={pageIndex}
      handleChangePage={handleChangePage}
      handleDeletePage={handleDeletePage}
    >
      {data}
    </Sheet>
  );
};

export default CharacterFlavor;
