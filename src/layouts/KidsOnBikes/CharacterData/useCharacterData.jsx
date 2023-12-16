import { useInputs } from "@/hooks/useInputs";
import * as mappers from "./characterData.mapper";
import { characterDataSchema } from "./characterData.schema";

const useCharacterData = ({ page, handleChangeTextInput, handleChangeCheckbox, handleChangeContentEditable }) => {
  const sharedProps = { page, handleChangeCheckbox, handleChangeTextInput, handleChangeContentEditable };

  const inputs = useInputs({
    inputs: characterDataSchema,
    ...sharedProps,
    mapper: mappers.baseInputMapper,
  });

  return [...inputs];
};

export default useCharacterData;
