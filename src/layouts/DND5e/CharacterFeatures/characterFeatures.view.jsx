import backgroundImage from "@/assets/character-features.jpg";
import Sheet from "@/components/Sheet/Sheet";
import React from "react";
import { useInputs } from "@/hooks/useInputs";
import { characterFeaturesSchema } from "./characterFeatures.schema";
import useCharacterFeatures from "./useCharacterFeatures";

const CharacterFeatures = ({ pages, pageIndex, handleChangeTextInput, handleChangePage }) => {
  const page = pages[pageIndex].data;
  const data = useCharacterFeatures({ page, handleChangeTextInput });

  return (
    <Sheet background={backgroundImage} pageIndex={pageIndex} handleChangePage={handleChangePage}>
      {data}
    </Sheet>
  );
};

export default CharacterFeatures;
