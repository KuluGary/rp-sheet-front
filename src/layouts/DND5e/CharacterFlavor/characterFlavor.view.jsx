import React from "react";
import Sheet from "@/components/Sheet/Sheet";
import backgroundImage from "@/assets/character-flavor.jpg";
import { useInputs } from "@/hooks/useInputs";
import { characterFlavorSchema } from "./characterFlavor.schema";
import useCharacterFlavor from "./useCharacterFlavor";

const CharacterFlavor = ({ pages, pageIndex, handleChangeTextInput, handleChangePage }) => {
  const page = pages[pageIndex].data;
  const data = useCharacterFlavor({ page, handleChangeTextInput });

  const handleImageChange = async (ev) => {
    const file = ev.target.files[0];

    const uri = await toBase64(file);

    handleChangeTextInput({ target: { name: "avatar", value: uri } });
  };

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  return (
    <Sheet background={backgroundImage} pageIndex={pageIndex} handleChangePage={handleChangePage}>
      {data}

      <section id="image-input">
        <div className="absolute top-[144px] left-[35px] w-[215px] h-[300px] flex items-center justify-center z-10 pointer-events-none bg-white overflow-hidden">
          <img src={page?.avatar} className="object-cover" />
        </div>

        <input
          type="file"
          onChange={handleImageChange}
          name="avatar"
          accept="image/png, image/jpeg"
          className="absolute top-[144px] left-[35px] w-[215px] h-[300px]"
        />
      </section>
    </Sheet>
  );
};

export default CharacterFlavor;
