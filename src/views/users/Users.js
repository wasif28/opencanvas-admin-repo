import React from "react";
import './useredit.scss';
// reactstrap components
import { Link } from "react-router-dom";
function Users() {

    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
    }
    const images = importAll(require.context('assets/img/fudgeimages', false, /\.(png|jpe?g|svg)$/));
    return (
        <>
            <div className="content">
                <section className="card users-profiles">
                    <div className="main-nav">
                        <div className="row">
                            <div className="col-sm-7 p-0">
                                <div className="searchingg">
                                    <input type="search" class="form-control" id="datatable-search-input" placeholder="Search Admin" />
                                    <img src={`${images['aaaa.png']['default']}`} alt="" className="img-fluid upper-nnn" />
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="dropdownnn w-100">
                                    <div class="dropdown button-drop w-100">
                                        <button class="main-button text-left  w-100" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Sort By <img src={`${images['Vector2.png']['default']}`} alt="" className="float-right" />
                                        </button>
                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <a class="dropdown-item" href="#">Another action</a>
                                            <a class="dropdown-item" href="#">Another action</a>
                                            <a class="dropdown-item" href="#">Another action</a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="col-sm-2 p-0">
                                <div className="buttonss">
                                    <Link to="adduser" className="btn-common">
                                        <img src={`${images['Vector1.png']['default']}`} className="pl-3" alt="" />
                                        &nbsp;&nbsp;&nbsp;
                                        <span>ADD MORE</span>
                                    </Link>
                                </div>
                            </div>
                        </div>



                    </div>
                    <div className="row">
                        <div className="col-sm-12 p-0">
                            <div class="table-responsive">
                                <table class="table ">
                                    <thead>
                                        <tr>
                                            <th className='grey'>Joe Gray</th>
                                            <th className='grey'> Role</th>
                                            <th className='grey'> Email</th>
                                            <th className='grey'> Contact no </th>
                                            <th className='grey'> Block</th>
                                        </tr>
                                    </thead>
                                    <tbody className="main-t-body-text" >
                                        <tr>
                                            <td className='main-image'>
                                                <Link >
                                                    <ul className="d-flex justify-content-start align-items-center">
                                                        <li><img src={`${images['user2.png']['default']}`} className="pr-2 imgages-no" alt="" /></li>
                                                        <li className="black">Joe Gray</li>
                                                    </ul>
                                                </Link>
                                            </td>
                                            <td className='grey'>Admin</td>
                                            <td className='grey'>Joe_gray@gmail.com</td>
                                            <td className='grey'>216-925-2611</td>

                                            <td className="button-details">
                                                <Link className='btn-red padds'>Remove Admin</Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='main-image'>
                                                <Link >
                                                    <ul className="d-flex justify-content-start align-items-center">
                                                        <li><img src={`${images['user2.png']['default']}`} className="pr-2 imgages-no" alt="" /></li>
                                                        <li className="black">Joe Gray</li>
                                                    </ul>
                                                </Link>
                                            </td>
                                            <td className='grey'>Admin</td>
                                            <td className='grey'>Joe_gray@gmail.com</td>
                                            <td className='grey'>216-925-2611</td>

                                            <td className="button-details">
                                                <Link className='btn-red padds'>Remove Admin</Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='main-image'>
                                                <Link >
                                                    <ul className="d-flex justify-content-start align-items-center">
                                                        <li><img src={`${images['user2.png']['default']}`} className="pr-2 imgages-no" alt="" /></li>
                                                        <li className="black">Joe Gray</li>
                                                    </ul>
                                                </Link>
                                            </td>
                                            <td className='grey'>Admin</td>
                                            <td className='grey'>Joe_gray@gmail.com</td>
                                            <td className='grey'>216-925-2611</td>

                                            <td className="button-details">
                                                <Link className='btn-red padds'>Remove Admin</Link>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Users;