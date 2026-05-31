import {
  characterAbilityScoresSchema,
  characterAttackSchema,
  characterCoinSchema,
  characterDataSchema,
  characterDeathSavesSchema,
  characterSavingThrowsSchema,
  characterSkillsSchema,
} from "./characterData.schema";
import { useInputs } from "@/hooks/useInputs";
import {
  abilityScoreMapper,
  attacksMapper,
  baseInputMapper,
  coinsMapper,
  deathSavesMapper,
  skillSavingThrowMapper,
} from "../../../utils/baseInputMapper";
import { FormActionsType, PageType } from "@/types/types";

const useCharacterData = ({
  page,
  pageIndex,
  handleChangeTextInput,
  handleChangeCheckbox,
}: {
  page: PageType["data"];
  pageIndex: number;
  handleChangeTextInput: FormActionsType["handleChangeTextInput"];
  handleChangeCheckbox: FormActionsType["handleChangeCheckbox"];
}) => {
  const sharedProps = { page, pageIndex, handleChangeCheckbox, handleChangeTextInput };
  console.log({ handleChangeTextInput });

  const inputs = useInputs({
    inputs: characterDataSchema,
    mapper: baseInputMapper,
    ...sharedProps,
  });

  const abilityScoreInputs = useInputs({
    mapper: abilityScoreMapper,
    ...characterAbilityScoresSchema,
    ...sharedProps,
  });

  const savingThrows = useInputs({
    ...sharedProps,
    mapper: skillSavingThrowMapper,
    type: "savingThrows",
    ...characterSavingThrowsSchema,
  });

  const skills = useInputs({
    ...sharedProps,
    mapper: skillSavingThrowMapper,
    type: "skills",
    ...characterSkillsSchema,
  });

  const deathSavesSuccess = useInputs({
    ...sharedProps,
    mapper: deathSavesMapper,
    type: "succeeded",
    inputs: 3,
    ...characterDeathSavesSchema.succeeded,
  });

  const deathSavesFails = useInputs({
    ...sharedProps,
    mapper: deathSavesMapper,
    type: "failed",
    inputs: 3,
    ...characterDeathSavesSchema.failed,
  });

  const attacks = useInputs({
    ...sharedProps,
    mapper: attacksMapper,
    inputs: 3,
    ...characterAttackSchema,
  });

  const coins = useInputs({
    ...sharedProps,
    mapper: coinsMapper,
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
