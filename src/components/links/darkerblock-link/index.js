import React, { Component } from "react";
import "./index.scss";
import { Link } from "react-router-dom";

class DarkerBlockLink extends Component {
  render() {
    return (
      <div className="Link">
        <Link to={this.props.link} className="Link-darkerBlock" onClick={this.props.onClick}>
          {this.props.label}
        </Link>
      </div>
    );
  }
}

export default DarkerBlockLink;
