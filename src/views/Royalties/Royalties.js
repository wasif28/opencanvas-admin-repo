import React, { useEffect, useState } from "react";
import PaidTable from "./component/paidTable";
import PendingTable from "./component/pendingTable";
import CONFIRMModal from "components/modals";
import axios from "axios";
import "./style.scss";
// reactstrap components

function Royalties() {
  const [tab, setTab] = useState(0);

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
    // let getToken = localStorage.getItem("token");
    // var config = {
    //   method: "get",
    //   url: "",
    //   headers: {
    //     "auth-token": getToken,
    //   },
    // };
    // axios(config)
    //   .then(function (response) {
    //     setUser(response.data);
    //   })
    //   .catch(function (error) {
    //     console.log(error)
    //   });
  };

  const getPending = () => {};

  useEffect(() => {
    getPending();
    getPaid();
  }, []);

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
                <tbody className="main-t-body-text">
                  {tab === 0 ? <PendingTable /> : <PaidTable />}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Royalties;
