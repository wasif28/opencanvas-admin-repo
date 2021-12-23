import React, { useState } from "react";
import Bid from "./components/bid";
import History from "./components/history";
import Additional from "./components/additional";
import "./style.scss";

function Dashboard() {
  const [tab, setTab] = useState("info");
  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }
  const images = importAll(
    require.context("assets/img", false, /\.(png|jpe?g|svg)$/)
  );

  return (
    <>
      <div className="content">
        <section className="main-item">
          <div className="row px-3">
            <div className="col-sm-12 p-0">
              <div className="row">
                <div className="card col-sm-12 p-0 py-md-5">
                  <div className="row">
                    <div className="col-sm-6 p-0 d-flex justify-content-center ptb20">
                      <div className="col-sm-10 p-3 p-md-0">
                        <img
                          src={`${images["item-image.svg"]["default"]}`}
                          alt=""
                          className="w-100"
                        />
                        <div className="border-div mt-4">
                          <h6>Contract Address</h6>
                          <p className="text-purple">
                            1x1dDB2C0817daF18632662E71fdD2dbDC0eB3a9Ec
                          </p>
                          <h6 className="pt-3">Token ID</h6>
                          <p className="">100300041083</p>
                          <h6 className="pt-3">Metadata</h6>
                          <p className="">Editable</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 p-0 d-flex justify-content-start ptb20 right-desc">
                      <div className="col-sm-10 p-3 p-md-0">
                        <h1>DeadFellaz #3027</h1>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Laborum obcaecati dignissimos quae quo ad iste
                          ipsum officiis deleniti asperiores sit.
                        </p>
                        <div className="row">
                          <div className="col-sm-12 p-0 d-flex justify-content-start flex-wrap">
                            <div className="d-flex col-12 col-xl-6 p-0 justify-content-start align-items-center">
                              <img
                                width={40}
                                height={40}
                                className="rounded-full"
                                src={`${images["Vector123.png"]["default"]}`}
                                alt=""
                              />
                              <div className="pl-3">
                                <p className="subtitle">Creator</p>
                                <p className="subtitle-hard">Darrell Steward</p>
                              </div>
                            </div>
                            <div className="d-flex col-12 col-xl-6 bord-left pt-4 pt-xl-0 p-0 justify-content-xl-center align-items-center">
                              <img
                                width={40}
                                height={40}
                                className="rounded-full"
                                src={`${images["Vector123.png"]["default"]}`}
                                alt=""
                              />
                              <div className="pl-3">
                                <p className="subtitle">Owner</p>
                                <p className="subtitle-hard">Darrell Steward</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row pb-4 tab-section">
                          <div className="col-xl-8 col-lg-10 col-sm-12 p-0 d-flex justify-content-between">
                            <button
                              onClick={() => setTab("bid")}
                              className={
                                "btn shadow-none " +
                                (tab === "bid" ? "active" : "")
                              }
                            >
                              Bid (6)
                            </button>
                            <button
                              onClick={() => setTab("history")}
                              className={
                                "btn shadow-none " +
                                (tab === "history" ? "active" : "")
                              }
                            >
                              History
                            </button>
                            <button
                              onClick={() => setTab("info")}
                              className={
                                "btn shadow-none " +
                                (tab === "info" ? "active" : "")
                              }
                            >
                              Additional Info
                            </button>
                          </div>
                        </div>
                        {tab === "bid" && (
                          <div class="table-responsive">
                            <table className="table">
                              <tbody>
                                <Bid />
                              </tbody>
                            </table>
                          </div>
                        )}
                        {tab === "history" && (
                          <div class="table-responsive">
                            <table className="">
                              <tbody>
                                <History />
                              </tbody>
                            </table>
                          </div>
                        )}
                        {tab === "info" && <Additional />}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
export default Dashboard;
