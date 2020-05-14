import React from 'react';

import styled from "styled-components";
import {
  FaFile,
  FaFolder,
  FaFolderOpen,
} from "react-icons/fa";

import {AiOutlineFileText} from 'react-icons/ai';

const StyledNodeIcon = styled.div`
  font-size: 12px;
  margin-right: 10px;
`;

const FileFolderIcon = ({type, isOpen}) => (
    <StyledNodeIcon>
      {type === "file" ? <AiOutlineFileText size={'2em'} color={'DimGray'} /> : isOpen ? <FaFolderOpen size={'2em'} color={'DimGray'} /> : <FaFolder size={'2em'} color={'darkslategray'} />}
    </StyledNodeIcon>
  );

  export default FileFolderIcon;