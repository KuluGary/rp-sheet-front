import React from "react";

const AddFileDropdown = ({ show, setShow, handleSelect }) => {
  if (!show) return <></>;

  return (
    <div className="absolute top-full mt-3 left-2/4 bg-white rounded-md shadow-lg w-fit -translate-x-2/4">
      <button onClick={handleSelect} name="spells" className="overflow-hidden whitespace-nowrap py-1 my-2 px-2 w-full hover:bg-neutral-100">
        Añadir página de hechizos
      </button>
      <button onClick={handleSelect} name="features" className="overflow-hidden whitespace-nowrap py-1 my-2 px-2 w-full hover:bg-neutral-100">
        Añadir página de rasgos
      </button>
      <button className="overflow-hidden whitespace-nowrap py-1 my-2 px-2 w-full hover:bg-neutral-100" onClick={() => setShow(false)}>
        Cancelar
      </button>
    </div>
  );
};

export default AddFileDropdown;
