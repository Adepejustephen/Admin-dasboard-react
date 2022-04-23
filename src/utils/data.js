import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilChart,
  UilPackage,
  UilUsdSquare,
  UilMoneyWithdrawal,
} from "@iconscout/react-unicons";
import img1 from "../images/headshot01.jpg";
import img2 from "../images/headshot02.jpg";
import img3 from "../images/headshot03.jpg";

export const menu = [
  {
    name: "Dashboard",
    icon: UilEstate,
  },
  {
    name: "Order",
    icon: UilClipboardAlt,
  },
  {
    name: "Customers",
    icon: UilUsersAlt,
  },
  {
    name: "Products",
    icon: UilPackage,
  },
  {
    name: "Analytics",
    icon: UilChart,
  },
];

export const cardsData = [
  {
    title: "Sales",
    color: {
      background: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "2px 2px 2px #e0c6f5",
    },
    barValue: 70,
    value: "25, 970",
    png: UilUsdSquare,
    series: [
      {
        name: "Sales",
        data: [31, 40, 34, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Revenue",
    color: {
      background: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "2px 2px 2px #fdc0c7",
    },
    barValue: 82,
    value: "18, 340",
    png: UilMoneyWithdrawal,
    series: [
      {
        name: "Revenue",
        data: [10, 100, 74, 51, 82, 30, 40],
      },
    ],
  },
  {
    title: "Expenses",
    color: {
      background: "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "2px 2px 2px 1px #f7f7f7",
    },
    barValue: 50,
    value: "5, 370",
    png: UilClipboardAlt,
    series: [
      {
        name: "Expenses",
        data: [13, 24, 18, 30, 12, 17, 20],
      },
    ],
  },
];

export const updatesData = [
  {
    img: img1,
    name: "Sodeinde Matthew",
    noti: "has ordered Apple smart watch 2500mh battery.",
    time: "25 seconds ago",
  },
  {
    img: img2,
    name: "Timileyin Tayo",
    noti: "has received Samsung gadget for charging battery.",
    time: "30 minutes ago",
  },
  {
    img: img3,
    name: "Fafesobi Ezekiel",
    noti: "has ordered Apple smart watch, samsung Gear 2500mh battery.",
    time: "2 hours ago",
  },
];
