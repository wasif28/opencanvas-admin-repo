
import axios from 'axios';
// import { API_URL } from '../../utils/ApiURL';
// import { useDispatch } from 'react-redux'


export const getFollowersAndDetails = async (accountAD, userAD) => {
    // const folloersdata = await axios.post(`${API_URL}/v1/users/getFollowersAndDetails`, { walletAddress: userAD, account: accountAD })
    //     .then((res) => {
    //         return res;
    //     }).catch((e) => {
    //         console.log("err", e)
    //         return e;
    //     });
    // return folloersdata;
}

export const getFollowingAndDetails = async (accountAD, userAD) => {
    // console.log("accountAD, userAD", accountAD, userAD)
    // const send = { buyerAddress, contractAddress, tokenID, price, sellerAddress, royalties }
    // const folloersdata = await axios.post(`${API_URL}/v1/users/getFollowingAndDetails`, { walletAddress: userAD, account: accountAD })
    //     .then((res) => {
    //         return res;
    //     }).catch((e) => {
    //         console.log("err", e)
    //         return e;
    //     });
    // return folloersdata;
}
export const getAllOffers = async (datatoken) => {
    // console.log("accountAD, userAD", accountAD, userAD)
    // const send = { buyerAddress, contractAddress, tokenID, price, sellerAddress, royalties }
    // const offersDetails = await axios.post(`${API_URL}/v1/order/getAllOrders`, { headers: { Authorization: `Bearer ${datatoken}`, "Content-Type": 'multipart/form-data' } })
    //     .then((res) => {
    //         return res;
    //     }).catch((e) => {
    //         console.log("err", e)
    //         return e;
    //     });
    // return offersDetails;
}
export const getIsLiked = async (contractAddress, tokenID, account) => {
    // const likedRes = await axios.post(`${API_URL}/v1/token/getAlreadyLiked`, { contractAddress: contractAddress, tokenID: tokenID, walletAddress: account })
    //     .then((res) => {
    //         // console.log("getAllTokensOfCollectionOfAllItems", res.data)
    //         // setIsLiked(res.data.data)
    //         return res;
    //     })
    //     .catch((err) => {
    //         // console.log("getAllTokensOfCollectionOfAllItems", err)
    //         return false;
    //     })
    // return likedRes;
}
export const getSumOfLikes = async (walletAddress) => {
    // console.log("accountAD, userAD", accountAD, userAD)
    // const send = { buyerAddress, contractAddress, tokenID, price, sellerAddress, royalties }
    // const offersDetails = await axios.post(`${API_URL}/v1/token/getTotalLikeOfUser`, { walletAddress })
    //     .then((res) => {
    //         return res;
    //     }).catch((e) => {
    //         console.log("err", e)
    //         return e;
    //     });
    // return offersDetails;
}