import React, { useState } from "react";
import arrowdown from "assets/img/userflow/arrow-down.png";
import ReactApexChart from "react-apexcharts";
import "./dashboard.scss";
import { Link } from "react-router-dom";

function Dashboard() {
  const [options, setobject] = useState({
    chart: {
      type: "bar",
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
      style: {
        colors: ["#901CEE", "#C8F2E3", "#D1AAF0"],
      },
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: [
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
      ],
      // title: {
      //   text: '$ (thousands)'
      // }
    },
    // yaxis: {
    //   title: {
    //     text: '$ (thousands)'
    //   }
    // },
    fill: {
      opacity: 1,
      colors: ["#901CEE", "#C8F2E3", "#D1AAF0"],
    },
    markers: {
      colors: ["#901CEE", "#C8F2E3", "#D1AAF0"],
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands";
        },
      },
    },
    legend: {
      position: 'top',
      horizontalAlign: 'left',
      show: true,
      markers: {
        strokeColor: "#fff",
        fillColors: ["#901CEE", "#C8F2E3", "#D1AAF0"],
      },
      itemMargin: {
        vertical: 5,
      },
    },
  });
  const [series, setseries] = useState([
    {
      name: "Artists",
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
    },
    {
      name: "NFTs Minted",
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
    },
    {
      name: "NFTs Sold",
      data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
    },
  ]);

  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }
  const images = importAll(
    require.context("assets/img/dashboardimg", false, /\.(png|jpe?g|svg)$/)
  );

  return (
    <>
      <div className="content">
        <section className="main-dashboard">
          <div className="row">
            <div className="col-sm-8 p-0">
              <div className="row">
                <div className="col-sm-4 pl-0">
                  <div className="card">
                    <ul className="list-inline">
                      <li className="list-inline-item top">
                        <h5 className="grey">Total Artists</h5>
                      </li>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <li className="list-inline-item">
                        <div className="inner-content">
                          <h6 className="common">View All</h6>
                        </div>
                      </li>
                    </ul>
                    <h2 className="common">8246</h2>
                  </div>
                </div>

                <div className="col-sm-4 p-0">
                  <div className="card">
                    <ul className="list-inline">
                      <li className="list-inline-item top">
                        <h5 className="grey">NFTs Minted</h5>
                      </li>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <li className="list-inline-item">
                        <div className="inner-content">
                          <h6 className="common">View All</h6>
                        </div>
                      </li>
                    </ul>
                    <h2 className="common">17623</h2>
                  </div>
                </div>
                <div className="col-sm-4 pr-0">
                  <div className="card">
                    <ul className="list-inline">
                      <li className="list-inline-item top">
                        <h5 className="grey">Transactions</h5>
                      </li>
                    </ul>
                    <h2 className="common">$1.2M</h2>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-12 p-0">
                  <div className="row ptb20">
                    <div className="col-sm-9">
                      <h3 className="">Statistics</h3>
                    </div>
                    <div className="col-sm-3">
                      <div class="dropdown">
                        <button
                          class="btn dropdown-toggle"
                          type="button"
                          id="dropdownMenuButton"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Time
                        </button>
                        <div
                          class="dropdown-menu"
                          aria-labelledby="dropdownMenuButton"
                        >
                          <a class="dropdown-item" href="#">
                            Last Month
                          </a>
                          <a class="dropdown-item" href="#">
                            Last Week
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="row ptb20">
                      <div className="col-sm-12 text-center">
                        <div id="chart">
                          <ReactApexChart
                            options={options}
                            series={series}
                            type="bar"
                            height={350}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-4">
              <div className="card">
                <div className="row pt20">
                  <div className="col-sm-8">
                    <h3 className="">Top Games</h3>
                  </div>
                  <div className="col-sm-4">
                    <Link to="playtoearn">
                      <h6 className="common">View All</h6>
                    </Link>
                  </div>
                </div>
                <div className="row ptb20">
                  <div className="col-sm-3 text-center">
                    <img
                      src={`${images["admin-img.png"]["default"]}`}
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-sm-7 p-0">
                    <h3 className="">Ramon Miller</h3>
                    <h6 className="grey">54 items</h6>
                  </div>
                  <div className="col-sm-2 p-0">
                    <div class="switch">
                      <label class="switch">
                        <input type="checkbox" name="forSale" />
                        <span class="slider round"></span>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row ptb20">
                  <div className="col-sm-3 text-center">
                    <img
                      src={`${images["admin-img.png"]["default"]}`}
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-sm-7 p-0">
                    <h3 className="">Ramon Miller</h3>
                    <h6 className="grey">54 items</h6>
                  </div>
                  <div className="col-sm-2 p-0">
                    <div class="switch">
                      <label class="switch">
                        <input type="checkbox" name="forSale" />
                        <span class="slider round"></span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="row pt20">
                  <div className="col-sm-8">
                    <h3 className="">Latest Videos</h3>
                  </div>
                  <div className="col-sm-4">
                    <Link to="videos">
                      <h6 className="common">View All</h6>
                    </Link>
                  </div>
                </div>
                <div className="row ptb20">
                  <div className="col-sm-3 text-center">
                    <img
                      src={`${images["top-games-img-one.png"]["default"]}`}
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-sm-9">
                    <h6 className="">
                      REN Price Climbs to Record High, Benefiting From Ethereum
                      Congestion
                    </h6>
                    <ul className="list-inline pt10">
                      <li className="list-inline-item">
                        <span className="circle"></span>&nbsp;
                        <span className="grey">BNB</span>&nbsp;&nbsp;&nbsp;
                        <span className="grey">2.3K Views</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-3 text-center">
                    <img
                      src={`${images["top-games-img-one.png"]["default"]}`}
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-sm-9">
                    <h6 className="">
                      REN Price Climbs to Record High, Benefiting From Ethereum
                      Congestion
                    </h6>
                    <ul className="list-inline pt10">
                      <li className="list-inline-item">
                        <span className="circle"></span>&nbsp;
                        <span className="grey">BNB</span>&nbsp;&nbsp;&nbsp;
                        <span className="grey">2.3K Views</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="row ptb20">
                  <div className="col-sm-3 text-center">
                    <img
                      src={`${images["top-games-img-one.png"]["default"]}`}
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-sm-9">
                    <h6 className="">
                      REN Price Climbs to Record High, Benefiting From Ethereum
                      Congestion
                    </h6>
                    <ul className="list-inline pt10">
                      <li className="list-inline-item">
                        <span className="circle"></span>&nbsp;
                        <span className="grey">BNB</span>&nbsp;&nbsp;&nbsp;
                        <span className="grey">2.3K Views</span>
                      </li>
                    </ul>
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
