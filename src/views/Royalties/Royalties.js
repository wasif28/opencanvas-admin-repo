import React, { useEffect, useState } from "react";
import PaidTable from "./component/paidTable";
import PendingTable from "./component/pendingTable";
import Environment from "../../utils/environment";
import CONFIRMModal from "components/modals";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./style.scss";
// reactstrap components

function Royalties() {
  const history = useHistory();
  const [tab, setTab] = useState(0);
  const [pending, setPending] = useState([]);
  const [paid, setPaid] = useState([]);
  const [loader, setLoader] = useState(false);
  const api_url = Environment.base_url;

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

  const getPaid = () => {
    let getToken = localStorage.getItem("openCanvasToken");
    var config = {
      method: "get",
      url: `${api_url}/royalties/getPaidRoyalties`,
      headers: {
        authorization: `Bearer ${getToken}`,
      },
    };
    axios(config)
      .then(function (response) {
        cancelModal();
        setPaid(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const token = localStorage.getItem("openCanvasToken");

  const getPending = () => {
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
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    if (token === "null") {
      history.push("/adminlogin");
    } else {
      getPending();
      getPaid();
    }
  }, []);

  const payAll = () => {
    let getToken = localStorage.getItem("openCanvasToken");
    setLoader(true);
    // setError(null);
    var data = JSON.stringify({
    });

    var config = {
      method: "post",
      url: `${api_url}/royalties/payToAllPending`,
      headers: {
        "Content-Type": "application/json",
        "authorization": `Bearer ${getToken}`,
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log("response", response);
        setLoader(false);
      })
      .catch(function (error) {
        setLoader(false);
      });
  };

  return (
    <>
      <div className="content">
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
          <div className="container-fluid">
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
                    onClick={() => getConfirmation()}
                    className="btn shadow-none btn-common m-0 px-3 p-2"
                  >
                    Pay All
                  </button>
                )}
              </div>
            </div>
            <div class="table-responsive">
              <table class="table ">
                <thead>
                  <tr>
                    <th>
                      {" "}
                      {/* <p className="thead">Item</p>  */}
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
                  <tbody className="main-t-body-text">
                    {pending.map((item, index) => {
                      return <PendingTable key={index} item={item} />;
                    })}
                  </tbody>
                ) : (
                  <tbody className="main-t-body-text">
                    {paid.map((item, index) => {
                      return <PaidTable key={index} item={item} />;
                    })}
                  </tbody>
                )}
              </table>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Royalties;
