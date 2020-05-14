import React from "react";
import styled from "styled-components";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";


const StyledNodeIcon = styled.div`
  font-size: 12px;
  margin-right: 5px;

  .leaf-element {
    padding-left: 1em;
  }
`;

const ExpandCollapseIcon = (props) => {
    const {node,type,onToggle} = props;
    const isOpen = node.isOpen ? node.isOpen : false;
  return (
    <StyledNodeIcon onClick={() => onToggle(node)}>
      {type === "folder" &&
      ((node.childFolders && node.childFolders.length) > 0 || (node.childFiles && node.childFiles.length > 0)) ? (
        isOpen ? (
          <FaChevronDown />
        ) : (
          <FaChevronRight />
        )
      ) : <div className="leaf-element" />}
    </StyledNodeIcon>
  );
};
export default ExpandCollapseIcon;
