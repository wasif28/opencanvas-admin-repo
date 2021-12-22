
import React, { useState } from "react";
import './editweb.scss';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
// reactstrap components
import user1 from "assets/img/userflow/user1.png";
import user2 from "assets/img/userflow/user2.png";
import arrowdown from "assets/img/userflow/arrow-down.png";
import user3 from "assets/img/userflow/arrow-down-green.png";
import user6 from "assets/img/userflow/id-card.png";
import user4 from "assets/img/userflow/user-detail.png";
import user5 from "assets/img/userflow/copy 1.png";
import { Link } from "react-router-dom";
function EditWebsites() {

    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
    }
    const images = importAll(require.context('assets/img/fudgeimages', false, /\.(png|jpe?g|svg)$/));
    return (
        <>
            <div className="content">
                <div className="main-edit-page card">
                    <div className="container-fluid">

                        {/* Logo */}
                        <ValidatorForm className="form-contact"
                        //  onSubmit={handleSubmit}
                        // onError={errors => console.log(errors)}
                        >
                            <div className="inner-images cards">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="top-head">
                                            <h4>Logo</h4>
                                        </div>

                                        <div className="main-logo">
                                            <div>
                                                <label>Main logo</label>
                                                <div className="left-side">
                                                    <img src={`${images['logo.svg']['default']}`} alt="" />
                                                </div>
                                            </div>
                                            <div>
                                                <label>Fav icon</label>
                                                <div className="right-side">
                                                    <img src={`${images['Vector.png']['default']}`} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Navigation Menu */}

                            <div className="inner-images cards">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="top-head">
                                            <h4>Navigation Menu</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="main-button">
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <label className="pt-4">Background Image</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                     
                                        <div className="col-sm-3">
                                            <div className="input-add-more">
                                                <div className="main-add d-flex justify-content-center align-items-center">
                                                    <input type="text" className="form-control input-design" id="example" aria-describedby="text" placeholder="Home" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-5">
                                            <div className="d-flex justify-content-center align-items-center ">
                                                <div class="dropdown button-drop w-100">
                                                    <button class="main-button" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        FUDGE.COM/INDEX.HTML <img src={`${images['Vector2.png']['default']}`} alt="" />
                                                    </button>
                                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                        <a class="dropdown-item" href="#">Another action</a>
                                                        <a class="dropdown-item" href="#">Another action</a>
                                                        <a class="dropdown-item" href="#">Another action</a>
                                                    </div>
                                                </div>
                                                <img src={`${images['ant-design_close-circle-outlined.png']['default']}`} className="pl-3" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="buttonss">
                                                <button> <img src={`${images['Vector1.png']['default']}`} className="pl-3" alt="" />ADD more</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Header */}

                            <div className="inner-images cards">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="top-head">
                                            <h4>Header</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="main-button">
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <label className="pt-4">Background Image</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div class="form-group rightside-for-group">
                                                <div className="dashed-border-new">
                                                    <div className="main-image-div">
                                                        <img src={`${images['addvid2.png']}`} alt="" />
                                                        <div className="choose-filessss">
                                                            <p className="p-0">Drag & drop or <span></span></p>
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

                                <div className="main-button">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="main-new-in">
                                                {/* <div class="form-group">
                                                    <label for="example">Heading 1</label>
                                                    <input type="text" class="form-control input-design" id="example" aria-describedby="text" placeholder="Primary" />
                                                </div> */}
                                                <div class="form-group">
                                                                        <label For="name">Heading 1</label>
                                                                        <TextValidator
                                                                            fullWidth
                                                                            type="text"
                                                                            name="primary"
                                                                            autoComplet="off"
                                                                            // value={allFormData.formData.itemname}
                                                                            // onChange={handleChange}
                                                                            variant="outlined"
                                                                            placeholder="Primary"
                                                                            // className="input-fields input-design"
                                                                            // validators={['required']}
                                                                            // errorMessages={['Item Name is required']}
                                                                        />
                                                                    </div>
                                            </div>
                                            <div className="main-new-in">
                                                {/* <div class="form-group">
                                                    <label for="example">Heading 2</label>
                                                    <input type="text" class="form-control input-design" id="example" aria-describedby="text" placeholder="The #1 Community Based NFT Platform" />
                                                </div> */}
                                                <div class="form-group">
                                                                        <label For="name">Heading 2</label>
                                                                        <TextValidator
                                                                            fullWidth
                                                                            type="text"
                                                                            name="primary"
                                                                            autoComplet="off"
                                                                            // value={allFormData.formData.itemname}
                                                                            // onChange={handleChange}
                                                                            variant="outlined"
                                                                            placeholder="The #1 Community Based NFT Platform"
                                                                            // className="input-fields input-design"
                                                                            // validators={['required']}
                                                                            // errorMessages={['Item Name is required']}
                                                                        />
                                                                    </div>
                                            </div>
                                            <div className="main-new-ins">
                                                <div class="form-group">
                                                    <label className="padd-top" for="example">Body Text</label>
                                                    <textarea class="form-control input-designss" id="exampleFormControlTextarea1" placeholder="Create, Sell, or Buy your NFTs with our biggest NFT
                                                    Community" rows="5"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div class="form-group rightside-for-group">
                                                <label for="exampleInputsymbol">Header Image</label>
                                                <div className="dashed-border-new">
                                                    <div className="main-image-div">
                                                        <img src={`${images['addvid2.png']}`} alt="" />
                                                        <div className="choose-filessss">
                                                            <p className="p-0">Drag & drop or <span></span></p>
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

                            {/* Explore */}


                            <div className="inner-images cards">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="top-head">
                                            <h4>Explore</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="main-button">
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div className="buttons-addmore">
                                                <div className="main-inner-button">
                                                    <h5>All</h5>
                                                </div>
                                                <div className="main-inner-button">
                                                    <h5>MODERN ART</h5>
                                                </div>
                                                <div className="main-inner-button">
                                                    <h5>CARTOON</h5>
                                                </div>
                                                <div className="main-inner-button">
                                                    <h5>PHOTOGRAPHY</h5>
                                                </div>
                                                <div className="main-inner-button">
                                                    <h5>TRADING CARD</h5>
                                                </div>
                                                <div className="main-inner-button">
                                                    <h5>SPORTS</h5>
                                                </div>
                                                <div className="main-inner-button">
                                                    <h5>MEME</h5>
                                                </div>
                                                <div className="main-inner-button">
                                                    <button> <img src={`${images['Vector1.png']['default']}`} className="pl-3" alt="" />Add More</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="inner-images cards">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="top-head ">
                                            <h4>VIDEO</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="main-button pt-4">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="main-new-in ">
                                                {/* <div class="form-group">
                                                    <label for="example">Heading</label>
                                                    <input type="text" class="form-control input-design" id="example" aria-describedby="text" placeholder="GET YOUR VERY FIRST NFT!" />
                                                </div> */}
                                                <div class="form-group">
                                                                        <label For="name">Heading</label>
                                                                        <TextValidator
                                                                            fullWidth
                                                                            type="text"
                                                                            name="primary"
                                                                            autoComplet="off"
                                                                            // value={allFormData.formData.itemname}
                                                                            // onChange={handleChange}
                                                                            variant="outlined"
                                                                            placeholder="GET YOUR VERY FIRST NFT!"
                                                                            // className="input-fields input-design"
                                                                            // validators={['required']}
                                                                            // errorMessages={['Item Name is required']}
                                                                        />
                                                                    </div>
                                            </div>
                                            <div className="main-new-ins">
                                                <div class="form-group">
                                                    <label className="padd-top" for="example">Body Text</label>
                                                    <textarea class="form-control input-designss" id="exampleFormControlTextarea1" placeholder="Here's how it's work" rows="5"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div class="form-group rightside-for-group">
                                                <label for="exampleInputsymbol">Video</label>
                                                <div className="dashed-border-new">
                                                    <div className="main-image-div">
                                                        <img src={`${images['addvid2.png']}`} alt="" />
                                                        <div className="choose-filessss">
                                                            <p className="p-0">Drag & drop or <span></span></p>
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

                            {/* Steps */}

                            <div className="inner-images cards">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="top-head ">
                                            <h4>Steps</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="main-button pt-4">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="main-new-in ">
                                                {/* <div class="form-group">
                                                    <label for="example">Heading</label>
                                                    <input type="text" class="form-control input-design" id="example" aria-describedby="text" placeholder="Setup your Wallet" />
                                                </div> */}
                                                <div class="form-group">
                                                                        <label For="name">Heading</label>
                                                                        <TextValidator
                                                                            fullWidth
                                                                            type="text"
                                                                            name="primary"
                                                                            autoComplet="off"
                                                                            // value={allFormData.formData.itemname}
                                                                            // onChange={handleChange}
                                                                            variant="outlined"
                                                                            placeholder="Setup your Wallet"
                                                                            // className="input-fields input-design"
                                                                            // validators={['required']}
                                                                            // errorMessages={['Item Name is required']}
                                                                        />
                                                                    </div>
                                            </div>
                                            <div className="main-new-ins">
                                                <div class="form-group">
                                                    <label className="padd-top" for="example">Body Text</label>
                                                    <textarea class="form-control input-designss" id="exampleFormControlTextarea1" placeholder="Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner. Learn about the wallets we support." rows="5"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div class="form-group rightside-for-group">
                                                <label for="exampleInputsymbol">Icon</label>
                                                <div className="dashed-border-new">
                                                    <div className="main-image-div">
                                                        <img src={`${images['addvid2.png']}`} alt="" />
                                                        <div className="choose-filessss">
                                                            <p className="p-0">Drag & drop or <span></span></p>
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

                                <div className="col-sm-12">
                                    <hr className="new-hr mt-5 mb-5"></hr>
                                </div>


                                <div className="main-button pt-4">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="main-new-in ">
                                                {/* <div class="form-group">
                                                    <label for="example">Heading</label>
                                                    <input type="text" class="form-control input-design" id="example" aria-describedby="text" placeholder="Add your NFT’s" />
                                                </div> */}
                                                <div class="form-group">
                                                                        <label For="name">Heading</label>
                                                                        <TextValidator
                                                                            fullWidth
                                                                            type="text"
                                                                            name="primary"
                                                                            autoComplet="off"
                                                                            // value={allFormData.formData.itemname}
                                                                            // onChange={handleChange}
                                                                            variant="outlined"
                                                                            placeholder="Add your NFT’s"
                                                                            // className="input-fields input-design"
                                                                            // validators={['required']}
                                                                            // errorMessages={['Item Name is required']}
                                                                        />
                                                                    </div>
                                            </div>
                                            <div className="main-new-ins">
                                                <div class="form-group">
                                                    <label className="padd-top" for="example">Body Text</label>
                                                    <textarea class="form-control input-designss" id="exampleFormControlTextarea1" placeholder="Upload your work (image, video, audio, or 3D art), add a title and description, and customize your NFTs with properties, stats, and unlockable content." rows="5"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div class="form-group rightside-for-group">
                                                <label for="exampleInputsymbol">Icon</label>
                                                <div className="dashed-border-new">
                                                    <div className="main-image-div">
                                                        <img src={`${images['addvid2.png']}`} alt="" />
                                                        <div className="choose-filessss">
                                                            <p className="p-0">Drag & drop or <span></span></p>
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


                                <div className="col-sm-12">
                                    <hr className="new-hr  mt-5 mb-5"></hr>
                                </div>


                                <div className="main-button pt-4">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="main-new-in ">
                                                {/* <div class="form-group">
                                                    <label for="example">Heading</label>
                                                    <input type="text" class="form-control input-design" id="example" aria-describedby="text" placeholder="Setup your Wallet" />
                                                </div> */}
                                                <div class="form-group">
                                                                        <label For="name">Heading</label>
                                                                        <TextValidator
                                                                            fullWidth
                                                                            type="text"
                                                                            name="primary"
                                                                            autoComplet="off"
                                                                            // value={allFormData.formData.itemname}
                                                                            // onChange={handleChange}
                                                                            variant="outlined"
                                                                            placeholder="Setup your Wallet"
                                                                            // className="input-fields input-design"
                                                                            // validators={['required']}
                                                                            // errorMessages={['Item Name is required']}
                                                                        />
                                                                    </div>
                                            </div>
                                            <div className="main-new-ins">
                                                <div class="form-group">
                                                    <label className="padd-top" for="example">Body Text</label>
                                                    <textarea class="form-control input-designss" id="exampleFormControlTextarea1" placeholder="Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs, and we help you sell them!" rows="5"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div class="form-group rightside-for-group">
                                                <label for="exampleInputsymbol">Icon</label>
                                                <div className="dashed-border-new">
                                                    <div className="main-image-div">
                                                        <img src={`${images['addvid2.png']}`} alt="" />
                                                        <div className="choose-filessss">
                                                            <p className="p-0">Drag & drop or <span></span></p>
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

                            {/* Featured Artist */}

                            <div className="inner-images cards">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="top-head">
                                            <h4>FEATURED ARTIST</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="main-button">
                                    <div className="row mt-4">

                                        <div className="col-sm-6">
                                            <div className="main-new-in">
                                                {/* <div class="form-group">
                                                    <label for="example">Artist Name</label>
                                                    <input type="text" class="form-control input-design" id="example" aria-describedby="text" placeholder="Adijavar Maccaroni" />
                                                </div> */}
                                                <div class="form-group">
                                                                        <label For="name">Artist Name</label>
                                                                        <TextValidator
                                                                            fullWidth
                                                                            type="text"
                                                                            name="primary"
                                                                            autoComplet="off"
                                                                            // value={allFormData.formData.itemname}
                                                                            // onChange={handleChange}
                                                                            variant="outlined"
                                                                            placeholder="Adijavar Maccaroni"
                                                                            // className="input-fields input-design"
                                                                            // validators={['required']}
                                                                            // errorMessages={['Item Name is required']}
                                                                        />
                                                                    </div>
                                            </div>
                                            <div className="main-new-ins">
                                                <div class="form-group">
                                                    <label className="padd-top" for="example">Artist Discription</label>
                                                    <textarea class="form-control input-designss" id="exampleFormControlTextarea1" placeholder="I believe that love is difficult, but worth trying" rows="5"></textarea>
                                                </div>
                                            </div>
                                            <div className="main-new-in">
                                                {/* <div class="form-group">
                                                    <label for="example">Facebook</label>
                                                    <input type="text" class="form-control input-design" id="example" aria-describedby="text" placeholder="www.facebook.com/Adijavar Maccaroni" />
                                                </div> */}
                                                <div class="form-group">
                                                                        <label For="name">AFacebook</label>
                                                                        <TextValidator
                                                                            fullWidth
                                                                            type="text"
                                                                            name="primary"
                                                                            autoComplet="off"
                                                                            // value={allFormData.formData.itemname}
                                                                            // onChange={handleChange}
                                                                            variant="outlined"
                                                                            placeholder="www.facebook.com/Adijavar Maccaroni"
                                                                            // className="input-fields input-design"
                                                                            // validators={['required']}
                                                                            // errorMessages={['Item Name is required']}
                                                                        />
                                                                    </div>
                                            </div>
                                            <div className="main-new-in">
                                                {/* <div class="form-group">
                                                    <label for="example">Twitter</label>
                                                    <input type="text" class="form-control input-design" id="example" aria-describedby="text" placeholder="www.twitter.com/Adijavar Maccaroni" />
                                                </div> */}
                                                <div class="form-group">
                                                                        <label For="name">Twitter</label>
                                                                        <TextValidator
                                                                            fullWidth
                                                                            type="text"
                                                                            name="primary"
                                                                            autoComplet="off"
                                                                            // value={allFormData.formData.itemname}
                                                                            // onChange={handleChange}
                                                                            variant="outlined"
                                                                            placeholder="wwww.twitter.com/Adijavar Maccaroni"
                                                                            // className="input-fielk.com/Adijavar Maccaronids input-design"
                                                                            // validators={['required']}
                                                                            // errorMessages={['Item Name is required']}
                                                                        />
                                                                    </div>
                                            </div>
                                            <div className="main-new-in">
                                                {/* <div class="form-group">
                                                    <label for="example">Instagram</label>
                                                    <input type="text" class="form-control input-design" id="example" aria-describedby="text" placeholder="www.Instagram.com/Adijavar Maccaroni" />
                                                </div> */}
                                                <div class="form-group">
                                                                        <label For="name">Instagram</label>
                                                                        <TextValidator
                                                                            fullWidth
                                                                            type="text"
                                                                            name="primary"
                                                                            autoComplet="off"
                                                                            // value={allFormData.formData.itemname}
                                                                            // onChange={handleChange}
                                                                            variant="outlined"
                                                                            placeholder="ww.Instagram.com/Adijavar Maccaroni"
                                                                            // className="input-fields input-design"
                                                                            // validators={['required']}
                                                                            // errorMessages={['Item Name is required']}
                                                                        />
                                                                    </div>
                                            </div>
                                            <div className="main-new-in">
                                                {/* <div class="form-group">
                                                    <label for="example">Website</label>
                                                    <input type="text" class="form-control input-design" id="example" aria-describedby="text" placeholder="www.AdijavarMaccaroni.com" />
                                                </div> */}
                                                <div class="form-group">
                                                                        <label For="name">Website</label>
                                                                        <TextValidator
                                                                            fullWidth
                                                                            type="text"
                                                                            name="primary"
                                                                            autoComplet="off"
                                                                            // value={allFormData.formData.itemname}
                                                                            // onChange={handleChange}
                                                                            variant="outlined"
                                                                            placeholder="www.AdijavarMaccaroni.com"
                                                                            // className="input-fields input-design"
                                                                            // validators={['required']}
                                                                            // errorMessages={['Item Name is required']}
                                                                        />
                                                                    </div>
                                            </div>


                                        </div>
                                        <div className="col-sm-6">
                                            <div class="form-group rightside-for-group">
                                                <label for="exampleInputsymbol">Header Image</label>
                                                <div className="dashed-border-new">
                                                    <div className="main-image-div">
                                                        <img src={`${images['addvid2.png']}`} alt="" />
                                                        <div className="choose-filessss">
                                                            <p className="p-0">Drag & drop or <span></span></p>
                                                            <form action="" className="style-actionn">
                                                                <input type="file" className="custom-file-inputt" id="myFile" name="filename" />
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="inner-images cards">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="top-head">
                                            <h4>FEATURED ARTIST</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="main-button">
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <label className="pt-4">Image</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div class="form-group rightside-for-group">
                                                <div className="dashed-border-new">
                                                    <div className="main-image-div">
                                                        <img src={`${images['addvid2.png']}`} alt="" />
                                                        <div className="choose-filessss">
                                                            <p className="p-0">Drag & drop or <span></span></p>
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

                            {/* Featured Artist */}

                            <div className="inner-images cards">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="top-head">
                                            <h4>COMMUNITY</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="main-button">
                                    <div className="row mt-4">

                                        <div className="col-sm-6">
                                            <div className="main-new-in">
                                                {/* <div class="form-group">
                                                    <label for="example">Heading</label>
                                                    <input type="text" class="form-control input-design" id="example" aria-describedby="text" placeholder="Join The Fudge Community" />
                                                </div> */}
                                                <div class="form-group">
                                                                        <label For="name">Heading</label>
                                                                        <TextValidator
                                                                            fullWidth
                                                                            type="text"
                                                                            name="primary"
                                                                            autoComplet="off"
                                                                            // value={allFormData.formData.itemname}
                                                                            // onChange={handleChange}
                                                                            variant="outlined"
                                                                            placeholder="Join The Fudge Community"
                                                                            // className="input-fields input-design"
                                                                            // validators={['required']}
                                                                            // errorMessages={['Item Name is required']}
                                                                        />
                                                                    </div>
                                            </div>
                                            <div className="main-new-ins">
                                                <div class="form-group">
                                                    <label className="padd-top" for="example">Body Text</label>
                                                    <textarea class="form-control input-designss" id="exampleFormControlTextarea1" placeholder="Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating Fudge." rows="5"></textarea>
                                                </div>
                                            </div>
                                            <div className="main-new-in">
                                                <div class="form-group">
                                                    <label for="example">Facebook</label>
                                                    <input type="text" class="form-control input-design" id="example" aria-describedby="text" placeholder="www.facebook.com/Adijavar Maccaroni" />
                                                </div>
                                                <div class="form-group">
                                                                        <label For="name">Facebook</label>
                                                                        <TextValidator
                                                                            fullWidth
                                                                            type="text"
                                                                            name="primary"
                                                                            autoComplet="off"
                                                                            // value={allFormData.formData.itemname}
                                                                            // onChange={handleChange}
                                                                            variant="outlined"
                                                                            placeholder="www.facebook.com/Adijavar Maccaroni"
                                                                            // className="input-fields input-design"
                                                                            // validators={['required']}
                                                                            // errorMessages={['Item Name is required']}
                                                                        />
                                                                    </div>
                                            </div>
                                            <div className="main-new-in">
                                                <div class="form-group">
                                                    <label for="example">Twitter</label>
                                                    <input type="text" class="form-control input-design" id="example" aria-describedby="text" placeholder="www.twitter.com/Adijavar Maccaroni" />
                                                </div>
                                                <div class="form-group">
                                                                        <label For="name">Twitter</label>
                                                                        <TextValidator
                                                                            fullWidth
                                                                            type="text"
                                                                            name="primary"
                                                                            autoComplet="off"
                                                                            // value={allFormData.formData.itemname}
                                                                            // onChange={handleChange}
                                                                            variant="outlined"
                                                                            placeholder="www.twitter.com/Adijavar Maccaroni"
                                                                            // className="input-fields input-design"
                                                                            // validators={['required']}
                                                                            // errorMessages={['Item Name is required']}
                                                                        />
                                                                    </div>
                                            </div>
                                            <div className="main-new-in">
                                                {/* <div class="form-group">
                                                    <label for="example">Instagram</label>
                                                    <input type="text" class="form-control input-design" id="example" aria-describedby="text" placeholder="www.Instagram.com/Adijavar Maccaroni" />
                                                </div> */}
                                                <div class="form-group">
                                                                        <label For="name">Instagram</label>
                                                                        <TextValidator
                                                                            fullWidth
                                                                            type="text"
                                                                            name="primary"
                                                                            autoComplet="off"
                                                                            // value={allFormData.formData.itemname}
                                                                            // onChange={handleChange}
                                                                            variant="outlined"
                                                                            placeholder="ww.Instagram.com/Adijavar Maccaroni"
                                                                            // className="input-fields input-design"
                                                                            // validators={['required']}
                                                                            // errorMessages={['Item Name is required']}
                                                                        />
                                                                    </div>
                                            </div>
                                            <div className="main-new-in">
                                                {/* <div class="form-group">
                                                    <label for="example">Website</label>
                                                    <input type="text" class="form-control input-design" id="example" aria-describedby="text" placeholder="www.AdijavarMaccaroni.com" />
                                                </div> */}
                                                <div class="form-group">
                                                                        <label For="name">Website</label>
                                                                        <TextValidator
                                                                            fullWidth
                                                                            type="text"
                                                                            name="primary"
                                                                            autoComplet="off"
                                                                            // value={allFormData.formData.itemname}
                                                                            // onChange={handleChange}
                                                                            variant="outlined"
                                                                            placeholder="www.AdijavarMaccaroni.com"
                                                                            // className="input-fields input-design"
                                                                            // validators={['required']}
                                                                            // errorMessages={['Item Name is required']}
                                                                        />
                                                                    </div>
                                            </div>


                                        </div>
                                        <div className="col-sm-6">
                                            <div class="form-group rightside-for-group">
                                                <label for="exampleInputsymbol">Header Image</label>
                                                <div className="dashed-border-new">
                                                    <div className="main-image-div">
                                                        <img src={`${images['addvid2.png']}`} alt="" />
                                                        <div className="choose-filessss">
                                                            <p className="p-0">Drag & drop or <span></span></p>
                                                            <form action="" className="style-actionn">
                                                                <input type="file" className="custom-file-inputt" id="myFile" name="filename" />
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Footer */}

                            <div className="inner-images cards">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="top-head">
                                            <h4>FOOTER</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="main-button">
                                    <div className="row mt-4">
                                        <div className="col-sm-6 ">
                                            <div className="main-button">
                                                <label className="pt-4">Quick Links</label>
                                                <div className="row">
                                                    <div className="col-xl-4 col-12 p-0">
                                                        <div className="input-add-more">
                                                            <div className="main-add d-flex justify-content-center align-items-center">
                                                                <input type="text" className="form-control input-design" id="example" aria-describedby="text" placeholder="Home" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-8 col-12">
                                                        <div className="d-flex justify-content-center align-items-center ">
                                                            <div class="dropdown button-drop w-100">
                                                                <button class="main-button" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                    FUDGE.COM <img src={`${images['Vector2.png']['default']}`} alt="" />
                                                                </button>
                                                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                    <a class="dropdown-item" href="#">Another action</a>
                                                                    <a class="dropdown-item" href="#">Another action</a>
                                                                    <a class="dropdown-item" href="#">Another action</a>
                                                                </div>
                                                            </div>
                                                            <img src={`${images['ant-design_close-circle-outlined.png']['default']}`} className="pl-3" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-sm-6 p-0">
                                                        <div className="buttonss mb-5">
                                                            <button> <img src={`${images['Vector1.png']['default']}`} className="pl-3" alt="" />ADD more</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="main-new-in">
                                                {/* <div class="form-group">
                                                    <label for="example">Facebook</label>
                                                    <input type="text" class="form-control input-design" id="example" aria-describedby="text" placeholder="www.facebook.com/Adijavar Maccaroni" />
                                                </div> */}
                                                <div class="form-group">
                                                                        <label For="name">Facebook</label>
                                                                        <TextValidator
                                                                            fullWidth
                                                                            type="text"
                                                                            name="primary"
                                                                            autoComplet="off"
                                                                            // value={allFormData.formData.itemname}
                                                                            // onChange={handleChange}
                                                                            variant="outlined"
                                                                            placeholder="www.facebook.com/Adijavar Maccaroni"
                                                                            // className="input-fields input-design"
                                                                            // validators={['required']}
                                                                            // errorMessages={['Item Name is required']}
                                                                        />
                                                                    </div>
                                            </div>
                                            <div className="main-new-in">
                                                {/* <div class="form-group">
                                                    <label for="example">Twitter</label>
                                                    <input type="text" class="form-control input-design" id="example" aria-describedby="text" placeholder="www.twitter.com/Adijavar Maccaroni" />
                                                </div> */}
                                                <div class="form-group">
                                                                        <label For="name">Twitter</label>
                                                                        <TextValidator
                                                                            fullWidth
                                                                            type="text"
                                                                            name="primary"
                                                                            autoComplet="off"
                                                                            // value={allFormData.formData.itemname}
                                                                            // onChange={handleChange}
                                                                            variant="outlined"
                                                                            placeholder="www.twitter.com/Adijavar Maccaroni"
                                                                            // className="input-fields input-design"
                                                                            // validators={['required']}
                                                                            // errorMessages={['Item Name is required']}
                                                                        />
                                                                    </div>
                                            </div>
                                            <div className="main-new-in">
                                                {/* <div class="form-group">
                                                    <label for="example">Instagram</label>
                                                    <input type="text" class="form-control input-design" id="example" aria-describedby="text" placeholder="www.Instagram.com/Adijavar Maccaroni" />
                                                </div> */}
                                                <div class="form-group">
                                                                        <label For="name">Instagram</label>
                                                                        <TextValidator
                                                                            fullWidth
                                                                            type="text"
                                                                            name="primary"
                                                                            autoComplet="off"
                                                                            // value={allFormData.formData.itemname}
                                                                            // onChange={handleChange}
                                                                            variant="outlined"
                                                                            placeholder="www.Instagram.com/Adijavar Maccaroni"
                                                                            // className="input-fields input-design"
                                                                            // validators={['required']}
                                                                            // errorMessages={['Item Name is required']}
                                                                        />
                                                                    </div>
                                            </div>
                                            <div className="main-new-in">
                                                {/* <div class="form-group">
                                                    <label for="example">Website</label>
                                                    <input type="text" class="form-control input-design" id="example" aria-describedby="text" placeholder="www.AdijavarMaccaroni.com" />
                                                </div> */}
                                                <div class="form-group">
                                                                        <label For="name">Website</label>
                                                                        <TextValidator
                                                                            fullWidth
                                                                            type="text"
                                                                            name="primary"
                                                                            autoComplet="off"
                                                                            // value={allFormData.formData.itemname}
                                                                            // onChange={handleChange}
                                                                            variant="outlined"
                                                                            placeholder="www.AdijavarMaccaroni.com"
                                                                            // className="input-fields input-design"
                                                                            // validators={['required']}
                                                                            // errorMessages={['Item Name is required']}
                                                                        />
                                                                    </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div class="form-group rightside-for-group">
                                                <label for="exampleInputsymbol">Footer Logo</label>
                                                <div className="dashed-border-new">
                                                    <div className="main-image-div">
                                                        <img src={`${images['addvid2.png']}`} alt="" />
                                                        <div className="choose-filessss">
                                                            <p className="p-0">Drag & drop or <span></span></p>
                                                            <form action="" className="style-actionn">
                                                                <input type="file" className="custom-file-inputt" id="myFile" name="filename" />
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </ValidatorForm>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EditWebsites;
