
import React from "react";
import './video.scss';
// reactstrap components
import { Link } from "react-router-dom";
function Videos() {

    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
    }

    const images = importAll(require.context('assets/img/userflow', false, /\.(png|jpe?g|svg)$/));
    return (
        <>
            <div className="content">
                <section className="videos card">
                    <div className="container-fluid">
                        <div class="table-responsive">
                            <table class="table ">
                                <thead>
                                    <tr>
                                        <th>Video</th>
                                        <th > Title <img src={`${images['arrow-down.png']['default']}`} className="pl-1" alt="" /></th>
                                        <th > Wallet Address <img src={`${images['arrow-down.png']['default']}`} className="pl-1" alt="" /></th>
                                        <th > Upload Date <img src={`${images['arrow-down.png']['default']}`} className="pl-1" alt="" /></th>
                                        <th > Duration <img src={`${images['arrow-down.png']['default']}`} className="pl-1" alt="" /></th>
                                        <th > Reward <img src={`${images['arrow-down.png']['default']}`} className="pl-1" alt="" /></th>
                                        <th > Views <img src={`${images['arrow-down.png']['default']}`} className="pl-1" alt="" /></th>
                                        <th > Details</th>
                                    </tr>
                                </thead>
                                <tbody className="main-t-body-text" >
                                    <tr>
                                        <td className='main-image'>
                                        <Link className='' to='/admin/userdetail'> <img src={`${images['viedo-1.png']['default']}`} className="pr-2 imgages-no" alt="" /></Link>
                                        </td>
                                        <td className=''>A hacker who stole...</td>
                                      
                                        <td className=''>BTC</td>
                                        <td className=''>Aug 18, 2021</td>
                                        <td className=''>15:21</td>
                                        <td className=''>50 LGX</td>
                                        <td className=''>2.1K</td>
                                        <td className="button-details">
                                        <Link className='btn-common padds' to='/admin/videodetail'>Details</Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='main-image'>
                                        <Link className='' to='/admin/userdetail'> <img src={`${images['viedo-1.png']['default']}`} className="pr-2 imgages-no" alt="" /></Link>
                                        </td>
                                        <td className=''>A hacker who stole...</td>
                                      
                                        <td className=''>BTC</td>
                                        <td className=''>Aug 18, 2021</td>
                                        <td className=''>15:21</td>
                                        <td className=''>50 LGX</td>
                                        <td className=''>2.1K</td>
                                        <td className="button-details">
                                        <Link className='btn-common padds' to='/admin/videodetail'>Details</Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='main-image'>
                                        <Link className='' to='/admin/userdetail'> <img src={`${images['viedo-1.png']['default']}`} className="pr-2 imgages-no" alt="" /></Link>
                                        </td>
                                        <td className=''>A hacker who stole...</td>
                                      
                                        <td className=''>BTC</td>
                                        <td className=''>Aug 18, 2021</td>
                                        <td className=''>15:21</td>
                                        <td className=''>50 LGX</td>
                                        <td className=''>2.1K</td>
                                        <td className="button-details">
                                        <Link className='btn-common padds' to='/admin/videodetail'>Details</Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='main-image'>
                                        <Link className='' to='/admin/userdetail'> <img src={`${images['viedo-1.png']['default']}`} className="pr-2 imgages-no" alt="" /></Link>
                                        </td>
                                        <td className=''>A hacker who stole...</td>
                                      
                                        <td className=''>BTC</td>
                                        <td className=''>Aug 18, 2021</td>
                                        <td className=''>15:21</td>
                                        <td className=''>50 LGX</td>
                                        <td className=''>2.1K</td>
                                        <td className="button-details">
                                            <Link className='btn-common padds' to='/admin/videodetail'>Details</Link>
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

export default Videos;
