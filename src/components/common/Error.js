import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
 
  align-self: center;
  justify-self: center;
`;

export const Error = ({message}) => (
    <Styles className="text-danger display-4">
        {message}
    </Styles>
);