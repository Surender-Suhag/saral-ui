import React from "react";
import { TwoColumnLayout } from "../common/TwoColumnLayout";
import LeftPanelTreeStructure from "../common/LeftPanelTreeStructure";
import { useSelector } from "react-redux";
import ComponentDetails from './ComponentDetails';
import ComponentNode from './ComponentNode';


const leftPane = () => (
  <LeftPanelTreeStructure
    context="components"
    
  />
);

const rightPane = (selectedElementType) => {
  return (
  <>
    {
      selectedElementType === 'folder' ?
      <ComponentNode /> :
      selectedElementType === 'file' ?
      <ComponentDetails/> :
      null
    }
  </>
);
  }
export const ComponentList = () => {
  const selectedElementType = useSelector(state=>state.selectedNode.nodeType) ;

  return (
       <TwoColumnLayout left={leftPane()} right={rightPane(selectedElementType)} />
       );
};
