import ErrorHandler from "@/components/ErrorHandler/ErrorHandler";
import NavBar from "@/components/NavBar/NavBar";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AnimatedList from "../../components/AnimatedList/AnimatedList";
import { useForm } from "../../hooks/useForm";
import { useTransitions } from "../../hooks/useTransitions";
import CharacterData from "./CharacterData/characterData.view";
import CharacterFeatures from "./CharacterFeatures/characterFeatures.view";
import CharacterFlavor from "./CharacterFlavor/characterFlavor.view";
import CharacterSpells from "./CharacterSpells/characterSpells.view";

const components = {
  data: CharacterData,
  flavor: CharacterFlavor,
  features: CharacterFeatures,
  spells: CharacterSpells,
};

const DND5e = () => {
  const [pages, setPages] = useState({
    1: { id: uuidv4(), type: "data", data: {} },
    2: { id: uuidv4(), type: "flavor", data: {} },
  });

  const transitions = useTransitions(pages, 1132);
  const formActions = useForm(pages, setPages);

  return (
    <ErrorHandler>
      <NavBar data={pages} setData={setPages} type={"dnd5e"} onAddFile={formActions.handleAddFile} />
      <AnimatedList
        direction="vertical"
        components={components}
        transitions={transitions}
        pages={pages}
        setPages={setPages}
        formActions={formActions}
      />
    </ErrorHandler>
  );
};

export default DND5e;
