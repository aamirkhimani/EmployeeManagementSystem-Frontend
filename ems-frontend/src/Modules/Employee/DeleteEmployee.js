import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export default function DeleteEmployee(props){

    const {
        deleteShow,
        handleDeleteClose,
        handleDeleteSubmit
    } = props;

    return(
    <Modal show={deleteShow} onHide={handleDeleteClose} animation={true} size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Do you really want to delete this user?</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleDeleteSubmit}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    );
}