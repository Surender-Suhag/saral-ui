import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const TwoColumnLayout = ({ left, right }) => (
  <Container fluid className="my-3">
    <Row>
      <Col className="d-none d-md-inline" md={3}>
        {left}
      </Col>
      <Col xs={12} md={9}>
        {right}
      </Col>
    </Row>
  </Container>
);
