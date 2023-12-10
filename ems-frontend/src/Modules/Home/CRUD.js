import React, { useState, useEffect, Fragment } from "react";
import Table from "react-bootstrap/Table";
import 'bootstrap/dist/css/bootstrap.min.css';
import Icon from "react-crud-icons";
import "../../../node_modules/react-crud-icons/dist/css/react-crud-icons.css";
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import ViewEmployee from "../Employee/ViewEmployee";
import { formatDate } from "../../dateUtils";
import AddEmployee from "../Employee/AddEmployee";
import EditEmployee from "../Employee/EditEmployee";
import DeleteEmployee from "../Employee/DeleteEmployee";
import appSettings from "../../appSettings.json";
import api from "../../Api.js";

export default function CRUD() {
  const [data, setData] = useState([]);
  const [departmentsData, setDepartmentsData] = useState([]);

  useEffect(() => {
    getData();
    getDepartmentsData();
  }, []);

  const token = sessionStorage.getItem('token');


  const getData = () => {
    axios.get(`${appSettings.backendBaseUrl}Employee`, {headers: {"Authorization" : `Bearer ${token}`}})
      .then((result) => {
        setData(result.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const getDepartmentsData = () => {
    axios.get(`${appSettings.backendBaseUrl}Department`)
      .then((result) => {
        setDepartmentsData(result.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  //#region View Employee
  const [viewFirstName, setViewFirstName] = useState('');
  const [viewLastName, setViewLastName] = useState('');
  const [viewGender, setViewGender] = useState('');
  const [viewDateOfBirth, setViewDateOfBirth] = useState(new Date());
  const [viewAddress, setViewAddress] = useState('');
  const [viewSocialSecurityNumber, setViewSocialSecurityNumber] = useState('');
  const [viewInsuranceNumber, setViewInsuranceNumber] = useState('');
  const [viewCity, setViewCity] = useState('');
  const [viewZip, setViewZip] = useState('');
  const [viewPhoneNumber, setViewPhoneNumber] = useState('');
  const [viewDepartment, setViewDepartment] = useState('');
  const [viewIsActive, setViewIsActive] = useState(false);

  const [viewShow, setViewShow] = useState(false);
  const handleViewClose = () => setViewShow(false);
  const handleViewShow = () => setViewShow(true);

  const handleView = (id) => {
    const url = `${appSettings.backendBaseUrl}Employee/${id}`;
    axios.get(url)
      .then((result) => {

        setViewFirstName(result.data.firstName);
        setViewLastName(result.data.lastName);
        setViewGender(result.data.gender);
        setViewDateOfBirth(formatDate(result.data.dateOfBirth));
        setViewAddress(result.data.address);
        setViewSocialSecurityNumber(result.data.socialSecurityNumber);
        setViewInsuranceNumber(result.data.insuranceNumber);
        setViewCity(result.data.city);
        setViewZip(result.data.zip);
        setViewPhoneNumber(result.data.phoneNumber);
        setViewDepartment(result.data.department != null ? result.data.department.name : 'To be decided...');
        setViewIsActive(result.data.isActive);

        handleViewShow();
      })
      .catch((error) => {
        console.log(error);
      })
  }

  //#endregion

  //#region Add Employee
  const [addFirstName, setAddFirstName] = useState('');
  const [addLastName, setAddLastName] = useState('');
  const [addGender, setAddGender] = useState('');
  const [addDateOfBirth, setAddDateofBirth] = useState('');
  const [addAddress, setAddAddress] = useState('');
  const [addSocialSecurityNumber, setAddSocialSecurityNumber] = useState('');
  const [addInsuranceNumber, setAddInsuranceNumber] = useState('');
  //const [addAddressDetails, setAddAddressDetails] = useState('');
  const [addCity, setAddCity] = useState('');
  const [addZip, setAddZip] = useState('');
  const [addPhoneNumber, setAddPhoneNumber] = useState('');
  const [addDepartment, setAddAddDepartment] = useState('');
  const [addIsActive, setAddIsActive] = useState(false);




  const [addShow, setAddShow] = useState(false);
  const handleAddClose = () => setAddShow(false);
  const handleAddShow = () => setAddShow(true);
  const handleAddSubmit = () => {
    const url = `${appSettings.backendBaseUrl}Employee`
    const data = {
      "firstName": addFirstName,
      "lastName": addLastName,
      "gender": addGender,
      "dateOfBirth": addDateOfBirth,
      "socialSecurityNumber": addSocialSecurityNumber,
      "insuranceNumber": addInsuranceNumber,
      "address": addAddress,
      "city": addCity,
      "zip": addZip,
      "phoneNumber": addPhoneNumber,
      "DepartmentId": addDepartment,
      "isActive": addIsActive
    }

    axios.post(url, data)
      .then((result) => {
        handleAddClose();
        getData();
        toast.success('Employee added successfully.', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch((error) => {
        handleAddClose();
        toast.error('An error occurred.', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })


  }

  const handleAddIsActive = (e) => {
    setAddIsActive(e.target.checked);
  }

  //#endregion

  //#region Edit Employee
  const [editFirstName, setEditFirstName] = useState('');
  const [editLastName, setEditLastName] = useState('');
  const [editGender, setEditGender] = useState('');
  const [editDateOfBirth, setEditDateOfBirth] = useState('');
  const [editAddress, setEditAddress] = useState('');
  const [editSocialSecurityNumber, setEditSocialSecurityNumber] = useState('');
  const [editInsuranceNumber, setEditInsuranceNumber] = useState('');
  const [editCity, setEditCity] = useState('');
  const [editZip, setEditZip] = useState('');
  const [editPhoneNumber, setEditPhoneNumber] = useState('');
  const [editDepartment, setEditDepartment] = useState('');
  const [editIsActive, setEditIsActive] = useState(false);

  const [editShow, setEditShow] = useState(false);
  const [idForEdit, setIdForEdit] = useState('');
  const handleEditClose = () => setEditShow(false);
  const handleEditShow = () => setEditShow(true);
  const handleEditSubmit = () => {
    const url = `${appSettings.backendBaseUrl}Employee`
    const data = {
      "id": idForEdit,
      "firstName": editFirstName,
      "lastName": editLastName,
      "gender": editGender,
      "dateOfBirth": editDateOfBirth,
      "socialSecurityNumber": editSocialSecurityNumber,
      "insuranceNumber": editInsuranceNumber,
      "address": editAddress,
      "city": editCity,
      "zip": editZip,
      "phoneNumber": editPhoneNumber,
      "departmentId": editDepartment,
      "isActive": editIsActive
    }

    axios.put(url, data)
      .then((result) => {
        handleEditClose();
        getData();
        toast.success('Employee details updated successfully.', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch((error) => {
        handleEditClose();
        toast.error('An error occurred.', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
  }

  const handleEdit = (id) => {
    setIdForEdit(id);
    const url = `${appSettings.backendBaseUrl}Employee/${id}`
    axios.get(url)
      .then((result) => {
        setEditFirstName(result.data.firstName);
        setEditLastName(result.data.lastName);
        setEditGender(result.data.gender);
        setEditDateOfBirth(formatDate(result.data.dateOfBirth));
        setEditAddress(result.data.address);
        setEditSocialSecurityNumber(result.data.socialSecurityNumber);
        setEditInsuranceNumber(result.data.insuranceNumber);
        setEditCity(result.data.city);
        setEditZip(result.data.zip);
        setEditPhoneNumber(result.data.phoneNumber);
        setEditDepartment(result.data.department != null ? result.data.department.id : '');
        setEditIsActive(result.data.isActive);

        handleEditShow();
      })
      .catch((error) => {
        console.log(error);
      })
  }

  const handleEditIsActive = (e) => {
    setEditIsActive(e.target.checked);
  }


  //#endregion

  //#region Delete Employee
  const [deleteShow, setDeleteShow] = useState(false);
  const [idForDeletion, setIdForDeletion] = useState('');
  const handleDeleteClose = () => setDeleteShow(false);
  const handleDeleteShow = () => setDeleteShow(true);
  const handleDeleteSubmit = () => {
    console.log(idForDeletion);
    const url = `${appSettings.backendBaseUrl}Employee/${idForDeletion}`
    axios.delete(url)
      .then((result) => {
        if (result.status === 200) {
          handleDeleteClose();
          getData();
          toast.success('Employee deleted successfully.', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      })
      .catch((error) => {
        handleDeleteClose();
        toast.error('An error occurred.', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
  }

  const handleDelete = (id) => {
    setIdForDeletion(id);
    handleDeleteShow();
  }

  //#endregion



  return (
    <Fragment>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Icon
          name="add"
          tooltip="Add"
          theme="light"
          size="medium"
          onClick={() => handleAddShow()}
        />
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Date of Birth</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            data && data.length > 0 ? data.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{formatDate(item.dateOfBirth)}</td>
                <td>{item.isActive ? 'Active' : 'Inactive'}</td>
                <td colSpan={3}>
                  <Icon
                    name="browse"
                    tooltip="View"
                    theme="light"
                    size="small"
                    onClick={() => handleView(item.id)}
                  />
                  <Icon
                    name="edit"
                    tooltip="Edit"
                    theme="light"
                    size="small"
                    onClick={() => handleEdit(item.id)}
                  />
                  <Icon
                    name="delete"
                    tooltip="Delete"
                    theme="light"
                    size="small"
                    onClick={() => handleDelete(item.id)}
                  />
                </td>
              </tr>
            )) : (
              <tr>
                <td colSpan="5">Loading...</td>
              </tr>
            )
          }
        </tbody>
      </Table>

      <AddEmployee 
        addShow={addShow}
        handleAddClose = {handleAddClose}
        addFirstName = {addFirstName}
        setAddFirstName = {setAddFirstName}
        addLastName={addLastName}
        setAddLastName={setAddLastName}
        addGender={addGender}
        setAddGender={setAddGender}
        addDateOfBirth={addDateOfBirth}
        setAddDateofBirth={setAddDateofBirth}
        addSocialSecurityNumber={addSocialSecurityNumber}
        setAddSocialSecurityNumber={setAddSocialSecurityNumber}
        addInsuranceNumber={addInsuranceNumber}
        setAddInsuranceNumber={setAddInsuranceNumber}
        addAddress={addAddress}
        setAddAddress={setAddAddress}
        addCity={addCity}
        setAddCity={setAddCity}
        addZip={addZip}
        setAddZip={setAddZip}
        addPhoneNumber={addPhoneNumber}
        setAddPhoneNumber={setAddPhoneNumber}
        departmentsData = {departmentsData}
        setAddDepartment = {setAddAddDepartment}
        addIsActive={addIsActive}
        handleAddIsActive={handleAddIsActive}
        handleAddSubmit={handleAddSubmit}
      />

      <EditEmployee
        editShow={editShow}
        handleEditClose={handleEditClose}
        editFirstName={editFirstName}
        setEditFirstName={setEditFirstName}
        editLastName={editLastName}
        setEditLastName={setEditLastName}
        editGender={editGender}
        setEditGender={setEditGender}
        editDateOfBirth={editDateOfBirth}
        setEditDateOfBirth={setEditDateOfBirth}
        editSocialSecurityNumber={editSocialSecurityNumber}
        setEditSocialSecurityNumber={setEditSocialSecurityNumber}
        editInsuranceNumber={editInsuranceNumber}
        setEditInsuranceNumber={setEditInsuranceNumber}
        editAddress={editAddress}
        setEditAddress={setEditAddress}
        editCity={editCity}
        setEditCity={setEditCity}
        editZip={editZip}
        setEditZip={setEditZip}
        editPhoneNumber={editPhoneNumber}
        setEditPhoneNumber={setEditPhoneNumber}
        departmentsData = {departmentsData}
        editDepartment={editDepartment}
        setEditDepartment={setEditDepartment}
        editIsActive={editIsActive}
        setEditIsActive={setEditIsActive}
        handleEditIsActive={handleEditIsActive}
        handleEditSubmit={handleEditSubmit}
       />

      <ViewEmployee
        viewShow={viewShow}
        handleViewClose = {handleViewClose}
        viewFirstName = {viewFirstName}
        viewLastName = {viewLastName}
        viewGender = {viewGender}
        viewDateOfBirth = {viewDateOfBirth}
        viewAddress = {viewAddress}
        viewSocialSecurityNumber = {viewSocialSecurityNumber}
        viewInsuranceNumber = {viewInsuranceNumber}
        viewCity = {viewCity}
        viewZip = {viewZip}
        viewPhoneNumber = {viewPhoneNumber}
        viewDepartment = {viewDepartment}
        viewIsActive = {viewIsActive}
      />

      <DeleteEmployee
        deleteShow = {deleteShow}
        handleDeleteClose = {handleDeleteClose}
        handleDeleteSubmit = {handleDeleteSubmit}
       />
    </Fragment>
  );
}