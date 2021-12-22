
import React from "react";
import './games.scss';
// reactstrap components
import { Link } from "react-router-dom";
import user3 from "assets/img/userflow/modal1.png";
function Dailychallegne() {

    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
    }

    const images = importAll(require.context('assets/img/userflow', false, /\.(png|jpe?g|svg)$/));
    return (
        <>
            <div className="content">
                <section className="daily card">
                    <div className="container-fluid">
                        <div class="table-responsive">
                            <table class="table ">
                                <thead>
                                    <tr>
                                        <th>Game</th>
                                        <th>Tile</th>
                                        <th>Total Plays</th>
                                        <th>Remove</th>
                                        <th>Details</th>
                                    </tr>
                                </thead>
                                <tbody className="main-t-body-text">
                                    <tr>
                                        <td className='main-image'>
                                            <Link className=''> <img src={`${images['viedo-1.png']['default']}`} className="pr-2 imgages-no" alt="" /></Link>
                                        </td>
                                        <td className=''>Little Nightmares II</td>
                                        <td className=''>20.6K</td>
                                        <td> <img src={`${images['remove1.png']['default']}`} alt="" /></td>
                                        <td className="button-details">
                                            <Link className='btn-common padds' to='/admin/gamedetail'>Details</Link>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                <section className="daily ptb20 card">
                    <div className="container-fluid">
                        <h3>Daily Leaderboard</h3>
                        <div class="table-responsive">
                            <table class="table ">
                                <thead>
                                    <tr>
                                        <th>Users Name</th>
                                        <th>Country</th>
                                        <th>Wallet Address</th>
                                        <th>Position</th>
                                        <th>Points</th>
                                    </tr>
                                </thead>
                                <tbody className="main-t-body-text" >
                                    <tr>
                                        <td className='main-image'>
                                            <Link className='' data-toggle="modal" data-target="#exampleModal"> <img src={`${images['gamess1.png']['default']}`} className="pr-2 imgages-no" alt="" /></Link>
                                            <span>Carolyn Wilson</span>
                                        </td>

                                        <td className='main-image'>
                                            <Link className=''> <img src={`${images['iran.png']['default']}`} className="pr-2 imgages-no" alt="" /></Link>
                                        </td>

                                        <td className=''>0x0712775C43...</td>
                                        <td className='main-image'>
                                            <Link className=''> <img src={`${images['batch1.png']['default']}`} className="pr-2 imgages-no" alt="" /></Link>
                                        </td>
                                        <td className="">
                                            49602
                                        </td>
                                    </tr>

                                    {/* Modal Daily Leader board Profiles */}

                                </tbody>
                            </table>
                        </div>
                        <div className="main-modal-one">
                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog daily-profile-modal">
                                    <div class="modal-content daily-profile-modal-inner">
                                        <div class="modal-body modal-body-main">
                                            <div className="main-outter">
                                                <div className="imgs">
                                                    <img src={user3} alt="" />
                                                </div>
                                                <div className="row main-cardssss">
                                                    <div className="col-md-6 col-6">
                                                        <div className="flux-b">
                                                            <p>Full Name</p>
                                                            <h4>Jose Thompson</h4>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-6">
                                                        <div className="flux-b">
                                                            <p className="flux-r">Bank</p>
                                                            <h4 className="flux-r">Reliance Bank</h4>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-6 ">
                                                        <div className="flux-b">
                                                            <p>Account Number</p>
                                                            <h4 >011 401 5336</h4>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-6">
                                                        <div className="flux-b">
                                                            <p className="flux-r">Country</p>
                                                            <h4 className="flux-r">United State</h4>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 col-12">
                                                        <div className="button-modal-daily">
                                                            <button type="button" className="button-main-daily" data-dismiss="modal" aria-label="Close" >Close</button>
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
                </section>
            </div>
        </>
    );
}

export default Dailychallegne;
