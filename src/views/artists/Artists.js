import React from "react";
import "./artists.scss";
// reactstrap components
import { Link } from "react-router-dom";

function Artists() {
  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }
  const images = importAll(
    require.context("assets/img/userflow", false, /\.(png|jpe?g|svg)$/)
  );
  const images2 = importAll(
    require.context("assets/img/fudgeimages", false, /\.(png|jpe?g|svg)$/)
  );
  return (
    <>
      <div className="content">
        <section className="users card px-3">
          <div className="main-nav pt-4">
            <div className="row">
              <div className="col-sm-7 p-0">
                <div className="searchingg">
                  <input
                    type="search"
                    className="form-control"
                    id="datatable-search-input"
                    placeholder="Search Admin"
                  />
                  <img
                    src={`${images["search.svg"]["default"]}`}
                    alt=""
                    className="img-fluid upper-nnn"
                  />
                </div>
              </div>
              <div className="col-sm-3">
                <div className="dropdownnn w-100">
                  <div className="dropdown button-drop w-100">
                    <button
                      className="main-button text-left  w-100"
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Sort By{" "}
                      <img
                        src={`${images2["Vector2.png"]["default"]}`}
                        alt=""
                        className="float-right"
                      />
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-2 p-0">
                <div className="dropdownnn w-100">
                  <div className="dropdown button-drop w-100">
                    <button
                      className="main-button d-flex justify-content-center align-items-center w-100"
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <img
                        src={`${images["filter.svg"]["default"]}`}
                        alt=""
                        className="mr-2"
                        style={{marginTop:'-8px'}}
                      />
                      Filter{" "}
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid pt-4">
            <div className="table-responsive">
              <table className="table ">
                <thead>
                  <tr>
                    <th>
                      {" "}
                      Artist Name{" "}
                      <img
                        src={`${images["arrow-down.svg"]["default"]}`}
                        className="pl-1"
                        alt=""
                      />
                    </th>
                    {/* <th > Wallet Address <img src={`${images['arrow-down.png']['default']}`} className="pl-1" alt="" /></th> */}
                    <th>
                      {" "}
                      Items Created{" "}
                      <img
                        src={`${images["arrow-down.svg"]["default"]}`}
                        className="pl-1"
                        alt=""
                      />
                    </th>
                    {/* <th > Total Earned<img src={`${images['arrow-down.svg']['default']}`} className="pl-1" alt="" /></th> */}
                    <th>
                      {" "}
                      Items Sold{" "}
                      <img
                        src={`${images["arrow-down.svg"]["default"]}`}
                        className="pl-1"
                        alt=""
                      />
                    </th>
                    <th>
                      {" "}
                      Follower{" "}
                      <img
                        src={`${images["arrow-down.svg"]["default"]}`}
                        className="pl-1"
                        alt=""
                      />
                    </th>
                    <th>
                      {" "}
                      Following{" "}
                      <img
                        src={`${images["arrow-down.svg"]["default"]}`}
                        className="pl-1"
                        alt=""
                      />
                    </th>
                    <th>
                      {" "}
                      Verified{" "}
                      <img
                        src={`${images["arrow-down.svg"]["default"]}`}
                        className="pl-1"
                        alt=""
                      />
                    </th>
                    <th>
                      {" "}
                      Block Artist{" "}
                      <img
                        src={`${images["arrow-down.svg"]["default"]}`}
                        className="pl-1"
                        alt=""
                      />
                    </th>
                  </tr>
                </thead>
                <tbody className="main-t-body-text">
                  <tr>
                    <td className="main-image">
                      <Link to="/admin/artistdetail">
                        <ul className="d-flex justify-content-start align-items-center">
                          <li>
                            <img
                              src={`${images["user2.png"]["default"]}`}
                              className="pr-2 imgages-no"
                              alt=""
                            />
                          </li>
                          <li className="black">Caroly</li>
                        </ul>
                      </Link>
                    </td>
                    {/* <td>0xA8D407A76B1AFECCDFB....</td> */}
                    <td className="grey">54 items</td>
                    {/* <td className='grey'>$599</td> */}
                    <td className="grey">25 items</td>
                    <td className="grey">3.7K</td>
                    <td className="grey">1.5K</td>
                    <td className="grey">
                      <div className="switch">
                        <label className="switch">
                          <input type="checkbox" name="forSale" />
                          <span className="slider round"></span>
                        </label>
                      </div>
                    </td>
                    <td className="button-details">
                      <Link className="btn-red padds">Block</Link>
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

export default Artists;
