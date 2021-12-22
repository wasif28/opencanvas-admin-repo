
import React from "react";
import './games.scss';
// reactstrap components
import { Link } from "react-router-dom";
function PlayToEarn() {

    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
    }

    const images = importAll(require.context('assets/img/userflow', false, /\.(png|jpe?g|svg)$/));
    return (
        <>
            <div className="content">
                <section className="play ptb20 card">
                    <div className="container-fluid">
                        <h3>Play to Earn</h3>
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
                                <tbody className="main-t-body-text" >
                                    <tr>
                                        <td className='main-image'>
                                            <Link className=''> <img src={`${images['viedo-1.png']['default']}`} className="pr-2 imgages-no" alt="" /></Link>
                                        </td>
                                        <td className=''>Little Nightmares II</td>

                                        <td className=''>20.6K</td>
                                        <td><img src={`${images['remove1.png']['default']}`} alt="" /></td>
                                        <td className="button-details">
                                            <Link className='btn-common padds' to='/admin/gamedetail'>Details</Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='main-image'>
                                            <Link className=''> <img src={`${images['viedo-1.png']['default']}`} className="pr-2 imgages-no" alt="" /></Link>
                                        </td>
                                        <td className=''>Little Nightmares II</td>

                                        <td className=''>20.6K</td>
                                        <td><img src={`${images['remove1.png']['default']}`} alt="" /></td>
                                        <td className="button-details">
                                            <Link className='btn-common padds' to='/admin/gamedetail'>Details</Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='main-image'>
                                            <Link className=''> <img src={`${images['viedo-1.png']['default']}`} className="pr-2 imgages-no" alt="" /></Link>
                                        </td>
                                        <td className=''>Little Nightmares II</td>

                                        <td className=''>20.6K</td>
                                        <td><img src={`${images['remove1.png']['default']}`} alt="" /></td>
                                        <td className="button-details">
                                            <Link className='btn-common padds' to='/admin/gamedetail'>Details</Link>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                <section className="play ptb20 card">
                    <div className="container-fluid">
                        <h3>Tokens Earned</h3>
                        <div class="table-responsive">
                            <table class="table ">
                                <thead>
                                    <tr>
                                        <th>Users Name</th>
                                        <th>Country</th>
                                        <th>Wallet Address</th>
                                        <th>Token Earned (LGX)</th>
                                        <th>Token Earned (USDT)</th>
                                    </tr>
                                </thead>
                                <tbody className="main-t-body-text" >
                                    <tr>
                                        <td className='main-image'>
                                            <Link className=''> <img src={`${images['gamess1.png']['default']}`} className="pr-2 imgages-no" alt="" /></Link>
                                            <span>Carolyn Wilson</span>
                                        </td>
                                        <td className='main-image'>
                                            <Link className=''> <img src={`${images['iran.png']['default']}`} className="pr-2 imgages-no" alt="" /></Link>
                                        </td>

                                        <td className=''>0x0712775C43...</td>
                                        <td className='main-image'>
                                            4960 LGX
                                        </td>
                                        <td className="">
                                            60 USDT
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                 
                </section>
            </div>
        </>
    );
}

export default PlayToEarn;
