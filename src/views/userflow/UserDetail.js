
import React from "react";
import './user.scss';
// reactstrap components
import user1 from "assets/img/userflow/user1.png";
import user2 from "assets/img/userflow/user2.png";
import arrowdown from "assets/img/userflow/arrow-down.png";
import user3 from "assets/img/userflow/arrow-down-green.png";
import user6 from "assets/img/userflow/id-card.png";
import user4 from "assets/img/userflow/user-detail.png";
import user5 from "assets/img/userflow/copy 1.png";
import { Link } from "react-router-dom";

function UserDetail() {
  return (
    <>
      <div className="content">
        <section className="user-details">
          <div className="row">
            <div className="col-sm-12">
              <div className="upper-detail-page card">
                <div className="row">
                  <div className="col-lg-3">
                    <div className="detail-card">
                      <img src={user4} className="img-fluid" alt="" /><br></br>
                      <p>Verifie user</p><br></br>
                      <button type="button" className="button-red">Block User</button>
                    </div>
                  </div>
                  <div className="col-lg-9">
                    <div className="row pt-4 pt-lg-0">
                      <div className="col-lg-4 col-md-6">
                        <div className="feildss">
                          <label>User Name</label>
                          <p>Eric_Brown123</p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="feildss">
                          <label>Full Name</label>
                          <p>Eric Brown</p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="feildss">
                          <label>Wallet Address</label>
                          <p>0x340962BA...<span><img src={user5} className="img-fluid" alt="" /></span></p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="feildss">
                          <label>Email Address</label>
                          <p>eric.brown@gmail.com</p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="feildss">
                          <label>Email Address</label>
                          <p>+1 234-496-2170</p>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-3">
                        <div className="imsge-d">
                          <Link data-toggle="modal" data-target="#exampleModal3" data-whatever="@mdo"><img src={user6} alt="" /></Link>
                          <div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered">
                              <div class="modal-content modal-main">
                                <div class="modal-body">
                                  <img src={user6} alt="" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="imsge-d">
                          <Link data-toggle="modal" data-target="#exampleModal2" data-whatever="@mdo"><img src={user6} alt="" /></Link>
                          <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered">
                              <div class="modal-content modal-main">
                                <div class="modal-body">
                                  <img src={user6} alt="" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="imsge-d">
                          <Link data-toggle="modal" data-target="#exampleModal1" data-whatever="@mdo"><img src={user6} alt="" /></Link>
                          <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered">
                              <div class="modal-content modal-main">
                                <div class="modal-body">
                                  <img src={user6} alt="" />
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
            <div className="col-lg-5 col-md-12 col-12">
              <div className="lower-upper-detail card">
                <h4>Invitees List</h4>
                <div class="table-responsive">
                  <table class="table ">
                    <thead>
                      <tr>
                        <th> Name <img src={arrowdown} className="pl-1" alt="" /></th>
                        <th> Wallet Address <img src={arrowdown} className="pl-1" alt="" /></th>
                        <th> Total LGX <img src={arrowdown} className="pl-1" alt="" /></th>
                      </tr>
                    </thead>
                    <tbody className="main-t-body-text" >
                      <tr>
                        <td className='main-image'>
                          <ul className="d-flex justify-content-start align-items-center">
                            <li><img src={user2} className="pr-2 imgages-no" alt="" /></li>
                            <li>Caroly</li>
                          </ul>
                        </td>
                        <td className=''>0x0712...</td>
                        <td className=''>43930 LGX</td>
                      </tr>
                      <tr>
                        <td className='main-image'>
                          <ul className="d-flex justify-content-start align-items-center">
                            <li><img src={user1} className="pr-2 imgages-no" alt="" /></li>
                            <li>Caroly</li>
                          </ul>
                        </td>
                        <td className=''>0x0712...</td>
                        <td className=''>43930 LGX</td>
                      </tr>
                      
                    </tbody>
                  </table>
                </div>

              </div>
            </div>
            <div className="col-lg-7 col-md-12 col-12">
              <div className="lower-upper-detail card">
                <h4>Transections</h4>
                <div class="table-responsive">
                  <table class="table ">
                    <thead>
                      <tr>
                        <th> Transaction <img src={arrowdown} className="pl-1" alt="" /></th>
                        <th> To <img src={arrowdown} className="pl-1" alt="" /></th>
                        <th> From <img src={arrowdown} className="pl-1" alt="" /></th>
                        <th> Date <img src={arrowdown} className="pl-1" alt="" /></th>
                        <th> Amount <img src={arrowdown} className="pl-1" alt="" /></th>
                      </tr>
                    </thead>
                    <tbody className="main-t-body-text" >
                      <tr>
                        <td className='main-image'>
                          <img src={user3} alt="" />
                        </td>
                        <td className=''>Aug 25, 2021</td>
                        <td className=''>0x0712...</td>
                        <td className=''>27</td>
                        <td className=''>49935 LGX</td>
                      </tr>
                      <tr>
                        <td className='main-image'>
                          <img src={user3} alt="" />

                        </td>
                        <td className=''>Aug 25, 2021</td>
                        <td className=''>0x0712...</td>
                        <td className=''>27</td>
                        <td className=''>49935 LGX</td>
                      </tr>
                      
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* <div class="table-responsive">
                <table class="table ">
                  <thead>
                    <tr>
                      <th> Users Name <img src={arrowdown} className="pl-1" alt="" /></th>
                      <th> Joining Date <img src={arrowdown} className="pl-1" alt="" /></th>
                      <th> Wallet Address <img src={arrowdown} className="pl-1" alt="" /></th>
                      <th> Invitees <img src={arrowdown} className="pl-1" alt="" /></th>
                      <th> Total LGX <img src={arrowdown} className="pl-1" alt="" /></th>
                      <th> Verification <img src={arrowdown} className="pl-1" alt="" /></th>
                      <th> Details <img src={arrowdown} className="pl-1" alt="" /></th>
                    </tr>
                  </thead>
                  <tbody className="main-t-body-text" >
                    <tr>
                      <td className='main-image'>
                        <ul className="d-flex justify-content-start align-items-center">
                          <li><img src={user1} className="pr-2" alt="" /></li>
                          <li>Carolynsdsdsdsd</li>
                        </ul>
                      </td>
                      <td className=''>Aug 25, 2021</td>
                      <td className=''>0x0712...</td>
                      <td className=''>27</td>
                      <td className=''>49935 LGX</td>
                      <td className='complete'>Complete</td>
                      <td className="button-details">
                        <Link className='btn-common padds' to='#'>Details</Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
             */}
        </section>
      
      </div>
    </>

  );
}

export default UserDetail;
