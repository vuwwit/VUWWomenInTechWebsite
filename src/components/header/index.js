import React, { Component } from "react";
import logo from "./images/transparentlogo.png";
import lang from "../en-NZ";
import "./index.scss";
import { Link } from "react-router-dom";
import cn from "classnames";
import Sidebar from "../sidebar";
import DarkerBlockLink from "../links/darkerblock-link";
import LighterBlockLink from "../links/lightblock-link";

const strings = lang;

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="Header__left">
          <div>
            <Link to="/">
              <img src={logo} alt="VUWWIT-logo" className="Header__left-logo" />
            </Link>
          </div>
          <Link to="/about">
            <div className={cn("Header__left-item", "hideOnMobile")}>
              {strings.ABOUT}
            </div>
          </Link>
          <Link to="/upcoming-events">
            <div className={cn("Header__left-item", "hideOnMobile")}>
              {" "}
              {strings.UPCOMING_EVENTS}
            </div>
          </Link>
          <Link to="/witcon">
            <div className={cn("Header__left-item", "hideOnMobile")}>
              {strings.WITCON}
            </div>
          </Link>

          <Link to="/gallery">
            <div className={cn("Header__left-item", "hideOnMobile")}>
              {strings.GALLERY}
            </div>
          </Link>
          <Link to="/media">
            <div className={cn("Header__left-item", "hideOnMobile")}>
              {strings.MEDIA}
            </div>
          </Link>
        </div>
        <div className="Header__right">
          <div className="hideOnMobile">
            <LighterBlockLink
              label={strings.JOIN_HERE}
              link="https://goo.gl/forms/jugsseLBrjUPdzsw1"
            />
          </div>
          <div className="hideOnMobile">
            <DarkerBlockLink label={strings.SPONSOR_US} link={"/sponsor"} />
          </div>
          <div className="showOnMobile">
            <Sidebar />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
