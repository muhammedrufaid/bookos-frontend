import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import { signupdata } from "../url";
import signup from "../images/signup.png";
import { contextwrap } from "../App";

function Signup() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  // const [Find, setFind] = useState([]);
  const navigate = useNavigate();
  const { pass } = useContext(contextwrap);

  const [dash, setdash] = pass;
  console.log(dash);


  const submit = () => {
    axios.post(signupdata, { name, email, password }).then((res) => {
      if (name && email && password) {
        localStorage.setItem("user", JSON.stringify(res.data));

        // navigate("/account");
        const error = res.data.isError;
        if (error) {
          alert("user already exist");
          localStorage.removeItem("user");
          navigate("/signup");
        } else {
          navigate("/account");
        }
      } else {
        alert("Register Failed");
      }
    });
  };
  useEffect(() => {
    const exist = JSON.parse(localStorage.getItem("user"));
    if (exist) {
      navigate("/account");
    }else{
      setdash(false);
    }
  });

  return (
    <div className="scrollable signup  ">
      <section className="align-items-center row   ">
        <div className="col-lg-6 col-md-12 col-sm-12 ">
          {/* <h2 className="sec-head">SignUp Here</h2> */}
          <MDBContainer fluid>
            <MDBRow className="d-flex justify-content-center align-items-center h-100 ">
              <MDBCol col="12">
                <MDBCard
                  className="bg-light text-black my-5 mx-auto border border-secondary"
                  style={{ borderRadius: "1rem", maxWidth: "400px" }}
                >
                  <MDBCardBody className="p-4 d-flex flex-column align-items-center mx-auto w-90">
                    <h2
                      className="fw-bold mb-2 text-uppercase"
                      style={{ color: "cadetblue" }}
                    >
                      Signup
                    </h2>
                    <p className="text-black-50 mb-5">Please enter your form</p>

                    <MDBInput
                      wrapperClass="mb-4 mx-5 w-100"
                      labelClass="text-black"
                      label="Full name"
                      id="formControlLg"
                      type="fullname"
                      size="lg"
                      style={{ color: "black" }}
                      onChange={(e) => {
                        setname(e.target.value);
                      }}
                    />
                    <MDBInput
                      wrapperClass="mb-4 mx-5 w-100"
                      labelClass="text-black"
                      label="Email address"
                      id="formControlLg"
                      type="email"
                      size="lg"
                      style={{ color: "black" }}
                      onChange={(e) => {
                        setemail(e.target.value);
                      }}
                    />
                    <MDBInput
                      wrapperClass="mb-4 mx-5 w-100"
                      labelClass="text-black"
                      label="Password"
                      id="formControlLg"
                      type="password"
                      size="lg"
                      style={{ color: "black" }}
                      onChange={(e) => {
                        setpassword(e.target.value);
                      }}
                    />

                    <p className="small mb-3 pb-lg-2">
                      <a class="text-black-50" href="#!">
                        Forgot password?
                      </a>
                    </p>
                    {/* <MDBBtn onClick={Submit} outline className='mx-2 px-5' color='white' size='lg'>
         Signup
        </MDBBtn> */}
                    <MDBBtn
                      style={{ backgroundColor: "cadetblue" }}
                      onClick={submit}
                      type="submit"
                      className="mb-4"
                      block
                    >
                      submit
                    </MDBBtn>

                    <div>
                      {" "}
                      <p className="mb-0">
                        Already have an account?{" "}
                        <a href="/login" class="text-black-50 fw-bold">
                          login
                        </a>
                      </p>
                    </div>

                    <div className="d-flex flex-row mt-3 mb-5">
                      <MDBBtn
                        href="https://www.facebook.com/"
                        tag="a"
                        color="none"
                        className="m-3"
                        style={{ color: "black" }}
                      >
                        <MDBIcon fab icon="facebook-f" size="lg" />
                      </MDBBtn>

                      <MDBBtn
                        href="https://twitter.com/"
                        tag="a"
                        color="none"
                        className="m-3"
                        style={{ color: "black" }}
                      >
                        <MDBIcon fab icon="twitter" size="lg" />
                      </MDBBtn>

                      <MDBBtn
                        href="https://www.google.com/"
                        tag="a"
                        color="none"
                        className="m-3"
                        style={{ color: "black" }}
                      >
                        <MDBIcon fab icon="google" size="lg" />
                      </MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>

        <div className="col-lg-6 col-md-12 col-sm-12 text-center">
          <img src={signup} alt="about" className="w-100" />
        </div>
      </section>
    </div>
  );
}

export default Signup;
