import React, { Component } from "react";
import lang from "./en-NZ";
import "./index.scss";
import OutlineLink from "../../../components/links/outlined-link";
import landing_ball from "../../../images/about/ball18-75.jpg";
import landing_gn from "../../../images/about/gn18-5.jpg";
import landing_igictd from "../../../images/about/igictd18-9.jpg";
import landing_physhack from "../../../images/about/physhack18-18.jpg";
import landing_tdfg from "../../../images/about/tdfg18-25.jpg";
import landing_witcon from "../../../images/about/WITcon panel (2).jpg";
import s_ball from "../../../images/about/ball18-4.jpg";
import s_qn from "../../../images/about/quiz18-1.jpg";
import n_igictd from "../../../images/about/igictd18-6.jpg";
import n_witcon from "../../../images/about/It_s WITCcon registration time and chats (5).jpg";
import w_physhack1 from "../../../images/about/physhack18-9.jpg";
import w_physhack2 from "../../../images/about/physhack18-20.jpg";
import o_tdfg1 from "../../../images/about/tdfg18-1.jpg";
import o_tdfg2 from "../../../images/about/tdfg18-2.jpg";
import MetaTags from 'react-meta-tags';

const strings = lang;

class About extends Component {
  render() {
    return (
      <main className="About">
      <MetaTags>
        <title>{strings.TITLE}</title>
      </MetaTags>
        {/* TODO have main div, speakers div, sponsors div be their own components */}
        <div className="About__main">
          <div className="About__main-landing">
            <h1>{strings.ABOUT_US}</h1>
            <div className="landinggroup">
              <div>
                <img src={landing_ball} alt="STEM Ball 2018" className="landinggroup-img"/>
              </div> 
              <div>
                <img src={landing_gn} alt="Game Night 2018" className="landinggroup-img"/>
              </div> 
              <div>
                <img src={landing_igictd} alt="International Girls in ICT Day Dinner 2018" className="landinggroup-img"/>
              </div> 
              <div>
                <img src={landing_physhack} alt="PhysHack 2018" className="landinggroup-img"/>
              </div> 
              <div>
                <img src={landing_tdfg} alt="Tech Day for Girls 2018" className="landinggroup-img"/>
              </div> 
              <div>
                <img src={landing_witcon} alt="WITcon 2018" className="landinggroup-img"/>
              </div> 
            </div>
          </div>
          <div className="About__main-whoweare">
            <div className="About__main-whoweare--content">
              <h2>{strings.WHO_WE_ARE}</h2>
              <p>{strings.VICTORIA_UNIVERSITY}</p>
            </div>
          </div>
          <div className="About__main-whatwedo">
            <div className="About__main-whatwedo--content">
              <h2>{strings.WHAT_WE_DO}</h2>
              <div className="group">
                <a href="about#networking"><div className="group-img">Networking Events</div></a>
                <a href="about#social"><div className="group-img">Social Events</div></a>
                <a href="about#workshops"><div className="group-img">Workshops</div></a>
                <a href="about#outreach"><div className="group-img">Outreach</div></a>
              </div>

              <p>{strings.VUWWIT_RUNS}</p>
              <p>{strings.WE_ARE_ALSO}</p>

              <h2>{strings.HOW_WE_OPERATE}</h2>
              <p>{strings.VUWWIT_IS_LEAD_BY}</p>
              <p>{strings.OUR_WEBSITE_IS}<a href={strings.FB_LINK}>{strings.FB}</a>{strings.ABOUT_OUR_OWN}</p>
              <p>{strings.MAINTAIN_FB_GROUP}<a href={strings.FORUM_LINK}>{strings.FORUM}</a>{strings.FORUM_INFO}</p>
              <p>{strings.WE_USE_INSTA}<a href={strings.INSTA_LINK}>{strings.INSTA}</a>{strings.TO_CONNECT_WITH_MEMBERS}<a href={strings.LINKEDIN_LINK}>{strings.LINKEDIN}</a>{strings.TO_CONNECT_WITH_INDUSTRY}</p>
              <p>{strings.NEWSLETTERS}</p>
            </div>
          </div>
          <div className="About__main-aim">
            <h1>{strings.OUR_AIM}</h1>
            <h3>{strings.TO_BUILD}</h3>
          </div>
        </div>
        <div className="About__main-networking" id="networking">
          <h2>{strings.NETWORKING}</h2>
          <div className="eventgroup">
            <div>
              <img src={n_igictd} alt="International Girls in ICT Day Dinner 2018" className="eventgroup-img"/>
            </div>
            <div>
              <img src={n_witcon} alt="WITcon 2018" className="eventgroup-img"/>
            </div> 
          </div>
          <p>{strings.THE_PURPOSE}</p>
          <p>{strings.OUR_MAIN}</p>
          <p>{strings.HOWEVER_THESE}</p>
        </div>

        <div className="About__main-social" id="social">
          <h2>{strings.SOCIAL_EVENTS}</h2>
          <div className="eventgroup">
            <div>
              <img src={s_ball} alt="STEM Ball 2018" className="eventgroup-img"/>
            </div>  
            <div>
              <img src={s_qn} alt="Quiz Night 2018" className="eventgroup-img"/>
            </div> 
          </div>
          <p>{strings.WE_RUN}</p>
          <p>{strings.OUR_MUST_NOT}</p>
        </div>

        <div className="About__main-workshops"  id="workshops">
          <h2>{strings.WORKSHOPS}</h2>
          <div className="eventgroup">
            <div>
              <img src={w_physhack1} alt="PhysHack 2018" className="eventgroup-img"/>
            </div> 
            <div>
              <img src={w_physhack2} alt="PhysHack 2018" className="eventgroup-img"/>
            </div> 
          </div>
          <p>{strings.A_BIG_GOAL}</p>
          <p>{strings.WE_WILL_BE_WORKING}</p>
          <p>{strings.WERE_ALSO_PLANNING}</p>
        </div>

        <div className="About__main-outreach" id="outreach">
          <h2>{strings.OUTREACH}</h2>
          <div className="eventgroup">
            <div>
              <img src={o_tdfg1} alt="Tech Day for Girls 2018" className="eventgroup-img"/>
            </div> 
            <div>
              <img src={o_tdfg2} alt="Tech Day for Girls 2018" className="eventgroup-img"/>
            </div> 
          </div>
          <p>{strings.WE_WANT_TO_DO}</p>
          <p>{strings.WE_WORK_ALONGSIDE}</p>
          <p>{strings.IN_2019}</p>
          <p>{strings.GOING_TO_UNI}</p>
          <p>{strings.IF_YOU_ARE}<a href={strings.EMAIL_LINK}>{strings.EMAIL}</a>.</p>
        </div>
        <div className="About__committee">
          <h3>{strings.FIND_OUT_MORE}</h3>
          <div className="About__committee-links">
            <OutlineLink
              link={"/about-committee#committee"}
              label={strings.COMMITTEE_2019}
            />
            <OutlineLink
              link={strings.CONSTITUTION_LINK}
              label={strings.CONSTITUTION}
            />
          </div>
        </div>
      </main>
    );
  }
}

export default About;
