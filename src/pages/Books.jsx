import axios from "axios";
import React, { useEffect, useState } from "react";
import { displaybooksdata } from "../url";
import { Button, Form, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

function Books() {
  const [booksD, setbooksD] = useState([]);
  const [show, setShow] = useState(false);
  const [reply, setreply] = useState(false);
  const [idconf, setidconf] = useState("");

  useEffect(() => {
    axios.get(displaybooksdata).then((res) => setbooksD(res.data));
  });

  // const Delete = (_id) => {
  //   console.log(_id);
  //   alert("Press OK to delete this data");
  //   axios
  //     .delete(`http://localhost:4000/project/deletebook/${_id}`)
  //     .then((res) => alert("Book data deleted"));
  //   window.location.reload(false);
  // };

// delete start

const Delete = (_id) => {
  console.log(_id);
  setidconf(_id);
  setShow(true);
};
// const Delete = (_id) => {
  //   console.log(_id);
  //   setidconf(_id, () => {
    //     setShow(true);
    //   });
// };
const confirm = () => {
  axios
  .delete(`http://localhost:4000/project/deletebook/${idconf}`)
  .then((res) => setreply(true));
  setShow(false);
  setTimeout(() => {
    window.location.reload(false);
  }, 4000);
};
// delete end

// search start
  const [filteredData, setFilteredData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [head, sethead] = useState(false);

  const handleSearchInput = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSearch = () => {
    const newFilteredData = booksD.filter(
      (item) =>
        item.bookname &&
        item.bookname.toLowerCase().includes(searchInput.toLowerCase())
    );
    sethead(true);
    setFilteredData(newFilteredData);
    // setTimeout(() => {
    //   window.location.reload(false);
    // }, 6000);
  };

  // search end
  return (
    <div>
      <div className="scrollable books">
        <div>
          <div className="col-md-6 col-12">
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                value={searchInput}
                onChange={handleSearchInput}
                required
              />
              <Button
                variant="outline-success"
                className="btn"
                onClick={handleSearch}
              >
                Search
              </Button>
            </Form>
            {head ? (
              <Button
                variant="outline-info"
                className="btn mt-3"
                onClick={() => sethead(false)}
              >
                Show All
              </Button>
            ) : (
              <></>
            )}
          </div>

          {head ? (
            <div className="mt-4">
              <h2>Search Results</h2>

              <table className="table">
                <thead>
                  <tr>
                    <th>Book Name</th>
                    <th>Category</th>
                    <th>Author</th>
                    <th>Publication</th>
                    <th>Price</th>
                    <th>view</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>

                {filteredData.map((bs) => {
                  return (
                    <>
                      <tbody>
                        <tr key={bs._id}>
                          <td> {bs.bookname}</td>
                          <td> {bs.category}</td>
                          <td> {bs.author}</td>
                          <td> {bs.publication}</td>
                          <td> {bs.price}</td>

                          <td>
                            <Link to={`/view/${bs._id}`}>
                              <Button className="btn btn-success">
                                {/* <AiFillEye /> */}view
                              </Button>
                            </Link>
                          </td>

                          <td>
                            <Link to={`/edit/${bs._id}`}>
                              <Button className="btn btn-info">Edit</Button>
                            </Link>
                          </td>
                          <td>
                            <Button
                              className="btn-danger"
                              onClick={() => Delete(bs._id)}
                            >
                              Delete
                            </Button>
                          </td>
                        </tr>
                      </tbody>
                    </>
                  );
                })}
              </table>
            </div>
          ) : (
            <></>
          )}
        </div>
        <section className="align-items-center row">
          {head ? (
            <></>
          ) : (
            <div className="col-lg-12 col-md-12 col-sm-12">
              <h2 className="mt-5">Books List</h2>
              <table className="table">
                <thead>
                  <tr>
                    <th>Book Name</th>
                    <th>Category</th>
                    <th>Author</th>
                    <th>Publication</th>
                    <th>Price</th>
                    <th>view</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>

                {booksD.map((bs) => {
                  return (
                    <>
                      <tbody>
                        <tr key={bs._id}>
                          <td> {bs.bookname}</td>
                          <td> {bs.category}</td>
                          <td> {bs.author}</td>
                          <td> {bs.publication}</td>
                          <td> {bs.price}</td>

                          <td>
                            <Link to={`/view/${bs._id}`}>
                              <Button className="btn btn-success">
                                {/* <AiFillEye /> */}view
                              </Button>
                            </Link>
                          </td>

                          <td>
                            <Link to={`/edit/${bs._id}`}>
                              <Button className="btn btn-info">Edit</Button>
                            </Link>
                          </td>
                          <td>
                            <Button
                              className="btn-danger"
                              onClick={() => Delete(bs._id)}
                            >
                              Delete
                            </Button>
                          </td>
                        </tr>
                      </tbody>
                    </>
                  );
                })}
              </table>
            </div>
          )}

          {/* <div className="col-lg-6 col-md-12 col-sm-12 text-center">
          <img src={books} alt="about" className="w-75" />
        </div> */}
        
        </section>
      </div>
      <Modal show={show} centered>
            <Modal.Body>
              <h5 className="text-dark">
                Are you certain you want to delete this book?, Press "Yes" to
                continue.
              </h5>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={() => {
                  setShow(false);
                }}
              >
                No
              </Button>
              <Button variant="primary" onClick={confirm}>
                Yes
              </Button>
            </Modal.Footer>
          </Modal>
          <Modal show={reply} centered>
            <Modal.Body className="bg-success text-white ">
              <h6>Book successfully removed</h6>
            </Modal.Body>
          </Modal>
    </div>
  );
}

export default Books;
