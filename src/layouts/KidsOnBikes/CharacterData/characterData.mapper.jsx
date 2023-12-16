import { getNestedKey } from "@/utils/util";
import Checkbox from "@/components/Checkbox/Checkbox";

export const baseInputMapper = (
  [name = "", data = ""],
  {
    page = 1,
    handleChangeTextInput = () => {},
    handleChangeCheckbox = () => {},
    handleChangeContentEditable = () => {},
  }
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
        className={`absolute top-[${position.y}px] left-[${position.x}px] ${className} font-shadows`}
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
        className={`absolute top-[${position.y}px] left-[${position.x}px] ${className} font-shadows`}
        style={{ top: position.y, left: position.x }}
      />
    );

  if (type === "contenteditable") {
    return (
      <div key={name} className={className} style={{ top: position.y, left: position.x }}>
        <div className={`${data.block.className}`} />
        <div
          contentEditable
          className={data.textarea.className}
          onBlur={(e) => handleChangeContentEditable(name, e.currentTarget.textContent)}
          dangerouslySetInnerHTML={{ __html: getNestedKey(name, page) }}
          suppressContentEditableWarning={true}
        />
      </div>
    );
  }

  return (
    <input
      name={name}
      key={name}
      placeholder={placeholder}
      value={getNestedKey(name, page) ?? ""}
      onChange={handleChangeTextInput}
      className={`absolute top-[${position.y}px] left-[${position.x}px] ${className} font-shadows`}
      style={{ top: position.y, left: position.x }}
    />
  );
};
