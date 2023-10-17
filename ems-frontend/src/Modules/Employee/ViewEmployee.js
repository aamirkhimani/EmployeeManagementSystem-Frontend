import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export default function ViewEmployee(props){
   
    const {
        viewShow,
        handleViewClose,
        viewFirstName,
        viewLastName,
        viewGender,
        viewDateOfBirth,
        viewAddress,
        viewSocialSecurityNumber,
        viewInsuranceNumber,
        viewCity,
        viewZip,
        viewPhoneNumber,
        viewIsActive
    } = props;

  return (
    <Modal show={viewShow} onHide={handleViewClose} animation={true} size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">View Employee Detials</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control placeholder="First Name" value={viewFirstName} disabled={true} />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control placeholder="Last Name" value={viewLastName} disabled={true} />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridGender">
                <Form.Label>Gender</Form.Label>
                <Form.Select value={viewGender} disabled={true}>
                <option value="">Choose...</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Not Specify">Not Specify</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridDOB">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control type="date" value={viewDateOfBirth} disabled={true} />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridSocialSecurityNumber">
                <Form.Label>Social Security Number</Form.Label>
                <Form.Control placeholder="Social Security Number" value={viewSocialSecurityNumber} disabled={true}/>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridInsuranceNumber">
                <Form.Label>Insurance Number</Form.Label>
                <Form.Control placeholder="Insurance Number" value={viewInsuranceNumber} disabled={true} />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="1234 Main St" value={viewAddress} disabled={true} />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control value={viewCity} disabled={true} />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control value={viewZip} disabled={true} />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPhoneNumber">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control value={viewPhoneNumber} disabled={true} />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check type="checkbox" label="IsActive" value={viewIsActive} checked={viewIsActive} disabled={true}/>
            </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleViewClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
  );
}