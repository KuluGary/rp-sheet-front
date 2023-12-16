import Sheet from "@/components/Sheet/Sheet";
import backgroundImage from "@/assets/kids-on-bikes-character-sheet.jpg";
import useCharacterData from "./useCharacterData";

const CharacterData = ({
  pages,
  pageIndex,
  handleChangeCheckbox,
  handleChangeTextInput,
  handleChangePage,
  handleDeletePage,
}) => {
  const page = pages[pageIndex]?.data;
  const data = useCharacterData({ page, handleChangeCheckbox, handleChangeTextInput });

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
