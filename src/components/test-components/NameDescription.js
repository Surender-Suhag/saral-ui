import React,{useState,useEffect} from 'react';
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import PropTypes from 'prop-types';

const NameDescription = (props) => {
    const {compName,compDescription,onSubmit,showDescription }  = props
    const [name, setName] = useState(compName);
    const [description, setDescription] = useState(compDescription);

    useEffect(() => {
      setName(compName);
      setDescription(compDescription);
    }, [compName, compDescription ]);
    return (
      <Form>
        <Form.Row>
          {/*Component Name Element  */}
          <Col sm={10}>
            <Form.Group as={Row} controlId="componentName">
              <Form.Label column sm={2}>
                Name
              </Form.Label>
              <Col sm={10} xs={12}>
                <Form.Control
                  as="input"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Col>
            </Form.Group>

            {
              /*Component Descrtion Element  */
              showDescription ? (
                <Form.Group as={Row} controlId="componentDescription">
                  <Form.Label column sm={2}>
                    Description
                  </Form.Label>
                  <Col sm={10} xs={12}>
                    <Form.Control
                      as="textarea"
                      value={description || ''}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </Col>
                </Form.Group>
              ) : null
            }
          </Col>

          <Col style={{ alignSelf: "flex-end", marginLeft: "10px" }}>
            <Form.Group>
              <Button variant="primary" type="submit" onClick = {(e)=> { e.preventDefault();onSubmit() } }>
                Save
              </Button>
            </Form.Group>
          </Col>
        </Form.Row>
      </Form>
    );
}

NameDescription.propTypes = {
    compName:PropTypes.string.isRequired,
    compDescription:PropTypes.string,
    showDescription:PropTypes.bool.isRequired,
    onSubmit:PropTypes.func
}

NameDescription.defaultProp = {
    compDescription:'',
    showDescription:false
}
export default NameDescription;