import { useInputs } from "@/hooks/useInputs";
import { characterDataSchema } from "./characterData.schema";
import { baseInputMapper } from "../../../utils/baseInputMapper";

const useCharacterData = ({ page, handleChangeTextInput, handleChangeCheckbox, handleChangeContentEditable }) => {
  const sharedProps = { page, handleChangeCheckbox, handleChangeTextInput, handleChangeContentEditable };

  const inputs = useInputs({
    inputs: characterDataSchema,
    ...sharedProps,
    mapper: baseInputMapper,
  });

  return [...inputs];
};

export default useCharacterData;
