import React, { useState } from "react";
import { menu } from "../../data/data";
import "./Sidebar.css";
import { UilSignOutAlt } from "@iconscout/react-unicons";


const Sidebar = () => {

  const [selected, setSelected] = useState(0);
  return (
    <div className="sidebar">
      {/* Logo */}
      <div className="logo">
        <span className="logo_text">
          Beta<span>9</span>ja
        </span>
      </div>
      {/* Menu */}
      <div className="menu">
        {menu.map((item, index) => {
          return (
            <div className={selected === index? "menu_item active" : "menu_item"}  key={index} onClick={()=> setSelected(index)}>
              <div className="icon">
                <item.icon />
              </div>
              <span>{item.name}</span>
            </div>
          );
        })}
        <div className="menu_item " >
          <div className="icon">
            <UilSignOutAlt/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
