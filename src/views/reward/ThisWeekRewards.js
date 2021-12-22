
import React from "react";
import './reward.scss';
// reactstrap components
import { Link } from "react-router-dom";
function ThisWeekReward() {

    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
    }

    const images = importAll(require.context('assets/img/userflow', false, /\.(png|jpe?g|svg)$/));
    return (
        <>
            <div className="content">
                <section className="thisweekrewards card">
                    <div className="container-fluid">
                        <div class="table-responsive">
                            <table class="table ">
                                <thead>
                                    <tr>
                                        <th>Reward Image</th>
                                        <th>Reward</th>
                                        <th>Creation Date</th>
                                        <th>Description</th>
                                        <th>Remove</th>
                                    </tr>
                                </thead>
                                <tbody className="main-t-body-text" >
                                    <tr>
                                        <td className='main-image'>
                                            <Link className=''> <img src={`${images['iphone.png']['default']}`} className="pr-2 imgages-no" alt="" /></Link>
                                        </td>
                                        <td className=''>iPhone 12 Pro</td>
                                        <td className=''>Aug 23, 2021</td>
                                        <td className="whitespace">Sed ut perspiciatis unde omnis iste</td>
                                        <td> <img src={`${images['remove1.png']['default']}`} alt="" /></td>
                                    </tr>
                                    <tr>
                                        <td className='main-image'>
                                            <Link className=''> <img src={`${images['iphone.png']['default']}`} className="pr-2 imgages-no" alt="" /></Link>
                                        </td>
                                        <td className=''>iPhone 12 Pro</td>
                                        <td className=''>Aug 23, 2021</td>
                                        <td className="whitespace">Sed ut perspiciatis unde omnis iste</td>
                                        <td> <img src={`${images['remove1.png']['default']}`} alt="" /></td>
                                    </tr>
                                    <tr>
                                        <td className='main-image'>
                                            <Link className=''> <img src={`${images['iphone.png']['default']}`} className="pr-2 imgages-no" alt="" /></Link>
                                        </td>
                                        <td className=''>iPhone 12 Pro</td>
                                        <td className=''>Aug 23, 2021</td>
                                        <td className="whitespace">Sed ut perspiciatis unde omnis is</td>
                                        <td> <img src={`${images['remove1.png']['default']}`} alt="" /></td>
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

export default ThisWeekReward;
