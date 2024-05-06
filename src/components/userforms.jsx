import React, { useState } from "react";
import axios from "axios"; // Import Axios library

const UserForm = () => {
  // Initialize state variables for form data
  const [userData, setUserData] = useState({
    userFullName: "",
    email: "",
    password: "",
    role: "",
    mobileNumber: "",
    gender: "",
    address: "",
    dob: "",
  });

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
      const response = await axios.post(
        "https://ask-lib.onrender.com/api/auth/register",
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
    <div>
      <h2>User Form</h2>
      <form className="userForm" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-3">
            <div className="themeinput">
              <label>Full Name</label>
              <input
                type="text"
                name="userFullName"
                value={userData.userFullName}
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
                value={userData.email}
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
                value={userData.password}
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
                value={userData.role}
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
                value={userData.mobileNumber}
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
                value={userData.gender}
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
                value={userData.address}
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
                value={userData.dob}
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
  );
};

export default UserForm;
