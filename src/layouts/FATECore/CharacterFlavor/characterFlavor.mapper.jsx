import { getNestedKey } from "@/utils/util";

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
