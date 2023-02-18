import { useInputs } from "@/hooks/useInputs";
import { characterFlavorSchema } from "./characterFlavor.schema";
import * as mapper from "./characterFlavor.mapper";

const useCharacterFlavor = ({ page, handleChangeTextInput }) => {
  const inputs = useInputs({
    inputs: characterFlavorSchema,
    page,
    handleChangeTextInput,
    mapper: mapper.baseInputMapper,
  });

  return [...inputs];
};

export default useCharacterFlavor;
