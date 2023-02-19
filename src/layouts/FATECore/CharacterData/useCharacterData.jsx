import { useInputs } from "@/hooks/useInputs";
import { characterDataSchema, characterSkillsSchema, characterStressSchema } from "./characterData.schema";
import * as mappers from "./characterData.mapper";

const useFateCore = ({ page, handleChangeTextInput, handleChangeCheckbox }) => {
  const sharedProps = { page, handleChangeCheckbox, handleChangeTextInput };

  const inputs = useInputs({
    inputs: characterDataSchema,
    ...sharedProps,
    mapper: mappers.baseInputMapper,
  });

  const skills = useInputs({
    inputs: characterSkillsSchema,
    ...sharedProps,
    mapper: mappers.skillMapper,
  });

  const stress = useInputs({
    inputs: characterStressSchema,
    ...sharedProps,
    mapper: mappers.stressMapper,
  });

  return [...inputs, ...skills, ...stress];
};

export default useFateCore;
