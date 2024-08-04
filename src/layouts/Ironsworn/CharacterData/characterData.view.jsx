import backgroundImage from "@/assets/ironsworn/character-data.jpg";
import Sheet from "../../../components/Sheet/Sheet";
import useCharacterData from "./useCharacterData";

const CharacterData = ({
  pages,
  pageIndex,
  handleChangeCheckbox,
  handleChangeMultiCheckbox,
  handleChangeRadioGroup,
  handleChangeTextInput,
  handleChangePage,
  handleDeletePage,
  handleChangeContentEditable,
}) => {
  const page = pages[pageIndex]?.data;
  const data = useCharacterData({
    page,
    handleChangeCheckbox,
    handleChangeMultiCheckbox,
    handleChangeRadioGroup,
    handleChangeTextInput,
    handleChangeContentEditable,
  });

  return (
    <Sheet
      background={backgroundImage}
      pageIndex={pageIndex}
      handleChangePage={handleChangePage}
      handleDeletePage={handleDeletePage}
    >
      {data}
    </Sheet>
  );
};

export default CharacterData;
