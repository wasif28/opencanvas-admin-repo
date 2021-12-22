

import banner1 from "assets/img/side-icon/banner1.png";
import banner2 from "assets/img/side-icon/banner2.png";
import banner3 from "assets/img/side-icon/banner3.png";
import banner5 from "assets/img/side-icon/banner5.png";
import Dashboard from "views/dashboard/Dashboard.js";
import UserPage from "views/userflow/User.js";
import UserDetail from "views/userflow/UserDetail.js";
import AddCategory from "views/videos/AddCategory.js";
import Videos from "views/videos/Videos.js";
import VideoDetails from "views/videos/VideoDetail.js";
import Dailychallegne from "views/games/Dailychallegne";


import AddVideo from "views/videos/AddVideo";
import PlayToEarn from "views/games/PlayToEarn";
import Upcoming from "views/games/Upcoming";
import AddBanners from "views/banner/AddBanner";
import NewsBanner from "views/banner/NewsBanner";
import GameBanner from "views/banner/GameBanner";
import AddGames from "views/games/AddGame";
import GameDetail from "views/games/gamedetail";
import Task from "views/reward/Tasks";
import AddTask from "views/reward/AddTasks";
import ThisWeekReward from "views/reward/ThisWeekRewards";
import ThisWeekRewForm from "views/reward/ThisWeekRForm";
import LeaderBoard from "views/reward/Leaderboards";
import LeaderBoardDetails from "views/reward/LeaderboardDetails";
import Notificationss from "views/notifications/Notifications";
import PushNotification from "views/notifications/PushNotifications";
import Settings from "views/setting/Setting";
import EditProfiles from "views/edit/EditProfile";
import DailyLeaderBoard from "views/games/DailyLeaderboards";
import Alltransaction from "views/all-transaction/Alltransaction";
import Artists from "views/artists/Artists";
import Artistsdetail from "views/artists/ArtistDetail";
import Nft from "views/nfts/Nft";
import NftDetail from "views/nfts/Nftdetail";
import User from "views/userflow/User";
import AddUser from "views/users/Addusers";
import Users from "views/users/Users";
import Editprofiless from "views/users/EditProfil";
import EditWebsite from "views/editwebsite/EditWebsite";
import EditWebsites from "views/editwebsite/EditWebsite";
import Sales from "views/salesandrevenue/Sales";
import Revenue from "views/salesandrevenue/Revenue";
import Royalties from "views/Royalties/Royalties";

var routes = [
  {
    path: "/dashboard",
    name: "HOME",
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
    path: "/Sales",
    name: "Sales",
    image: banner1,
    component: Sales,
    layout: "/admin",
  },
  {
    path: "/Revenue",
    name: "Revenue",
    image: banner1,
    component: Revenue,
    layout: "/admin",
  },
  {
    path: "/alltransaction",
    name: "All Transaction",
    component: Alltransaction,
    layout: "/admin",
  },
  {
    path: "/userpage",
    name: "ARTISTS",
    image: banner2,
    component: UserPage,
    layout: "/admin",
  },
  {
    path: "/userdetail",
    name: "User / Detail",
    image: banner5,
    component: UserDetail,
    layout: "/admin",
  },
  {
    path: "/videos",
    name: "Videos / Videos",
    image: banner3,
    component: Videos,
    layout: "/admin",
  },
  {
    path: "/addcategory",
    name: "Videos / Category",
    // image: banner3,
    component: AddCategory,
    layout: "/admin",
  },
  {
    path: "/videodetail",
    name: "Video / Details",
    // image: banner3,
    component: VideoDetails,
    layout: "/admin",
  },
  {
    path: "/addvideos",
    name: "Videos / Add Video",
    button:"Add Videos",
    // image: banner3,
    component: AddVideo,
    layout: "/admin",
  },
  {
    path: "/dailychallegne",
    name: "Daily Challegne",
    // image: banner3,
    component: Dailychallegne,
    layout: "/admin",
  },
  {
    path: "/playtoearn",
    name: "Play To Earn",
    // image: banner3,
    component: PlayToEarn,
    layout: "/admin",
  },
  {
    path: "/upcoming",
    name: "Upcoming",
    // image: banner3,
    component: Upcoming,
    layout: "/admin",
  },
  {
    path: "/addgame",
    name: "Games / Add Game",
    // image: banner3,
    component: AddGames,
    layout: "/admin",
  },
  {
    path: "/gamedetail",
    name: "Games / DetailPage",
    // image: banner3,
    component: GameDetail,
    layout: "/admin",
  },
  {
    path: "/dailyleaderboard",
    name: "Daily Challange",
    // image: banner3,
    component: DailyLeaderBoard,
    layout: "/admin",
  },
  {
    path: "/newsbanner",
    name: "Banner / News Banner",
    // image: banner3,
    component: NewsBanner,
    layout: "/admin",
  },
  {
    path: "/gamebanner",
    name: "Banner / Game Banner",
    // image: banner3,
    component: GameBanner,
    layout: "/admin",
  },
  {
    path: "/addbanner",
    name: "Banner / Game Banner",
    // image: banner3,
    component: AddBanners,
    layout: "/admin",
  },
  {
    path: "/task",
    name: "Task",
    // image: banner3,
    component: Task,
    layout: "/admin",
  },
  {
    path: "/addtask",
    name: "Reward / Task",
    // image: banner3,
    component: AddTask,
    layout: "/admin",
  },
  // {
  //   path: "/thisweekreward",
  //   name: "Reward / This Week Reward",
  //   image: banner3,
  //   component: ThisWeekReward,
  //   layout: "/admin",
  // },
  // {
  //   path: "/thisweekrewardform",
  //   name: "Reward / This Week Reward",
  //   image: banner3,
  //   component: ThisWeekRewForm,
  //   layout: "/admin",
  // },
  // {
  //   path: "/leaderboard",
  //   name: "Rewards / LeaderBoard",
  //   image: banner3,
  //   component: LeaderBoard,
  //   layout: "/admin",
  // },
  // {
  //   path: "/leaderboardDetails",
  //   name: "Leaderboard / Details",
  //   image: banner3,
  //   component: LeaderBoardDetails,
  //   layout: "/admin",
  // },
  // {
  //   path: "/notification",
  //   name: "Push Notifications",
  //   image: banner3,
  //   component: Notificationss,
  //   layout: "/admin",
  // },
  // {
  //   path: "/sendnotification",
  //   name: "Push Notifications / Send Notification",
  //   image: banner3,
  //   component: PushNotification,
  //   layout: "/admin",
  // },
  // {
  //   path: "/setting",
  //   name: "Settings",
  //   image: banner3,
  //   component: Settings,
  //   layout: "/admin",
  // },
  {
    path: "/editprofile",
    name: "Edit Profile",
    // image: banner3,
    component: EditProfiles,
    layout: "/admin",
  },
  {
    path: "/artists",
    name: "Artists",
    // image: banner3,
    component: Artists,
    layout: "/admin",
  },
  {
    path: "/artistdetail",
    name: "Artist Detail",
    // image: banner3,
    component: Artistsdetail,
    layout: "/admin",
  },
  {
    path: "/nfts",
    name: "NFTs",
    // image: banner3,
    component: Nft,
    layout: "/admin",
  },
  {
    path: "/nftsdetail",
    name: "NFTs Detail",
    // image: banner3,
    component: NftDetail,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "Users",
    // image: banner3,
    component: Users,
    layout: "/admin",
  },
  {
    path: "/adduser",
    name: "Add User",
    // image: banner3,
    component: AddUser,
    layout: "/admin",
  },
  {
    path: "/editprofiless",
    name: "Edit Profile",
    // image: banner3,
    component: Editprofiless,
    layout: "/admin",
  },
  {
    path: "/editwebsite",
    name: "Edit Website",
    // image: banner3,
    component: EditWebsites,
    layout: "/admin",
  },

];
export default routes;
