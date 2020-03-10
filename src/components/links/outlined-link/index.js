import React, { Component } from "react";
import "./index.scss";
//have a single button component and add different classnames depending on type
//#TODO refactor to use onClick & link component
class OutlineLink extends Component {
  render() {
    return (
      <div className="Link">
        <a href={this.props.link} className="Link-outline">
          {this.props.label}
        </a>
      </div>
    );
  }
}

export default OutlineLink;
