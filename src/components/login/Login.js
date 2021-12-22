import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from 'react-router-dom';
import './login.scss';
const Login = () => {


    const [emailError, setEmailError] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const history = useHistory();
    const [passwordError, setPasswordError] = useState({});
    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
    }
    const [inputs, setInputs] = useState({
        email: '',
        password: '',
    })

    const { email, password } = inputs;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs(inputs => ({ ...inputs, [name]: value }));
    }

    const formValidation = () => {
        const emailError = {};
        const passwordError = {};

        let isValid = true;


        if (email === '') {
            emailError.emailError = "Email is Required";
            isValid = false;
        }
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
            emailError.emailNameError = "Invalid Email";
            isValid = false;
        }
        if (password === '') {
            passwordError.logoError = "Password is Required";
            isValid = false;
        }

        // if(messageInputData.)
        setEmailError(emailError)
        setPasswordError(passwordError)
        return isValid;
    }

    const forgot = () => {
        axios.post("https://api.safedingo.com/user/forgetpasswordlink", { email })
            .then((response) => {
                toast.success('Please check your email to reset your passwrd.', {
                    position: "top-center",
                    autoClose: 3000,
                });
                // setOpen(true)
                // const token = response.data.token
                // localStorage.setItem('mytoken', token)
                // history.push("admin/dashboard");

            }).catch((err) => {
                toast.error(err.response.data.msg, {
                    position: "top-center",
                    autoClose: 2000,
                });
            })
    }

    // const Signin =(e) =>{
    //     e.preventDefault();
    //     setSubmitted(true); 
    //     formValidation();
    //     if (email && password) {
    //         axios.post("https://api.safedingo.com/user/loginadmin", { email, password,otpToken:'aa',otpSecretKey:'ss'})
    //             .then((response) => {

    //                 // setOpen(true)
    //                 const token = response.data.token
    //                 toast.success("Login Succssfully", {
    //                     position: "top-center",
    //                     autoClose: 3000,
    //                 });
    //                 localStorage.setItem('mytoken', token)
    //                 history.push("admin/dashboard");

    //             }).catch((err)=>{
    //                 toast.error(err.response.data.msg, {
    //                     position: "top-center",
    //                     autoClose: 2000,
    //                 });
    //             })
    //     }
    // }
    const images = importAll(require.context('assets/img/', false, /\.(png|jpe?g|svg)$/));
    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
    }
    const imagess = importAll(require.context('assets/img/fudgeimages', false, /\.(png|jpe?g|svg)$/));
    return (
        <>
        <section className="main-login h-100 my-5 ptb">
            <div className="container h-100">
                <div className="row h-100">
                    <div className="col-sm-3"></div>
                    <div className="col-sm-6 h-100 d-flex flex-column justify-content-center">
                        <div className="inner-logo text-center">
                            <img src={`${images['logo.svg']['default']}`} alt="" className="img-fluid" />
                        </div>
                        <div className="cmn-tile-style mt-5">
                            <h2 className="common py-3">Login</h2>
                            <form>
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Username</label>
                                    <div className="upper-hh">
                                        <input type="email" type="email" name="email" value={email} onChange={handleChange} className={'form-control' + (submitted && !email ? ' is-invalid' : '')} placeholder="Enter Username" />
                                        <img src={`${imagess['Vector45.png']['default']}`} alt="" className="img-fluid upper-nn" />
                                    </div>
                                   
                                    {Object.keys(emailError).map((key) => {
                                        return <p className="inputErrors">{emailError[key]}</p>
                                    })}
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputPassword1">Password</label>
                                    <div className="upper-hh">
                                        <input type="password" name="password" value={password} onChange={handleChange} className={'form-control' + (submitted && !password ? ' is-invalid' : '')} placeholder="Enter Password" />
                                        <img src={`${imagess['Group.png']['default']}`} alt="" className="img-fluid upper-nnn" />
                                        <img src={`${imagess['Vector47.svg']['default']}`} alt="" className="img-fluid upper-nnnn" />
                                    </div>
                                    
                                    {Object.keys(passwordError).map((key) => {
                                        return <p className="inputErrors">{passwordError[key]}</p>
                                    })}
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" for="exampleCheck1">Remember me</label>
                                </div>
                                <Link to="admin/dashboard">
                                    <button type="submit" className="btn-common" to="admin/dashboard" >
                                        Login
                                        <img className='px-2' src={`${imagess['arrow.svg']['default']}`} alt="arrow" />
                                    </button>
                                    <ToastContainer style={{ fontSize: 20 }} />
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Login;
