import React, { useEffect, useState } from "react";
import PaidTable from "./component/paidTable";
import PendingTable from "./component/pendingTable";
import Environment from "../../utils/Environment";
import CONFIRMModal from "components/modals";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import DistributeMultiple from "../../hooks/distributeMultiple";
import "react-toastify/dist/ReactToastify.css";
import "./style.scss";
// reactstrap components

function Royalties() {
  const history = useHistory();
  const [tab, setTab] = useState(0);
  const [pending, setPending] = useState([]);
  const [paid, setPaid] = useState([]);
  const [loader, setLoader] = useState(false);
  const [mainLoader, setMainLoader] = useState(false);
  const api_url = Environment.base_url;
  const { DisperseMulti } = DistributeMultiple();

  const getConfirmation = () => {
    window.$("#exampleModalLong3").modal("show");
  };

  const cancelModal = () => {
    window.$("#exampleModalLong3").modal("hide");
  };

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
    require.context("assets/img", false, /\.(png|jpe?g|svg)$/)
  );

  const getPaid = () => {
    let getToken = localStorage.getItem("openCanvasToken");
    setMainLoader(true);
    var config = {
      method: "get",
      url: `${api_url}/royalties/getPaidRoyalties`,
      headers: {
        authorization: `Bearer ${getToken}`,
      },
    };
    axios(config)
      .then(function (response) {
        setPaid(response.data);
        setMainLoader(false);
      })
      .catch(function (error) {
        console.log(error);
        setMainLoader(false);
      });
  };

  const token = localStorage.getItem("openCanvasToken");

  const getPending = () => {
    setMainLoader(true);
    let getToken = localStorage.getItem("openCanvasToken");
    var config = {
      method: "get",
      url: `${api_url}/royalties/getPendingRoyalties`,
      headers: {
        authorization: `Bearer ${getToken}`,
      },
    };
    axios(config)
      .then(function (response) {
        setPending(response.data);
        setMainLoader(false);
      })
      .catch(function (error) {
        setMainLoader(false);
        console.log(error);
      });
  };

  useEffect(() => {
    if (token === "null") {
      history.push("/adminlogin");
    } else {
      if (tab === 0 && pending?.length === 0) {
        getPending();
      } else if (tab === 1 && paid?.length === 0) {
        getPaid();
      }
    }
  }, [tab]);

  const payAll = async () => {
    let getToken = localStorage.getItem("openCanvasToken");
    cancelModal();
    setMainLoader(true);
    let walletArr = [];
    let userPrices = [];
    let allTotal = 0;
    let dummArr = [];
    for (let _i of pending) {
      walletArr.push(_i?.creator?.walletAddress);
      allTotal = allTotal + _i?.royaltiesAmount;
      userPrices.push(_i?.royaltiesAmount);
      let objt = {
        tokenID: _i?.tokenID,
        contractAddress: _i?.contractAddress,
      };
      dummArr.push(objt);
    }
    const res = await DisperseMulti(allTotal, walletArr, userPrices);
    await console.log("asd",res)
    if (res) {
      var data = JSON.stringify({
        array: dummArr,
      });
      var config = {
        method: "post",
        url: `${api_url}/royalties/payToMultiplePending`,
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${getToken}`,
        },
        data: data,
      };
      axios(config)
        .then(function (response) {
          toast("All Royalties Paid Successfully!");
          getPending();
          setMainLoader(false);
        })
        .catch(function (error) {
          toast("Transactions failed!");
          setMainLoader(false);
        });
    }else {
      toast("Transactions cancelled!");
      setMainLoader(false);
    }
  };

  return (
    <>
      <div className="content">
        <ToastContainer />
        <div
          className="modal fade"
          id="exampleModalLong3"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLongTitle"
          aria-hidden="true"
        >
          <CONFIRMModal
            loader={loader}
            payAll={payAll}
            cancelModal={cancelModal}
            title="Pay All"
            mainBtn="Pay"
            content="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis voluptatum."
          />
        </div>
        <section className="users card">
          <div className="container-fluid position-relative">
            <div className="d-flex justify-content-between align-items-center pt-3 pb-2 tab-roy">
              <div className="d-flex justify-content-start align-items-center">
                <button
                  onClick={() => setTab(0)}
                  type="btn"
                  className="btn p-0 shadow-none"
                >
                  <p
                    className={
                      "px-2 " + (tab === 0 ? "selected" : "unselected")
                    }
                  >
                    Pending
                  </p>
                </button>
                <button
                  onClick={() => setTab(1)}
                  type="btn"
                  className="btn p-0 shadow-none"
                >
                  <p
                    className={
                      "px-2 " + (tab === 1 ? "selected" : "unselected")
                    }
                  >
                    Paid
                  </p>
                </button>
              </div>
              <div className="">
                {tab === 0 && (
                  <button
                    type="button"
                    disabled={pending?.length === 0}
                    onClick={() => getConfirmation()}
                    className={
                      "btn shadow-none btn-common-pur btn-common m-0 px-3 p-2 " +
                      (pending?.length === 0
                        ? "cursor-not-allowed"
                        : "cursor-pointer")
                    }
                  >
                    Pay All
                  </button>
                )}
              </div>
            </div>
            <div className="table-responsive p">
              <table className="table ">
                <thead>
                  <tr>
                    <th>
                      {" "}
                      Collection Name
                      <img
                        src={`${images["arrow-down.svg"]["default"]}`}
                        className="pl-1"
                        alt=""
                      />
                    </th>
                    <th>
                      {" "}
                      Creator{" "}
                      <img
                        src={`${images["arrow-down.svg"]["default"]}`}
                        className="pl-1"
                        alt=""
                      />
                    </th>
                    <th>
                      {" "}
                      Amount{" "}
                      <img
                        src={`${images["arrow-down.svg"]["default"]}`}
                        className="pl-1"
                        alt=""
                      />
                    </th>
                    <th>
                      {" "}
                      Quantity{" "}
                      <img
                        src={`${images["arrow-down.svg"]["default"]}`}
                        className="pl-1"
                        alt=""
                      />
                    </th>
                  </tr>
                </thead>
                {tab === 0 ? (
                  <>
                    {mainLoader ? (
                      <div
                        className="d-flex justify-content-center items-center position-absolute mt-5"
                        style={{ width: "95%" }}
                      >
                        <img
                          src={`${images2["mainloader.svg"]["default"]}`}
                          className="pl-1"
                          alt=""
                        />
                      </div>
                    ) : (
                      <tbody className="main-t-body-text">
                        {pending?.length === 0 ? (
                          <p
                            className="text-center pt-5 position-absolute"
                            style={{ width: "95%" }}
                          >
                            No Data to Show
                          </p>
                        ) : (
                          <>
                            {pending.map((item, index) => {
                              return <PendingTable key={index} item={item} />;
                            })}
                          </>
                        )}
                      </tbody>
                    )}
                  </>
                ) : (
                  <>
                    {mainLoader ? (
                      <div
                        className="d-flex justify-content-center items-center position-absolute mt-5"
                        style={{ width: "95%" }}
                      >
                        <img
                          src={`${images2["mainloader.svg"]["default"]}`}
                          className="pl-1"
                          alt=""
                        />
                      </div>
                    ) : (
                      <tbody className="main-t-body-text">
                        {paid?.length === 0 ? (
                          <p
                            className="text-center pt-5 position-absolute"
                            style={{ width: "95%" }}
                          >
                            No Data to Show
                          </p>
                        ) : (
                          <>
                            {paid.map((item, index) => {
                              return <PaidTable key={index} item={item} />;
                            })}
                          </>
                        )}
                      </tbody>
                    )}
                  </>
                  // <tbody className="main-t-body-text">
                  //   {paid.map((item, index) => {
                  //     return <PaidTable key={index} item={item} />;
                  //   })}
                  // </tbody>
                )}
              </table>
            </div>
          </div>
        </section>
      </div>
      {/* Add Category Modal */}
      <div className="main-modal-one">
        <div
          className="modal fade"
          id="exampleModal34"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        ></div>
      </div>
    </>
  );
}

export default Royalties;
