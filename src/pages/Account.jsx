import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import man from "../images/man.png";
import { displaybooksdata } from "../url";
import { contextwrap } from "../App";

function Account() {
  const [display, setdisplay] = useState([]);
  const { pass } = useContext(contextwrap);
  const [dash, setdash] = pass;
  console.log(dash);

  useEffect(() => {
    axios.get(displaybooksdata).then((res) => {
      setdisplay(res.data);
      // setdash(true);
      console.log(res.data);
      const id = res.data._id;
      console.log(id);
    });
    
  }, [],setdash(true));

  return (
    <div className="row gy-4">
      {display.map((lib) => {
        return (
          <div className="col-xl-2 col-lg-3 col-md-6 col-sm-12 col-12 align-items-center">
            <Card>
              <Card.Img variant="top" src={man} className="w-100 p-3" />
              <Card.Body>
                <Card.Title>{lib.bookname}</Card.Title>
                <Card.Text>Category: {lib.category}</Card.Text>
                <Card.Text>Author: {lib.author}</Card.Text>
                <Card.Text>Publication:{lib.publication}</Card.Text>
                <Card.Text>₹{lib.price}</Card.Text>
                {/* <Button className="bg-success">Add To Cart</Button> */}
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
  );
}

export default Account;
