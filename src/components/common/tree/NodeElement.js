import React from "react";
import styled from "styled-components";
import ExpandCollapseIcon from "./ExpandCollapseIcon";
import FileFolderIcon from "./FileFolderIcon";

const NodeElement = (props) => {
  const { node, type, level, selectedNode } = props;
  const isOpen = node.isOpen ? node.isOpen : false;
  return (
    <StyledTreeNode
      level={level}
      type={type}
      isSelected={isNodeSelected(node, selectedNode)}
      onClick={() => props.onNodeSelection(node,type)}
    >
      <ExpandCollapseIcon {...props} />
      <FileFolderIcon type={type} isOpen={isOpen} />
      <div className="node-text">{node.name}</div>
    </StyledTreeNode>
  );
};

function isNodeSelected(currentNode, selectedNode) {
  return (
    selectedNode &&
    currentNode.id === selectedNode
  );
}

const calculatePaddingLeft = (level) => level * 20;

const StyledTreeNode = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px 8px;
  padding-left: ${(props) => calculatePaddingLeft(props.level)}px;
  background-color: ${(props) => (props.isSelected ? "paleturquoise" : "white")};
  color:${(props) => (props.isSelected && 'navy')};
  
  &:hover {
    background-color: ${(props) => (props.isSelected ? null : "lightgray")};
  }

  .node-text {
    flex-grow: 1;
    white-space: nowrap;
  }
`;

export default NodeElement;
