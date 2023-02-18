import {
  characterAbilityScoresSchema,
  characterAttackSchema,
  characterCoinSchema,
  characterDataSchema,
  characterDeathSavesSchema,
  characterSavingThrowsSchema,
  characterSkillsSchema,
} from "./characterData.schema";
import * as mappers from "./characterData.mapper";
import { useInputs } from "@/hooks/useInputs";

const useCharacterData = ({ page, handleChangeTextInput, handleChangeCheckbox }) => {
  const sharedProps = { page, handleChangeCheckbox, handleChangeTextInput };

  const inputs = useInputs({
    inputs: characterDataSchema,
    ...sharedProps,
    mapper: mappers.baseInputMapper,
  });

  const abilityScoreInputs = useInputs({
    ...sharedProps,
    mapper: mappers.abilityScoreMapper,
    ...characterAbilityScoresSchema,
  });

  const savingThrows = useInputs({
    ...sharedProps,
    mapper: mappers.skillSavingThrowMapper,
    type: "savingThrows",
    ...characterSavingThrowsSchema,
  });

  const skills = useInputs({
    ...sharedProps,
    mapper: mappers.skillSavingThrowMapper,
    type: "skills",
    ...characterSkillsSchema,
  });

  const deathSavesSuccess = useInputs({
    ...sharedProps,
    mapper: mappers.deathSavesMapper,
    type: "succeeded",
    inputs: 3,
    ...characterDeathSavesSchema.succeeded,
  });

  const deathSavesFails = useInputs({
    ...sharedProps,
    mapper: mappers.deathSavesMapper,
    type: "failed",
    inputs: 3,
    ...characterDeathSavesSchema.failed,
  });

  const attacks = useInputs({
    ...sharedProps,
    mapper: mappers.attacksMapper,
    inputs: 3,
    ...characterAttackSchema,
  });

  const coins = useInputs({
    ...sharedProps,
    mapper: mappers.coinsMapper,
    ...characterCoinSchema,
  });

  return [
    ...inputs,
    ...abilityScoreInputs,
    ...savingThrows,
    ...skills,
    ...deathSavesSuccess,
    ...deathSavesFails,
    ...attacks,
    ...coins,
  ];
};

export default useCharacterData;
