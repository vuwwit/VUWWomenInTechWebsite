import React, { Component } from "react";
import lang from "./en-NZ";
import "./index.scss";
import OutlineLink from "../../components/links/outlined-link";
import vuwwit from "../../images/vuwwit.jpg";
import MetaTags from 'react-meta-tags';
import examcram from "../../images/timetable.png";
const strings = lang;

class Home extends Component {
  render() {
    return (
      <main className="Home">
        <MetaTags>
          <title>{strings.TITLE}</title>
          <meta id="og-image" property="og:image" content={vuwwit} />
        </MetaTags>
        <div className="Home__content">
          <div className="Home__content-subheadings">
            <h1>{strings.WE_ARE_VUWWIT}</h1>

            <p><b>{strings.VUWWIT}</b> {strings.VUWWIT_IS_A_GROUP}</p>
            <p>{strings.WE_PROVIDE_OPPORTUNITIES}</p>
            <OutlineLink label={strings.FIND_OUT_MORE} link="/about" />
          </div>

          <div className="Home__content-upcoming">
            <h1>{strings.BIG_STUFF}</h1>


            <h2>{strings.COMMITTEE}</h2>
            <p>{strings.COMMITTEE_INFO}</p>
            <p className="role">{strings.PRESIDENT}</p>
            <p className="role">{strings.SECRETARY}</p>
            <p className="role">{strings.TREASURER}</p>
            <p className="role">{strings.EVENTSROLE}</p>
            <p className="role">{strings.CAMPAIGNS}</p>
            <p className="role">{strings.MEDIA}</p>
            <p className="role">{strings.WEB}</p>
            <p className="role">{strings.NETWORKING}</p>
            <p className="role">{strings.WORKSHOPS}</p>
            <p className="role">{strings.SOCIAL}</p>
            <p className="role">{strings.OUTREACH}</p>
            
            <h2>{strings.WITCON}</h2>
            <p><a href="https://womenintech.nz/witcon-2019">{strings.WITCON_INFO}</a></p>

            <p><i>{strings.CHECK_OUT_OUR} <a href="/upcoming-events">{strings.UPCOMING_EVENTS}</a> {strings.FOR_ALL_THE_EVENTS}</i></p>
          </div>
        </div>
      </main>
    );
  }
}
/* <h2>{strings.EVENTS}</h2>

           <p><b>{strings.EXAMCRAM}</b>: {strings.EXAMCRAM_INFO} <a href="https://www.facebook.com/events/745791275843299/">{strings.FACEBOOK}</a></p>
           <img src={examcram} alt="Exam Cram schedule" />
*/

export default Home;
