import React, { Component } from "react";
import "./index.scss";
import OutlineButton from "../../../../components/buttons/outlined-button";
import strings from "../../committee/en-NZ";

//TODO: finish creating this component to use for committee page
class CommitteeTile extends Component {
  render() {
    return (
      <div className="committee-tile">
        <div className="img" />
        <div className="committee-tile-name">
          <div>
            <h3>{strings.ALEISHA_AMOHIA}</h3>
            <h4>{strings.PRESIDENT}</h4>
          </div>
          <div>
            <OutlineButton
              onClick={() =>
                this.props.handleOnClick(
                  strings.ALEISHA_AMOHIA,
                  strings.PRESIDENT,
                  strings.ALEISHAS_JOB,
                  strings.IM_SO_EXCITED,
                  strings.I_JOINED_THE_COMMITTEE
                )
              }
              label={strings.FIND_OUT_MORE}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default CommitteeTile;
