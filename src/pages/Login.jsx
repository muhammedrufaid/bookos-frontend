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
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { logindata } from "../url";
import login from "../images/login.png";
import Account from "./Account";
import { contextwrap } from "../App";

function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  const { pass } = useContext(contextwrap);
  const [dash, setdash] = pass;
  console.log(dash);


  const submit = () => {
    axios.post(logindata, { email, password }).then((res) => {
      if (email || password) {
        localStorage.setItem("user", JSON.stringify(res.data));
        console.log(res.data);
        const error = res.data.isError;
        if (error) {
          alert("Login Failed");
          console.log("Login Failed");
          localStorage.removeItem("user");
          navigate("/login");
        } else {
          alert("Login Success");
          navigate("/account");
          console.log("Login Success");
        }
      } else {
        alert("Login Failed");
        console.log("Login Failed");
      }
    });
  };

  useEffect(() => {
    const exist = JSON.parse(localStorage.getItem("user"));
    if (exist) {
      navigate("/account");
      setdash(true);
    }
    // else{
    //   setdash(false);
    // }
  });

  return (
    <div className="scrollable login">
      <section className="align-items-center row">
        <div className="col-lg-6 col-md-12 col-sm-12">
          {/* <h2 className="sec-head">Login Here</h2> */}
          <MDBContainer fluid>
            <MDBRow className="d-flex justify-content-center align-items-center h-100">
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
                      Login
                    </h2>
                    <p className="text-black-50 mb-5">
                      Please enter your login and password!
                    </p>

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
                    {/* <MDBInput className='mb-4' type='password' id='form1Example2' label='Password'  onChange={(e)=>{
              setpassword(e.target.value)
            }} placeholder='password'/> */}

                    <p className="small mb-3 pb-lg-2">
                      <a class="text-white-50" href="#!">
                        Forgot password?
                      </a>
                    </p>
                    {/* <MDBBtn onClick={Submit} outline className='mx-2 px-5' color='white' size='lg'>
          Login
        </MDBBtn> */}
                    <MDBBtn
                      style={{ backgroundColor: "cadetblue" }}
                      onClick={submit}
                      type="submit"
                      block
                    >
                      Submit
                    </MDBBtn>

                    <div className="d-flex flex-row mt-3 mb-5">
                      <MDBBtn
                        href="https://www.facebook.com/"
                        tag="a"
                        color="none"
                        className="m-3"
                        style={{ color: "#000000" }}
                      >
                        <MDBIcon fab icon="facebook-f" size="lg" />
                      </MDBBtn>

                      <MDBBtn
                        href="https://twitter.com/"
                        tag="a"
                        color="none"
                        className="m-3"
                        style={{ color: "#000000" }}
                      >
                        <MDBIcon fab icon="twitter" size="lg" />
                      </MDBBtn>

                      <MDBBtn
                        href="https://www.google.com/"
                        tag="a"
                        color="none"
                        className="m-3"
                        style={{ color: "#000000" }}
                      >
                        <MDBIcon fab icon="google" size="lg" />
                      </MDBBtn>
                    </div>

                    <div>
                      <p className="mb-0">
                        Don't have an account?{" "}
                        <a href="/signup" class="text-black-50 fw-bold">
                          Sign Up
                        </a>
                      </p>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>

        <div className="col-lg-6 col-md-12 col-sm-12 text-center">
          <img src={login} alt="about" className="w-100" />
        </div>
        <div className="d-none">
          <Account />
        </div>
      </section>
    </div>
  );
}

export default Login;