
import React from "react";
import './setting.scss';
// reactstrap components
import { Link } from "react-router-dom";
function Settings() {

    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
    }

    const images = importAll(require.context('assets/img/userflow', false, /\.(png|jpe?g|svg)$/));
    return (
        <>
            <div className="content">
                <div className="container-fluid">
                    <section className="settings card">
                        <div className="tabs-head">
                            <div class="row">
                                <div className="nav-div">
                                    <div class="col-xl-4 col-lg-6 offset-lg-0 col-md-8 offset-md-0 p-0">
                                        <nav>
                                            <div class="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                                                <a class="nav-item nav-link active pl-0" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Splash Screen</a>
                                                <a class="nav-item nav-link pl-0" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Illustrations</a>
                                            </div>
                                        </nav>
                                    </div>
                                </div>
                                <div className="nav-divs">
                                    <div className="col-sm-12 pl-0 pr-0">
                                        <div className="down-town">
                                            <div class="tab-content py-3  px-sm-0" id="nav-tabContent">
                                                <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                                    <div className="row">
                                                        <div className="col-xl-10 col-lg-12 p-0 pr-0">
                                                            <div className="row">
                                                                <div className="col-lg-5 col-12 p-0">
                                                                    <div class="form-group rightside-for-group">
                                                                        <label for="exampleInputsymbol">Upload video</label>
                                                                        <div className="dashed-border-new">
                                                                            <div className="main-image-div">
                                                                                <img src={`${images['addvid2.png']['default']}`} alt="" />
                                                                                <div className="choose-filessss">
                                                                                    <p>Drag & drop or <span></span></p>
                                                                                    <form action="" className="style-actionn">
                                                                                        <input type="file" className="custom-file-inputt" id="myFile" name="filename" />
                                                                                    </form>
                                                                                </div>
                                                                                {/* <img src={logo ? logo : require("../../static/images/submit-form/cloud.png")} alt="" /> */}
                                                                                {/* {selectedImg?renderPhotos(selectedImg):null} */}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-1 col-12">
                                                                </div>
                                                                <div className="col-lg-5 col-12 p-0">
                                                                    <div class="form-group rightside-for-group">
                                                                        <label for="exampleInputsymbol">Upload video</label>
                                                                        <div className="dashed-border-new">
                                                                            <div className="main-image-div">
                                                                                <img src={`${images['addvid2.png']['default']}`} alt="" />
                                                                                <div className="choose-filessss">
                                                                                    <p>Drag & drop or <span></span></p>
                                                                                    <form action="" className="style-actionn">
                                                                                        <input type="file" className="custom-file-inputt" id="myFile" name="filename" />
                                                                                    </form>
                                                                                </div>
                                                                                {/* <img src={logo ? logo : require("../../static/images/submit-form/cloud.png")} alt="" /> */}
                                                                                {/* {selectedImg?renderPhotos(selectedImg):null} */}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="main-div-legion">
                                                        <h3>Recent Backgrounds</h3>
                                                        <div className="legion-main-pro">
                                                            <div className="images-legion">
                                                                <img src={`${images['lrgion.png']['default']}`} alt="" />
                                                            </div>
                                                            <div className="images-legion">
                                                                <img src={`${images['lrgion.png']['default']}`} alt="" />
                                                            </div>
                                                            <div className="images-legion">
                                                                <img src={`${images['lrgion.png']['default']}`} alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="tab-pane fade show " id="nav-profile" role="tabpanel" aria-labelledby="nav-home-tab">
                                                    <div className="main-second-cards">
                                                        <h3>Verify Email Screen</h3>
                                                        <div className="row">
                                                            <div className="col-lg-8 pl-0 pr-0">
                                                                <div className="col-12">
                                                                    <div class="form-group">
                                                                        <label for="example">Title</label>
                                                                        <input type="text" class="form-control" id="example" aria-describedby="text" placeholder="Enter Title" />
                                                                        {/* {Object.keys(projectNameError).map((key)=>{
                                                          console.log("key",key);
                                                         return <p className="inputErrors">{projectNameError[key]}</p>
                                                          })} */}
                                                                    </div>
                                                                </div>
                                                                <div className="col-12 ">
                                                                    <div class="form-group">
                                                                        <label className="padd-top" for="example">Description</label>
                                                                        <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Description" rows="5"></textarea>
                                                                        {/* {Object.keys(projectNameError).map((key)=>{
                                                          console.log("key",key);
                                                         return <p className="inputErrors">{projectNameError[key]}</p>
                                                          })} */}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-4">
                                                                <div class="form-group rightside-for-group">
                                                                    <label for="exampleInputsymbol">Verify Email Illustration</label>
                                                                    <div className="dashed-border-new">
                                                                        <div className="main-image-div">
                                                                            <img src={`${images['addvid2.png']['default']}`} alt="" />
                                                                            <p>Drag & drop or <span><Link>Browser</Link></span></p>
                                                                            {/* <img src={logo ? logo : require("../../static/images/submit-form/cloud.png")} alt="" /> */}
                                                                            {/* {selectedImg?renderPhotos(selectedImg):null} */}
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="main-second-card">
                                                        <h3>Congratulations  Screen</h3>
                                                        <div className="row">
                                                            <div className="col-lg-8 pl-0 pr-0">
                                                                <div className="col-12">
                                                                    <div class="form-group">
                                                                        <label for="example">Title</label>
                                                                        <input type="text" class="form-control" id="example" aria-describedby="text" placeholder="Enter Title" />
                                                                        {/* {Object.keys(projectNameError).map((key)=>{
                                                          console.log("key",key);
                                                         return <p className="inputErrors">{projectNameError[key]}</p>
                                                          })} */}
                                                                    </div>
                                                                </div>
                                                                <div className="col-12 ">
                                                                    <div class="form-group">
                                                                        <label className="padd-top" for="example">Description</label>
                                                                        <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Description" rows="5"></textarea>
                                                                        {/* {Object.keys(projectNameError).map((key)=>{
                                                          console.log("key",key);
                                                         return <p className="inputErrors">{projectNameError[key]}</p>
                                                          })} */}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-4">
                                                                <div class="form-group rightside-for-group">
                                                                    <label for="exampleInputsymbol">Congratulations Illustration</label>
                                                                    <div className="dashed-border-new">
                                                                        <div className="main-image-div">
                                                                            <img src={`${images['addvid2.png']['default']}`} alt="" />
                                                                            <div className="choose-filessss">
                                                                                <p>Drag & drop or <span></span></p>
                                                                                <form action="" className="style-actionn">
                                                                                    <input type="file" className="custom-file-inputt" id="myFile" name="filename" />
                                                                                </form>
                                                                            </div>
                                                                            {/* <img src={logo ? logo : require("../../static/images/submit-form/cloud.png")} alt="" /> */}
                                                                            {/* {selectedImg?renderPhotos(selectedImg):null} */}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-12">
                                                                <div class="form-group">
                                                                    <div className="videopage">
                                                                        <button className="red-b">Publish</button>
                                                                        <button className="red-w">Cancel</button>
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
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}

export default Settings;
