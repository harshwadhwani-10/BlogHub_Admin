import React, { useContext } from "react";
import { Icon } from "@iconify/react";
import { useWindowSize } from "usehooks-ts";
import SidebarContext from "../../store/sidebarContext";
import Profile from "./rightBox/profile/Profile";
import ThemeBox from "./rightBox/themeBox/ThemeBox";

import classes from "./TopNav.module.scss";

function TopNav() {
  const sideOpenCtx = useContext(SidebarContext);
  const { width } = useWindowSize();

  function openSidebarHandler() {
    sideOpenCtx.toggleSidebar();
    if (width <= 768) document.body.classList.toggle("sidebar__open");
  }

  return (
    <div className={classes.topNav}>
      <div className={classes.topNav_left}>
        <div
          className={classes.topNav_left_menu_icon}
          onClick={openSidebarHandler}
        >
          <Icon icon="ci:menu-alt-03" width="24" />
        </div>
        <div className={classes.topNav_left_menu} onClick={openSidebarHandler}>
          <div className="topNav_left_menu_open">
            <Icon icon="ci:menu-alt-03" width="24" />
          </div>
          <div className="topNav_left_menu_close">
            <Icon icon="eva:close-fill" width="24" />
          </div>
        </div>
      </div>
      <div className={classes.topNav_right}>
        <ThemeBox />
        <div className={classes.profile_wrapper}>
          <Profile />
        </div>
      </div>
    </div>
  );
}

export default TopNav;
