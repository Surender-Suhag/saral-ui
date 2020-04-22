import React from 'react';
import ReactLoading from 'react-loading';
import styled from 'styled-components';

const Styles = styled.div`
 
  align-self: center;
  justify-self: center;
`;

export const Loading = () => (
    <Styles>
       
            <ReactLoading type={"bars"} color={"#576478"} />
            
    </Styles>
)