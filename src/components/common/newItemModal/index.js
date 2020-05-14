import React,{useState} from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default (props) => {
  const { show, onCancel, onSubmit,error } = props;
  const [name,setName] = useState('');

  return (
    <Modal className="text-info" show={show} centered onHide={onCancel} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Component</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Group controlId="name">
            <Form.Label>Component name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Component Name"
              value={name}
              onChange={(e) =>setName(e.target.value)}
            />
          </Form.Group>
        </Form>
        {
          error?<div className="text-danger">
            {error}
          </div>:null
        }
      </Modal.Body>
      <Modal.Footer>
        <Button
          readOnly
          className="display-3"
          as="input"
          type="reset"
          value="Cancel"
          variant="outline-dark"
          onClick={onCancel}
        />

        <Button
          readOnly
          as="input"
          type="submit"
          variant="outline-primary"
          onClick={async () => {await onSubmit(name);}}
          value="Submit"
        />
      </Modal.Footer>
    </Modal>
  );
};
