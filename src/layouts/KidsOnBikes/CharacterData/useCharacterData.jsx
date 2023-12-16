import { useInputs } from "@/hooks/useInputs";
import * as mappers from "./characterData.mapper";
import { characterDataSchema } from "./characterData.schema";

const useCharacterData = ({ page, handleChangeTextInput, handleChangeCheckbox }) => {
  const sharedProps = { page, handleChangeCheckbox, handleChangeTextInput };

  const inputs = useInputs({
    inputs: characterDataSchema,
    ...sharedProps,
    mapper: mappers.baseInputMapper,
  });

  return [...inputs];
};

export default useCharacterData;
