
import React from "react";
import './artists.scss';
// reactstrap components
import user1 from "assets/img/userflow/user1.png";
import user2 from "assets/img/userflow/user2.png";
import arrowdown from "assets/img/userflow/arrow-down.png";
import user3 from "assets/img/userflow/arrow-down-green.png";
import user6 from "assets/img/userflow/id-card.png";
import user4 from "assets/img/userflow/user-detail.png";
import user5 from "assets/img/userflow/copy 1.png";
import { Link } from "react-router-dom";
function Artistsdetail() {
  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  const images = importAll(require.context('assets/img/fudgeimages', false, /\.(png|jpe?g|svg)$/));
  return (
    <>
      <div className="content">
        <section className="user-details">
          <div className="row">
            <div className="col-sm-12 p-0">
              <div className="upper-detail-page card">
                <div className="row">
                  <div className="col-lg-3">
                    <div className="detail-card">
                      <img src={user4} className="img-fluid" alt="" /><br></br>
                      {/* <p>Verifie user</p><br></br>
                      <button type="button" className="button-red">Block User</button> */}
                    </div>
                  </div>
                  <div className="col-lg-9">
                    <div className="row pt-4 pt-lg-0">
                      <div className="col-lg-6 col-md-6">
                        <div className="feildss">
                          <h3>Ramon Miller</h3>
                          <label>romonmiller123@gmail.com</label>
                        </div>
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <div className="feildss">
                              <p>3.7K <small className="grey">following</small></p>
                            </div>
                          </li>
                          <li className="list-inline-item">
                            <div className="feildss">
                              <p>3.7K <small className="grey">unfollowing</small></p>
                            </div>
                          </li>
                        </ul>
                      </div>

                      <div className="col-lg-2 col-md-6">
                        <div className="switch">
                          <label className="switch">
                            <input type="checkbox" name="forSale" /><span className="slider round"></span></label>
                        </div>


                      </div>
                    </div>

                  </div>
                </div>
                <hr />

                <div className="row">
                  <div className="col-sm-6">
                    <div className="inner-sides">
                      <h4 className="grey">Personal Detail</h4>

                      <ul className="list-inline ptb20">
                        <li className="list-inline-item">
                          <h6 className="grey">First Name</h6>
                          <h5 className="">Ramon</h5>
                        </li>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <li className="list-inline-item">
                          <h6 className="grey">Last Name</h6>
                          <h5 className="">Miller</h5>
                        </li>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <li className="list-inline-item">
                          <h6 className="grey">Display Name</h6>
                          <h5 className="">Ramon Miller</h5>
                        </li>
                      </ul>

                      <h6 className="grey">Bio</h6>
                      <p className="ptb20">Sunt alias consequatur earum consequatur autem voluptatem voluptas cum officia. Ab odio sunt quisquam sit quod dignissimos velit saepe. Nisi quasi hic.Sunt alias consequatur earumssad</p>

                      <h6 className="grey">Social</h6>
                      <ul className="list-inline ptb20">
                        <li className="list-inline-item">
                          <img src={`${images['facebook-icon.svg']['default']}`} alt="" />
                        </li>
                        <li className="list-inline-item">
                          <img src={`${images['telegram-icon.svg']['default']}`} alt="" />
                        </li>
                        <li className="list-inline-item">
                          <img src={`${images['twitter-icon.svg']['default']}`} alt="" />
                        </li>
                        <li className="list-inline-item">
                          <img src={`${images['youtube-icon.svg']['default']}`} alt="" />
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="inner-sides">
                      <h4 className="grey">Wallet Detail</h4>

                      <h6 className="grey ptb20">Wallet Address</h6>
                      <Link className="">
                        <ul className="list-inline ptb20">
                          <li className="list-inline-item">
                          <h6 className="grey">0x8339ACCD9A19917B613B68810E6E337BB8164C52</h6>
                          </li>
                          <li className="list-inline-item">
                          <img src={`${images['copy-icon.svg']['default']}`} alt="" />
                          </li>
                        </ul>
                        <ul className="list-inline ptb20">
                          <li className="list-inline-item">
                            <img src={`${images['qr-code.png']['default']}`} alt="" />
                          </li>
                        </ul>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
          {/* <div className="table-responsive">
                <table className="table ">
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

export default Artistsdetail;
