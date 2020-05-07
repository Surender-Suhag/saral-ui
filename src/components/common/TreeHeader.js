import React from 'react';
import styled from 'styled-components';
import {FiFilePlus,FiFolderPlus} from 'react-icons/fi';
const StyledHeader = styled.div`
    background-color:#DCDCDC;
    display:flex;
   
    align-items:center;

    .icon {
        margin: 5px;
        margin-left: 8px;
        margin-right: 8px;
        color:darkslategray;
    }
`;

export const TreeHeader = (props) => {
    
    return (
        <StyledHeader >
            <FiFolderPlus className='icon shadow-lg' size={'1.5em'} title='Add Folder' onClick = { ()=>console.log('clicked folder plus')} />
            <FiFilePlus className='icon shadow-lg'  size={'1.5em'} title='Add File'  />
        </StyledHeader>
    )
}