import { useInputs } from "@/hooks/useInputs";
import { characterSpellsSchema, characterSpellsSpellSchema } from "./characterSpells.schema";
import * as mappers from "./characterSpells.mapper";

const useCharacterSpells = ({ page, handleChangeTextInput, handleChangeCheckbox }) => {
  const sharedProps = { page, handleChangeCheckbox, handleChangeTextInput };

  const inputs = useInputs({
    inputs: characterSpellsSchema,
    ...sharedProps,
    mapper: mappers.baseInputMapper,
  });

  const spellSlotInputs = useInputs({
    inputs: characterSpellsSpellSchema,
    ...sharedProps,
    mapper: mappers.spellSlotsMapper,
  });

  const spellInputs = useInputs({
    inputs: characterSpellsSpellSchema,
    ...sharedProps,
    mapper: mappers.spellsMapper,
  });

  return [...inputs, ...spellSlotInputs, ...spellInputs];
};

export default useCharacterSpells;
