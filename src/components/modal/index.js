import React, { Component } from "react";
import "./index.scss";

//have a single button component and add different classnames depending on type
//#TODO refactor to use onClick & link component
class SimpleModal extends Component {
  render() {
    const showHideClassName = this.props.showModal
      ? "modal display-block"
      : "modal display-none";

    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          {this.props.children}
          <button className="close" onClick={() => this.props.handleClose()} />
        </section>
      </div>
    );
  }
}

export default SimpleModal;
