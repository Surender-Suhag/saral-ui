import React from 'react';
import styled from 'styled-components';
import Accordian from "../common/accordian";

const ChildComponentNodes = ({node}) => {
    const {name,childFolders,childFiles} = node;

    return (
      <Accordian className='my-2' defaultIsOpen={false} title={`${name.toUpperCase()} -- component details`}>
      
        {childFolders && childFolders.map((ele) => (
          <ChildComponentNodes key={ele.id} node={ele} />
        ))}
        {childFiles && childFiles.map(ele=><StyledComponentDetail key={ele.id}>{ele.name}</StyledComponentDetail>)}
      </Accordian>
    );

}

const StyledComponentDetail = styled.div`
    margin-left:2em;
    padding:.5em;
    font-size:.8em;
    font-weight:600;
`;

export default ChildComponentNodes;
