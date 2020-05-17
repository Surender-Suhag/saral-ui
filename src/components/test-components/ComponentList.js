import React from "react";
import { TwoColumnLayout } from "../common/TwoColumnLayout";
import LeftPanelTreeStructure from "../common/LeftPanelTreeStructure";



const leftPane = () => (
  <LeftPanelTreeStructure
    context="components"
    
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
