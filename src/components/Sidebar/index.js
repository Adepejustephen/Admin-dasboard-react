import React, { useState } from "react";
import { menu } from "../../utils/data";
import "./Sidebar.css";
import {
  UilSignOutAlt,
  UilBars,
  UilTimesCircle,
} from "@iconscout/react-unicons";
import { motion } from 'framer-motion'


const Sidebar = () => {

  const [selected, setSelected] = useState(0);
  const [openMenu, setOpenMenu] = useState(false);

  const sidebarVariants = {
    true: {
      left: "0",
    },
    false: {
      left: "-60%",
    },
  };

  


  return (
    <>
      <div
        className="bars"
        style={openMenu ? { left: "80%" } : { left: "5%" }}
        onClick={() => setOpenMenu(!openMenu)}
      >
        {openMenu ? <UilTimesCircle/> :<UilBars/> }
      </div>
      <motion.div
        className="sidebar"
        variants={sidebarVariants}
        animate={window.innerWidth <= 768 ? `${openMenu}` : ""}
        // variants={sidebarVariants}
        // animate={window.innerWidth <= 768 ? `${openMenu}` : ""}
      >
        {/* Logo */}
        <div className="logo">
          <span className="logo_text">
            Shop<span>9</span>ja
          </span>
        </div>
        {/* Menu */}
        <div className="menu">
          {menu.map((item, index) => {
            return (
              <div
                className={
                  selected === index ? "menu_item active" : "menu_item"
                }
                key={index}
                onClick={() => setSelected(index)}
              >
                <div className="icon">
                  <item.icon />
                </div>
                <span>{item.name}</span>
              </div>
            );
          })}
          <div className="menu_item ">
            <div className="icon">
              <UilSignOutAlt
              // onClick={() => setOpenMenu(!openMenu)}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
