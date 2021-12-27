
import React from "react";
import './notification.scss';
// reactstrap components
function PushNotification() {

    // function importAll(r) {
    //     let images = {};
    //     r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    //     return images;
    // }

    // const images = importAll(require.context('assets/img/userflow', false, /\.(png|jpe?g|svg)$/));
    return (
        <>
            <div className="content">
                <section className="addbanner send-notifications card">
                    <form>
                        <div className="inner-submit-lower-div">
                            <div className="row">
                                <div className="col-lg-7">
                                    <div className="row">
                                        <div className="col-12 main-send-message">
                                            <h3>Send Manual message</h3>
                                            <div className="form-group">
                                                <label className="padd-top" for="example">Message</label>
                                                <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Your message" rows="5"></textarea>
                                                {/* {Object.keys(projectNameError).map((key)=>{
                                                          console.log("key",key);
                                                         return <p className="inputErrors">{projectNameError[key]}</p>
                                                          })} */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="form-group choose-category">
                                                <label className="form-check-label" for="exampleRadios1">
                                                    Send to Platform
                                                </label>
                                            </div>
                                        </div>
                                        <div className=" col-md-4 col-12">
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                                                <label className="form-check-label" for="exampleRadios1">
                                                    All
                                                </label>
                                            </div>
                                        </div>
                                        <div className=" col-md-4 col-12">
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                                                <label className="form-check-label" for="exampleRadios1">
                                                    Android Only
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-12">
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                                                <label className="form-check-label" for="exampleRadios1">
                                                    IOS only
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <div className="videopage">
                                                <button className="red-b">Publish</button>
                                                <button className="red-w">Cancel</button>
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

export default PushNotification;
