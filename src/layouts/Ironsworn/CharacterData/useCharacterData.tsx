import { useInputs } from "@/hooks/useInputs";
import { baseInputMapper } from "@/utils/baseInputMapper";
import { characterDataSchema } from "./characterData.schema";

type Props = any;

const useCharacterData = (sharedProps: Props) => {
  const inputs = useInputs({
    inputs: characterDataSchema,
    ...sharedProps,
    mapper: baseInputMapper,
  });

  return [...inputs];
};

export default useCharacterData;
