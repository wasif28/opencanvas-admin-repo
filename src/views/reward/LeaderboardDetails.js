
import React from "react";
import './reward.scss';
// reactstrap components
import { Link } from "react-router-dom";
import user5 from "assets/img/userflow/copy 1.png";
import user7 from "assets/img/userflow/caresousal-leader.png";
import user8 from "assets/img/userflow/next.png";
import user9 from "assets/img/userflow/prev.png";

function LeaderBoardDetails() {
    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
    }
    const images = importAll(require.context('assets/img/userflow', false, /\.(png|jpe?g|svg)$/));
    return (
        <>
            <div className="content">
                <section className="leaderdetails">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="upper-detail-page card">
                                    <div className="row">
                                        <div className="col-lg-3">
                                            <div className="detail-card">
                                                <img src={`${images['user-detail.png']['default']}`} alt="" />
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
                                                        <p>0x340962BA...<Link><span><img src={user5} className="img-fluid" alt="" /></span></Link></p>
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
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="main-div-drop">
                                <div class="dropdown main-drop-down">
                                    <button class=" dropdown-toggless" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        This Week <img src={`${images['detaildownarrow.png']['default']}`} alt="" />
                                    </button>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <Link class="dropdown-item" >12</Link>
                                        <Link class="dropdown-item" >12</Link>
                                        <Link class="dropdown-item" >100</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-12">
                                <div className="lower-upper-detail card">
                                    <div class="table-responsive">
                                        <table class="table ">
                                            <thead>
                                                <tr>
                                                    <th>Reward Image</th>
                                                    <th> Details</th>
                                                    <th> Status</th>
                                                    <th>Sunitted Proof</th>
                                                    <th> Verifie</th>
                                                </tr>
                                            </thead>
                                            <tbody className="main-t-body-text" >
                                                <tr>
                                                    <td className='main-image'>
                                                        <img src={`${images['instagram.png']['default']}`} alt="" />
                                                    </td>
                                                    <td className='text-style-c'>Instagram Story<br></br><span>Share Our Post About Synergy</span></td>
                                                    <td className='complete'>Complete</td>
                                                    <td className=''>
                                                        <Link><img src={`${images['eye.png']['default']}`} data-toggle="modal" data-target="#exampleModal" alt="" /></Link>
                                                    </td>
                                                    <td className='toggler-main'>
                                                        <div class="custom-control custom-switch">
                                                            <input type="checkbox" class="custom-control-input" id="customSwitches" />
                                                            <label class="custom-control-label" for="customSwitches"></label>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="main-modal-one">
                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog daily-profile-modal">
                                <div class="modal-content daily-profile-modal-inner">
                                    <div class="modal-body modal-body-main">
                                        <div className="main-outter-caresoual">
                                            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                                                <ol class="carousel-indicators">
                                                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                                </ol>
                                                <div class="carousel-inner">
                                                    <div class="carousel-item active">
                                                        <img src={user7} class="d-block w-100" alt="" />
                                                        {/* <img class="d-block w-100" src="..." alt="First slide" /> */}
                                                    </div>
                                                    <div class="carousel-item">
                                                        <img src={user7} class="d-block w-100" alt="" />
                                                        {/* <img class="d-block w-100" src="..." alt="First slide" /> */}
                                                    </div>
                                                    <div class="carousel-item">
                                                        <img src={user7} class="d-block w-100" alt="" />
                                                        {/* <img class="d-block w-100" src="..." alt="First slide" /> */}
                                                    </div>
                                                </div>
                                                <a class="carousel-control-prev button-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                                    <span class="prev-icon" aria-hidden="true"> <img src={user9} class="d-block w-100" alt="" /></span>
                                                    <span class="sr-only">Previous</span>
                                                </a>
                                                <a class="carousel-control-next button-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                                    <span class="next-icon" aria-hidden="true"> <img src={user8} class="d-block w-100" alt="" />    </span>
                                                    <span class="sr-only">Next</span>
                                                </a>
                                            </div>
                                            <div class="custom-control custom-switch d-flex justify-content-center align-items-center">
                                                <ul className="d-flex">
                                                    <li><p className="pd-right">Verifie</p></li>
                                                    <li>
                                                    <input type="checkbox" class="custom-control-input" id="customSwitchess" />
                                                <label class="custom-control-label" for="customSwitchess"></label>
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

export default LeaderBoardDetails;
