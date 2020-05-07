import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components";

const StyledDiv = styled.div`
  overflow: auto;
`;

export const TwoColumnLayout = ({ left, right }) => (
  <Container fluid className="my-3 px-1">
    <Row>
      <Col
        className="d-none d-md-inline text-secondary font-weight-bold"
        md={3}
      >
        <StyledDiv>{left}</StyledDiv>
      </Col>
      <Col xs={12} md={9}>
        <StyledDiv>{right}</StyledDiv>
      </Col>
    </Row>
  </Container>
);
