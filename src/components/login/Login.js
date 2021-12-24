import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router-dom";
import Environment from "../../utils/environment";
import "./login.scss";
const Login = () => {
  const [emailError, setEmailError] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [showPass, setShowPass] = useState("password");
  const api_url = Environment.base_url;
  const history = useHistory();
  const [passwordError, setPasswordError] = useState({});
  const [error, setError] = useState(null);
  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputs;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  const images = importAll(
    require.context("assets/img/", false, /\.(png|jpe?g|svg)$/)
  );
  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }
  const imagess = importAll(
    require.context("assets/img/fudgeimages", false, /\.(png|jpe?g|svg)$/)
  );
  const imagess2 = importAll(
    require.context("assets/img", false, /\.(png|jpe?g|svg)$/)
  );

  const [loader, setLoader] = useState(false);
  const userLogin = (e) => {
    e.preventDefault();
    if (inputs.email !== "" && inputs.password !== "") {
      setLoader(true);
      setError(null);
      var data = JSON.stringify({
        email,
        password,
      });

      var config = {
        method: "post",
        url: `${api_url}/admin/login`,
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          console.log("response", response.data);
          localStorage.setItem("openCanvasToken", response.data.token);
          history.push("/admin/dashboard");
          setLoader(false);
        })
        .catch(function (error) {
          setLoader(false);
          setError("Incorrect email or password");
        });
    }
  };

  return (
    <>
      <section className="main-login h-100 my-5 ptb">
        <div className="container h-100">
          <div className="row h-100">
            <div className="col-sm-3"></div>
            <div className="col-sm-6 h-100 d-flex flex-column justify-content-center">
              <div className="inner-logo text-center">
                <img
                  src={`${images["logo.svg"]["default"]}`}
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div className="cmn-tile-style mt-5">
                <h2 className="common py-3">Login</h2>
                <form onSubmit={(e) => userLogin(e)}>
                  <div className="form-group">
                    <label for="exampleInputEmail1">Username</label>
                    <div className="upper-hh">
                      <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        className={
                          "form-control" +
                          (submitted && !email ? " is-invalid" : "")
                        }
                        placeholder="Enter Username"
                      />
                      <img
                        width={20}
                        src={`${imagess["Vector45.png"]["default"]}`}
                        alt=""
                        className="img-fluid upper-nn"
                      />
                    </div>

                    {Object.keys(emailError).map((key) => {
                      return <p className="inputErrors">{emailError[key]}</p>;
                    })}
                  </div>
                  <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <div className="upper-hh">
                      <input
                        type={showPass}
                        name="password"
                        value={password}
                        onChange={handleChange}
                        className={
                          "form-control" +
                          (submitted && !password ? " is-invalid" : "")
                        }
                        placeholder="Enter Password"
                      />
                      <img
                        width={"26px"}
                        src={`${imagess["Group.png"]["default"]}`}
                        alt=""
                        className="img-fluid upper-nnn"
                      />
                      <img
                        onClick={() => {
                          showPass === "password"
                            ? setShowPass("text")
                            : setShowPass("password");
                        }}
                        src={`${imagess["Vector47.svg"]["default"]}`}
                        alt=""
                        className="img-fluid upper-nnnn cursor-pointer"
                      />
                    </div>

                    <p className="inputErrors text-center pt-5">{error}</p>
                  </div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                    <label className="form-check-label" for="exampleCheck1">
                      Remember me
                    </label>
                  </div>
                  <button type="submit" className="btn-common">
                    {loader ? (
                      <img
                        width="25px"
                        src={`${imagess2["loader.svg"]["default"]}`}
                        alt=""
                      />
                    ) : (
                      <>
                        Login{" "}
                        <img
                          className="px-2"
                          src={`${imagess["arrow.svg"]["default"]}`}
                          alt="arrow"
                        />
                      </>
                    )}
                  </button>
                  <ToastContainer style={{ fontSize: 20 }} />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
