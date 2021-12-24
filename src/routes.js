

import banner1 from "assets/img/side-icon/banner1.png";
import Dashboard from "views/dashboard/Dashboard.js";
import EditProfiles from "views/edit/EditProfile";
import Artists from "views/artists/Artists";
import Artistsdetail from "views/artists/ArtistDetail";
import Nft from "views/nfts/Nft";
import NftDetail from "views/itemDetails";
import AddUser from "views/users/Addusers";
import Users from "views/users/Users";
import Profile from "views/profile/Profile"
import Royalties from "views/Royalties/Royalties";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    image: banner1,
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/Royalties",
    name: "Royalties",
    image: banner1,
    component: Royalties,
    layout: "/admin",
  },
  {
    path: "/artists",
    name: "Artists",
    component: Artists,
    layout: "/admin",
  },
  {
    path: "/artistdetail",
    name: "Artist Detail",
    component: Artistsdetail,
    layout: "/admin",
  },
  {
    path: "/nfts",
    name: "NFTs",
    component: Nft,
    layout: "/admin",
  },
  {
    path: "/nftsdetail",
    name: "",
    component: NftDetail,
    layout: "/admin",
  },
  {
    path: "/adduser",
    name: "Add User",
    component: AddUser,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "Users",
    component: Users,
    layout: "/admin",
  },
  {
    path: "/editprofile",
    name: "Edit Profile",
    component: EditProfiles,
    layout: "/admin",
  },
  {
    path: "/profile",
    name: "user Profile",
    component: Profile,
    layout: "/admin",
  }
];
export default routes;
