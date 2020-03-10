import React, { Component } from "react";
import "./index.scss";

//have a single button component and add different classnames depending on type
//#TODO refactor to use onClick & link component
class OutlineButton extends Component {
  render() {
    return (
      <div className="Button">
        <button className="Button-outline" onClick={this.props.onClick}>
          {this.props.label}
        </button>
      </div>
    );
  }
}

export default OutlineButton;
