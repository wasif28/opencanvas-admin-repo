import './nft.scss';
// reactstrap components
import { Link } from "react-router-dom";
function NftDetail() {
    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
    }
    const images = importAll(require.context('assets/img/fudgeimages', false, /\.(png|jpe?g|svg)$/));
    return (
        <>
            <div className="content">
                <section className="leaderdetails edit-page-profile">
                    <div className="card">
                        <div className="row ptb20">
                            <div className="col-sm-6 text-center">
                                <img src={`${images['asssasas.png']['default']}`} alt="" />
                                {/* <div className="art-image">
                                <a a href="#myModal" role="button" className="btn btn-primary" data-toggle="modal"><img
                                    src="pegify/art-work/Rectangle12.png" className="img-fluid" /></a>
                                <div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-hidden="true">
                                    <div className="modal-dialog modal-full" role="document">
                                        <div className="modal-content" >
                                            <div className="modal-body p-4" id="result">
                                                <div className="container-fluid">
                                                    <div className="row">
                                                        <div className="col-sm-12">
                                                        <img src={`${images['asssasas.png']['default']}`} alt="" />
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            <ul className="list-inline ptbb">
                                                <li className="">
                                                    <div className="icon-1">
                                                        <a 
                                                            data-dismiss="modal">
                                                              <img src={`${images['Vector123.png']['default']}`} alt="" />
                                                            <span className="grey-1">Abdullah</span>
                                                        </a>
                                                    </div>
                                                </li>
                                                <li className="pt-3">
                                                    <h4>NFT MM</h4>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div> */}

                            </div>
                            <div className="col-sm-6">
                                <div className="art-inner">
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div className="profile">
                                                <div className="profile-heading">
                                                    <h2 className="inner-heading" >
                                                        NFTMM</h2>
                                                    <h4 className="inner-para"> <span>345 BNB</span></h4>
                                                </div>
                                                <div className="icons">
                                                    <ul className="list-inline">
                                                        <li className="list-inline-item" >
                                                            <img src="pegify/landing-assets/heart.png" alt=""
                                                                className="img-fluid" />
                                                            <span className="grey"> 20</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="main-para">
                                                    <p className="inner-para">Collection of 1000 generated and unique 🦊 in #pixelart and minted in #NFT single edition (1/1) on E...</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row ptb20">
                                        <div className="col-sm-12">
                                            <div className="owner" >
                                              
                                                    <h6>Owner</h6>

                                                    <ul className="list-inline">
                                                        <li className="list-inline-item">  
                                                         <img src={`${images['Vector123.png']['default']}`} alt="" />
                                                        </li>
                                                        <li className="list-inline-item grey-1">abdullah</li>
                                                    </ul>

                                              
                                            </div>

                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div className="owner" >
                                                    <h6>Creator</h6>
                                                    <ul className="list-inline">
                                                        <li className="list-inline-item">
                                                        <img src={`${images['Vector123.png']['default']}`} alt="" />
                                                        </li>
                                                        <li className="list-inline-item grey-1">gfdg</li>
                                                    </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row ptbb">
                                        <div className="col-sm-12">
                                            <div className="inner-btn">
                                                {/* <button className="btn-common" data-toggle="modal" data-target="#exampleModal1">BUY NOW
                                                    FOR 23 BNB</button> */}
                                                <div className="modal fade" id="exampleModal1" tabindex="-1" role="dialog"
                                                    aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                    <div className="modal-dialog" role="document">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h4 className="mx-auto">Checkout</h4>
                                                                <button type="button" className="close" data-dismiss="modal"
                                                                    aria-label="Close">
                                                                    <span aria-hidden="true">&times;</span>
                                                                </button>
                                                            </div>
                                                            {/* <div className="modal-body">
                                                            <div className="row ptb20">
                                                                <div className="col-sm-4 main-margin-sho text-center">
                                                                    <img src="pegify/art-work/img-9.png" className="img-fluid" />
                                                                </div>
                                                                <div className="col-sm-8 main-margin-sho">
                                                                    <div className="inner-man">
                                                                        <h4>Prime</h4>
                                                                        <div >
                                                                            <h6>Owner</h6>
                                                                            <ul className="list-inline">
                                                                                <li className="list-inline-item">
                                                                                    <div className="inner-tile" data-toggle="tooltip"
                                                                                        data-placement="top" title="Creator">
                                                                                        <svg width="50" height="50"
                                                                                            viewBox="0 0 56 56" fill="none"
                                                                                            xmlns="http://www.w3.org/2000/svg">
                                                                                            <path
                                                                                                d="M54 28C54 42.3594 42.3594 54 28 54C13.6406 54 2 42.3594 2 28C2 13.6406 13.6406 2 28 2C42.3594 2 54 13.6406 54 28Z"
                                                                                                fill="#F6F6F6" stroke="white"
                                                                                                stroke-width="3" />
                                                                                            <path opacity="0.3" fill-rule="evenodd"
                                                                                                clip-rule="evenodd"
                                                                                                d="M28.0007 31.2448C23.6689 31.2448 15.0215 33.4188 15.0215 37.7344V40.9792H40.9798V37.7344C40.9798 33.4188 32.3325 31.2448 28.0007 31.2448ZM28.0007 28C31.5861 28 34.4902 25.0959 34.4902 21.5104C34.4902 17.9249 31.5861 15.0208 28.0007 15.0208C24.4152 15.0208 21.5111 17.9249 21.5111 21.5104C21.5111 25.0959 24.4152 28 28.0007 28Z"
                                                                                                fill="#35374A" />
                                                                                        </svg>
                                                                                    </div>
                                                                                </li>
                                                                                <li className="list-inline-item grey-1">
                                                                                    abdullah
                                                                                </li>
                                                                            </ul>
                                                                        </div>

                                                                        <div >
                                                                            <h6>Created</h6>
                                                                            <ul className="list-inline">
                                                                                <li className="list-inline-item">
                                                                                    <div className="inner-tile" data-toggle="tooltip"
                                                                                        data-placement="top" title="Creator">
                                                                                        <svg width="50" height="50"
                                                                                            viewBox="0 0 56 56" fill="none"
                                                                                            xmlns="http://www.w3.org/2000/svg">
                                                                                            <path
                                                                                                d="M54 28C54 42.3594 42.3594 54 28 54C13.6406 54 2 42.3594 2 28C2 13.6406 13.6406 2 28 2C42.3594 2 54 13.6406 54 28Z"
                                                                                                fill="#F6F6F6" stroke="white"
                                                                                                stroke-width="3" />
                                                                                            <path opacity="0.3" fill-rule="evenodd"
                                                                                                clip-rule="evenodd"
                                                                                                d="M28.0007 31.2448C23.6689 31.2448 15.0215 33.4188 15.0215 37.7344V40.9792H40.9798V37.7344C40.9798 33.4188 32.3325 31.2448 28.0007 31.2448ZM28.0007 28C31.5861 28 34.4902 25.0959 34.4902 21.5104C34.4902 17.9249 31.5861 15.0208 28.0007 15.0208C24.4152 15.0208 21.5111 17.9249 21.5111 21.5104C21.5111 25.0959 24.4152 28 28.0007 28Z"
                                                                                                fill="#35374A" />
                                                                                        </svg>
                                                                                    </div>
                                                                                </li>
                                                                                <li className="list-inline-item grey-1">
                                                                                    abdullah
                                                                                </li>
                                                                            </ul>
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row main-margin-sho">
                                                                <div className="col-sm-10 main-margin-sho">
                                                                    <p className="grey">Item</p>
                                                                </div>
                                                                <div className="col-sm-2 main-margin-sho">
                                                                    <p className="grey">Total</p>
                                                                </div>
                                                            </div>
                                                            <hr />
                                                            <div className="row main-margin-sho">
                                                                <div className="col-sm-9 main-margin-sho" >

                                                                    <p className="grey"><strong>Item Price</strong></p>
                                                                </div>

                                                                <div className="col-sm-3 main-margin-sho">
                                                                    <h6><span>23 BNB</span></h6>
                                                                </div>

                                                            </div>

                                                            <div className="row main-margin-sho">
                                                                <div className="col-sm-9 main-margin-sho">

                                                                    <p className="grey"><strong>Service Fees</strong></p>
                                                                </div>

                                                                <div className="col-sm-3 main-margin-sho">
                                                                    <h6><span>0.1 BNB</span></h6>
                                                                </div>

                                                            </div>
                                                            <div className="row main-margin-sho">
                                                                <div className="col-sm-9 main-margin-sho">

                                                                    <p className="grey"><strong>Total</strong></p>
                                                                </div>

                                                                <div className="col-sm-3 main-margin-sho">
                                                                    <h6><span className="clr">total 23 BNB</span></h6>
                                                                </div>

                                                            </div>
                                                            <hr />
                                                            <div className="row ptb20">
                                                                <div className="col-sm-12">
                                                                    <div className="custom-control custom-checkbox mr-sm-2">
                                                                        <input type="checkbox" className="custom-control-input"
                                                                            id="customControlAutosizing" />
                                                                        &nbsp;
                                                                        <label className="custom-control-label"
                                                                            for="customControlAutosizing"><small>I agree to Pegify's
                                                                                <span><a>Terms of Service</a></span></small></label>
                                                                    </div>
                                                                </div>
                                                            </div>


                                                            <div className="row">
                                                                <div className="col-sm-12 text-center">
                                                                    <ul className="list-inline">
                                                                        <li className="list-inline-item"><button className="btn-common"
                                                                            data-toggle="modal" data-target="#exampleModal2">Proceed to
                                                                            Payment</button></li>
                                                                        <div className="modal fade" id="exampleModal2" tabindex="-1"
                                                                            role="dialog" aria-labelledby="exampleModalLabel"
                                                                            aria-hidden="true">
                                                                            <div className="modal-dialog" role="document">
                                                                                <div className="modal-content">
                                                                                    <div className="modal-header">
                                                                                        <h4 className="mx-auto" >Success</h4>
                                                                                        <button type="button" className="close"
                                                                                            data-dismiss="modal" aria-label="Close">
                                                                                            <span aria-hidden="true">&times;</span>
                                                                                        </button>
                                                                                    </div>
                                                                                    <div className="modal-body">
                                                                                        <div className="row ptb20">
                                                                                            <div className="col-sm-12 text-center">
                                                                                                <h4>Your NFT Has Been Purchased
                                                                                                    Successfully</h4>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="modal-footer">
                                                                                        <button type="button"
                                                                                            className="btn btn-secondary"
                                                                                            data-dismiss="modal">OK</button>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                   */}
                                                        </div>
                                                    </div>
                                                </div>
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

export default NftDetail;
