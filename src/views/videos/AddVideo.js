
import React, { useState, useEffect } from "react";
import './video.scss';
import axios from 'axios';
// reactstrap components
import FileThumbnail from "./FileThumbnail";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";
function AddVideo() {
    const [myFiles, setMyFiles] = useState([]);
    const [submitted, setSubmitted] = useState(false);

    const send = event => {
        const data = new FormData();
        data.append("file", myFiles)
        console.log("data", data)
    }

    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
    }

    useEffect(() => {
        send()
    }, [])

    function handleChange(event) {
        console.log(`Selected file - ${event.target.files[0].name}`);
        setMyFiles([...myFiles, event.target.files[0]]);
    }

    const files = myFiles.map((file, key) => {
        return (
            <div key={file.path} style={{ padding: "0px" }}>
                <FileThumbnail
                    file={file}
                    startTime={10}
                    canvasSize={200}
                    startTimeFail={5}
                    finalFail={"end"} //beginning end or e
                    maxFileSize={1500000000} //Not Used, removed using try/catch
                    DefaultFailedOrientation={"Horizontal"}
                // CustomFailedFileImageHorizontal={CustomFailedHorizontal}
                // CustomFailedFileImageVertical={CustomFailedVertical}
                />
                <p>{file.name}</p>
            </div>
        );
    });

    const [inputs, setInputs] = useState({
        title: '',
        description: '',
        category: '',
        reward: '',
        video: '',
    })

    const { title, description, category, reward, video } = inputs;

    const handleChange1 = (e) => {
        const { name, value } = e.target;
        setInputs(inputs => ({ ...inputs, [name]: value }));
    }

    const images = importAll(require.context('assets/img/userflow', false, /\.(png|jpe?g|svg)$/));

    const addVideo = (e) => {
        e.preventDefault();
        setSubmitted(true);
        if (title && description && category && reward && video) {
            // axios.post("https://api.safedingo.com/user/loginadmin", { email, password,otpToken:'aa',otpSecretKey:'ss'})
            //     .then((response) => {

            //         // setOpen(true)
            //         const token = response.data.token
            //         toast.success("Login Succssfully", {
            //             position: "top-center",
            //             autoClose: 3000,
            //         });
            //         localStorage.setItem('mytoken', token)
            //         history.push("admin/dashboard");

            //     }).catch((err)=>{
            //         toast.error(err.response.data.msg, {
            //             position: "top-center",
            //             autoClose: 2000,
            //         });
            //     })
        }
    }

    // const [inputList, setInputList] = useState([{ firstName: "" }]);
    // const [options, setOptions] = useState([{ options: "" }]);

    // handle click event of the Remove button
    // const handleRemoveClick = index => {
    //     const list = [...inputList];
    //     list.splice(index, 1);
    //     setInputList(list);
    // };

    // handle click event of the Remove button
    // const handleRemoveButton = index => {
    //     const list = [...options];
    //     list.splice(index, 1);
    //     setInputList(list);
    // };

    // handle click event of the Add button
    // const handleAddClick = () => {
    //     setInputList([...inputList, { firstName: "" }]);
    // };

    // const handleAddOptions = () => {
    //     setOptions([...options, { options: "" }]);
    // };
    return (
        <>
            <div className="content">
                <section className="videos addvideo card">

                    <form>
                        <div className="inner-submit-lower-div">
                            <div class="row">
                                <div class="col-lg-8">
                                    <div className="row">
                                        <div className="row">
                                            <div className="col-12">
                                                <div class="form-group">
                                                    <label for="example">Video Title</label>
                                                    <input type="text" name="title" value={title} onChange={handleChange1} className={'form-control' + (submitted && !title ? ' is-invalid' : '')} placeholder="Enter title of the video" />
                                                    {/* {Object.keys(projectNameError).map((key)=>{
                                                          console.log("key",key);
                                                         return <p className="inputErrors">{projectNameError[key]}</p>
                                                          })} */}
                                                </div>
                                            </div>
                                            <div className="col-12 ">
                                                <div class="form-group">
                                                    <label className="padd-top" for="example">Video Description</label>
                                                    <textarea type="text" name="description" value={description} onChange={handleChange1} className={'form-control' + (submitted && !description ? ' is-invalid' : '')} placeholder="Enter description of the video" rows="5"></textarea>
                                                    {/* {Object.keys(projectNameError).map((key)=>{
                                                          console.log("key",key);
                                                         return <p className="inputErrors">{projectNameError[key]}</p>
                                                          })} */}
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-12">
                                                <div class="form-group">
                                                    <label className="padd-top" for="example">Category</label>
                                                    <div class="dropdown">
                                                        <button class="button-header-navss" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                            Choose Category
                                                        </button>
                                                        <div class="dropdown-menu drop-down-menue-main" aria-labelledby="dropdownMenuButton">
                                                            <a class="dropdown-item" href="#">Action</a>
                                                            <a class="dropdown-item" href="#">Another action</a>
                                                            <a class="dropdown-item" href="#">Something else here</a>
                                                        </div>
                                                    </div>
                                                    {/* <input type="text" name="category" value={category} onChange={handleChange1} className= {'form-control' + (submitted && !category ? ' is-invalid' : '')} placeholder="Choose video category" /> */}
                                                    {/* {Object.keys(projectNameError).map((key)=>{
                                                          console.log("key",key);
                                                         return <p className="inputErrors">{projectNameError[key]}</p>
                                                          })} */}
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-12">
                                                <div class="form-group">
                                                    <label className="padd-top" for="example">Reward</label>
                                                    <input type="text" name="reward" value={reward} onChange={handleChange1} className={'form-control' + (submitted && !reward ? ' is-invalid' : '')} placeholder="Enter reward amount" />
                                                    {/* {Object.keys(projectNameError).map((key)=>{
                                                          console.log("key",key);
                                                         return <p className="inputErrors">{projectNameError[key]}</p>
                                                          })} */}
                                                </div>
                                            </div>
                                        </div>

                                        {/* <div className="row">
                                            <div className="col-12">
                                                <div class="form-group">
                                                    <label className="padd-top" for="example">Questionnaire</label>
                                                    <input type="text" class="form-control" id="example" aria-describedby="text" placeholder="Untitle question" />
                                                 
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                                                    <label class="form-check-label" for="exampleRadios1">
                                                        Option 1
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                                                    <label class="form-check-label" for="exampleRadios1">
                                                        Add option
                                                    </label>
                                                </div>
                                            </div>
                                        </div> */}

                                        <div className="col-12">
                                            {/* <div class="form-group">
                                                <div className="main-add-ques">
                                                    <Link><img src={`${images['addvid1.png']['default']}`} alt="" /></Link>
                                                    <p className="main-question">Add Questions</p>
                                                </div>

                                                <div className="App">
                                                    {inputList.map((x, i) => {
                                                        return (
                                                            <div className="box">
                                                                <hr className="main-line"></hr>
                                                                <div className="row ">
                                                                    <div className="col-sm-12 p-0">
                                                                        <label>Questionaires</label>
                                                                        <div className="form-group">
                                                                            <input
                                                                                name="firstName"
                                                                                placeholder="Enter your Question"
                                                                                value={x.firstName}
                                                                            onChange={e => handleInputChange(e, i)}
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-sm-12 p-0">

                                                                        <div className="form-group">
                                                                            <div className="App">
                                                                                {options.map((x, i) => {
                                                                                    return (
                                                                                        <div className="box">
                                                                                            <hr className="main-line"></hr>
                                                                                            <div className="row ">
                                                                                                <div className="col-sm-12 p-0">
                                                                                                    <label>Add Options</label>
                                                                                                    <div className="form-group">
                                                                                                        <input
                                                                                                            name="options"
                                                                                                            placeholder="Enter Your Option"
                                                                                                            value={x.options}
                                                                                                        onChange={e => handleOption(e, i)}
                                                                                                        />
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="btn-box ">
                                                                                                    {options.length !== 1 && <button
                                                                                                        className=" button-removess"
                                                                                                        onClick={() => handleRemoveButton(i)}>Remove</button>}<br></br>
                                                                                                    {options.length - 1 === i && <button className="buttonsss_attri" onClick={handleAddOptions}><img src={`${images['addvid1.png']['default']}`} alt="" /> Add Option</button>}
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    );
                                                                                })}
                                                                                <div style={{ marginTop: 20 }}>{JSON.stringify(options)}</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-sm-12 p-0">
                                                                        <div class="form-group">
                                                                            <input class="form-check-input mt-0" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                                                                            <label class="form-check-label" for="exampleRadios1">
                                                                                Add option
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <hr className="main-line"></hr>
                                                                    <div className="btn-box ">
                                                                        {inputList.length !== 1 && <button
                                                                            className=" button-removess"
                                                                            onClick={() => handleRemoveClick(i)}>Remove</button>}<br></br>
                                                                        {inputList.length - 1 === i && <button className="buttonsss_attri" onClick={handleAddClick}><img src={`${images['addvid1.png']['default']}`} alt="" /> Add Questions</button>}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        );
                                                    })}
                                                    <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div>
                                                </div>
                                            </div> */}
                                        </div>
                                        <div className="col-12">
                                            <div class="form-group">
                                                <div className="videopage">
                                                    <button className="red-b">Publish</button>
                                                    <button className="red-w">Cancel</button>
                                                    <ToastContainer style={{ fontSize: 20 }} />
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
                                                {/* <img src={`${images['addvid2.png']['default']}`} alt="" /> */}
                                                <div className="choose-filessss">
                                                    {/* <p>Drag & drop or <span></span></p> */}
                                                    <form>
                                                        <input type="file" name="video" value={video} onChange={handleChange1} className={'form-control' + (submitted && !video ? ' is-invalid' : '')} onChange={handleChange} />
                                                        {/* <h4 style={{ fontWeight: "bold" }}>Files</h4> */}
                                                        {files}
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

export default AddVideo;
