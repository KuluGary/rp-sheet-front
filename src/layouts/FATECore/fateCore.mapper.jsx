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

export const skillMapper = ([type, skillData], props) => {
  const { startsAt } = skillData;
  const { page, handleChangeTextInput } = props;

  return (
    <section id={type}>
      {Array.apply(null, Array(5)).map((_, index) => (
        <input
          name={`skills.${type}.${index}`}
          key={`skills.${type}.${index}`}
          value={page?.skills?.[type]?.[index]}
          onChange={handleChangeTextInput}
          className="absolute h-[14px] w-[70px] text-sm"
          style={{ left: startsAt.x + 82 * index, top: startsAt.y }}
        />
      ))}
    </section>
  );
};

export const stressMapper = ([type, stressData], props) => {
  const { startsAt, distanceOffset, size, className } = stressData;
  const { page, handleChangeCheckbox } = props;

  return (
    <section id={type}>
      {Array.apply(null, Array(size)).map((_, index) => (
        <Checkbox
          key={index}
          name={`${type}.${index}`}
          checked={page?.[type]?.[index]}
          onClick={handleChangeCheckbox}
          className={className}
          style={{
            top: startsAt.y,
            left: startsAt.x + distanceOffset * index
          }}
        />
      ))}
    </section>
  );
};
