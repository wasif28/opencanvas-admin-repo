import React, { useState } from "react";
import PaidTable from "./component/paidTable";
import PendingTable from "./component/pendingTable"
import "./style.scss";
// reactstrap components
function Royalties() {
  const [tab, setTab] = useState(0);

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
  return (
    <>
      <div className="content">
        <section className="users card">
          <div className="container-fluid">
            <div className="d-flex justify-conter-center align-items-center pt-3 pb-2 tab-roy">
              <button
                onClick={() => setTab(0)}
                type="btn"
                className="btn p-0 shadow-none"
              >
                <p
                  className={"px-2 " + (tab === 0 ? "selected" : "unselected")}
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
                  className={"px-2 " + (tab === 1 ? "selected" : "unselected")}
                >
                  Paid
                </p>
              </button>
            </div>
            <div class="table-responsive">
              <table class="table ">
                <thead>
                  <tr>
                    <th>
                      {" "}
                      {/* <p className="thead">Item</p>  */}
                      Item
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
