
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './profile.scss';
import { ToastContainer, toast } from 'react-toastify';
import { useParams } from 'react-router';
import 'react-toastify/dist/ReactToastify.css';
import { IpfsStorage } from '../../IPFSStorage/ipfs'
import { EditProfile } from '../../services/services';
import { useWeb3React } from '@web3-react/core'
import { useSelector } from 'react-redux';
import { getFollowersAndDetails, getFollowingAndDetails, getAllOffers, getIsLiked, getSumOfLikes } from './ProfileServices';

import { useHistory } from 'react-router';
import axios from 'axios'
import { API_URL } from '../../utils/ApiURL';
import Signature from '../../SignMessage/Signature';

const Profiles = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const lightMode = useSelector((state) => state.themereducer.lightMode)
    const context = useWeb3React();
    const { account, activate, deactivate } = context;
    const [fileUrl, updateFileUrl] = useState("/opencanvas-marketplace/taaajmehal.jpeg");
    const [uploadImage, updateuploadImage] = useState("/opencanvas-marketplace/taaajmehal.jpeg");
    const [imageUrlError, setImageUrlError] = useState({});
    const [displayNameError, setDisplayNameError] = useState({});
    const [userNameerror, setuserNameerror] = useState({});
    const [BioError, setBioError] = useState({});
    const tokenauth = useSelector((state) => state.UserReducer.tokenauth)
    const { accountAddress } = useParams();
    const history = useHistory();
    console.log("tokenauth", accountAddress, account)
    const [allFormData, setAllFormData] = useState({
        formData: {
            name: '',
            username: '',
            bio: 'Open Canvas',
        },
    })
    const [discover, setDiscover] = useState([]);
    const [follorwers, setFollorwers] = useState([]);
    const [following, setFollowing] = useState([]);
    const [owned, setowned] = useState([]);
    const [sale, setsale] = useState();
    const [isFollowed, setisFollowed] = useState();
    const [createdNotOnSale, setcreatedNotOnSale] = useState([]);
    const { userSign } = Signature(account);
    const [isLiked, setIsLiked] = useState();
    const [clicked, setClicked] = useState();
    const [collections, setcollections] = useState([]);
    const [sumLikes, setsumLikes] = useState(true);
    // console.log("tokenauth", fileUrl);
    // console.log("tokenauth", uploadImage);
    const getDiscover = async () => {
        axios.post(`${API_URL}/v1/users/getUser`, { walletAddress: accountAddress })
            .then((res) => {
                // console.log("res", res)
                // console.log("res", res.data.allCollections)
                setDiscover(res.data)
            }).catch((err) => {
                console.log("res", err)
                return err;
            })
    }
    const OwnedApi = async () => {
        const addUser = await axios.post(`${API_URL}/v1/token/getOwnedTokensOfUserAndDetails`, { walletAddress: accountAddress })
            .then(async (res) => {
                // console.log("res", res)
                setowned(res.data.data)
                // const resLiked = await getIsLiked(res?.data?.data[0]?.contractAddress, res?.data?.data[0]?.tokenID, account);
                // return res;
            }).catch((e) => {
                console.log("err", e)
                return e;
            });
        return addUser
    }
    const onSaleApi = async () => {
        const addUser = await axios.post(`${API_URL}/v1/token/getOnSaleTokensOfUserAndDetails`, { walletAddress: accountAddress })
            .then(async (res) => {
                // console.log("res", res)
                setsale(res.data.data)
                // const resLiked = await getIsLiked(res?.data?.data[0]?.contractAddress, res?.data?.data[0]?.tokenID, account);
                return res;
            }).catch((e) => {
                console.log("err", e)
                return e;
            });
        return addUser
    }
    const getFollowers = async () => {
        try {
            const res = await getFollowersAndDetails(accountAddress, accountAddress);
            setFollorwers(res.data.data.detailsOfFollowers)
        } catch (e) {
            console.log(e)
        }
    }
    const getFollowing = async () => {
        try {
            const res = await getFollowingAndDetails(accountAddress, accountAddress);
            // console.log(res)
            setFollowing(res.data.data.detailsOfFollowers)
        } catch (e) {
            console.log(e)
        }
    }
    const getOffers = async () => {
        try {
            const res = await getAllOffers(tokenauth.data);
            // setFollowing(res.data.data.detailsOfFollowers)
        } catch (e) {
            console.log(e)
        }
    }
    const createdButNotOnSale = async () => {
        const addUser = await axios.post(`${API_URL}/v1/token/getCreatedTokensOfUserAndDetails`, { walletAddress: accountAddress })
            .then(async (res) => {
                setcreatedNotOnSale(res.data.data)

                // const resLiked = await getIsLiked(res?.data?.data[0]?.contractAddress, res?.data?.data[0]?.tokenID, account);
                // return res;
            }).catch((e) => {
                console.log("err", e)
                return e;
            });
        return addUser
    }
    const getUserLikes = async () => {
        try {
            const res = await getSumOfLikes(account);
            console.log("========>", res)
            // setFollowing(res.data.data.detailsOfFollowers)
            setsumLikes(res);
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        getDiscover();
        OwnedApi();
        onSaleApi();
        createdButNotOnSale();
        getFollowers();
        getFollowing();
        getOffers();
        checkFollow();
        getAllCollections();
        getUserLikes();
    }, [accountAddress, account])
    const handleChange = (event) => {
        const { formData } = allFormData
        formData[event.target.name] = event.target.value;
        setAllFormData({ formData });

    }
    async function onChange(e) {
        try {
            const file = e.target.files[0]
            updateFileUrl(e.target.files[0])
            // IpfsStorage(file).then((res) => {
            updateuploadImage(URL.createObjectURL(e.target.files[0]));
            // updateFileUrl(file)
            // console.log(file, "file")
            // })
        } catch (e) {
            console.log(e)
        }
    }
    const removeImage = (e) => {
        updateuploadImage("/opencanvas-marketplace/taaajmehal.jpeg");
    }
    const routeToSingleData = (ad, id) => {

        history.push(`/itemdetail/${ad}/${id}`)
    }
    const routeToUserProfile = (ad) => {
        history.push(`/profile/${ad}`)
    }
    const checkFollow = async () => {
        console.log("accountAddress", accountAddress, account)
        const send = { walletAddress: account, toFollow: accountAddress }
        const addUser = await axios.post(`${API_URL}/v1/users/getAlreadyFollowing`, send)
            .then((res) => {
                setisFollowed(res.data.data)
                return res;
            }).catch((e) => {
                console.log("err", e)
                return e;
            });
        return addUser
    }
    const followUser = async () => {
        setClicked(true)
        const addUser = await axios.post(`${API_URL}/v1/users/addFollower`, { walletAddress: account, toFollow: accountAddress })
            .then((res) => {
                checkFollow();
                setClicked(false)
                return res;
            }).catch((e) => {
                console.log("err", e)
                return e;
            });
        return addUser
    }
    const unFollowUser = async () => {
        setClicked(true)
        const addUser = await axios.post(`${API_URL}/v1/users/removeFollower`, { walletAddress: account, toFollow: accountAddress })
            .then((res) => {
                checkFollow();
                setClicked(false)
                return res;
            }).catch((e) => {
                console.log("err", e)
                return e;
            });
        return addUser
    }

    const likeNFT = async (contractAddress, tokenID) => {
        if (account) {
            axios.post(`${API_URL}/v1/token/like`, { contractAddress, tokenID, walletAddress: account })
                .then((res) => {
                    // setIsLiked(!isLiked);
                    // getIsLiked(contractAddress, tokenID, account);
                }).catch((err) => {
                    console.log("res", err)
                    return err;
                })
        } else { toast.error("login to Like The Image") }
    }
    const unLikeNFT = async (contractAddress, tokenID) => {
        if (account) {
            axios.post(`${API_URL}/v1/token/unlike`, { contractAddress, tokenID, walletAddress: account })
                .then((res) => {
                    // getIsLiked(contractAddress, tokenID, account);
                }).catch((err) => {
                    console.log("res", err)
                    return err;
                })
        } else { toast.error("login to Like The Image") }
    }
    const getAllCollections = async () => {
        axios.post(`${API_URL}/v1/collection/getCollectionByCreatorAddress`, { creator: accountAddress })
            .then((res) => {
                console.log("res", res)
                setcollections(res.data.result)
            }).catch((err) => {
                console.log("res", err)
                return err;
            })
    }
    return (
        <>
            <div className={lightMode ? "" : "light"}>
                <section className="profile-main ptb">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="inner-content text-center">
                                    <div className="user-img imgsad">
                                        {/* <img src="\opencanvas-marketplace\taaajmehal.jpeg" alt="" className="img-fluid" /> */}
                                        <img src={discover?.user?.picture} alt="" className="img-fluid" />
                                    </div>
                                    <h3 className='mt-3'>{discover?.user?.name ? discover?.user?.name :
                                        accountAddress === undefined
                                            ? ""
                                            : accountAddress === null
                                                ? "None"
                                                : `${accountAddress.substring(0, 6)}...${accountAddress.substring(
                                                    accountAddress.length - 4
                                                )}`
                                    }</h3>
                                    <p className="ptb20">{discover?.user?.bio} <br /> </p>
                                    <ul className="list-inline text-center">
                                        {isFollowed ?
                                            <li className="list-inline-item">
                                                <div className="inner-info">
                                                    <button className="btn-small" disabled={clicked} onClick={unFollowUser}>
                                                        <img src="\opencanvas-my-profile-assets\follow-icon.png" alt="" className="img-fluid" />   Unfollow
                                                    </button>
                                                </div>
                                            </li> : <li className="list-inline-item">
                                                <div className="inner-info">
                                                    {account && account.toLowerCase() == accountAddress ? null :
                                                        <button className="btn-small" disabled={clicked} onClick={followUser}>
                                                            <img src="\opencanvas-my-profile-assets\follow-icon.png" alt="" className="img-fluid" />   Follow
                                                        </button>}
                                                </div>
                                            </li>
                                        }
                                        <li className="list-inline-item">
                                            <div className="inner-info tWhite">
                                                <img src="\opencanvas-my-profile-assets\likes-icon.png" alt="" className="img-fluid" />  {discover?.user?.numberOfLikedTokens} Likes
                                            </div>
                                        </li>
                                        <li className="list-inline-item">
                                            <div className="inner-info tWhite">
                                                <img src="\opencanvas-my-profile-assets\items-icon.png" alt="" className="img-fluid mr-1" />{discover?.count} Items
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* <div className="row">
                        <div className="col-lg-6 " rowspan="2">
                            <div  className="main-backss">
                                1
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="main-backss">
                                        2
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="main-backss">
                                        3
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}

                        <div className="row ptb20">
                            <div className="col-sm-12">
                                <div className="inner-content main-profile-main">
                                    <ul className="nav nav-pills text-center mb-3" id="pills-tab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <a className="nav-link active" id="pills-owned-tab" data-toggle="pill" href="#pills-owned" role="tab" aria-controls="pills-owned" aria-selected="true">Owned</a>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <a className="nav-link" id="pills-onsale-tab" data-toggle="pill" href="#pills-onsale" role="tab" aria-controls="pills-onsale" aria-selected="false">Onsale</a>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <a className="nav-link" id="pills-ceated-tab" data-toggle="pill" href="#pills-ceated" role="tab" aria-controls="pills-ceated" aria-selected="false">Created</a>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <a className="nav-link" id="pills-ceated-collection" data-toggle="pill" href="#pills-collection" role="tab" aria-controls="pills-collection" aria-selected="false">Collection</a>
                                        </li>
                                        {/* <li className="nav-item" role="presentation">
                                            <a className="nav-link" id="pills-activity-tab" data-toggle="pill" href="#pills-activity" role="tab" aria-controls="pills-activity" aria-selected="false">Activity</a>
                                        </li> */}
                                        <li className="nav-item" role="presentation">
                                            <a className="nav-link" id="pills-followers-tab" data-toggle="pill" href="#pills-followers" role="tab" aria-controls="pills-followers" aria-selected="false">Followers {discover?.followersCount}</a>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <a className="nav-link" id="pills-following-tab" data-toggle="pill" href="#pills-following" role="tab" aria-controls="pills-following" aria-selected="false">Following {discover?.followingCount}</a>
                                        </li>
                                        {/* <li className="nav-item" role="presentation">
                                            <a className="nav-link" id="pills-offer-tab" data-toggle="pill" href="#pills-offer" role="tab" aria-controls="pills-offer" aria-selected="false">Offers</a>
                                        </li> */}
                                        {account === accountAddress ?
                                            <li className="nav-item" role="presentation">
                                                <a className="nav-link" id="pills-edit-tab" data-toggle="pill" href="#pills-edit" role="tab" aria-controls="pills-edit" aria-selected="false">Edit Profile</a>
                                            </li> : null
                                        }
                                    </ul>
                                    <div className="tab-content" id="pills-tabContent">
                                        <div className="tab-pane fade show active" id="pills-owned" role="tabpanel" aria-labelledby="pills-owned-tab">
                                            <div className="row ptb20">
                                                {owned?.length > 0 ? owned?.map((elem, index) => {
                                                    return (<div className="col-sm-3">
                                                        <div className="main-card">
                                                            <div className="live-autionsss">
                                                                {/* <img src="\opencanvas-marketplace\taaajmehal.jpeg" alt="" className="img-fluid img1" /> */}
                                                                <img src={elem?.imageUrl} alt="" className="img-fluid img1" onClick={() => { routeToSingleData(elem?.contractAddress, elem?.tokenID) }} />
                                                            </div>
                                                            <div className="upper-tile">
                                                                <h5>{elem?.nftName}</h5>
                                                                <div className="live-aution-images">
                                                                    {/* <img src="\opencanvas-marketplace\live-auctions\heart-icon.svg" alt="" className="img-fluid img1" /> */}
                                                                    {/* {isLiked ? <img src={elem?.likedImage} alt="" className="img-fluid img1" onClick={unLikeNFT} />
                                                                        :
                                                                        <img src={elem?.unLikedImage} alt="" className="img-fluid img1" onClick={likeNFT} />} */}
                                                                </div>
                                                                <ul className="list-inline">
                                                                    <Link to={`/profile/${elem?.creators[0]?.walletAddress}`}>
                                                                        <li className="list-inline-item mr">
                                                                            {/* <img src="\opencanvas-marketplace\taaajmehal.jpeg" alt="" className="img-fluid  img-sddf" /> */}
                                                                            <img src={elem?.creators[0]?.picture} alt="" className="img-fluid  img-sddf" />
                                                                        </li>
                                                                    </Link>
                                                                    <Link to={`/profile/${elem?.users[0]?.walletAddress}`}>
                                                                        <li className="list-inline-item mr">
                                                                            {/* <img src="\opencanvas-marketplace\taaajmehal.jpeg" alt="" className="img-fluid img-sddf" /> */}
                                                                            <img src={elem?.users[0]?.picture} alt="" className="img-fluid img-sddf" />
                                                                        </li>
                                                                    </Link>
                                                                    {/* <li className="list-inline-item mr">
                                                                        <img src="\opencanvas-marketplace\taaajmehal.jpeg" alt="" className="img-fluid img-sddf" />
                                                                    </li> */}
                                                                </ul>

                                                                <div className="row">
                                                                    <div className="col-6 p-0">
                                                                        <div className="info">
                                                                            <ul>
                                                                                <li><h6>Current Price</h6></li>
                                                                                <li> <img src="\opencanvas-marketplace\live-auctions\eth-icon.svg" alt="" className="img-fluid mt-1 w28" /></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-6 p-0 ">
                                                                        <div className="info text-right">
                                                                            <ul>
                                                                                <li><h6 className='mb-1'> {elem?.orders[0]?.price} BNB</h6></li>
                                                                                <li>  <small className="grey text-left">≈$26.69</small></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    )
                                                }) : <p className=' text-center w-100 mt-5'>"No Item to Show"</p>}
                                                {/* <div className="col-sm-3">
                                                    <div className="main-card">
                                                        <div className="live-autionsss">
                                                            <img src="\opencanvas-marketplace\taaajmehal.jpeg" alt="" className="img-fluid img1" />

                                                        </div>
                                                        <div className="upper-tile">
                                                            <h5>Creative Artwork</h5>
                                                            <div className="live-aution-images">
                                                                <img src="\opencanvas-marketplace\live-auctions\heart-icon.svg" alt="" className="img-fluid img1" />
                                                            </div>
                                                            <ul className="list-inline">
                                                                <li className="list-inline-item mr">
                                                                    <img src="\opencanvas-marketplace\taaajmehal.jpeg" alt="" className="img-fluid  img-sddf" />
                                                                </li>
                                                                <li className="list-inline-item mr">
                                                                    <img src="\opencanvas-marketplace\taaajmehal.jpeg" alt="" className="img-fluid img-sddf" />
                                                                </li>
                                                                <li className="list-inline-item mr">
                                                                    <img src="\opencanvas-marketplace\taaajmehal.jpeg" alt="" className="img-fluid img-sddf" />
                                                                </li>
                                                            </ul>

                                                            <div className="row">
                                                                <div className="col-6 p-0">
                                                                    <div className="info">
                                                                        <p className="mb-1">Price</p>

                                                                    </div>
                                                                </div>
                                                                <div className="col-6 p-0">
                                                                    <ul className="list-inline">
                                                                        <li className="list-inline-item">
                                                                            <div className="d-flex jusstify-content-start flex-direction-column align-items-center">
                                                                                <img src="\opencanvas-marketplace\live-auctions\eth-icon.svg" alt="" className="img-fluid  w28" />&nbsp;<span>  <h6 className="nji">0.008  BNB</h6></span>

                                                                            </div>
                                                                            <div><p className="new-onsale-pri">≈$26.69</p></div>
                                                                        </li>
                                                                    </ul>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-sm-3">
                                                    <div className="main-card">
                                                        <div className="live-autionsss">
                                                            <img src="\opencanvas-marketplace\taaajmehal.jpeg" alt="" className="img-fluid img1" />

                                                        </div>
                                                        <div className="upper-tile">
                                                            <h5>Creative Artwork</h5>
                                                            <div className="live-aution-images">
                                                                <img src="\opencanvas-marketplace\live-auctions\heart-icon.svg" alt="" className="img-fluid img1" />
                                                            </div>
                                                            <ul className="list-inline">
                                                                <li className="list-inline-item mr">
                                                                    <img src="\opencanvas-marketplace\taaajmehal.jpeg" alt="" className="img-fluid  img-sddf" />
                                                                </li>
                                                                <li className="list-inline-item mr">
                                                                    <img src="\opencanvas-marketplace\taaajmehal.jpeg" alt="" className="img-fluid img-sddf" />
                                                                </li>
                                                                <li className="list-inline-item mr">
                                                                    <img src="\opencanvas-marketplace\taaajmehal.jpeg" alt="" className="img-fluid img-sddf" />
                                                                </li>
                                                            </ul>

                                                            <div className="row">
                                                                <div className="col-6 p-0">
                                                                    <div className="info">
                                                                        <p className="mb-1">Price</p>

                                                                    </div>
                                                                </div>
                                                                <div className="col-6 p-0">
                                                                    <ul className="list-inline">
                                                                        <li className="list-inline-item">
                                                                            <div className="d-flex jusstify-content-start flex-direction-column align-items-center">
                                                                                <img src="\opencanvas-marketplace\live-auctions\eth-icon.svg" alt="" className="img-fluid  w28" />&nbsp;<span>  <h6 className="nji">0.008  BNB</h6></span>

                                                                            </div>
                                                                            <div><p className="new-onsale-pri">≈$26.69</p></div>
                                                                        </li>
                                                                    </ul>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-sm-3">
                                                    <div className="main-card">
                                                        <div className="live-autionsss">
                                                            <img src="\opencanvas-marketplace\taaajmehal.jpeg" alt="" className="img-fluid img1" />

                                                        </div>
                                                        <div className="upper-tile">
                                                            <h5>Creative Artwork</h5>
                                                            <div className="live-aution-images">
                                                                <img src="\opencanvas-marketplace\live-auctions\heart-icon.svg" alt="" className="img-fluid img1" />
                                                            </div>
                                                            <ul className="list-inline">
                                                                <li className="list-inline-item mr">
                                                                    <img src="\opencanvas-marketplace\taaajmehal.jpeg" alt="" className="img-fluid  img-sddf" />
                                                                </li>
                                                                <li className="list-inline-item mr">
                                                                    <img src="\opencanvas-marketplace\taaajmehal.jpeg" alt="" className="img-fluid img-sddf" />
                                                                </li>
                                                                <li className="list-inline-item mr">
                                                                    <img src="\opencanvas-marketplace\taaajmehal.jpeg" alt="" className="img-fluid img-sddf" />
                                                                </li>
                                                            </ul>

                                                            <div className="row">
                                                                <div className="col-6 p-0">
                                                                    <div className="info">
                                                                        <p className="mb-1">Price</p>

                                                                    </div>
                                                                </div>
                                                                <div className="col-6 p-0">
                                                                    <ul className="list-inline">
                                                                        <li className="list-inline-item">
                                                                            <div className="d-flex jusstify-content-start flex-direction-column align-items-center">
                                                                                <img src="\opencanvas-marketplace\live-auctions\eth-icon.svg" alt="" className="img-fluid  w28" />&nbsp;<span>  <h6 className="nji">0.008  BNB</h6></span>

                                                                            </div>
                                                                            <div><p className="new-onsale-pri">≈$26.69</p></div>
                                                                        </li>
                                                                    </ul>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div> */}

                                            </div>

                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <div className="inner-btn text-center">
                                                        {/* <button className="btn-common">Load More <img src="\opencanvas-marketplace\loader-icon.svg" alt="" className="img-fluid" /></button> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="pills-onsale" role="tabpanel" aria-labelledby="pills-onsale-tab">
                                            <div className="row ptb20">
                                                {sale?.length > 0 ? sale?.map((elem, index) => {
                                                    return (<div className="col-sm-3">
                                                        <div className="main-card">
                                                            <div className="live-autionsss">
                                                                <img src={elem?.imageUrl} alt="" className="img-fluid img1" onClick={() => { routeToSingleData(elem?.contractAddress, elem?.tokenID) }} />
                                                                {/* <div className="timer">
                                                                    <ul className="list-inline text-center">
                                                                        <li className="list-inline-item">
                                                                            <div className="inner-side">
                                                                                <h5>30</h5>
                                                                                <h6>Days</h6>
                                                                            </div>
                                                                        </li>
                                                                        <li className="list-inline-item text-center">
                                                                            <div className="inner-side">
                                                                                <h5>20</h5>
                                                                                <h6>Hrs</h6>
                                                                            </div>
                                                                        </li>
                                                                        <li className="list-inline-item">
                                                                            <div className="inner-side">
                                                                                <h5>40</h5>
                                                                                <h6>Min</h6>
                                                                            </div>
                                                                        </li>
                                                                        <li className="list-inline-item">
                                                                            <div className="inner-side">
                                                                                <h5>50</h5>
                                                                                <h6>Sec</h6>
                                                                            </div>
                                                                        </li>
                                                                    </ul>
                                                                </div> */}
                                                            </div>
                                                            <div className="upper-tile">
                                                                <h5>{elem?.nftName}</h5>
                                                                <div className="live-aution-images">
                                                                    {/* {isLiked ? <img src={elem?.likedImage} alt="" className="img-fluid img1" onClick={() => { likeNFT(elem?.contractAddress, elem?.tokenID) }} />
                                                                        :
                                                                        <img src={elem?.unLikedImage} alt="" className="img-fluid img1" onClick={() => { unLikeNFT(elem?.contractAddress, elem?.tokenID) }} />} */}
                                                                </div>
                                                                <ul className="list-inline">

                                                                    <Link to={`/profile/${elem?.creators[0]?.walletAddress}`}>
                                                                        <li className="list-inline-item mr">
                                                                            {/* <img src="\opencanvas-marketplace\taaajmehal.jpeg" alt="" className="img-fluid  img-sddf" /> */}
                                                                            <img src={elem?.creators[0]?.picture} style={{ width: "50px", height: "50px" }} alt="" className="img-fluid  img-sddf" />
                                                                        </li>
                                                                    </Link>
                                                                    <Link to={`/profile/${elem?.users[0]?.walletAddress}`}>
                                                                        <li className="list-inline-item mr">
                                                                            {/* <img src="\opencanvas-marketplace\taaajmehal.jpeg" alt="" className="img-fluid img-sddf" /> */}
                                                                            <img src={elem?.users[0]?.picture} style={{ width: "50px", height: "50px" }} alt="" className="img-fluid img-sddf" />
                                                                        </li>
                                                                    </Link>
                                                                    {/* <li className="list-inline-item mr">
                                                                        <img src="\opencanvas-marketplace\taaajmehal.jpeg" alt="" className="img-fluid img-sddf" />
                                                                    </li> */}
                                                                </ul>

                                                                <div className="row">
                                                                    <div className="col-6 p-0">
                                                                        <div className="info">
                                                                            <ul>
                                                                                <li><h6>Current Price</h6></li>
                                                                                <li> <img src="\opencanvas-marketplace\live-auctions\eth-icon.svg" alt="" className="img-fluid mt-1 w28" /></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-6 p-0 ">
                                                                        <div className="info text-right">
                                                                            <ul>
                                                                                <li><h6 className='mb-1'> {elem?.orders[0]?.price} BNB</h6></li>
                                                                                <li>  <small className="grey text-left">≈$26.69</small></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    )
                                                }) : <p className=' text-center w-100 mt-5'>"No Item to Show"</p>}

                                                {/* <div className="col-sm-3">
                                                    <div className="main-card">
                                                        <div className="live-autionsss">
                                                            <img src="\opencanvas-marketplace\taaajmehal.jpeg" alt="" className="img-fluid img1" />
                                                            <div className="timer">
                                                                <ul className="list-inline text-center">
                                                                    <li className="list-inline-item">
                                                                        <div className="inner-side">
                                                                            <h5>30</h5>
                                                                            <h6>Days</h6>
                                                                        </div>
                                                                    </li>
                                                                    <li className="list-inline-item text-center">
                                                                        <div className="inner-side">
                                                                            <h5>20</h5>
                                                                            <h6>Hrs</h6>
                                                                        </div>
                                                                    </li>
                                                                    <li className="list-inline-item">
                                                                        <div className="inner-side">
                                                                            <h5>40</h5>
                                                                            <h6>Min</h6>
                                                                        </div>
                                                                    </li>
                                                                    <li className="list-inline-item">
                                                                        <div className="inner-side">
                                                                            <h5>50</h5>
                                                                            <h6>Sec</h6>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="upper-tile">
                                                            <h5>Creative Artwork</h5>
                                                            <div className="live-aution-images">
                                                                <img src="\opencanvas-marketplace\live-auctions\heart-icon.svg" alt="" className="img-fluid img1" />
                                                            </div>
                                                            <ul className="list-inline">
                                                                <li className="list-inline-item mr">
                                                                    <img src="\opencanvas-marketplace\taaajmehal.jpeg" alt="" className="img-fluid  img-sddf" />
                                                                </li>
                                                                <li className="list-inline-item mr">
                                                                    <img src="\opencanvas-marketplace\taaajmehal.jpeg" alt="" className="img-fluid img-sddf" />
                                                                </li>
                                                                <li className="list-inline-item mr">
                                                                    <img src="\opencanvas-marketplace\taaajmehal.jpeg" alt="" className="img-fluid img-sddf" />
                                                                </li>
                                                            </ul>

                                                            <div className="row">
                                                                <div className="col-6 p-0">
                                                                    <div className="info">
                                                                        <p className="mb-1">Price</p>

                                                                    </div>
                                                                </div>
                                                                <div className="col-6 p-0">
                                                                    <ul className="list-inline">
                                                                        <li className="list-inline-item">
                                                                            <div className="d-flex jusstify-content-start flex-direction-column align-items-center">
                                                                                <img src="\opencanvas-marketplace\live-auctions\eth-icon.svg" alt="" className="img-fluid  w28" />&nbsp;<span>  <h6 className="nji">0.008  BNB</h6></span>

                                                                            </div>
                                                                            <div><p className="new-onsale-pri">≈$26.69</p></div>
                                                                        </li>
                                                                    </ul>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-sm-3">
                                                    <div className="main-card">
                                                        <div className="live-autionsss">
                                                            <img src="\opencanvas-marketplace\taaajmehal.jpeg" alt="" className="img-fluid img1" />
                                                            <div className="timer">
                                                                <ul className="list-inline text-center">
                                                                    <li className="list-inline-item">
                                                                        <div className="inner-side">
                                                                            <h5>30</h5>
                                                                            <h6>Days</h6>
                                                                        </div>
                                                                    </li>
                                                                    <li className="list-inline-item text-center">
                                                                        <div className="inner-side">
                                                                            <h5>20</h5>
                                                                            <h6>Hrs</h6>
                                                                        </div>
                                                                    </li>
                                                                    <li className="list-inline-item">
                                                                        <div className="inner-side">
                                                                            <h5>40</h5>
                                                                            <h6>Min</h6>
                                                                        </div>
                                                                    </li>
                                                                    <li className="list-inline-item">
                                                                        <div className="inner-side">
                                                                            <h5>50</h5>
                                                                            <h6>Sec</h6>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="upper-tile">
                                                            <h5>Creative Artwork</h5>
                                                            <div className="live-aution-images">
                                                                <img src="\opencanvas-marketplace\live-auctions\heart-icon.svg" alt="" className="img-fluid img1" />
                                                            </div>
                                                            <ul className="list-inline">
                                                                <li className="list-inline-item mr">
                                                                    <img src="\opencanvas-marketplace\taaajmehal.jpeg" alt="" className="img-fluid  img-sddf" />
                                                                </li>
                                                                <li className="list-inline-item mr">
                                                                    <img src="\opencanvas-marketplace\taaajmehal.jpeg" alt="" className="img-fluid img-sddf" />
                                                                </li>
                                                                <li className="list-inline-item mr">
                                                                    <img src="\opencanvas-marketplace\taaajmehal.jpeg" alt="" className="img-fluid img-sddf" />
                                                                </li>
                                                            </ul>

                                                            <div className="row">
                                                                <div className="col-6 p-0">
                                                                    <div className="info">
                                                                        <p className="mb-1">Price</p>

                                                                    </div>
                                                                </div>
                                                                <div className="col-6 p-0">
                                                                    <ul className="list-inline">
                                                                        <li className="list-inline-item">
                                                                            <div className="d-flex jusstify-content-start flex-direction-column align-items-center">
                                                                                <img src="\opencanvas-marketplace\live-auctions\eth-icon.svg" alt="" className="img-fluid  w28" />&nbsp;<span>  <h6 className="nji">0.008  BNB</h6></span>

                                                                            </div>
                                                                            <div><p className="new-onsale-pri">≈$26.69</p></div>
                                                                        </li>
                                                                    </ul>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-sm-3">
                                                    <div className="main-card">
                                                        <div className="live-autionsss">
                                                            <img src="\opencanvas-marketplace\taaajmehal.jpeg" alt="" className="img-fluid img1" />
                                                            <div className="timer">
                                                                <ul className="list-inline text-center">
                                                                    <li className="list-inline-item">
                                                                        <div className="inner-side">
                                                                            <h5>30</h5>
                                                                            <h6>Days</h6>
                                                                        </div>
                                                                    </li>
                                                                    <li className="list-inline-item text-center">
                                                                        <div className="inner-side">
                                                                            <h5>20</h5>
                                                                            <h6>Hrs</h6>
                                                                        </div>
                                                                    </li>
                                                                    <li className="list-inline-item">
                                                                        <div className="inner-side">
                                                                            <h5>40</h5>
                                                                            <h6>Min</h6>
                                                                        </div>
                                                                    </li>
                                                                    <li className="list-inline-item">
                                                                        <div className="inner-side">
                                                                            <h5>50</h5>
                                                                            <h6>Sec</h6>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="upper-tile">
                                                            <h5>Creative Artwork</h5>
                                                            <div className="live-aution-images">
                                                                <img src="\opencanvas-marketplace\live-auctions\heart-icon.svg" alt="" className="img-fluid img1" />
                                                            </div>
                                                            <ul className="list-inline">
                                                                <li className="list-inline-item mr">
                                                                    <img src="\opencanvas-marketplace\taaajmehal.jpeg" alt="" className="img-fluid  img-sddf" />
                                                                </li>
                                                                <li className="list-inline-item mr">
                                                                    <img src="\opencanvas-marketplace\taaajmehal.jpeg" alt="" className="img-fluid img-sddf" />
                                                                </li>
                                                                <li className="list-inline-item mr">
                                                                    <img src="\opencanvas-marketplace\taaajmehal.jpeg" alt="" className="img-fluid img-sddf" />
                                                                </li>
                                                            </ul>

                                                            <div className="row">
                                                                <div className="col-6 p-0">
                                                                    <div className="info">
                                                                        <p className="mb-1">Price</p>

                                                                    </div>
                                                                </div>
                                                                <div className="col-6 p-0">
                                                                    <ul className="list-inline">
                                                                        <li className="list-inline-item">
                                                                            <div className="d-flex jusstify-content-start flex-direction-column align-items-center">
                                                                                <img src="\opencanvas-marketplace\live-auctions\eth-icon.svg" alt="" className="img-fluid  w28" />&nbsp;<span>  <h6 className="nji">0.008  BNB</h6></span>

                                                                            </div>
                                                                            <div><p className="new-onsale-pri">≈$26.69</p></div>
                                                                        </li>
                                                                    </ul>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div> */}

                                            </div>

                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <div className="inner-btn text-center">
                                                        {/* <button className="btn-common">Load More <img src="\opencanvas-marketplace\loader-icon.svg" alt="" className="img-fluid" /></button> */}
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="tab-pane fade" id="pills-ceated" role="tabpanel" aria-labelledby="pills-ceated-tab">
                                            <div className="row ptb20">
                                                {createdNotOnSale.length > 0 ? createdNotOnSale?.map((elem, index) => {
                                                    return (<div className="col-sm-3">
                                                        <div className="main-card">
                                                            <div className="live-autionsss">
                                                                {/* <img src="\opencanvas-marketplace\taaajmehal.jpeg" alt="" className="img-fluid img1" /> */}
                                                                <img src={elem?.imageUrl} alt="" className="img-fluid img1" onClick={() => { routeToSingleData(elem?.contractAddress, elem?.tokenID) }} />
                                                            </div>
                                                            <div className="upper-tile">
                                                                <h5>{elem?.nftName}</h5>
                                                                <div className="live-aution-images">
                                                                    {/* {isLiked ? <img src={elem?.likedImage} alt="" className="img-fluid img1" onClick={() => { unLikeNFT(elem?.contractAddress, elem?.tokenID) }} />
                                                                        :
                                                                        <img src={elem?.unLikedImage} alt="" className="img-fluid img1" onClick={() => { unLikeNFT(elem?.contractAddress, elem?.tokenID) }
                                                                        } />} */}
                                                                </div>
                                                                <ul className="list-inline">
                                                                    <Link to={`/profile/${elem?.creators[0]?.walletAddress}`}>
                                                                        <li className="list-inline-item mr">
                                                                            {/* <img src="\opencanvas-marketplace\taaajmehal.jpeg" alt="" className="img-fluid  img-sddf" /> */}
                                                                            <img src={elem?.creators[0]?.picture} alt="" className="img-fluid  img-sddf" />
                                                                        </li>
                                                                    </Link>
                                                                    <Link to={`/profile/${elem?.users[0]?.walletAddress}`}>
                                                                        <li className="list-inline-item mr">
                                                                            {/* <img src="\opencanvas-marketplace\taaajmehal.jpeg" alt="" className="img-fluid img-sddf" /> */}
                                                                            <img src={elem?.users[0]?.picture} alt="" className="img-fluid img-sddf" onClick={() => { unLikeNFT(elem?.contractAddress, elem?.tokenID) }} />
                                                                        </li>
                                                                    </Link>
                                                                    {/* <li className="list-inline-item mr">
                                                                        <img src="\opencanvas-marketplace\taaajmehal.jpeg" alt="" className="img-fluid img-sddf" />
                                                                    </li> */}
                                                                </ul>

                                                                <div className="row">
                                                                    <div className="col-6 p-0">
                                                                        <div className="info">
                                                                            <ul>
                                                                                <li><h6>Current Price</h6></li>
                                                                                <li> <img src="\opencanvas-marketplace\live-auctions\eth-icon.svg" alt="" className="img-fluid mt-1 w28" /></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-6 p-0 ">
                                                                        <div className="info text-right">
                                                                            <ul>
                                                                                <li><h6 className='mb-1'> {elem?.orders[0]?.price} BNB</h6></li>
                                                                                <li>  <small className="grey text-left">≈$26.69</small></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    )
                                                }) : <p className=' text-center w-100 mt-5'>"No Item to Show"</p>}

                                                {/* <div className="col-sm-3">
                                                    <div className="main-card">
                                                        <div className="live-autionsss">
                                                            <img src="\opencanvas-marketplace\taaajmehal.jpeg" alt="" className="img-fluid img1" />

                                                        </div>
                                                        <div className="upper-tile">
                                                            <h5>Creative Artwork</h5>
                                                            <div className="live-aution-images">
                                                                <img src="\opencanvas-marketplace\live-auctions\heart-icon.svg" alt="" className="img-fluid img1" />
                                                            </div>
                                                            <ul className="list-inline">
                                                                <li className="list-inline-item mr">
                                                                    <img src="\opencanvas-marketplace\taaajmehal.jpeg" alt="" className="img-fluid  img-sddf" />
                                                                </li>
                                                                <li className="list-inline-item mr">
                                                                    <img src="\opencanvas-marketplace\taaajmehal.jpeg" alt="" className="img-fluid img-sddf" />
                                                                </li>
                                                                <li className="list-inline-item mr">
                                                                    <img src="\opencanvas-marketplace\taaajmehal.jpeg" alt="" className="img-fluid img-sddf" />
                                                                </li>
                                                            </ul>

                                                            <div className="row">
                                                                <div className="col-6 p-0">
                                                                    <div className="info">
                                                                        <p className="mb-1">Price</p>

                                                                    </div>
                                                                </div>
                                                                <div className="col-6 p-0">
                                                                    <ul className="list-inline">
                                                                        <li className="list-inline-item">
                                                                            <div className="d-flex jusstify-content-start flex-direction-column align-items-center">
                                                                                <img src="\opencanvas-marketplace\live-auctions\eth-icon.svg" alt="" className="img-fluid  w28" />&nbsp;<span>  <h6 className="nji">0.008  BNB</h6></span>

                                                                            </div>
                                                                            <div><p className="new-onsale-pri">≈$26.69</p></div>
                                                                        </li>
                                                                    </ul>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-sm-3">
                                                    <div className="main-card">
                                                        <div className="live-autionsss">
                                                            <img src="\opencanvas-marketplace\taaajmehal.jpeg" alt="" className="img-fluid img1" />

                                                        </div>
                                                        <div className="upper-tile">
                                                            <h5>Creative Artwork</h5>
                                                            <div className="live-aution-images">
                                                                <img src="\opencanvas-marketplace\live-auctions\heart-icon.svg" alt="" className="img-fluid img1" />
                                                            </div>
                                                            <ul className="list-inline">
                                                                <li className="list-inline-item mr">
                                                                    <img src="\opencanvas-marketplace\taaajmehal.jpeg" alt="" className="img-fluid  img-sddf" />
                                                                </li>
                                                                <li className="list-inline-item mr">
                                                                    <img src="\opencanvas-marketplace\taaajmehal.jpeg" alt="" className="img-fluid img-sddf" />
                                                                </li>
                                                                <li className="list-inline-item mr">
                                                                    <img src="\opencanvas-marketplace\taaajmehal.jpeg" alt="" className="img-fluid img-sddf" />
                                                                </li>
                                                            </ul>

                                                            <div className="row">
                                                                <div className="col-6 p-0">
                                                                    <div className="info">
                                                                        <p className="mb-1">Price</p>

                                                                    </div>
                                                                </div>
                                                                <div className="col-6 p-0">
                                                                    <ul className="list-inline">
                                                                        <li className="list-inline-item">
                                                                            <div className="d-flex jusstify-content-start flex-direction-column align-items-center">
                                                                                <img src="\opencanvas-marketplace\live-auctions\eth-icon.svg" alt="" className="img-fluid  w28" />&nbsp;<span>  <h6 className="nji">0.008  BNB</h6></span>

                                                                            </div>
                                                                            <div><p className="new-onsale-pri">≈$26.69</p></div>
                                                                        </li>
                                                                    </ul>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-sm-3">
                                                    <div className="main-card">
                                                        <div className="live-autionsss">
                                                            <img src="\opencanvas-marketplace\taaajmehal.jpeg" alt="" className="img-fluid img1" />

                                                        </div>
                                                        <div className="upper-tile">
                                                            <h5>Creative Artwork</h5>
                                                            <div className="live-aution-images">
                                                                <img src="\opencanvas-marketplace\live-auctions\heart-icon.svg" alt="" className="img-fluid img1" />
                                                            </div>
                                                            <ul className="list-inline">
                                                                <li className="list-inline-item mr">
                                                                    <img src="\opencanvas-marketplace\taaajmehal.jpeg" alt="" className="img-fluid  img-sddf" />
                                                                </li>
                                                                <li className="list-inline-item mr">
                                                                    <img src="\opencanvas-marketplace\taaajmehal.jpeg" alt="" className="img-fluid img-sddf" />
                                                                </li>
                                                                <li className="list-inline-item mr">
                                                                    <img src="\opencanvas-marketplace\taaajmehal.jpeg" alt="" className="img-fluid img-sddf" />
                                                                </li>
                                                            </ul>

                                                            <div className="row">
                                                                <div className="col-6 p-0">
                                                                    <div className="info">
                                                                        <p className="mb-1">Price</p>

                                                                    </div>
                                                                </div>
                                                                <div className="col-6 p-0">
                                                                    <ul className="list-inline">
                                                                        <li className="list-inline-item">
                                                                            <div className="d-flex jusstify-content-start flex-direction-column align-items-center">
                                                                                <img src="\opencanvas-marketplace\live-auctions\eth-icon.svg" alt="" className="img-fluid  w28" />&nbsp;<span>  <h6 className="nji">0.008  BNB</h6></span>

                                                                            </div>
                                                                            <div><p className="new-onsale-pri">≈$26.69</p></div>
                                                                        </li>
                                                                    </ul>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div> */}

                                            </div>

                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <div className="inner-btn text-center">
                                                        {/* <button className="btn-common">Load More <img src="\opencanvas-marketplace\loader-icon.svg" alt="" className="img-fluid" /></button> */}
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="tab-pane fade" id="pills-collection" role="tabpanel" aria-labelledby="pills-collection-tab">
                                            <div className="row ptb20">
                                                {collections?.length > 0 ? collections?.map((elem, index) => {
                                                    return (<div className="col-sm-3">
                                                        <div className="maincardkdkdkd">
                                                            <Link to={`/singlecollectionitem/${elem?.contractAddress}`}>
                                                                {/* <Link to={`singlecollectionitem`}> */}
                                                                <div className="images-cartoon">
                                                                    {/* <img src="\opencanvas-marketplace\taaajmehal.jpeg" alt="" className="img-fluid img1" /> */}
                                                                    <img src={elem?.image} alt={elem?.index} className="img-fluid img1" />
                                                                </div>
                                                                <div className="upper-tile text-center">
                                                                    <h5 className='text-dark'>{elem?.name} </h5>
                                                                    <h6 className="grey">{elem?.totalSupply}  items</h6>
                                                                </div>
                                                            </Link>
                                                        </div>
                                                    </div>)
                                                }) : <p className=' text-center w-100 mt-5'>"No Item to Show"</p>}
                                            </div>

                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <div className="inner-btn text-center">
                                                        {/* <button className="btn-common">Load More <img src="\opencanvas-marketplace\loader-icon.svg" alt="" className="img-fluid" /></button> */}
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="tab-pane fade" id="pills-activity" role="tabpanel" aria-labelledby="pills-activity-tab">
                                            <div className="row ptb20 activity">
                                                <div className="col-lg-12 col-md-12 mb-4">
                                                    <div className="">
                                                        <div className="main-card mainDivlight">
                                                            <div className="main-div mainDivlight d-flex">
                                                                <div className="icon">
                                                                    <img src="\opencanvas-marketplace\live-auctions\activity1.png" alt="" className="img-fluid  " />
                                                                </div>
                                                                <div className="text-down">
                                                                    <h4>
                                                                        Top VIP Pass #12
                                                                    </h4>
                                                                    <h6>Listed by<span>@Nikky_Smith</span></h6>
                                                                    <p> <img src="\opencanvas-marketplace\live-auctions\activity2.png" alt="" className="img-fluid " />&nbsp;&nbsp;1 mins ago</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="">
                                                        <div className="main-card mainDivlight">
                                                            <div className="main-div mainDivlight d-flex">
                                                                <div className="icon">
                                                                    <img src="\opencanvas-marketplace\live-auctions\activity1.png" alt="" className="img-fluid  " />
                                                                </div>
                                                                <div className="text-down">
                                                                    <h4>
                                                                        Top VIP Pass #12
                                                                    </h4>
                                                                    <h6>Listed by<span>@Nikky_Smith</span></h6>
                                                                    <p> <img src="\opencanvas-marketplace\live-auctions\activity2.png" alt="" className="img-fluid " />&nbsp;&nbsp;1 mins ago</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="">
                                                        <div className="main-card mainDivlight">
                                                            <div className="main-div mainDivlight d-flex">
                                                                <div className="icon">
                                                                    <img src="\opencanvas-marketplace\live-auctions\activity1.png" alt="" className="img-fluid  " />
                                                                </div>
                                                                <div className="text-down">
                                                                    <h4>
                                                                        Top VIP Pass #12
                                                                    </h4>
                                                                    <h6>Listed by<span>@Nikky_Smith</span></h6>

                                                                    <p> <img src="\opencanvas-marketplace\live-auctions\activity2.png" alt="" className="img-fluid " />&nbsp;&nbsp;1 mins ago</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <div className=" col-lg-4 col-md-12">
                                                    <div className="right-side-card-filter">
                                                        <h4>Filters</h4>

                                                        <div class="form-check new-poad">
                                                            <label class="checkbox">
                                                                <input type="checkbox" />
                                                                <span>Sales</span>
                                                            </label>
                                                        </div>
                                                        <div class="form-check new-poad">
                                                            <label class="checkbox">
                                                                <input type="checkbox" />
                                                                <span>Listings</span>
                                                            </label>
                                                        </div>
                                                        <div class="form-check new-poad">
                                                            <label class="checkbox">
                                                                <input type="checkbox" />
                                                                <span>Bids</span>
                                                            </label>
                                                        </div>
                                                        <div class="form-check new-poad">
                                                            <label class="checkbox">
                                                                <input type="checkbox" />
                                                                <span>Burns</span>
                                                            </label>
                                                        </div>
                                                        <div class="form-check new-poad">
                                                            <label class="checkbox">
                                                                <input type="checkbox" />
                                                                <span>Likes</span>
                                                            </label>
                                                        </div>
                                                        <div class="form-check new-poad">
                                                            <label class="checkbox">
                                                                <input type="checkbox" />
                                                                <span>Purchase</span>
                                                            </label>
                                                        </div>
                                                        <div class="form-check new-poad">
                                                            <label class="checkbox">
                                                                <input type="checkbox" />
                                                                <span>Transfers</span>
                                                            </label>
                                                        </div>

                                                        <div className="buttonss">
                                                            <button type="button">Select All</button>
                                                            <button type="button">Unselect All</button>
                                                        </div>
                                                    </div>
                                                </div> */}

                                            </div>

                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <div className="inner-btn text-center">
                                                        {/* <button className="btn-common">Load More <img src="\opencanvas-marketplace\loader-icon.svg" alt="" className="img-fluid" /></button> */}
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="tab-pane fade" id="pills-followers" role="tabpanel" aria-labelledby="pills-followers-tab">
                                            <div className="row ptb20 followers">
                                                {follorwers?.length > 0 ? follorwers?.map((elem, index) => {
                                                    // console.log("follorwers", elem, follorwers);
                                                    return (<div className="col-sm-3" onClick={() => { routeToUserProfile(elem?.walletAddress) }}>
                                                        <div className="main-card text-center">
                                                            <div className="icon">
                                                                {/* <img src="\opencanvas-marketplace\live-auctions\follow1.png" alt="" className="img-fluid pr w28" /> */}
                                                                <img src={elem?.picture} alt="" className="img-fluid pr w28" />
                                                            </div>
                                                            <div className="text-down">
                                                                <h4>
                                                                    {elem?.name ?
                                                                        <span>  {elem?.name} </span>
                                                                        : <span>    {elem?.walletAddress === undefined
                                                                            ? ""
                                                                            : elem?.walletAddress === null
                                                                                ? "None"
                                                                                : `${elem?.walletAddress.substring(0, 6)}...${elem?.walletAddress.substring(
                                                                                    elem?.walletAddress.length - 4
                                                                                )}`
                                                                        }
                                                                        </span>
                                                                    }
                                                                </h4>
                                                            </div>
                                                            {/* <div className="level-items d-flex justify-content-between">
                                                            <div className="level">
                                                                <h6>Likes</h6>
                                                                <h4>{elem?.name}</h4>
                                                            </div>
                                                            <div className="items">
                                                                <h6>Items</h6>
                                                                <h4>{elem?.name}</h4>
                                                            </div>
                                                        </div> */}
                                                        </div>
                                                    </div>)
                                                }) : <p className=' text-center w-100 mt-5'>"You have No Followers"</p>}

                                                {/* <div className="col-sm-3">
                                                    <div className="main-card text-center">
                                                        <div className="icon">
                                                            <img src="\opencanvas-marketplace\live-auctions\follow1.png" alt="" className="img-fluid pr w28" />
                                                        </div>
                                                        <div className="text-down">
                                                            <h4>
                                                                Esther Howard
                                                            </h4>
                                                        </div>
                                                        <div className="level-items d-flex justify-content-between">
                                                            <div className="level">
                                                                <h6>Likes</h6>
                                                                <h4>8</h4>
                                                            </div>
                                                            <div className="items">
                                                                <h6>Items</h6>
                                                                <h4>8</h4>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="col-sm-3">
                                                    <div className="main-card text-center">
                                                        <div className="icon">
                                                            <img src="\opencanvas-marketplace\live-auctions\follow1.png" alt="" className="img-fluid pr w28" />
                                                        </div>
                                                        <div className="text-down">
                                                            <h4>
                                                                Esther Howard
                                                            </h4>
                                                        </div>
                                                        <div className="level-items d-flex justify-content-between">
                                                            <div className="level">
                                                                <h6>Likes</h6>
                                                                <h4>8</h4>
                                                            </div>
                                                            <div className="items">
                                                                <h6>Items</h6>
                                                                <h4>8</h4>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="col-sm-3">
                                                    <div className="main-card text-center">
                                                        <div className="icon">
                                                            <img src="\opencanvas-marketplace\live-auctions\follow1.png" alt="" className="img-fluid pr w28" />
                                                        </div>
                                                        <div className="text-down">
                                                            <h4>
                                                                Esther Howard
                                                            </h4>
                                                        </div>
                                                        <div className="level-items d-flex justify-content-between">
                                                            <div className="level">
                                                                <h6>Likes</h6>
                                                                <h4>8</h4>
                                                            </div>
                                                            <div className="items">
                                                                <h6>Items</h6>
                                                                <h4>8</h4>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div> */}
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <div className="inner-btn text-center">
                                                        {/* <button className="btn-common">Load More <img src="\opencanvas-marketplace\loader-icon.svg" alt="" className="img-fluid" /></button> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="pills-following" role="tabpanel" aria-labelledby="pills-following-tab">
                                            <div className="row ptb20 followers">
                                                {following?.length > 0 ? following?.map((elem, index) => {
                                                    console.log("follorwers", follorwers?.length);
                                                    return (<div className="col-sm-3" onClick={() => { routeToUserProfile(elem?.walletAddress) }}>
                                                        <div className="main-card text-center">
                                                            <div className="icon">
                                                                {/* <img src="\opencanvas-marketplace\live-auctions\follow1.png" alt="" className="img-fluid pr w28" /> */}
                                                                <img src={elem?.picture} alt="" className="img-fluid pr w28" />
                                                            </div>
                                                            <div className="text-down">
                                                                <h4>
                                                                    {elem?.name ?
                                                                        <span>  {elem?.name} </span>
                                                                        : <span>    {elem?.walletAddress === undefined
                                                                            ? ""
                                                                            : elem?.walletAddress === null
                                                                                ? "None"
                                                                                : `${elem?.walletAddress.substring(0, 6)}...${elem?.walletAddress.substring(
                                                                                    elem?.walletAddress.length - 4
                                                                                )}`
                                                                        }
                                                                        </span>
                                                                    }
                                                                </h4>
                                                            </div>
                                                            {/* <div className="level-items d-flex justify-content-between">
                                                            <div className="level">
                                                                <h6>Likes</h6>
                                                                <h4>8</h4>
                                                            </div>
                                                            <div className="items">
                                                                <h6>Items</h6>
                                                                <h4>8</h4>
                                                            </div>
                                                        </div> */}
                                                        </div>

                                                    </div>
                                                    )
                                                }) : <p className=' text-center w-100 mt-5'>"Not Following To Anyone"</p>}
                                                {/* <div className="col-sm-3">
                                                    <div className="main-card text-center">
                                                        <div className="icon">
                                                            <img src="\opencanvas-marketplace\live-auctions\follow1.png" alt="" className="img-fluid pr w28" />
                                                        </div>
                                                        <div className="text-down">
                                                            <h4>
                                                                Esther Howard
                                                            </h4>
                                                        </div>
                                                        <div className="level-items d-flex justify-content-between">
                                                            <div className="level">
                                                                <h6>Likes</h6>
                                                                <h4>8</h4>
                                                            </div>
                                                            <div className="items">
                                                                <h6>Items</h6>
                                                                <h4>8</h4>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="col-sm-3">
                                                    <div className="main-card text-center">
                                                        <div className="icon">
                                                            <img src="\opencanvas-marketplace\live-auctions\follow1.png" alt="" className="img-fluid pr w28" />
                                                        </div>
                                                        <div className="text-down">
                                                            <h4>
                                                                Esther Howard
                                                            </h4>
                                                        </div>
                                                        <div className="level-items d-flex justify-content-between">
                                                            <div className="level">
                                                                <h6>Likes</h6>
                                                                <h4>8</h4>
                                                            </div>
                                                            <div className="items">
                                                                <h6>Items</h6>
                                                                <h4>8</h4>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="col-sm-3">
                                                    <div className="main-card text-center">
                                                        <div className="icon">
                                                            <img src="\opencanvas-marketplace\live-auctions\follow1.png" alt="" className="img-fluid pr w28" />
                                                        </div>
                                                        <div className="text-down">
                                                            <h4>
                                                                Esther Howard
                                                            </h4>
                                                        </div>
                                                        <div className="level-items d-flex justify-content-between">
                                                            <div className="level">
                                                                <h6>Likes</h6>
                                                                <h4>8</h4>
                                                            </div>
                                                            <div className="items">
                                                                <h6>Items</h6>
                                                                <h4>8</h4>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div> */}
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <div className="inner-btn text-center">
                                                        {/* <button className="btn-common">Load More <img src="\opencanvas-marketplace\loader-icon.svg" alt="" className="img-fluid" /></button> */}
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="tab-pane fade" id="pills-offer" role="tabpanel" aria-labelledby="pills-offer-tab">
                                            <div className="main-table-bid">
                                                <div className="main-tab-offer d-flex justify-content-between">
                                                    <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                                        <li class="nav-item">
                                                            <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Bid Offers</a>
                                                        </li>
                                                        <li class="nav-item">
                                                            <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Swap Offers</a>
                                                        </li>
                                                        <li class="nav-item">
                                                            <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Rent Offers</a>
                                                        </li>
                                                    </ul>
                                                    <div className="button-sort">
                                                        <button type="button">Sort</button>
                                                    </div>
                                                </div>

                                                <div class="tab-content bidOfferLight" id="pills-tabContent">
                                                    <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                                        <div class="table-responsive">
                                                            <table class="table">
                                                                <thead>
                                                                    <tr>
                                                                        <th scope="col">Items</th>
                                                                        <th scope="col">Price</th>
                                                                        <th scope="col">USD Price</th>
                                                                        <th scope="col">Total Offer</th>
                                                                        <th scope="col">Details</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td className="">
                                                                            <Link><div className="d-flex main-offer-bidswaptabs align-items-center">
                                                                                <img src="\opencanvas-marketplace\taaajmehal.jpeg" alt="" className="" />
                                                                                <h5 className="pl-2">Giraffe #6622</h5>
                                                                            </div>
                                                                            </Link>
                                                                        </td>
                                                                        <td className="m">
                                                                            <p>1.53  BNB</p>
                                                                        </td>
                                                                        <td className="m">
                                                                            <p>$5865.48</p>
                                                                        </td>
                                                                        <td className="m">
                                                                            <p>31</p>
                                                                        </td>
                                                                        <td>
                                                                            <div className="table-button">
                                                                                <Link to="/detailbid"><button className="btn-common m-0">View Detail</button></Link>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="">
                                                                            <Link><div className="d-flex main-offer-bidswaptabs align-items-center">
                                                                                <img src="\opencanvas-marketplace\taaajmehal.jpeg" alt="" className="" />
                                                                                <h5 className="pl-2">Giraffe #6622</h5>
                                                                            </div>
                                                                            </Link>
                                                                        </td>
                                                                        <td className="m">
                                                                            <p>1.53  BNB</p>
                                                                        </td>
                                                                        <td className="m">
                                                                            <p>$5865.48</p>
                                                                        </td>
                                                                        <td className="m">
                                                                            <p>31</p>
                                                                        </td>
                                                                        <td>
                                                                            <div className="table-button">
                                                                                <button className="btn-common m-0">View Detail</button>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="">
                                                                            <Link><div className="d-flex main-offer-bidswaptabs align-items-center">
                                                                                <img src="\opencanvas-marketplace\taaajmehal.jpeg" alt="" className="" />
                                                                                <h5 className="pl-2">Giraffe #6622</h5>
                                                                            </div>
                                                                            </Link>
                                                                        </td>
                                                                        <td className="m">
                                                                            <p>1.53  BNB</p>
                                                                        </td>
                                                                        <td className="m">
                                                                            <p>$5865.48</p>
                                                                        </td>
                                                                        <td className="m">
                                                                            <p>31</p>
                                                                        </td>
                                                                        <td>
                                                                            <div className="table-button">
                                                                                <button className="btn-common m-0">View Detail</button>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="">
                                                                            <Link><div className="d-flex main-offer-bidswaptabs align-items-center">
                                                                                <img src="\opencanvas-marketplace\taaajmehal.jpeg" alt="" className="" />
                                                                                <h5 className="pl-2">Giraffe #6622</h5>
                                                                            </div>
                                                                            </Link>
                                                                        </td>
                                                                        <td className="m">
                                                                            <p>1.53  BNB</p>
                                                                        </td>
                                                                        <td className="m">
                                                                            <p>$5865.48</p>
                                                                        </td>
                                                                        <td className="m">
                                                                            <p>31</p>
                                                                        </td>
                                                                        <td>
                                                                            <div className="table-button">
                                                                                <button className="btn-common m-0">View Detail</button>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="">
                                                                            <Link><div className="d-flex main-offer-bidswaptabs align-items-center">
                                                                                <img src="\opencanvas-marketplace\taaajmehal.jpeg" alt="" className="" />
                                                                                <h5 className="pl-2">Giraffe #6622</h5>
                                                                            </div>
                                                                            </Link>
                                                                        </td>
                                                                        <td className="m">
                                                                            <p>1.53  BNB</p>
                                                                        </td>
                                                                        <td className="m">
                                                                            <p>$5865.48</p>
                                                                        </td>
                                                                        <td className="m">
                                                                            <p>31</p>
                                                                        </td>
                                                                        <td>
                                                                            <div className="table-button">
                                                                                <button className="btn-common m-0">View Detail</button>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="">
                                                                            <Link><div className="d-flex main-offer-bidswaptabs align-items-center">
                                                                                <img src="\opencanvas-marketplace\taaajmehal.jpeg" alt="" className="" />
                                                                                <h5 className="pl-2">Giraffe #6622</h5>
                                                                            </div>
                                                                            </Link>
                                                                        </td>
                                                                        <td className="m">
                                                                            <p>1.53  BNB</p>
                                                                        </td>
                                                                        <td className="m">
                                                                            <p>$5865.48</p>
                                                                        </td>
                                                                        <td className="m">
                                                                            <p>31</p>
                                                                        </td>
                                                                        <td>
                                                                            <div className="table-button">
                                                                                <button className="btn-common m-0">View Detail</button>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>

                                                    </div>
                                                    <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                                        <div class="table-responsive">
                                                            <table class="table">
                                                                <thead>
                                                                    <tr>
                                                                        <th scope="col">Items</th>
                                                                        <th scope="col">Price</th>
                                                                        <th scope="col">USD Price</th>
                                                                        <th scope="col">Total Offer</th>
                                                                        <th scope="col">Details</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td className="">
                                                                            <Link><div className="d-flex main-offer-bidswaptabs align-items-center">
                                                                                <img src="\opencanvas-marketplace\taaajmehal.jpeg" alt="" className="" />
                                                                                <h5 className="pl-2">Giraffe #6622</h5>
                                                                            </div>
                                                                            </Link>
                                                                        </td>
                                                                        <td className="m">
                                                                            <p>1.53  BNB</p>
                                                                        </td>
                                                                        <td className="m">
                                                                            <p>$5865.48</p>
                                                                        </td>
                                                                        <td className="m">
                                                                            <p>31</p>
                                                                        </td>
                                                                        <td>
                                                                            <div className="table-button">
                                                                                <Link to="/detailswap"><button className="btn-common m-0">View Detail</button></Link>
                                                                            </div>
                                                                        </td>
                                                                    </tr>

                                                                    <tr>
                                                                        <td className="">
                                                                            <Link><div className="d-flex main-offer-bidswaptabs align-items-center">
                                                                                <img src="\opencanvas-marketplace\taaajmehal.jpeg" alt="" className="" />
                                                                                <h5 className="pl-2">Giraffe #6622</h5>
                                                                            </div>
                                                                            </Link>
                                                                        </td>
                                                                        <td className="m">
                                                                            <p>1.53  BNB</p>
                                                                        </td>
                                                                        <td className="m">
                                                                            <p>$5865.48</p>
                                                                        </td>
                                                                        <td className="m">
                                                                            <p>31</p>
                                                                        </td>
                                                                        <td>
                                                                            <div className="table-button">
                                                                                <Link to="/detailswap"><button className="btn-common m-0">View Detail</button></Link>
                                                                            </div>
                                                                        </td>
                                                                    </tr>

                                                                    <tr>
                                                                        <td className="">
                                                                            <Link><div className="d-flex main-offer-bidswaptabs align-items-center">
                                                                                <img src="\opencanvas-marketplace\taaajmehal.jpeg" alt="" className="" />
                                                                                <h5 className="pl-2">Giraffe #6622</h5>
                                                                            </div>
                                                                            </Link>
                                                                        </td>
                                                                        <td className="m">
                                                                            <p>1.53  BNB</p>
                                                                        </td>
                                                                        <td className="m">
                                                                            <p>$5865.48</p>
                                                                        </td>
                                                                        <td className="m">
                                                                            <p>31</p>
                                                                        </td>
                                                                        <td>
                                                                            <div className="table-button">
                                                                                <Link to="/detailswap"><button className="btn-common m-0">View Detail</button></Link>
                                                                            </div>
                                                                        </td>
                                                                    </tr>

                                                                    <tr>
                                                                        <td className="">
                                                                            <Link><div className="d-flex main-offer-bidswaptabs align-items-center">
                                                                                <img src="\opencanvas-marketplace\taaajmehal.jpeg" alt="" className="" />
                                                                                <h5 className="pl-2">Giraffe #6622</h5>
                                                                            </div>
                                                                            </Link>
                                                                        </td>
                                                                        <td className="m">
                                                                            <p>1.53  BNB</p>
                                                                        </td>
                                                                        <td className="m">
                                                                            <p>$5865.48</p>
                                                                        </td>
                                                                        <td className="m">
                                                                            <p>31</p>
                                                                        </td>
                                                                        <td>
                                                                            <div className="table-button">
                                                                                <Link to="/detailswap"><button className="btn-common m-0">View Detail</button></Link>
                                                                            </div>
                                                                        </td>
                                                                    </tr>

                                                                    <tr>
                                                                        <td className="">
                                                                            <Link><div className="d-flex main-offer-bidswaptabs align-items-center">
                                                                                <img src="\opencanvas-marketplace\taaajmehal.jpeg" alt="" className="" />
                                                                                <h5 className="pl-2">Giraffe #6622</h5>
                                                                            </div>
                                                                            </Link>
                                                                        </td>
                                                                        <td className="m">
                                                                            <p>1.53  BNB</p>
                                                                        </td>
                                                                        <td className="m">
                                                                            <p>$5865.48</p>
                                                                        </td>
                                                                        <td className="m">
                                                                            <p>31</p>
                                                                        </td>
                                                                        <td>
                                                                            <div className="table-button">
                                                                                <Link to="/detailswap"><button className="btn-common m-0">View Detail</button></Link>
                                                                            </div>
                                                                        </td>
                                                                    </tr>

                                                                    <tr>
                                                                        <td className="">
                                                                            <Link><div className="d-flex main-offer-bidswaptabs align-items-center">
                                                                                <img src="\opencanvas-marketplace\taaajmehal.jpeg" alt="" className="" />
                                                                                <h5 className="pl-2">Giraffe #6622</h5>
                                                                            </div>
                                                                            </Link>
                                                                        </td>
                                                                        <td className="m">
                                                                            <p>1.53  BNB</p>
                                                                        </td>
                                                                        <td className="m">
                                                                            <p>$5865.48</p>
                                                                        </td>
                                                                        <td className="m">
                                                                            <p>31</p>
                                                                        </td>
                                                                        <td>
                                                                            <div className="table-button">
                                                                                <Link to="/detailswap"><button className="btn-common m-0">View Detail</button></Link>
                                                                            </div>
                                                                        </td>
                                                                    </tr>

                                                                </tbody>
                                                            </table>
                                                        </div>

                                                    </div>
                                                    <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                                                        <div class="table-responsive">
                                                            <table class="table">
                                                                <thead>
                                                                    <tr>
                                                                        <th scope="col">Items</th>
                                                                        <th scope="col">Price</th>
                                                                        <th scope="col">USD Price</th>
                                                                        <th scope="col">Total Offer</th>
                                                                        <th scope="col">Details</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td className="">
                                                                            <Link><div className="d-flex main-offer-bidswaptabs align-items-center">
                                                                                <img src="\opencanvas-marketplace\taaajmehal.jpeg" alt="" className="" />
                                                                                <h5 className="pl-2">Giraffe #6622</h5>
                                                                            </div>
                                                                            </Link>
                                                                        </td>
                                                                        <td className="m">
                                                                            <p>1.53  BNB</p>
                                                                        </td>
                                                                        <td className="m">
                                                                            <p>$5865.48</p>
                                                                        </td>
                                                                        <td className="m">
                                                                            <p>31</p>
                                                                        </td>
                                                                        <td>
                                                                            <div className="table-button">
                                                                                <Link to="/detailswap"><button className="btn-common m-0">View Detail</button></Link>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="">
                                                                            <Link><div className="d-flex main-offer-bidswaptabs align-items-center">
                                                                                <img src="\opencanvas-marketplace\taaajmehal.jpeg" alt="" className="" />
                                                                                <h5 className="pl-2">Giraffe #6622</h5>
                                                                            </div>
                                                                            </Link>
                                                                        </td>
                                                                        <td className="m">
                                                                            <p>1.53  BNB</p>
                                                                        </td>
                                                                        <td className="m">
                                                                            <p>$5865.48</p>
                                                                        </td>
                                                                        <td className="m">
                                                                            <p>31</p>
                                                                        </td>
                                                                        <td>
                                                                            <div className="table-button">
                                                                                <Link to="/detailrent"><button className="btn-common m-0">View Detail</button></Link>
                                                                            </div>
                                                                        </td>
                                                                    </tr>

                                                                    <tr>
                                                                        <td className="">
                                                                            <Link><div className="d-flex main-offer-bidswaptabs align-items-center">
                                                                                <img src="\opencanvas-marketplace\taaajmehal.jpeg" alt="" className="" />
                                                                                <h5 className="pl-2">Giraffe #6622</h5>
                                                                            </div>
                                                                            </Link>
                                                                        </td>
                                                                        <td className="m">
                                                                            <p>1.53  BNB</p>
                                                                        </td>
                                                                        <td className="m">
                                                                            <p>$5865.48</p>
                                                                        </td>
                                                                        <td className="m">
                                                                            <p>31</p>
                                                                        </td>
                                                                        <td>
                                                                            <div className="table-button">
                                                                                <Link to="/detailrent"><button className="btn-common m-0">View Detail</button></Link>
                                                                            </div>
                                                                        </td>
                                                                    </tr>

                                                                    <tr>
                                                                        <td className="">
                                                                            <Link><div className="d-flex main-offer-bidswaptabs align-items-center">
                                                                                <img src="\opencanvas-marketplace\taaajmehal.jpeg" alt="" className="" />
                                                                                <h5 className="pl-2">Giraffe #6622</h5>
                                                                            </div>
                                                                            </Link>
                                                                        </td>
                                                                        <td className="m">
                                                                            <p>1.53  BNB</p>
                                                                        </td>
                                                                        <td className="m">
                                                                            <p>$5865.48</p>
                                                                        </td>
                                                                        <td className="m">
                                                                            <p>31</p>
                                                                        </td>
                                                                        <td>
                                                                            <div className="table-button">
                                                                                <Link to="/detailrent"><button className="btn-common m-0">View Detail</button></Link>
                                                                            </div>
                                                                        </td>
                                                                    </tr>

                                                                    <tr>
                                                                        <td className="">
                                                                            <Link><div className="d-flex main-offer-bidswaptabs align-items-center">
                                                                                <img src="\opencanvas-marketplace\taaajmehal.jpeg" alt="" className="" />
                                                                                <h5 className="pl-2">Giraffe #6622</h5>
                                                                            </div>
                                                                            </Link>
                                                                        </td>
                                                                        <td className="m">
                                                                            <p>1.53  BNB</p>
                                                                        </td>
                                                                        <td className="m">
                                                                            <p>$5865.48</p>
                                                                        </td>
                                                                        <td className="m">
                                                                            <p>31</p>
                                                                        </td>
                                                                        <td>
                                                                            <div className="table-button">
                                                                                <Link to="/detailrent"><button className="btn-common m-0">View Detail</button></Link>
                                                                            </div>
                                                                        </td>
                                                                    </tr>

                                                                    <tr>
                                                                        <td className="">
                                                                            <Link><div className="d-flex main-offer-bidswaptabs align-items-center">
                                                                                <img src="\opencanvas-marketplace\taaajmehal.jpeg" alt="" className="" />
                                                                                <h5 className="pl-2">Giraffe #6622</h5>
                                                                            </div>
                                                                            </Link>
                                                                        </td>
                                                                        <td className="m">
                                                                            <p>1.53  BNB</p>
                                                                        </td>
                                                                        <td className="m">
                                                                            <p>$5865.48</p>
                                                                        </td>
                                                                        <td className="m">
                                                                            <p>31</p>
                                                                        </td>
                                                                        <td>
                                                                            <div className="table-button">
                                                                                <Link to="/detailswap"><button className="btn-common m-0">View Detail</button></Link>
                                                                            </div>
                                                                        </td>
                                                                    </tr>

                                                                </tbody>
                                                            </table>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="pills-edit" role="tabpanel" aria-labelledby="pills-edit-tab">
                                            <div className="edit-profile">
                                                <div className="row ptb20">
                                                    <div className="col-lg-12">
                                                        <h4 className="main-edit-text">Edit Profile</h4>
                                                    </div>
                                                </div>
                                                <div className="row ptb20 ">
                                                    <div className="col-sm-8">
                                                        <div className="row">
                                                            <div className="col-sm-6">
                                                                <div className="form-group">
                                                                    <label for="exampleInputurlbio" className="grey">Full Name</label>
                                                                    <input className="form-control" name="name" id="exampleInputurlbio" onChange={handleChange} />
                                                                    {/* {Object.keys(BioError).map((key) => {return <p className="inputErrors">{BioError[key]}</p>})} */}
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-6">
                                                                <div className="form-group">
                                                                    <label for="exampleInputurlbio" className="grey">Username</label>
                                                                    <input className="form-control" name="username" id="exampleInputurlbio" onChange={handleChange} />
                                                                    {/* {Object.keys(BioError).map((key) => {return <p className="inputErrors">{BioError[key]}</p>})} */}
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-12">
                                                                <div className="form-group">
                                                                    <label for="exampleInputurlbio" className="grey">Bio</label>
                                                                    <input className="form-control" name="bio" id="exampleInputurlbio" onChange={handleChange} />
                                                                    {/* {Object.keys(BioError).map((key) => {return <p className="inputErrors">{BioError[key]}</p>})} */}
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-12">
                                                                <div className="form-group">
                                                                    {/* <label for="exampleInputurlbio" className="grey">Password</label>
                                                                <input className="form-control" name="password" id="exampleInputurlbio" onChange={handleChange} /> */}
                                                                    {/* {Object.keys(BioError).map((key) => {return <p className="inputErrors">{BioError[key]}</p>})} */}
                                                                    <div className="row">
                                                                        <div className="col-sm-12 p-0 text-right">
                                                                            {/* <a className="common" data-toggle="modal" data-target="#exampleModal">Change Password</a> */}


                                                                            <div className="modal fade modal-outer-same" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                                                <div className="modal-dialog modal-outer-dailog">
                                                                                    <div className="modal-content modal-outer-content">
                                                                                        <div className="modal-header modal-outer-header">
                                                                                            <h5 className="modal-title" id="exampleModalLabel">Bid Accept</h5>
                                                                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                                                <span aria-hidden="true">&times;</span>
                                                                                            </button>
                                                                                        </div>
                                                                                        <div className="modal-body">
                                                                                            <div className="text-left passwordsss">
                                                                                                <div class="">
                                                                                                    <label className="text-left" for="exampleInputPassword1">Current Password</label>
                                                                                                    <input type="password" class="form-control pass" id="exampleInputPassword1" />
                                                                                                </div>
                                                                                                <div class="">
                                                                                                    <label for="exampleInputPassword1">New Password</label>
                                                                                                    <input type="password" class="form-control pass" id="exampleInputPassword1" />
                                                                                                </div>
                                                                                                <div class="">
                                                                                                    <label for="exampleInputPassword1">Confirm Password</label>
                                                                                                    <input type="password" class="form-control pass" id="exampleInputPassword1" />
                                                                                                </div>
                                                                                                <div className="buttons-modal-pg">
                                                                                                    {/* <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button> */}
                                                                                                    <button type="button" className="">Change Password</button>
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
                                                            <div className="col-sm-12">
                                                                <ul className="list-inline">
                                                                    <li className="list-inline-item">
                                                                        <div className="save-changes">
                                                                            {/* <button className="btn-common" onClick={handleSubmit}>Save Changes</button> */}
                                                                        </div>
                                                                    </li>
                                                                    <li className="list-inline-item">
                                                                        <div className="save-changes">
                                                                            <button className="btn-small common">Cancel</button>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-4 text-center">
                                                        <div className="right-profile">
                                                            {uploadImage && (
                                                                // <img src={fileUrl} style={{ margin: 0 }} width="300px" height="300px" />
                                                                <img src={uploadImage} alt="" className="img-fluid " />
                                                            )}
                                                            {/* <img src="\opencanvas-marketplace\taaajmehal.jpeg" alt="" className="img-fluid " /> */}
                                                        </div>
                                                        <ul className="list-inline ptb20">
                                                            <li className="list-inline-item">
                                                                <div className="buttonss">
                                                                    <label className="sjhdsh" for="filess">Upload Image</label>
                                                                    <input className="d-none" type="file" id="filess" onChange={onChange} />
                                                                    {/* Change */}
                                                                </div>
                                                            </li>
                                                            <li className="list-inline-item">
                                                                <div className="buttonss" onClick={onChange}>
                                                                    <button className="btn-small common" onClick={removeImage}>Remove</button>
                                                                </div>
                                                            </li>
                                                        </ul>
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
    )
}

export default Profiles;