import React from "react";
import { Link } from "react-router-dom";

import SidebarItem from "./SidebarItem";

function Sidebar() {

    const menus = [
        { name: "Map", path: "/" },
        { name: "SAMPLE1", path: "/sample1" },
        { name: "SAMPLE2", path: "/sample2" }
    ];

    return (
        <div className="sidebar">
            <div className="sidebar-title">
                <h1>MAP</h1>
            </div>

            <div className="search-bar">
                <input type="text" placeholder="검색" className="search-input" />
                <button className="search-button">검색</button>
            </div>
            {menus.map((menu, index) => {
                return (
                    <Link to={menu.path} key={index}>
                        <SidebarItem
                            menu={menu}
                        />
                    </Link>
                );
            })}
        </div>
    );
}

export default Sidebar;