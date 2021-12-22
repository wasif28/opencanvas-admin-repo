
import React from "react";
import './useredit.scss';
// reactstrap components
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
function AddUser() {
    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
    }
    const images = importAll(require.context('assets/img/userflow', false, /\.(png|jpe?g|svg)$/));
    return (
        <>
            <div className="content">
                <section className="leaderdetails  edit-page-profile">
                    <div className="row">
                        <div className="col-sm-12 p-0">
                            <div className="upper-detail-page users-profiles card">
                                <div className="row">
                                    <div className="col-xl-3 col-lg-12">
                                        <div className="detail-card">
                                            <h3>User Image</h3>
                                            <img src={`${images['user-detail.png']['default']}`} alt="" />
                                            <h3>USER NAME</h3>
                                            <p className="grey">User Role</p>
                                            <button type="button" className="btn-common">upload</button>
                                        </div>
                                    </div>
                                    <div className="col-xl-8 col-lg-12 edit-cards">
                                        <div className="upper-edit">
                                            <h5>Add User Info</h5>
                                            <hr className="main-line"></hr>
                                        </div>
                                        <ValidatorForm className="form-contact"
                                                            //  onSubmit={handleSubmit}
                                                            // onError={errors => console.log(errors)}
                                                            >
                                        <div className="row pt-4 pt-lg-0">
                                       
                                            <div className="col-lg-6 col-md-6">
                                                <div className="form-group">
                                                    <label for="example">Username</label>
                                                    <input type="text" class="form-control" id="example" aria-describedby="text" placeholder="Enter your username" />
                                                   
                                                </div>
                                                {/* <div class="form-group">
                                                                        <label For="name">Username</label>
                                                                        <TextValidator
                                                                            fullWidth
                                                                            type="text"
                                                                            name="itemname"
                                                                            autoComplet="off"
                                                                            // value={allFormData.formData.itemname}
                                                                            // onChange={handleChange}
                                                                            variant="outlined"
                                                                            placeholder="Enter your username"
                                                                            // className="input-fields"
                                                                            // validators={['required']}
                                                                            // errorMessages={['Item Name is required']}
                                                                        />
                                                                    </div> */}
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="form-group">
                                                    <label for="example">Full name</label>
                                                    <input type="text" className="form-control" id="example" aria-describedby="text" placeholder="Enter your full name" />
                                                    {/* {Object.keys(projectNameError).map((key)=>{
                                                          console.log("key",key);
                                                         return <p className="inputErrors">{projectNameError[key]}</p>
                                                          })} */}
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="form-group">
                                                    <label for="example">Email Adress</label>
                                                    <input type="text" className="form-control" id="example" aria-describedby="text" placeholder="Enter your email address" />
                                                    {/* {Object.keys(projectNameError).map((key)=>{
                                                          console.log("key",key);
                                                         return <p className="inputErrors">{projectNameError[key]}</p>
                                                          })} */}
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="form-group">
                                                    <label for="example">Phone No.</label>
                                                    <input type="text" className="form-control" id="example" aria-describedby="text" placeholder="Enter your phone no" />
                                                    {/* {Object.keys(projectNameError).map((key)=>{
                                                          console.log("key",key);
                                                         return <p className="inputErrors">{projectNameError[key]}</p>
                                                          })} */}
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="form-group">
                                                    <label for="example">Contact</label>
                                                    <input type="text" className="form-control" id="example" aria-describedby="text" placeholder="Enter your contact number" />
                                                    {/* {Object.keys(projectNameError).map((key)=>{
                                                          console.log("key",key);
                                                         return <p className="inputErrors">{projectNameError[key]}</p>
                                                          })} */}
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="form-group">
                                                    <label for="example">Password</label>
                                                    <input type="text" className="form-control" id="example" aria-describedby="text" placeholder="*********" />
                                                    {/* {Object.keys(projectNameError).map((key)=>{
                                                          console.log("key",key);
                                                         return <p className="inputErrors">{projectNameError[key]}</p>
                                                          })} */}
                                                </div>
                                            </div>
                                            
                                        </div>
                                        </ValidatorForm>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <h3 className="ptb20">Artists</h3>
                                                <ul className="list-inline">
                                                    <li className="list-inline-item">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                                            <label className="form-check-label" for="defaultCheck1">
                                                                Home
                                                            </label>
                                                        </div>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                                            <label className="form-check-label" for="defaultCheck1">
                                                                Artists
                                                            </label>
                                                        </div>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                                            <label className="form-check-label" for="defaultCheck1">
                                                                NFTS
                                                            </label>
                                                        </div>
                                                    </li>
                                                </ul>

                                                <ul className="list-inline">
                                                    <li className="list-inline-item">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                                            <label className="form-check-label" for="defaultCheck1">
                                                                Activity
                                                            </label>
                                                        </div>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                                            <label className="form-check-label" for="defaultCheck1">
                                                                Edit Web
                                                            </label>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="add-user-drop">
                                                    <h3 className="ptb20">Role</h3>
                                                    <div className="dropdown">
                                                        <a className="btn dropdown-toggle style" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        Choose user role
                                                        </a>

                                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                            <a className="dropdown-item" href="#">Action</a>
                                                            <a className="dropdown-item" href="#">Another action</a>
                                                            <a className="dropdown-item" href="#">Something else here</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">

                                                <ul className="list-inline">
                                                    <li className="list-inline-item">
                                                        <button className="btn-common">Add User</button>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <div className="form-group">
                                                            <button className="btn-common">Cancel</button>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default AddUser;
