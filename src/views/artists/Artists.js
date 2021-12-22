
import React from "react";
import './artists.scss';
// reactstrap components
import { Link } from "react-router-dom";
function Artists() {
    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
    }
    const images = importAll(require.context('assets/img/userflow', false, /\.(png|jpe?g|svg)$/));
    return (
        <>
            <div className="content">
                <section className="users card">
                    <div className="container-fluid">
                        <div class="table-responsive">
                            <table class="table ">
                                <thead>
                                    <tr>
                                        <th > Artist Name <img src={`${images['arrow-down.png']['default']}`} className="pl-1" alt="" /></th>
                                        <th > Wallet Address <img src={`${images['arrow-down.png']['default']}`} className="pl-1" alt="" /></th>
                                        <th > Items Created <img src={`${images['arrow-down.png']['default']}`} className="pl-1" alt="" /></th>
                                        <th > Total Earned<img src={`${images['arrow-down.png']['default']}`} className="pl-1" alt="" /></th>
                                        <th > Items Sold <img src={`${images['arrow-down.png']['default']}`} className="pl-1" alt="" /></th>
                                        <th > Follower <img src={`${images['arrow-down.png']['default']}`} className="pl-1" alt="" /></th>
                                        <th > Following <img src={`${images['arrow-down.png']['default']}`} className="pl-1" alt="" /></th>
                                        <th > Verified <img src={`${images['arrow-down.png']['default']}`} className="pl-1" alt="" /></th>
                                        <th > Block Artist <img src={`${images['arrow-down.png']['default']}`} className="pl-1" alt="" /></th>
                                    </tr>
                                </thead>
                                <tbody className="main-t-body-text" >
                                    <tr>
                                        <td className='main-image'>
                                            <Link to='/admin/artistdetail'>
                                                <ul className="d-flex justify-content-start align-items-center">
                                                    <li><img src={`${images['user2.png']['default']}`} className="pr-2 imgages-no" alt="" /></li>
                                                    <li className="black">Caroly</li>
                                                </ul>
                                            </Link>
                                        </td>
                                        <td>0xA8D407A76B1AFECCDFB....</td>
                                        <td className='grey'>54 items</td>
                                        <td className='grey'>$599</td>
                                        <td className='grey'>25 items</td>
                                        <td className='grey'>3.7K</td>
                                        <td className='grey'>1.5K</td>
                                        <td className='grey'>
                                            <div class="switch">

                                                <label class="switch">
                                                    <input type="checkbox" name="forSale" />
                                                    <span class="slider round"></span>
                                                </label>
                                            </div>
                                        </td>
                                        <td className="button-details">
                                            <Link className='btn-red padds'>Block/Del</Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='main-image'>
                                            <Link to='/admin/artistdetail'>
                                                <ul className="d-flex justify-content-start align-items-center">
                                                    <li><img src={`${images['user2.png']['default']}`} className="pr-2 imgages-no" alt="" /></li>
                                                    <li className="black">Caroly</li>
                                                </ul>
                                            </Link>
                                        </td>
                                        <td>0xA8D407A76B1AFECCDFB....</td>
                                        <td className='grey'>54 items</td>
                                        <td className='grey'>$599</td>
                                        <td className='grey'>25 items</td>
                                        <td className='grey'>3.7K</td>
                                        <td className='grey'>1.5K</td>
                                        <td className='grey'>
                                            <div class="switch">

                                                <label class="switch">
                                                    <input type="checkbox" name="forSale" />
                                                    <span class="slider round"></span>
                                                </label>
                                            </div>
                                        </td>
                                        <td className="button-details">
                                            <Link className='btn-red padds'>Block/Del</Link>
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

export default Artists;
