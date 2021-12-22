
import React from "react";
import './video.scss';
// reactstrap components
function VideoDetails() {

    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
    }
    const images = importAll(require.context('assets/img/userflow', false, /\.(png|jpe?g|svg)$/));
    return (
        <>
            <div className="content">
                <section className="videos-detail card">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="video-title">
                                    <h4>Video Title</h4>
                                    <div className="title">
                                        <h6>Hacker Returns Stolen Cryptocurrency in Heist Reversal</h6>
                                    </div>
                                </div>
                                <div className="description">
                                    <h4>Video Description</h4>
                                    <div className="inner-dec">
                                        <p>The hacker who plundered more than $600 million of crypto assets from a decentralized finance platform known as Poly Network has now returned almost all of the money.</p>
                                        <p className="pad">The assets were transferred back to blockchain addresses controlled by Poly Network on Friday, according to an emailed statement from the company. All that remains outstanding are $33 million of tether tokens, frozen by the company Tether in the effort to recover the stolen goods.</p>
                                    </div>
                                </div>
                                <div className="RUC">
                                    <div className="RUC-inner">
                                        <p>Video Reward</p>
                                        <h6>50 LGX</h6>
                                    </div>
                                    <div className="RUC-inner">
                                        <p>Category</p>
                                        <h6>BNB</h6>
                                    </div>
                                    <div className="RUC-inner">
                                        <p>Video Duration</p>
                                        <h6>15:21</h6>
                                    </div>
                                    <div className="RUC-inner">
                                        <p>Upload Date </p>
                                        <h6>Aug 12, 2021</h6>
                                    </div>
                                </div>
                                <div className="buttons">
                                    <button type="button" className="red-b">Unpublish</button>
                                    <button type="button" className="red-w">Edit</button>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="image">
                                    <h4>Video</h4>
                                    <img src={`${images['userdetail1.png']['default']}`} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default VideoDetails;
