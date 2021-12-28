import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Bid from "./components/bid";
import History from "./components/history";
import Additional from "./components/additional";
import { useParams } from "react-router-dom";
import Environment from "../../utils/Environment";
import axios from "axios";
import "./style.scss";

function Dashboard() {
  const api_url = Environment.base_url;
  const [tab, setTab] = useState("bid");
  const [details, setDetails] = useState(null)
  const { contractId, tokenId } = useParams();
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

  // console.log("contractId",contractId, tokenId)

  useEffect(async () => {
    if (contractId && tokenId) {
      let getToken = localStorage.getItem("openCanvasToken");
      var data = JSON.stringify({
        contractAddress: contractId,
        tokenID: tokenId
      });
      var config = {
        method: "post",
        url: `${api_url}/token/getTokenAndDetailsOfSingleToken`,
        headers: {
          // authorization: `Bearer ${getToken}`,
          "Content-Type": "application/json",
        },
        data: data
      };
      axios(config)
        .then(function (response) {
          if(response.data.data?.length > 0){
            setDetails(response.data.data[0])
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, [tokenId]);

  console.log("details", details)

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
                          // src={`${images["item-image.svg"]["default"]}`}
                          src={details?.imageUrl}
                          alt=""
                          className="w-100"
                        />
                        <div className="border-div mt-4">
                          <h6>Contract Address</h6>
                          <p className="text-purple">
                            {contractId}
                          </p>
                          <h6 className="pt-3">Token ID</h6>
                          <p className="">{tokenId}</p>
                          <h6 className="pt-3">Metadata</h6>
                          <p className="">Editable</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 p-0 d-flex justify-content-start ptb20 right-desc">
                      <div className="col-sm-10 p-3 p-md-0">
                        {/* <h1>DeadFellaz #3027</h1> */}
                        <h1>{details?.nftName}</h1>
                        <p>
                          {details?.description}
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
                                <p className="subtitle-hard">{details?.creators[0]?.name}</p>
                              </div>
                            </div>
                            <div className="d-flex col-12 col-xl-6 bord-left pt-4 pt-xl-0 p-0 justify-content-xl-center align-items-center">
                              <img
                                width={40}
                                height={40}
                                className="rounded-full"
                                // src={`${images["Vector123.png"]["default"]}`}
                                src={details?.users[0]?.picture}
                                alt=""
                              />
                              <div className="pl-3">
                                <p className="subtitle">Owner</p>
                                <p className="subtitle-hard">{details?.users[0]?.name}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row pb-4 tab-section">
                          <div className="col-xl-12 col-lg-10 col-sm-12 p-0 d-flex justify-content-between">
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
                          <div className="table-responsive">
                            <table className="table">
                              <tbody>
                                {details?.bids.map((item,index)=>{
                                  <Bid key={index} />
                                })}
                              </tbody>
                            </table>
                          </div>
                        )}
                        {tab === "history" && (
                          <div className="table-responsive">
                            <table className="">
                              <tbody>
                                <History />
                              </tbody>
                            </table>
                          </div>
                        )}
                        {tab === "info" && <Additional attributes={details?.attributes} />}
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 d-flex align-items-center justify-content-end px-5">
                    <button className="btn-red mr-3">Block Item</button>
                    <a href="/admin/nfts">
                      <p className="cancel">{"Cancel"}</p>
                    </a>
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
