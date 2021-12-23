

import banner1 from "assets/img/side-icon/banner1.png";
// import banner2 from "assets/img/side-icon/banner2.png";
// import banner3 from "assets/img/side-icon/banner3.png";
// import banner5 from "assets/img/side-icon/banner5.png";
import Dashboard from "views/dashboard/Dashboard.js";
// import UserPage from "views/userflow/User.js";
// import UserDetail from "views/userflow/UserDetail.js";
// import AddCategory from "views/videos/AddCategory.js";
// import Videos from "views/videos/Videos.js";
// import VideoDetails from "views/videos/VideoDetail.js";
// import Dailychallegne from "views/games/Dailychallegne";


// import AddVideo from "views/videos/AddVideo";
// import PlayToEarn from "views/games/PlayToEarn";
// import Upcoming from "views/games/Upcoming";
// import AddBanners from "views/banner/AddBanner";
// import NewsBanner from "views/banner/NewsBanner";
// import GameBanner from "views/banner/GameBanner";
// import AddGames from "views/games/AddGame";
// import GameDetail from "views/games/gamedetail";
// import Task from "views/reward/Tasks";
// import AddTask from "views/reward/AddTasks";
import EditProfiles from "views/edit/EditProfile";
// import DailyLeaderBoard from "views/games/DailyLeaderboards";
// import Alltransaction from "views/all-transaction/Alltransaction";
import Artists from "views/artists/Artists";
import Artistsdetail from "views/artists/ArtistDetail";
import Nft from "views/nfts/Nft";
import NftDetail from "views/itemDetails";
import AddUser from "views/users/Addusers";
import Users from "views/users/Users";
// import Editprofiless from "views/users/EditProfil";
// import EditWebsites from "views/editwebsite/EditWebsite";
// import Sales from "views/salesandrevenue/Sales";
// import Revenue from "views/salesandrevenue/Revenue";
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
  // {
  //   path: "/Sales",
  //   name: "Sales",
  //   image: banner1,
  //   component: Sales,
  //   layout: "/admin",
  // },
  // {
  //   path: "/Revenue",
  //   name: "Revenue",
  //   image: banner1,
  //   component: Revenue,
  //   layout: "/admin",
  // },
  // {
  //   path: "/alltransaction",
  //   name: "All Transaction",
  //   component: Alltransaction,
  //   layout: "/admin",
  // },
  // {
  //   path: "/userpage",
  //   name: "ARTISTS",
  //   image: banner2,
  //   component: UserPage,
  //   layout: "/admin",
  // },
  // {
  //   path: "/userdetail",
  //   name: "User / Detail",
  //   image: banner5,
  //   component: UserDetail,
  //   layout: "/admin",
  // },
  // {
  //   path: "/videos",
  //   name: "Videos / Videos",
  //   image: banner3,
  //   component: Videos,
  //   layout: "/admin",
  // },
  // {
  //   path: "/addcategory",
  //   name: "Videos / Category",
  //   component: AddCategory,
  //   layout: "/admin",
  // },
  // {
  //   path: "/videodetail",
  //   name: "Video / Details",
  //   component: VideoDetails,
  //   layout: "/admin",
  // },
  // {
  //   path: "/addvideos",
  //   name: "Videos / Add Video",
  //   button:"Add Videos",
  //   component: AddVideo,
  //   layout: "/admin",
  // },
  // {
  //   path: "/dailychallegne",
  //   name: "Daily Challegne",
  //   component: Dailychallegne,
  //   layout: "/admin",
  // },
  // {
  //   path: "/playtoearn",
  //   name: "Play To Earn",
  //   component: PlayToEarn,
  //   layout: "/admin",
  // },
  // {
  //   path: "/upcoming",
  //   name: "Upcoming",
  //   component: Upcoming,
  //   layout: "/admin",
  // },
  // {
  //   path: "/addgame",
  //   name: "Games / Add Game",
  //   component: AddGames,
  //   layout: "/admin",
  // },
  // {
  //   path: "/gamedetail",
  //   name: "Games / DetailPage",
  //   component: GameDetail,
  //   layout: "/admin",
  // },
  // {
  //   path: "/dailyleaderboard",
  //   name: "Daily Challange",
  //   component: DailyLeaderBoard,
  //   layout: "/admin",
  // },
  // {
  //   path: "/newsbanner",
  //   name: "Banner / News Banner",
  //   component: NewsBanner,
  //   layout: "/admin",
  // },
  // {
  //   path: "/gamebanner",
  //   name: "Banner / Game Banner",
  //   component: GameBanner,
  //   layout: "/admin",
  // },
  // {
  //   path: "/addbanner",
  //   name: "Banner / Game Banner",
  //   component: AddBanners,
  //   layout: "/admin",
  // },
  // {
  //   path: "/task",
  //   name: "Task",
  //   component: Task,
  //   layout: "/admin",
  // },
  // {
  //   path: "/addtask",
  //   name: "Reward / Task",
  //   component: AddTask,
  //   layout: "/admin",
  // },
  // {
  //   path: "/editprofiless",
  //   name: "Edit Profile",
  //   component: Editprofiless,
  //   layout: "/admin",
  // },
  // {
  //   path: "/editwebsite",
  //   name: "Edit Website",
  //   component: EditWebsites,
  //   layout: "/admin",
  // },

];
export default routes;
