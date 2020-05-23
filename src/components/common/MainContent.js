import React from 'react';
import Container from 'react-bootstrap/Container';


const Content = ({children}) => (
    <Container className='mt-5'>
        {children}
    </Container>
);

export default Content;
