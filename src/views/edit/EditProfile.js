
import React from "react";
import './edit.scss';
// reactstrap components

function EditProfiles() {
    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
    }
    const images = importAll(require.context('assets/img/userflow', false, /\.(png|jpe?g|svg)$/));
    return (
        <>
            <div className="content">
                <section className="leaderdetails edit-page-profile">
                    {/* <div className="container-fluid"> */}
                    <div className="row">
                        <div className="col-sm-12 p-0">
                            <div className="upper-detail-page card">
                                <div className="row">
                                    <div className="col-xl-3 col-lg-12">
                                        <div className="detail-card">
                                            <h3>User Image</h3>
                                            <img src={`${images['user-detail.png']['default']}`} alt="" />
                                            <h3>Easin Arafat</h3>
                                            <p>Super Admin</p>
                                            <ul className="list-inline">
                                                <li className="list-inline-item">
                                                    <button type="button" className="btn-common" data-toggle="modal" data-target="#exampleModal" >Change</button>
                                                </li>
                                                <li className="list-inline-item">
                                                    <button type="button" className="btn-common">Remove</button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-xl-8 col-lg-12 edit-cards">
                                        <div className="upper-edit">
                                            <h5>Edit Profile</h5>
                                            <hr className="main-line"></hr>
                                        </div>
                                        <div className="row pt-4 pt-lg-0">
                                            <div className="col-lg-6 col-md-6">
                                                <div class="form-group">
                                                    <label for="example">First Name</label>
                                                    <input type="text" class="form-control" id="example" aria-describedby="text" placeholder="Enter your username" />
                                                    {/* {Object.keys(projectNameError).map((key)=>{
                                                          console.log("key",key);
                                                         return <p className="inputErrors">{projectNameError[key]}</p>
                                                          })} */}
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div class="form-group">
                                                    <label for="example">Last Name</label>
                                                    <input type="text" class="form-control" id="example" aria-describedby="text" placeholder="Enter your full name" />
                                                    {/* {Object.keys(projectNameError).map((key)=>{
                                                          console.log("key",key);
                                                         return <p className="inputErrors">{projectNameError[key]}</p>
                                                          })} */}
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div class="form-group">
                                                    <label for="example">Username</label>
                                                    <input type="text" class="form-control" id="example" aria-describedby="text" placeholder="Enter your email address" />
                                                    {/* {Object.keys(projectNameError).map((key)=>{
                                                          console.log("key",key);
                                                         return <p className="inputErrors">{projectNameError[key]}</p>
                                                          })} */}
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div class="form-group">
                                                    <label for="example">Email Address</label>
                                                    <input type="text" class="form-control" id="example" aria-describedby="text" placeholder="Enter your phone no" />
                                                    {/* {Object.keys(projectNameError).map((key)=>{
                                                          console.log("key",key);
                                                         return <p className="inputErrors">{projectNameError[key]}</p>
                                                          })} */}
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div class="form-group">
                                                    <label for="example">Contact</label>
                                                    <input type="text" class="form-control" id="example" aria-describedby="text" placeholder="Enter your contact number" />
                                                    {/* {Object.keys(projectNameError).map((key)=>{
                                                          console.log("key",key);
                                                         return <p className="inputErrors">{projectNameError[key]}</p>
                                                          })} */}
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div class="form-group">
                                                    <label for="example">Password</label>
                                                    <input type="text" class="form-control" id="example" aria-describedby="text" placeholder="*********" />
                                                    {/* {Object.keys(projectNameError).map((key)=>{
                                                          console.log("key",key);
                                                         return <p className="inputErrors">{projectNameError[key]}</p>
                                                          })} */}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                        <div className="col-sm-12">

                                            <ul className="list-inline">
                                                <li className="list-inline-item">
                                                    <button className="btn-common">Update Profile</button>
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
                                <div className="main-modal-one">
                                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog daily-profile-modal">
                                            <div class="modal-content daily-profile-modal-inner">
                                                <div class="modal-body modal-body-main">
                                                    <div className="main-outter">
                                                        <div className="row main-cardssss">
                                                            <div className="col-md-12 col-12">
                                                                <div className="flux-b">
                                                                    <h3>Change Password</h3>
                                                                </div>
                                                            </div>
                                                            <div className="col-12">
                                                                <div class="form-group">
                                                                    <label for="example">Old Password</label>
                                                                    <input type="text" class="form-control" id="example" aria-describedby="text" placeholder="Enter Your old password" />
                                                                    {/* {Object.keys(projectNameError).map((key)=>{
                                                          console.log("key",key);
                                                         return <p className="inputErrors">{projectNameError[key]}</p>
                                                          })} */}
                                                                </div>
                                                            </div>
                                                            <div className="col-12">
                                                                <div class="form-group">
                                                                    <label for="example">New Password</label>
                                                                    <input type="text" class="form-control" id="example" aria-describedby="text" placeholder="Enter Your new password" />
                                                                    {/* {Object.keys(projectNameError).map((key)=>{
                                                          console.log("key",key);
                                                         return <p className="inputErrors">{projectNameError[key]}</p>
                                                          })} */}
                                                                </div>
                                                            </div>
                                                            <div className="col-12">
                                                                <div class="form-group">
                                                                    <label for="example">Conform Password</label>
                                                                    <input type="text" class="form-control" id="example" aria-describedby="text" placeholder="Enter Your new password" />
                                                                    {/* {Object.keys(projectNameError).map((key)=>{
                                                          console.log("key",key);
                                                         return <p className="inputErrors">{projectNameError[key]}</p>
                                                          })} */}
                                                                </div>
                                                            </div>
                                                            <div className="col-md-12 col-12">
                                                                <div className="button-modal-daily">
                                                                    <button type="button" className="button-main-daily"  >Save</button>
                                                                    <button type="button" className="button-main-dailys" data-dismiss="modal" aria-label="Close" >Cancel</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* </div> */}
                </section>
            </div>
        </>
    );
}

export default EditProfiles;
