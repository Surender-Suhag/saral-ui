import React from 'react';
import Jumbo from 'react-bootstrap/Jumbotron';
import styled from 'styled-components';
import headerimage from '../../../assets/header.jpg';
import Container from 'react-bootstrap/Container';

const Styles = styled.div`
    .jumbotron {
        background: url(${headerimage}) no-repeat fixed bottom;
        background-size:cover;
        height:200px;
        color:#355;
        position: relative;
        z-index:-2;
    }

    .overlay {
        background-color: #000
        opacity:1;
        position: absolute;
        top:0;
        bottom:0;
        right:0;
        left:0;
        z-index:-1;
    }
`;

export const Jumbotron = () => (
    <Styles >
        <Jumbo fluid className="jumbo">
            <div className="overlay" ></div>
            <Container>
                <h1>Saral</h1>
                <p>Simple selenium based automation framework</p>
            </Container>
        </Jumbo>
    </Styles>
)
