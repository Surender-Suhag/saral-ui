import React from "react";
import { useSelector } from "react-redux";

import NameDescription from "./NameDescription";
import Content from "../common/MainContent";
import { getNodeById } from "../../util/JsonTreeStructureUtil";
import ChildComponentNodes from './ChildComponentNodes';


const ComponentNode = (props) => {
  const data = useSelector((state) => state["component-nodes"].data);
  const selectedNodeId = useSelector((state) => state.selectedNode.nodeId);
  const selectedNode = getNodeById(data, selectedNodeId);
 

  return (
    <>
      <NameDescription
        compName={selectedNode.name}
        showDescription={false}
        onSubmit={(name) =>
          console.log(`implement to save details of component name ${name}`)
        }
      />
      <Content>
        <ChildComponentNodes node={selectedNode} />
      </Content>
    </>
  );
};

export default ComponentNode;
