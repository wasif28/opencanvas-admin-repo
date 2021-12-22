import React from "react";
import './useredit.scss';
// reactstrap components

function Editprofiless() {
    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
    }
    const images = importAll(require.context('assets/img/userflow', false, /\.(png|jpe?g|svg)$/));
    return (
        <>
            <div className="content">
                <section className="leaderdetails edit-page-profile">
                  <h4>Edit Profile</h4>
                </section>
            </div>
        </>
    );
}

export default Editprofiless;