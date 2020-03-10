import React, { Component } from "react";
import "./index.scss";
import { Link } from "react-router-dom";
//have a single button component and add different classnames depending on type
//#TODO refactor to use onClick & link component
class OutlineLinkInternal extends Component {
  render() {
    return (
      <div className="Link">
        <Link to={this.props.link} className="Link-outline">
          {this.props.label}
        </Link>
      </div>
    );
  }
}

export default OutlineLinkInternal;
