import backgroundImage from "@/assets/kids-on-bikes/character-data.jpg";
import Sheet from "@/components/Sheet/Sheet";
import useCharacterData from "./useCharacterData";

const CharacterData = ({
  pages,
  pageIndex,
  handleChangeCheckbox,
  handleChangeTextInput,
  handleChangePage,
  handleDeletePage,
  handleChangeContentEditable,
}) => {
  const page = pages[pageIndex]?.data;
  const data = useCharacterData({ page, handleChangeCheckbox, handleChangeTextInput, handleChangeContentEditable });

  return (
    <Sheet
      background={backgroundImage}
      disposition="vertical"
      pageIndex={pageIndex}
      handleChangePage={handleChangePage}
      handleDeletePage={handleDeletePage}
    >
      {data}
    </Sheet>
  );
};

export default CharacterData;
