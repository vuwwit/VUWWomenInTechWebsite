import React, { Component } from "react";
import "./index.scss";
import SimpleModal from "../../../../components/modal";

//have a single button component and add different classnames depending on type
//#TODO refactor to use onClick & link component
class CommitteeModal extends Component {
  render() {
    return (
      <SimpleModal
        showModal={this.props.showModal}
        handleClose={() => this.props.toggleModal()}
      >
        <div className="CommitteeModal">
          <div className="CommitteeModal-left">
            <div>
              <img
                src={this.props.image}
                alt={this.props.image}
                className="img"
              />
              {console.log(this.props.image)}
            </div>
            {/* TODO: link in handles */}
            {/* <div className="handle">
              {/* replace with handle icons */}
            {/* <div className="handle-link" /> */}
            {/* <div className="handle-link" /> */}
            {/* <div className="handle-link" /> */}
            {/* </div> */}
          </div>
          <div className="CommitteeModal-right">
            <h3>{this.props.name}</h3>
            <h4>{this.props.role}</h4>
            <p>{this.props.description}</p>
            <p className="italic">{this.props.quoteone}</p>

            <p className="italic">{this.props.quotetwo}</p>
          </div>
        </div>
      </SimpleModal>
    );
  }
}

export default CommitteeModal;
