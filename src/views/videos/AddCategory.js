
import React from "react";
import './video.scss';
// reactstrap components
function AddCategory() {

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
                                        <th>Category</th>
                                        <th > Creation Date <img src={`${images['arrow-down.png']['default']}`} className="pl-1" alt="" /></th>
                                        <th > Total Videos <img src={`${images['arrow-down.png']['default']}`} className="pl-1" alt="" /></th>
                                    </tr>
                                </thead>
                                <tbody className="main-t-body-text" >
                                    <tr>
                                        <td className=''>BNB</td>
                                        <td className=''>Aug 18, 2021</td>
                                        <td className=''>10 Videos</td>
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

export default AddCategory;
