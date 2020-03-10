import React, { Component } from "react";
import "./index.scss";
class LighterBlockLink extends Component {
  render() {
    return (
      <div className="Link">
        <a href={this.props.link} className="Link-lighterBlock">
          {this.props.label}
        </a>
      </div>
    );
  }
}

export default LighterBlockLink;
