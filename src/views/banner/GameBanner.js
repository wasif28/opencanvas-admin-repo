
import React from "react";
import './banner.scss';
// reactstrap components
import { Link } from "react-router-dom";
function GameBanner() {

    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
    }

    const images = importAll(require.context('assets/img/userflow', false, /\.(png|jpe?g|svg)$/));
    return (
        <>
            <div className="content">
                <section className="game card">
                    <div className="container-fluid">
                        <div class="table-responsive">
                            <table class="table ">
                                <thead>
                                    <tr>
                                        <th>Banner Image</th>
                                        <th>Title</th>
                                        <th>Description</th>
                                        <th>Link/Page</th>
                                        <th>Remove</th>
                                    </tr>
                                </thead>
                                <tbody className="main-t-body-text" >
                                    <tr>
                                        <td className='main-image'>
                                            <Link className=''> <img src={`${images['viedo-1.png']['default']}`} className="pr-2 imgages-no" alt="" /></Link>
                                        </td>
                                        <td className=''>Play & Earn</td>
                                        <td className=''>Legion Flair is now live on the Apple App Store!</td>
                                        <td><Link className="common" target="_blank">https://balance.ex...</Link></td>
                                        <td> <img src={`${images['remove1.png']['default']}`} alt="" /></td>
                                    </tr>
                                    <tr>
                                        <td className='main-image'>
                                            <Link className=''> <img src={`${images['viedo-1.png']['default']}`} className="pr-2 imgages-no" alt="" /></Link>
                                        </td>
                                        <td className=''>Play & Earn</td>
                                        <td className=''>Legion Flair is now live on the Apple App Store!</td>
                                        <td><Link className="common" target="_blank">https://balance.ex...</Link></td>
                                        <td> <img src={`${images['remove1.png']['default']}`} alt="" /></td>
                                    </tr>
                                    <tr>
                                        <td className='main-image'>
                                            <Link className=''> <img src={`${images['viedo-1.png']['default']}`} className="pr-2 imgages-no" alt="" /></Link>
                                        </td>
                                        <td className=''>Play & Earn</td>
                                        <td className=''>Legion Flair is now live on the Apple App Store!</td>
                                        <td><Link className="common" target="_blank">https://balance.ex...</Link></td>
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

export default GameBanner;
