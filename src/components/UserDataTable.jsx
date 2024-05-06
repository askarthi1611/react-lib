import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Modal, Button } from "react-bootstrap";
import $ from "jquery";
import "datatables.net";

const UserDataTable = () => {
  const [userData, setUserData] = useState([]);
  const [editData, seteditData] = useState([]);
  const tableRef = useRef(null);
  let dataTable = null;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://ask-lib.onrender.com/api/users/allmembers"
      );
      setUserData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (!dataTable && userData.length > 0) {
      dataTable = $(tableRef.current).DataTable({});
    }

    return () => {
      if (dataTable) {
        dataTable.destroy();
        dataTable = null;
      }
    };
  }, [userData]);

  const deleteRow = async (user) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await axios.post("https://ask-lib.onrender.com/api/users/deleteuser", {
          _id: user._id,
        });
        fetchData();
      } catch (error) {
        console.error("Error deleting user:", error);
      }
    }
  };

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Update the corresponding field in userData state
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };
    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await axios.put(
            "https://ask-lib.onrender.com/api/users/updateuser",
            userData,
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
    
          if (response.status !== 200) {
            throw new Error("Failed to submit form"); // Throw an error if response status is not 200
          }
    
          // Clear form data after successful submission
          setUserData({}); // Reset userData to clear all fields
    
          // Handle success, e.g., show a success message to the user
          console.log("Form submitted successfully");
        } catch (error) {
          console.error("Error submitting form:", error);
          // Handle error, e.g., show an error message to the user
          alert("Failed to submit form. Please try again later."); // Example: show an alert with error message
        }
      };
    
  return (
    <div className="tableWrapper">
      <table
        ref={tableRef}
        className="display table-striped"
        style={{ width: "100%" }}
      >
        <thead>
          <tr>
            <th>#</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Mobile Number</th>
            <th>Gender</th>
            <th>Address</th>
            <th>DOB</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.userFullName}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>{user.mobileNumber}</td>
              <td>{user.gender}</td>
              <td>{user.address}</td>
              <td>{user.dob}</td>
              <td>
                <button
                  className="btn btn-primary edit-btn"
                  onClick={() => {
                    handleShowModal();
                    seteditData(user);
                  }}
                >
                  Edit
                </button>

                <button
                  className="btn btn-warning delete-btn"
                  onClick={() => deleteRow(user)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div>
      <form className="userForm" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-3">
            <div className="themeinput">
              <label>Full Name</label>
              <input
                type="text"
                name="userFullName"
                value={editData.userFullName}
                className="form-control"
                onChange={handleInputChange}
                placeholder="Full Name"
              />
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-3">
            <div className="themeinput">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={editData.email}
                className="form-control"
                onChange={handleInputChange}
                placeholder="Email"
              />
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-3">
            <div className="themeinput">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={editData.password}
                className="form-control"
                onChange={handleInputChange}
                placeholder="Password"
              />
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-3">
            <div className="themeinput">
              <label>Role</label>
              <input
                type="text"
                name="role"
                value={editData.role}
                className="form-control"
                onChange={handleInputChange}
                placeholder="Role"
              />
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-3">
            <div className="themeinput">
              <label>Mobile Number</label>
              <input
                type="text"
                name="mobileNumber"
                value={editData.mobileNumber}
                className="form-control"
                onChange={handleInputChange}
                placeholder="Mobile Number"
              />
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-3">
            <div className="themeinput">
              <label>Gender</label>
              <input
                type="text"
                name="gender"
                value={editData.gender}
                className="form-control"
                onChange={handleInputChange}
                placeholder="Gender"
              />
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-3">
            <div className="themeinput">
              <label>Address</label>
              <input
                type="text"
                name="address"
                value={editData.address}
                className="form-control"
                onChange={handleInputChange}
                placeholder="Address"
              />
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-3">
            <div className="themeinput">
              <label>Date of Birth</label>
              <input
                type="text"
                name="dob"
                value={editData.dob}
                className="form-control"
                onChange={handleInputChange}
                placeholder="Date of Birth"
              />
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 mt-3">
            <button type="submit" className="btn btn-primary mt-3">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseModal}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UserDataTable;
