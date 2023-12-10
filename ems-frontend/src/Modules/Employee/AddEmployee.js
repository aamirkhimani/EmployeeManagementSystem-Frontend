import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export default function AddEmployee(props){

    const {
        addShow,
        handleAddClose,
        addFirstName,
        setAddFirstName,
        addLastName,
        setAddLastName,
        addGender,
        setAddGender,
        addDateOfBirth,
        setAddDateofBirth,
        addSocialSecurityNumber,
        setAddSocialSecurityNumber,
        addInsuranceNumber,
        setAddInsuranceNumber,
        addAddress,
        setAddAddress,
        addCity,
        setAddCity,
        addZip,
        setAddZip,
        addPhoneNumber,
        setAddPhoneNumber,
        departmentsData,
        setAddDepartment,
        addIsActive,
        handleAddIsActive,
        handleAddSubmit
    } = props;

    return (
        <Modal show={addShow} onHide={handleAddClose} animation={true} size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Add Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control placeholder="First Name" value={addFirstName} onChange={(e) => setAddFirstName(e.target.value)} />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control placeholder="Last Name" value={addLastName} onChange={(e) => setAddLastName(e.target.value)} />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridGender">
                <Form.Label>Gender</Form.Label>
                <Form.Select value={addGender} onChange={(e) => setAddGender(e.target.value)}>
                  <option value="">Choose...</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Not Specify">Not Specify</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridDOB">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control type="date" value={addDateOfBirth} onChange={(e) => setAddDateofBirth(e.target.value)} />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridSocialSecurityNumber">
                <Form.Label>Social Security Number</Form.Label>
                <Form.Control placeholder="Social Security Number" value={addSocialSecurityNumber} onChange={(e) => setAddSocialSecurityNumber(e.target.value)} />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridInsuranceNumber">
                <Form.Label>Insurance Number</Form.Label>
                <Form.Control placeholder="Insurance Number" value={addInsuranceNumber} onChange={(e) => setAddInsuranceNumber(e.target.value)} />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="1234 Main St" value={addAddress} onChange={(e) => setAddAddress(e.target.value)} />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control value={addCity} onChange={(e) => setAddCity(e.target.value)} />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control value={addZip} onChange={(e) => setAddZip(e.target.value)} />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridPhoneNumber">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control value={addPhoneNumber} onChange={(e) => setAddPhoneNumber(e.target.value)} />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridDepartment">
                <Form.Label>Department</Form.Label>
                <Form.Select onChange={(e) => setAddDepartment(e.target.value)}>
                  <option value="">To be decided...</option>
                  {
                  departmentsData && departmentsData.length > 0 ? departmentsData.map((item) => (
                    <React.Fragment key={item.id}>
                    <option value={item.id}>{item.name}</option>
                    </React.Fragment>
                  )) : (
                    <tr>
                      <td colSpan="5">Loading...</td>
                    </tr>
                  )
                }
                </Form.Select>
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check type="checkbox" label="IsActive" value={addIsActive} checked={addIsActive} onChange={(e) => handleAddIsActive(e)} />
            </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleAddSubmit}>
            Create
          </Button>
        </Modal.Footer>
      </Modal>
    );
}