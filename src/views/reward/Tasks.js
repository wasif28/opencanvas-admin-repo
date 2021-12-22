
import React from "react";
import './reward.scss';
// reactstrap components
import { Link } from "react-router-dom";
function Task() {

    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
    }

    const images = importAll(require.context('assets/img/userflow', false, /\.(png|jpe?g|svg)$/));
    return (
        <>
            <div className="content">
                <section className="tasks card">
                    <div className="container-fluid">
                        <div class="table-responsive overflow-responce">
                            <table class="table ">
                                <thead>
                                    <tr>
                                        <th>Tasks Image</th>
                                        <th>Title</th>
                                        <th>Description</th>
                                        <th>Tasks Image</th>
                                        <th>Remove</th>
                                    </tr>
                                </thead>
                                <tbody className="main-t-body-text" >
                                    <tr>
                                        <td className='main-image'>
                                            <Link className=''> <img src={`${images['instagram.png']['default']}`} className="pr-2 imgages-no" alt="" /></Link>
                                        </td>
                                        <td className=''>Instagram Story</td>
                                        <td className='whitespace'>Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Praesent adipiscing.</td>
                                        <td> <img src={`${images['greentick.png']['default']}`} className="pr-2 imgages-no" alt="" /></td>
                                        <td> <img src={`${images['remove1.png']['default']}`} alt="" /></td>
                                    </tr>
                                    <tr>
                                        <td className='main-image'>
                                            <Link className=''> <img src={`${images['instagram.png']['default']}`} className="pr-2 imgages-no" alt="" /></Link>
                                        </td>
                                        <td className=''>Play & Earn</td>
                                        <td className='whitespace'>Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Praesent adipiscing.</td>
                                        <td><img src={`${images['greentick.png']['default']}`} className="pr-2 imgages-no" alt="" /></td>
                                        <td> <img src={`${images['remove1.png']['default']}`} alt="" /></td>
                                    </tr>
                                    <tr>
                                        <td className='main-image'>
                                            <Link className=''> <img src={`${images['instagram.png']['default']}`} className="pr-2 imgages-no" alt="" /></Link>
                                        </td>
                                        <td className=''>Play & Earn</td>
                                        <td className='whitespace'>Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Praesent adipiscing.</td>
                                        <td><img src={`${images['greentick.png']['default']}`} className="pr-2 imgages-no" alt="" /></td>
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

export default Task;
