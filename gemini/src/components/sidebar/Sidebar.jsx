import React, { useContext, useState } from "react";
import "./sidebar.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/context";

const Sidebar = () => {

  const [collapsed, setCollapsed] = useState(false);
  const {onSent , setRecentPrompts , previousPrompt} = useContext(Context);
  const [activeChat, setActiveChat] = useState(0);

  return (
    <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>

      <div className="top">

        <img
          className="menu"
          src={assets.menu_icon}
          alt=""
          onClick={() => setCollapsed(!collapsed)}
        />

        <div className="new-chat">
          <img src={assets.plus_icon} alt="" />
          <p>New Chat</p>
        </div>

        <div className="recent">

          <p className="recent-title">Recent Chats</p>
      {
        previousPrompt.map((item, index) => (
             <div
            className={`recent-entry ${activeChat === index ? "active" : ""}`}
            onClick={() => setActiveChat(index)}
            key={index}
          >
            <img src={assets.message_icon} alt="" />
            <p>{item}...</p>
          </div>
        ))
      }
         
      </div>

      </div>

      <div className="bottom">

        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="" />
          <p>Help</p>
        </div>

        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="" />
          <p>Activity</p>
        </div>

        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="" />
          <p>Settings</p>
        </div>

      </div>

    </div>
  );
};

export default Sidebar;