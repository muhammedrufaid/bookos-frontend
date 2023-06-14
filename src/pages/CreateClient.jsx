import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { addclientdata } from "../url";
import { contextwrap } from "../App";



function CreateClient() {
  const [name, setname] = useState("");
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [role, setrole] = useState("");
  const [status, setstatus] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  const { pass } = useContext(contextwrap);
  const [dash, setdash] = pass;
  console.log(dash);


  const Submit = () => {
    if (!name || !email || !password) {
      alert("Enter all datas");
    } else {
      axios
        .post(addclientdata, {
          name,
          username,
          role,
          status,
          email,
          phone,
          password,
        })
        .then((res) => {
          let error = res.data.isError;
          if (error) {
            console.log("Error");
            alert("Already Registered User");
          } else {
            localStorage.setItem("user", JSON.stringify(res.data));
            console.log(res.data);
            setdash(true);
            alert("user added")
            navigate("/client")
            // const user = localStorage.getItem("user");
            // navigate( user ? "/create-client" : "/client");
            // navigate("/CreateClient")
          }
        });
    }
  };
  return (
    <div>
 <Form className="row create-form">
      <div className="col-12">
        {/* <img src={logo} alt="logo" className="w-25 mb-3" /> */}
        <h1>Add Client</h1>
      </div>
      <Form.Group className="mb-3 col-lg-6" controlId="formBasicText">
        <Form.Label className="text-white">Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your name"
          onChange={(e) => {
            setname(e.target.value);
          }}
        />
      </Form.Group>
      <Form.Group className="mb-3 col-lg-6" controlId="formBasicText">
        <Form.Label className="text-white">Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your username"
          onChange={(e) => {
            setusername(e.target.value);
          }}
        />
      </Form.Group>
      <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
        <Form.Label className="text-white">Role</Form.Label>
        <Form.Select
          type="select"
          onChange={(e) => {
            setrole(e.target.value);
          }}
        >
          <option>Select role</option>
          <option>Admin</option>
          <option>Super Admin</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
        <Form.Label className="text-white">Signin status</Form.Label>
        <br />
        <Form.Check
          inline
          type="radio"
          name="status"
          label="Signed in"
          placeholder="Enter your email"
          value={"Signed in"}
          onChange={(e) => {
            setstatus(e.target.value);
          }}
        />
        <Form.Check
          inline
          type="radio"
          label="Not signed in"
          name="status"
          value={"not Signed in"}
          placeholder="Enter your email"
          onChange={(e) => {
            setstatus(e.target.value);
          }}
        />
      </Form.Group>
      <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
        <Form.Label className="text-white">Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter your email"
          onChange={(e) => {
            setemail(e.target.value);
          }}
        />
      </Form.Group>
      <Form.Group className="mb-3 col-lg-6" controlId="formBasicNumber">
        <Form.Label className="text-white">Phone Number</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter your phone number"
          onChange={(e) => {
            setphone(e.target.value);
          }}
        />
      </Form.Group>
      <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
        <Form.Label className="text-white">Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setpassword(e.target.value);
          }}
        />
      </Form.Group>
      <Form.Group className="mt-4">
        <Button className="form-btn" onClick={Submit}>
          Submit
        </Button>
      </Form.Group>
    </Form>
    </div>
  )
}

export default CreateClient;