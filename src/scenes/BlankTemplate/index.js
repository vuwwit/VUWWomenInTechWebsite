import React, { Component } from "react";
//import Header from 'components/header/index';
import logo from "./images/transparentlogo.png";
import lang from "./en-NZ";
import "./index.scss";
import { OutlineLink } from "../../components/links/outlined-link";

const strings = lang;

class Home extends Component {
  render() {
    return (
      <main className="Home">
        <Header />
        <div className="Home__content">
          <h1 className="Home__content-heading">{strings.VUWWIT_HEADING}</h1>
          <div className="Home__content-subheadings">
            <h5>{strings.VUWWIT_SUBHEADING_1}</h5>
            <h5>{strings.VUWWIT_SUBHEADING_2}</h5>
            <OutlineLink
              label={strings.FIND_OUT_MORE}
              link={strings.CONSTITUTION}
            />
          </div>
        </div>
        <Footer />
      </main>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="Header__left">
          <img src={logo} alt="VUWWIT-logo" className="Header__left-logo" />
        </div>
        <div className="Header__right">
          <LighterBlockButton
            label={strings.JOIN_HERE}
            link={strings.MEMBERSHIP_FORM}
          />
          <DarkerBlockButton label={strings.SPONSOR_US} />
        </div>
      </div>
    );
  }
}

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="Footer-link">
          <a href={strings.EMAIL_LINK} className="Footer-link-email">
            {strings.EMAIL}
          </a>
        </div>
        <div className="Footer-link">
          <a href={strings.INSTAGRAM_LINK} className="Footer-links">
            {strings.INSTAGRAM}
          </a>
        </div>
        <div className="Footer-link">
          <a href={strings.FACEBOOK_LINK} className="Footer-links">
            {strings.FACEBOOK}
          </a>
        </div>
        <div className="Footer-link">
          <a href={strings.LINKED_IN_LINK} className="Footer-links">
            {strings.LINKED_IN}
          </a>
        </div>
        <div className="Footer-link">
          <a href={strings.MEMBERS_FORUM_LINK} className="Footer-links">
            {strings.MEMBERS_FORUM}
          </a>
        </div>
      </div>
    );
  }
}

//have a single button component and add different classnames depending on type
//refactor to use onClick & link component

class DarkerBlockButton extends Component {
  render() {
    return (
      <div className="Button">
        <button className="Button-darkerBlock">
          <a href={this.props.link}>{this.props.label}</a>
        </button>
      </div>
    );
  }
}

class LighterBlockButton extends Component {
  render() {
    return (
      <div className="Button">
        <button className="Button-lighterBlock">
          <a href={this.props.link}>{this.props.label}</a>
        </button>
      </div>
    );
  }
}

export default Home;
