
import React from "react";
import './banner.scss';
// reactstrap components
import { Link } from "react-router-dom";
function AddBanners() {

    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
    }

    const images = importAll(require.context('assets/img/userflow', false, /\.(png|jpe?g|svg)$/));
    return (
        <>
            <div className="content">
                <section className="addbanner card">
                    <form>
                        <div className="inner-submit-lower-div">
                            <div class="row">
                                <div class="col-lg-8">
                                    <div className="row">
                                        <div className="row">
                                            <div className="col-12">
                                                <div class="form-group">
                                                    <label for="example">Banner Title</label>
                                                    <input type="text" class="form-control" id="example" aria-describedby="text" placeholder="Enter title of the banner" />
                                                    {/* {Object.keys(projectNameError).map((key)=>{
                                                          console.log("key",key);
                                                         return <p className="inputErrors">{projectNameError[key]}</p>
                                                          })} */}
                                                </div>
                                            </div>
                                            <div className="col-12 ">
                                                <div class="form-group">
                                                    <label className="padd-top" for="example">Banner Description</label>
                                                    <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Enter description of the banner" rows="5"></textarea>
                                                    {/* {Object.keys(projectNameError).map((key)=>{
                                                          console.log("key",key);
                                                         return <p className="inputErrors">{projectNameError[key]}</p>
                                                          })} */}
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-12">
                                                <div class="form-group">
                                                    <label className="padd-top" for="example">Link</label>
                                                    <input type="text" class="form-control" id="example" aria-describedby="text" placeholder="Enter link" />
                                                    {/* {Object.keys(projectNameError).map((key)=>{
                                                          console.log("key",key);
                                                         return <p className="inputErrors">{projectNameError[key]}</p>
                                                          })} */}
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-12">
                                                <div class="form-group">
                                                    <label className="padd-top" for="example">Page</label>
                                                    <input type="text" class="form-control" id="example" aria-describedby="text" placeholder="Select Page" />
                                                    {/* {Object.keys(projectNameError).map((key)=>{
                                                          console.log("key",key);
                                                         return <p className="inputErrors">{projectNameError[key]}</p>
                                                          })} */}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-12">
                                                <div class="form-group choose-category">
                                                    <label class="form-check-label" for="exampleRadios1">
                                                    Choose Category
                                                    </label>
                                                </div>
                                            </div>
                                            <div className=" col-md-6 col-12">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                                                    <label class="form-check-label" for="exampleRadios1">
                                                    News Banner
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-12">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                                                    <label class="form-check-label" for="exampleRadios1">
                                                    Game Banner
                                                    </label>
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
                                <div class="col-lg-4">
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
                    </form>
                </section>
            </div>
        </>
    );
}

export default AddBanners;
