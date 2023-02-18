import { useInputs } from "@/hooks/useInputs";
import * as mapper from "./characterFeatures.mapper";
import { characterFeaturesSchema } from "./characterFeatures.schema";

const useCharacterFeatures = ({ page, handleChangeTextInput }) => {
  const inputs = useInputs({
    inputs: characterFeaturesSchema,
    page,
    handleChangeTextInput,
    mapper: mapper.baseInputMapper,
  });

  return [...inputs];
};

export default useCharacterFeatures;
