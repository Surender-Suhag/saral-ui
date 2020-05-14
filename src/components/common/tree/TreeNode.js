import React from "react";
import NodeElement from "./NodeElement";
import _ from "lodash";

const renderNode = (
  node,
  type,
  onToggle,
  level,
  onNodeSelection,
  selectedNode
) => (
  <TreeNode
    key={type+node.id}
    node={node}
    type={type}
    level={level}
    onToggle={onToggle}
    onNodeSelection={onNodeSelection}
    selectedNode = {selectedNode}
  />
);

const renderChildElements = (
  node,
  level,
  onToggle,
  onNodeSelection,
  selectedNode
) => {
  const isOpen = node.isOpen ? node.isOpen : false;
  level = level + 1;

  if (isOpen) {
    const folderElements = node.childFolders.map((node) => {
      return renderNode(
        node,
        "folder",
        onToggle,
        level,
        onNodeSelection,
        selectedNode
      );
    });
    const fileElements = node.childFiles.map((node) => {
      return renderNode(
        node,
        "file",
        onToggle,
        level,
        onNodeSelection,
        selectedNode
      );
    });
    return _.concat(folderElements, fileElements);
  } else {
    return null;
  }
};

const TreeNode = (props) => {
  const {
    node,
    onToggle,
    level = 0,
    onNodeSelection,
    selectedNode
  } = props;
  return (
    <div>
      <NodeElement {...props} />
      {renderChildElements(
        node,
        level,
        onToggle,
        onNodeSelection,
        selectedNode
      )}
    </div>
  );
};

export default TreeNode;
