import React from 'react';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';


export const Layout = (props) => (
    <div className = "container-fluid mx-3 mt-3 d-flex min-vh-70 flex-column h-100">
   
        {props.children}
  
    </div>
)