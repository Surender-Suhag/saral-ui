import React from 'react';
import styled from 'styled-components';
import Chevron from './Chevron'

const StyledDiv = styled.div`
  color: #444;
  cursor: pointer;
  padding: 16px;
  padding-bottom: 8px;
  display: flex;
  align-items: center;
  border: none;
  outline: none;
  transition: background-color 0.6s ease;
  border-bottom: 0.1em solid #dee2e6 !important;
  background-color: ${props=>props.isOpen?'gainsboro':null}; 

  &:hover {
    background-color: #ccc;
  }

`;

const Header = (props) => {
    const {onClick,isOpen} = props;
    return (
        <StyledDiv className='header' isOpen={isOpen}   onClick={onClick} >
           {props.title} 
            <Chevron expanded = {isOpen} />
        </StyledDiv>
    )
}

export default Header;