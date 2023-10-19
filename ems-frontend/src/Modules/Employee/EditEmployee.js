import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export default function EditEmployee(props){

    const {
        editShow,
        handleEditClose,
        editFirstName,
        setEditFirstName,
        editLastName,
        setEditLastName,
        editGender,
        setEditGender,
        editDateOfBirth,
        setEditDateOfBirth,
        editSocialSecurityNumber,
        setEditSocialSecurityNumber,
        editInsuranceNumber,
        setEditInsuranceNumber,
        editAddress,
        setEditAddress,
        editCity,
        setEditCity,
        editZip,
        setEditZip,
        editPhoneNumber,
        setEditPhoneNumber,
        editIsActive,
        setEditIsActive,
        handleEditIsActive,
        handleEditSubmit
    } = props;

    return (
        <Modal show={editShow} onHide={handleEditClose} animation={true} size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Modify Employee Detials</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control placeholder="First Name" value={editFirstName} onChange={(e) => setEditFirstName(e.target.value)} />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control placeholder="Last Name" value={editLastName} onChange={(e) => setEditLastName(e.target.value)} />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridGender">
                <Form.Label>Gender</Form.Label>
                <Form.Select value={editGender} onChange={(e) => setEditGender(e.target.value)}>
                <option value="">Choose...</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Not Specify">Not Specify</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridDOB">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control type="date" value={editDateOfBirth} onChange={(e) => setEditDateOfBirth(e.target.value)} />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridSocialSecurityNumber">
                <Form.Label>Social Security Number</Form.Label>
                <Form.Control placeholder="Social Security Number" value={editSocialSecurityNumber} onChange={(e) => setEditSocialSecurityNumber(e.target.value)} />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridInsuranceNumber">
                <Form.Label>Insurance Number</Form.Label>
                <Form.Control placeholder="Insurance Number" value={editInsuranceNumber} onChange={(e) => setEditInsuranceNumber(e.target.value)} />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="1234 Main St" value={editAddress} onChange={(e) => setEditAddress(e.target.value)} />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control value={editCity} onChange={(e) => setEditCity(e.target.value)} />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control value={editZip} onChange={(e) => setEditZip(e.target.value)} />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPhoneNumber">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control value={editPhoneNumber} onChange={(e) => setEditPhoneNumber(e.target.value)} />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check type="checkbox" label="IsActive" value={editIsActive} checked={editIsActive} onChange={(e) => handleEditIsActive(e)} />
            </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleEditClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEditSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    );
}