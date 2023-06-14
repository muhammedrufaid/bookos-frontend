import axios from 'axios';
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import {addBookdata} from "../url"

function AddBooks() {
    const [bookname, setbookname] = useState("");
    const [author, setauthor] = useState("");
    const [publication, setpublication] = useState("");
    const [price, setprice] = useState("");
    const [category, setcategory] = useState("");

    const navigate = useNavigate();

    const Submit = () => {
        if (!bookname || !author || !publication || !category || !price) {
          alert("Enter all datas");
        } else {
          axios
            .post(addBookdata, {
              bookname,
              author,
              publication,
              category,
              price,
            })
            .then((res) => {
              console.log(res);
              let error = res.data.isError;
    
              if (error) {
                console.log("Error");
                alert("Book Details already exists");
              } else {
                alert("Book Details Added");
                navigate("/books");
              }
            });
        }
      };
  return (
    <div>
 <Form className="row create-form">
        <Form.Group className="mb-3 col-lg-6">
          <Form.Label className="text-white">Book Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Book Name"
            onChange={(e) => {
              setbookname(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3 col-lg-6">
          <Form.Label className="text-white">Publications</Form.Label>
          <Form.Control
            type="text"
            placeholder="Publications"
            onChange={(e) => {
              setpublication(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3 col-lg-6">
          <Form.Label className="text-white">Author</Form.Label>
          <Form.Control
            type="text"
            placeholder="Author"
            onChange={(e) => {
              setauthor(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3 col-lg-6">
          <Form.Label className="text-white">Category</Form.Label>
          <Form.Select
            type="select"
            onChange={(e) => {
              setcategory(e.target.value);
            }}
          >
            <option>Select Category</option>
            <option>War</option>
            <option>Love</option>
            <option>Self Motivation</option>
            <option>Biography</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3 col-lg-6">
          <Form.Label className="text-white">Price</Form.Label>
          <Form.Control
            type="number"
            placeholder="Price"
            onChange={(e) => {
              setprice(e.target.value);
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

export default AddBooks