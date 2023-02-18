import { useInputs } from "@/hooks/useInputs";
import * as mappers from "./fateCore.mapper";
import { fateCoreSchema, fateCoreSkillsSchema, fateCoreStressSchema } from "./fateCore.schema";

const useFateCore = ({ page, handleChangeTextInput, handleChangeCheckbox }) => {
  const sharedProps = { page, handleChangeCheckbox, handleChangeTextInput };

  const inputs = useInputs({
    inputs: fateCoreSchema,
    ...sharedProps,
    mapper: mappers.baseInputMapper,
  });

  const skills = useInputs({
    inputs: fateCoreSkillsSchema,
    ...sharedProps,
    mapper: mappers.skillMapper,
  });

  const stress = useInputs({
    inputs: fateCoreStressSchema,
    ...sharedProps,
    mapper: mappers.stressMapper,
  });

  return [...inputs, ...skills, ...stress];
};

export default useFateCore;
