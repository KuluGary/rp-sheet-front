import { useInputs } from "@/hooks/useInputs";
import { characterDataSchema, characterSkillsSchema, characterStressSchema } from "./characterData.schema";
import { baseInputMapper, skillMapper, stressMapper } from "../../../utils/baseInputMapper";

const useFateCore = ({ page, handleChangeTextInput, handleChangeCheckbox }) => {
  const sharedProps = { page, handleChangeCheckbox, handleChangeTextInput };

  const inputs = useInputs({
    inputs: characterDataSchema,
    ...sharedProps,
    mapper: baseInputMapper,
  });

  const skills = useInputs({
    inputs: characterSkillsSchema,
    ...sharedProps,
    mapper: skillMapper,
  });

  const stress = useInputs({
    inputs: characterStressSchema,
    ...sharedProps,
    mapper: stressMapper,
  });

  return [...inputs, ...skills, ...stress];
};

export default useFateCore;
