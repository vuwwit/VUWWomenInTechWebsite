import React, { Component } from "react";
import lang from "./en-NZ";
import "./index.scss";
// import OutlinedLink from "../../components/links/outlined-link";
import MetaTags from 'react-meta-tags';

const strings = lang;

class Sponsor extends Component {
  render() {
    return (
      <main className="Sponsor">
      <MetaTags>
        <title>{strings.TITLE}</title>
      </MetaTags>
        <div className="Sponsor__main">
          <h1>{strings.SPONSORSHIP}</h1>
          <p>{strings.INTRO}</p>

          <div className="Sponsor__main-sponsorbutton">
            <a href={strings.MAILTO}>{strings.WANT_TO_SPONSOR}</a>
          </div>

          <div className="Sponsor__main-witcon">
            <h2>{strings.SPONSOR_WITCON}</h2>
            <p>{strings.WITCON}</p>
            <p>{strings.NOTE}</p>
            {/* <OutlinedLink link={"/witcon#witcon-sponsor-benefits"} label={strings.WITCON_SPONSORSHIP_PACKAGES}/> */}
          </div>

          <div className="Sponsor__main-otherevents">
            <h2>{strings.SPONSOR_OTHER_EVENTS}</h2>
            <p>{strings.OTHER_EVENTS}</p>
            <div className="Sponsor__main-otherevents-events">
              <p>{strings.IGICTD}</p>
              <p>{strings.TECH_WK_EVENT}</p>
              <p>{strings.HACKATHON}</p>
              <p>{strings.TDFG}</p>
              <p>{strings.QUIZ}</p>
            </div>
            <p>{strings.DONATION_500}</p>
            <p>{strings.DONATION_OTHER}</p>
          </div>

          <div className="Sponsor__main-othersupport">
            <h2>{strings.OTHER_SUPPORT}</h2>
            <p>{strings.WORKSHOPS}</p>
          </div>

          <div className="Sponsor__main-sponsorbutton">
            <a href={strings.MAILTO}>{strings.WANT_TO_SPONSOR}</a>
          </div>

        </div>
      </main>
    );
  }
}

export default Sponsor;
