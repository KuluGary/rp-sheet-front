import React, { useEffect, useRef } from "react";
import { deepEquals } from "../../utils/util";

function UnsavedHandler({ data, hasUnsavedChanges, setHasUnsavedChanges, children }) {
  const oldData = useRef(data);

  useEffect(() => {
    if (!data) return;

    if (oldData.current) {
      const areStatesEqual = deepEquals(oldData.current, data);

      if (!areStatesEqual) setHasUnsavedChanges(true);
    } else {
      const hasUserInputData = Object.values(data).some((page) => Object.keys(page.data).length > 0);

      if (hasUserInputData) setHasUnsavedChanges(true);
    }

    oldData.current = structuredClone(data);
  }, [data]);

  /** Detect when user wants to exit the app */
  useEffect(() => {
    if (!hasUnsavedChanges) return;

    const handleTabClose = (event) => {
      event.preventDefault();

      return (event.returnValue = "Are you sure you want to exit?");
    };

    window.addEventListener("beforeunload", handleTabClose);

    return () => {
      window.removeEventListener("beforeunload", handleTabClose);
    };
  }, [hasUnsavedChanges]);

  return <>{children}</>;
}

export default UnsavedHandler;
