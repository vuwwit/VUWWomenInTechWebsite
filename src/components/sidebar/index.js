import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./index.scss";
import strings from "../en-NZ";
import LighterBlockLink from "../links/lightblock-link";
import DarkerBlockLink from "../links/darkerblock-link";
import { Link } from "react-router-dom";

class Sidebar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }

  closeMenu () {
    this.setState({menuOpen: false})
  }

  handleStateChange (state) {
    this.setState({menuOpen: state.isOpen})
  }

  render() {
    return (
      <Menu
        right width={"250px"}
        isOpen={this.state.menuOpen}
        onStateChange={(state) => this.handleStateChange(state)}
      >
        <Link to="/" className="menu-item" onClick={() => this.closeMenu()}>
          Home
        </Link>

        <Link to="/about" className="menu-item" onClick={() => this.closeMenu()}>
          {strings.ABOUT}
        </Link>

        <Link to="/upcoming-events" className="menu-item" onClick={() => this.closeMenu()}>
          {strings.UPCOMING_EVENTS}
        </Link>

        <Link to="/witcon" className="menu-item" onClick={() => this.closeMenu()}>
          {strings.WITCON}
        </Link>

        <Link to="/mentoring" className="menu-item" onClick={() => this.closeMenu()}>
          {strings.MENTORING}
        </Link>

        <Link to="/gallery" className="menu-item" onClick={() => this.closeMenu()}>
          {strings.GALLERY}
        </Link>

        <Link to="/media" className="menu-item" onClick={() => this.closeMenu()}>
          {strings.MEDIA}
        </Link>

        <LighterBlockLink
          label={strings.JOIN_HERE}
          link={strings.MEMBERSHIP_FORM}
        />
        <DarkerBlockLink
          label={strings.SPONSOR_US}
          link={"/sponsor"}
          onClick={() => this.closeMenu()}
        />
      </Menu>
    );
  }
}

export default Sidebar;
