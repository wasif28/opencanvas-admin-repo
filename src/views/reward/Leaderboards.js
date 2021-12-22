
import React from "react";
import './reward.scss';
// reactstrap components
import { Link } from "react-router-dom";  
function LeaderBoard() {

    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
    }

    const images = importAll(require.context('assets/img/userflow', false, /\.(png|jpe?g|svg)$/));
    return (
        <>
            <div className="content">
                <section className="daily leaderboard ptb20 card">
                    <div className="container-fluid">
                        <div class="table-responsive">
                            <table class="table ">
                                <thead>
                                    <tr>
                                        <th>Users Name<img src={`${images['arrow-down.png']['default']}`} className="pl-2" alt="" /></th>
                                        <th>Wallet Address<img src={`${images['arrow-down.png']['default']}`} className="pl-2" alt="" /></th>
                                        <th>Task Completed<img src={`${images['arrow-down.png']['default']}`} className="pl-2" alt="" /></th>
                                        <th>Tasks Pending<img src={`${images['arrow-down.png']['default']}`} className="pl-2" alt="" /></th>
                                        <th>Details</th>
                                    </tr>
                                </thead>
                                <tbody className="main-t-body-text" >
                                    <tr>
                                        <td className='main-image'>
                                            <Link className=''> <img src={`${images['gamess1.png']['default']}`} className="pr-2 imgages-no" alt="" /></Link>
                                            <span>Carolyn Wilson</span>
                                        </td>
                                        <td className=''>
                                            0x0712775C43...
                                        </td>
                                        <td className='completed'>10</td>
                                        <td className=''>
                                            0
                                        </td>
                                        <td className="button-details">
                                            <Link className='btn-common padds' to='/admin/leaderboardDetails'>Details</Link>
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

export default LeaderBoard;
