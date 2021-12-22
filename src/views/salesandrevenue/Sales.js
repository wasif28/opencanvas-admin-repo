
import React from "react";
import './s&r.scss';
// reactstrap components
import { Link } from "react-router-dom";
function Sales() {
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
                                        <th > Name of NFT<img src={`${images['arrow-down.png']['default']}`} className="pl-1" alt="" /></th>
                                        <th > Owner <img src={`${images['arrow-down.png']['default']}`} className="pl-1" alt="" /></th>
                                        <th > Price Sold <img src={`${images['arrow-down.png']['default']}`} className="pl-1" alt="" /></th>
                                        <th > Commission <img src={`${images['arrow-down.png']['default']}`} className="pl-1" alt="" /></th>
                                        {/* <th > Following <img src={`${images['arrow-down.png']['default']}`} className="pl-1" alt="" /></th>
                                        <th > Verified <img src={`${images['arrow-down.png']['default']}`} className="pl-1" alt="" /></th>
                                        <th > Block Artist <img src={`${images['arrow-down.png']['default']}`} className="pl-1" alt="" /></th> */}
                                    </tr>
                                </thead>
                                <tbody className="main-t-body-text" >
                                    <tr>
                                        <td className='main-image'>
                                            <Link to='/admin/artistdetail'>
                                                <ul className="d-flex justify-content-start align-items-center">
                                                    <li><img src={`${images['user2.png']['default']}`} className="pr-2 imgages-no" alt="" /></li>
                                                    <li className="black">fast food</li>
                                                </ul>
                                            </Link>
                                        </td>
                                        <td className='grey'>Caroly</td>
                                        <td className='grey'>$100</td>
                                        <td className='grey'>$0.2221</td>
                                       
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

export default Sales;
