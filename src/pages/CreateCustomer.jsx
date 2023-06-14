import axios from 'axios';
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { addcustomerdata } from "../url";

function CreateCustomer() {

const [Name, setName] = useState("")  ;
const [Address, setAddress] = useState("");  
const [Product, setProduct] = useState("") ; 
const [Village, setVillage] = useState("") ; 
const [District, setDistrict] = useState("") ; 
const [State, setState] = useState("") ; 

const navigate =useNavigate();


const Submit = () => {
    if (
      !Name ||
      !Address ||
      !Product||
      !Village ||
      !District||
      !State
    ) {
      alert("Enter all datas");
    } else {
      axios
        .post(addcustomerdata, {
          Name,
          Address,
          Product,
          Village,
          District,
          State,
        })
        .then((res) => {
          console.log(res);
          let error = res.data.isError;

          if (error) {
            console.log("Error");
            alert("customer Details already exists");
          } else {
            alert("customer Details Added");
            navigate("/books");
          }
        });
    }
  };
  return (
    <div>

<Form className="row create-form"> 

<Form.Group className="mb-3 col-lg-6">
 <Form.Label className="text-white">Name</Form.Label>
   <Form.Control
     type="text"
     placeholder="Name"
     onChange={(e) => {
       setName(e.target.value);
     }}
   />
</Form.Group>

<Form.Group className="mb-3 col-lg-6">
 <Form.Label className="text-white">Address</Form.Label>
   <Form.Control
     type="text"
     placeholder="Address"
     onChange={(e) => {
       setAddress(e.target.value);
     }}
   />
</Form.Group>

<Form.Group className="mb-3 col-lg-6">
   <Form.Label className="text-white">Product</Form.Label>
   <Form.Select
     type="select"
     onChange={(e) => {
       setProduct(e.target.value);
     }}
   >
     <option>Select Product</option>
     <option>War</option>
     <option>Love</option>
     <option>Self Motivation</option>
     <option>Biography</option>
   </Form.Select>
 </Form.Group>
 

 <Form.Group className="mb-3 col-lg-6">
 <Form.Label className="text-white">Village</Form.Label>
   <Form.Control
     type="text"
     placeholder="Village"
     onChange={(e) => {
       setVillage(e.target.value);
     }}
   />
</Form.Group>

<Form.Group className="mb-3 col-lg-6">
 <Form.Label className="text-white">District</Form.Label>
   <Form.Control
     type="text"
     placeholder="District"
     onChange={(e) => {
       setDistrict(e.target.value);
     }}
   />
</Form.Group>

<Form.Group className="mb-3 col-lg-6">
 <Form.Label className="text-white">State</Form.Label>
   <Form.Control
     type="text"
     placeholder="State"
     onChange={(e) => {
       setState(e.target.value);
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

export default CreateCustomer