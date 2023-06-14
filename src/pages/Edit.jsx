import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

function Edit() {
    const { id } =useParams();

    const [bookname, setbookname] = useState("");
    const [author, setauthor] = useState("");
    const [publication, setpublication] = useState("");
    const [price, setprice] = useState("");
    const [category, setcategory] = useState("");
    const [description, setdescription] = useState("");
    const [display, setdisplay] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        axios
          .get(`http://localhost:4000/project/displaybooksparams/${id}`)
          .then((res) => setdisplay(res.data));
        console.log(display);
      }, [id, display]);
    
      const Submit = () => {
        if (
          !bookname ||
          !author ||
          !publication ||
          !category ||
          !price   ||
          !description
        ) {
          alert("Enter all datas");
        } else {
          axios
            .put(`http://localhost:4000/project/updatebook/${id}`, {
              bookname,
              author,
              publication,
              category,
              price,
              description,
            })
            .then((res) => {});
          alert("Book Details Updated");
        }
        navigate("/books");
      };

  return (
    <div>
<Form className="row create-form">
      <Form.Group className="mb-3 col-lg-6">
        <Form.Label className="text-white">Book Name</Form.Label>
        <Form.Control
          type="text"
          placeholder={display.bookname}
          onChange={(e) => {
            setbookname(e.target.value);
          }}
        />
      </Form.Group>
      <Form.Group className="mb-3 col-lg-6">
        <Form.Label className="text-white">Author</Form.Label>
        <Form.Control
          type="text"
          placeholder={display.author}
          onChange={(e) => {
            setauthor(e.target.value);
          }}
        />
      </Form.Group>
      <Form.Group className="mb-3 col-lg-6">
        <Form.Label className="text-white">Publication</Form.Label>
        <Form.Control
          type="text"
          placeholder={display.publication}
          onChange={(e) => {
            setpublication(e.target.value);
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
          <option>{display.category}</option>
          <option>War</option>
          <option>Love</option>
          <option>Self Motivation</option>
          <option>Biography</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3 col-lg-6">
          <Form.Label className="text-white">Description</Form.Label>
          <Form.Control
            as="textarea" rows={3}
            placeholder={display.description}
            onChange={(e) => {
              setdescription(e.target.value);
            }}
          />
        </Form.Group>
      <Form.Group className="mb-3 col-lg-6">
        <Form.Label className="text-white">Price</Form.Label>
        <Form.Control
          type="number"
          placeholder={display.price}
          onChange={(e) => {
            setprice(e.target.value);
          }}
        />
      </Form.Group>

      <Form.Group className="mt-4">
        <Button className="form-btn" onClick={Submit}>
          Update
        </Button>
      </Form.Group>
    </Form>
    </div>
  )
}

export default Edit