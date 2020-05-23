import React from "react";
import { useSelector } from "react-redux";
import NameDescription from './NameDescription';

import { getNodeById } from "../../util/JsonTreeStructureUtil";

const ComponentDetails = () => {
  const data = useSelector((state) => state["component-nodes"].data);
  const selectedNodeId = useSelector((state) => state.selectedNode.nodeId);
  const nodeDetails = getNodeById(data, selectedNodeId);

  return (
    <NameDescription
      compName={nodeDetails.name}
      showDescription={true}
      compDescription={nodeDetails.description}
      onSubmit={(name, description) =>
        console.log(
          `implement method to save details -- ${name} , ${description}`
        )
      }
    />
  );
};

export default ComponentDetails;
