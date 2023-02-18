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

export const abilityScoreMapper = (abilityScore, props) => {
  const { page, distanceMultiplier, startsAt, secondaryElementOffset, i, handleChangeTextInput, handleChangeCheckbox } =
    props;
  const positionInput = startsAt + distanceMultiplier * i;
  const positionResult = positionInput + secondaryElementOffset;
  const getModifier = (stat) => Math.floor((parseInt(stat) - 10) / 2);

  return (
    <section id={`${abilityScore}-score`} key={abilityScore}>
      <div
        className="absolute left-[40px] h-[30px] w-[50px] flex items-center justify-center text-2xl"
        style={{ top: positionResult }}
      >
        {page?.abilityScores?.[abilityScore] && getModifier(page?.abilityScores?.[abilityScore])}
      </div>
      <input
        type="text"
        key={abilityScore}
        value={page?.abilityScores?.[abilityScore]}
        onChange={handleChangeTextInput}
        name={`abilityScores.${abilityScore}`}
        className={`absolute left-14 w-4 aspect-square text-xs text-center`}
        style={{ top: positionInput }}
      />
    </section>
  );
};

export const skillSavingThrowMapper = (element, props) => {
  const {
    page,
    distanceMultiplier,
    startsAt,
    secondaryElementOffset,
    i,
    type,
    handleChangeTextInput,
    handleChangeCheckbox,
  } = props;
  const positionInput = startsAt + distanceMultiplier * i;
  const positionCheck = positionInput - secondaryElementOffset;

  return (
    <section id={`${element}-${type}`} key={`${element}-${type}`}>
      <Checkbox
        name={`${type}.${element}.checked`}
        checked={page?.[type]?.[element]?.checked}
        onClick={handleChangeCheckbox}
        className="absolute left-[124px] w-2 aspect-square"
        style={{ top: positionCheck }}
      />
      <input
        type="text"
        value={page?.[type]?.[element]?.value}
        onChange={handleChangeTextInput}
        name={`${type}.${element}.value`}
        className={`absolute left-[140px] w-4 aspect-square text-xs text-center`}
        style={{ top: positionInput }}
      />
    </section>
  );
};

export const deathSavesMapper = (props) => {
  const { page, startsAt, distanceMultiplier, i, type, handleChangeCheckbox } = props;

  return (
    <Checkbox
      key={`deathsaves.${type}.${i}`}
      name={`deathsaves.${type}.${i}`}
      checked={page?.deathsaves?.[type]?.[i]}
      onClick={handleChangeCheckbox}
      className="absolute w-2 aspect-square"
      style={{ top: startsAt.y, left: startsAt.x + distanceMultiplier * i }}
    />
  );
};

export const attacksMapper = (props) => {
  const { page, startsAt, distanceMultiplier, i, handleChangeTextInput } = props;

  return (
    <section id={`attacks-${i}`} key={`attacks-${i}`}>
      <input
        type="text"
        name={`attacks.${i}.name`}
        onChange={handleChangeTextInput}
        value={page?.attacks?.[i]?.name}
        className="absolute text-xs text-center h-4 w-[80px]"
        style={{ top: startsAt.y + distanceMultiplier * i, left: startsAt.x }}
      />

      <input
        type="text"
        name={`attacks.${i}.bonus`}
        value={page?.attacks?.[i]?.bonus}
        onChange={handleChangeTextInput}
        className="absolute text-xs text-center h-4 w-10"
        style={{ top: startsAt.y + distanceMultiplier * i, left: startsAt.x + 88 }}
      />
      <input
        type="text"
        name={`attacks.${i}.damage`}
        value={page?.attacks?.[i]?.damage}
        onChange={handleChangeTextInput}
        className="absolute text-xs text-center h-4 w-[74px]"
        style={{ top: startsAt.y + distanceMultiplier * i, left: startsAt.x + 88 + 52 }}
      />
    </section>
  );
};

export const coinsMapper = (coin, props) => {
  const { page, handleChangeTextInput, startsAt, distanceMultiplier, i } = props;

  return (
    <input
      type="text"
      key={`coin.${coin}`}
      name={`coin.${coin}`}
      value={page?.coin?.[coin]}
      onChange={handleChangeTextInput}
      className="absolute left-[296px] w-8 text-sm text-center"
      style={{ top: startsAt + distanceMultiplier * i }}
    />
  );
};
