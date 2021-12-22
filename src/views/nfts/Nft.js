
import React from "react";
import './nft.scss';
// reactstrap components
import { Link } from "react-router-dom";
function Nft() {
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
                                        <th > Item <img src={`${images['arrow-down.png']['default']}`} className="pl-1" alt="" /></th>
                                        <th > Price <img src={`${images['arrow-down.png']['default']}`} className="pl-1" alt="" /></th>
                                        <th > Creater <img src={`${images['arrow-down.png']['default']}`} className="pl-1" alt="" /></th>
                                        <th > Owner <img src={`${images['arrow-down.png']['default']}`} className="pl-1" alt="" /></th>
                                        <th > Likes <img src={`${images['arrow-down.png']['default']}`} className="pl-1" alt="" /></th>
                                        <th > Block <img src={`${images['arrow-down.png']['default']}`} className="pl-1" alt="" /></th>
                                    </tr>
                                </thead>
                                <tbody className="main-t-body-text" >
                                    <tr>
                                        <td className='main-image'>
                                            <Link to='/admin/nftsdetail'>
                                                <ul className="d-flex justify-content-start align-items-center">
                                                    <li><img src={`${images['user2.png']['default']}`} className="pr-2 imgages-no" alt="" /></li>
                                                    <li className="black">Caroly</li>
                                                </ul>
                                            </Link>
                                        </td>
                                        <td className='grey'>3.70 BNB</td>
                                        <td className='grey'>
                                        <Link to='/admin/nftsdetail'>
                                                <ul className="d-flex justify-content-start align-items-center">
                                                    <li><img src={`${images['user2.png']['default']}`} className="pr-2 imgages-no" alt="" /></li>
                                                    <li className="black">Ramon Miller</li>
                                                </ul>
                                            </Link>
                                        </td>
                                        <td className='grey'>
                                        <Link to='/admin/nftsdetail'>
                                                <ul className="d-flex justify-content-start align-items-center">
                                                    <li><img src={`${images['user2.png']['default']}`} className="pr-2 imgages-no" alt="" /></li>
                                                    <li className="black">Melba Powers</li>
                                                </ul>
                                            </Link>
                                        </td>
                                        <td className='grey'>1.5K</td>
                                        <td className='grey'>
                                            <div class="switch">

                                                <label class="switch">
                                                    <input type="checkbox" name="forSale" />
                                                    <span class="slider round"></span>
                                                </label>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className='main-image'>
                                            <Link to='/admin/nftsdetail'>
                                                <ul className="d-flex justify-content-start align-items-center">
                                                    <li><img src={`${images['user2.png']['default']}`} className="pr-2 imgages-no" alt="" /></li>
                                                    <li className="black">Caroly</li>
                                                </ul>
                                            </Link>
                                        </td>
                                        <td className='grey'>3.70 BNB</td>
                                        <td className='grey'>
                                        <Link to='/admin/nftsdetail'>
                                                <ul className="d-flex justify-content-start align-items-center">
                                                    <li><img src={`${images['user2.png']['default']}`} className="pr-2 imgages-no" alt="" /></li>
                                                    <li className="black">Ramon Miller</li>
                                                </ul>
                                            </Link>
                                        </td>
                                        <td className='grey'>
                                        <Link to='/admin/nftsdetail'>
                                                <ul className="d-flex justify-content-start align-items-center">
                                                    <li><img src={`${images['user2.png']['default']}`} className="pr-2 imgages-no" alt="" /></li>
                                                    <li className="black">Melba Powers</li>
                                                </ul>
                                            </Link>
                                        </td>
                                        <td className='grey'>1.5K</td>
                                        <td className='grey'>
                                            <div class="switch">

                                                <label class="switch">
                                                    <input type="checkbox" name="forSale" />
                                                    <span class="slider round"></span>
                                                </label>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className='main-image'>
                                            <Link to='/admin/nftsdetail'>
                                                <ul className="d-flex justify-content-start align-items-center">
                                                    <li><img src={`${images['user2.png']['default']}`} className="pr-2 imgages-no" alt="" /></li>
                                                    <li className="black">Caroly</li>
                                                </ul>
                                            </Link>
                                        </td>
                                        <td className='grey'>3.70 BNB</td>
                                        <td className='grey'>
                                        <Link to='/admin/nftsdetail'>
                                                <ul className="d-flex justify-content-start align-items-center">
                                                    <li><img src={`${images['user2.png']['default']}`} className="pr-2 imgages-no" alt="" /></li>
                                                    <li className="black">Ramon Miller</li>
                                                </ul>
                                            </Link>
                                        </td>
                                        <td className='grey'>
                                        <Link to='/admin/nftsdetail'>
                                                <ul className="d-flex justify-content-start align-items-center">
                                                    <li><img src={`${images['user2.png']['default']}`} className="pr-2 imgages-no" alt="" /></li>
                                                    <li className="black">Melba Powers</li>
                                                </ul>
                                            </Link>
                                        </td>
                                        <td className='grey'>1.5K</td>
                                        <td className='grey'>
                                            <div class="switch">

                                                <label class="switch">
                                                    <input type="checkbox" name="forSale" />
                                                    <span class="slider round"></span>
                                                </label>
                                            </div>
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

export default Nft;
