import backgroundImage from "@/assets/character-features.jpg";
import Sheet from "@/components/Sheet/Sheet";
import React from "react";
import useCharacterFeatures from "./useCharacterFeatures";

const CharacterFeatures = ({ pages, pageIndex, handleChangeTextInput, handleChangePage, handleDeletePage }) => {
  const page = pages[pageIndex]?.data;
  const data = useCharacterFeatures({ page, handleChangeTextInput });

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

export default CharacterFeatures;
