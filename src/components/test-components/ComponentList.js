import React from "react";
import { TwoColumnLayout } from "../common/TwoColumnLayout";
import LeftPanelTreeStructure from "../common/LeftPanelTreeStructure";

function onNodeSelection(node) {
  console.log("node selected -- " + node.id);
}

const leftPane = () => (
  <LeftPanelTreeStructure
    context="components"
    onNodeSelection={onNodeSelection}
  />
);

const rightPane = () => (
  <div>
    This is some text which should appear on the right side of the div element
  </div>
);

export const ComponentList = () => {
  return (
       <TwoColumnLayout left={leftPane()} right={rightPane()} />
       );
};
