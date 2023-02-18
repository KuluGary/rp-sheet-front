import { getNestedKey } from "@/utils/util";
import Checkbox from "@/components/Checkbox/Checkbox";

export const baseInputMapper = (
  [name = "", data = ""],
  { page = 1, handleChangeTextInput = () => {}, handleChangeCheckbox = () => {} }
) => {
  const { type, position, placeholder = "", className } = data;

  if (type === "textarea")
    return (
      <textarea
        name={name}
        key={name}
        placeholder={placeholder}
        value={getNestedKey(name, page) ?? ""}
        onChange={handleChangeTextInput}
        className={`absolute top-[${position.y}px] left-[${position.x}px] ${className}`}
        style={{ top: position.y, left: position.x }}
      />
    );

  if (type === "checkbox")
    return (
      <Checkbox
        name={name}
        key={name}
        checked={getNestedKey(name, page)}
        onClick={handleChangeCheckbox}
        className={`absolute top-[${position.y}px] left-[${position.x}px] ${className}`}
        style={{ top: position.y, left: position.x }}
      />
    );

  return (
    <input
      name={name}
      key={name}
      placeholder={placeholder}
      value={getNestedKey(name, page) ?? ""}
      onChange={handleChangeTextInput}
      className={`absolute top-[${position.y}px] left-[${position.x}px] ${className}`}
      style={{ top: position.y, left: position.x }}
    />
  );
};

export const spellSlotsMapper = (spell, props) => {
  const [spellLevel, spellData] = spell;
  const { handleChangeTextInput, page } = props;

  return (
    <section key={spellLevel} id={spellLevel}>
      {spellData.slotTitle && (
        <section>
          <input
            name={`${spellLevel}.slots.total.value`}
            value={page?.[spellLevel]?.slots?.total?.value}
            onChange={handleChangeTextInput}
            type="text"
            className="absolute w-12 h-6 aspect-square text-center"
            style={{ top: spellData.slotTitle.y, left: spellData.slotTitle.x }}
          />
          <input
            name={`${spellLevel}.slots.used.value`}
            value={page?.[spellLevel]?.slots?.used?.value}
            onChange={handleChangeTextInput}
            type="text"
            className="absolute w-32 h-6 aspect-square text-center"
            style={{ top: spellData.slotTitle.y, left: spellData.slotTitle.x + 74 }}
          />
        </section>
      )}
    </section>
  );
};

export const spellsMapper = (data, props) => {
  const [spellLevel, spellData] = data;
  const { size, checked } = spellData;
  const { page, handleChangeCheckbox, handleChangeTextInput } = props;

  return Array.apply(null, Array(size)).map((_, spellIndex) => {
    const y = spellData.startsAt.y + 18.5 * spellIndex;
    const x = spellData.startsAt.x;

    return (
      <section id={`spell-${spellIndex}-level-${spellLevel}`} key={spellIndex}>
        {checked && (
          <Checkbox
            name={`${spellLevel}.${spellIndex}.checked`}
            checked={page?.[`${spellLevel}`]?.[`${spellIndex}`]?.checked}
            onClick={handleChangeCheckbox}
            className={`absolute w-2 h-2 aspect-square text-xs`}
            style={{ top: y + 9 + 0.25 * spellIndex, left: x - 15 }}
          />
        )}

        <input
          type="text"
          name={`${spellLevel}.${spellIndex}.value`}
          value={page?.[`${spellLevel}`]?.[`${spellIndex}`]?.value}
          onChange={handleChangeTextInput}
          className={`absolute w-52 h-4 aspect-square text-xs`}
          style={{ top: y, left: x }}
        />
      </section>
    );
  });
};
