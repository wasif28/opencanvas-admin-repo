
import React from "react";
import './notification.scss';
// reactstrap components
function Notificationss() {

    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
    }

    const images = importAll(require.context('assets/img/userflow', false, /\.(png|jpe?g|svg)$/));
    return (
        <>
            <div className="content">
                <section className="videos notifications card">
                    <div className="container-fluid">
                        <div className="table-responsive">
                            <table className="table ">
                                <thead>
                                    <tr>
                                        <th>Message</th>
                                        <th > Creation Date <img src={`${images['arrow-down.png']['default']}`} className="pl-1" alt="" /></th>
                                        <th > Platform <img src={`${images['arrow-down.png']['default']}`} className="pl-1" alt="" /></th>
                                    </tr>
                                </thead>
                                <tbody className="main-t-body-text" >
                                    <tr>
                                        <td className=''>Sed ut perspiciatis unde omnis iste natus error</td>
                                        <td className=''>Aug 18, 2021</td>
                                        <td className=''>All</td>
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

export default Notificationss;
