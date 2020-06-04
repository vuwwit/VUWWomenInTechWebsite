import React, { Component } from "react";
import strings from "./en-NZ";
import cn from "classnames";
import "./index.scss";
import bbq from "../../images/upcoming-events/bbq.png";
import sexweek from "../../images/upcoming-events/sexweek.png";
import tooling from "../../images/upcoming-events/tooling.png";
import goalsetting from "../../images/upcoming-events/goalsetting.png";
import igiictd from "../../images/upcoming-events/igiictd.png";
import hackathon from "../../images/upcoming-events/hackathon.png";
import techweek from "../../images/upcoming-events/techweek.png";
import techdayforgirls from "../../images/upcoming-events/techdayforgirls.png";
import quiznight from "../../images/upcoming-events/quiznight.png";
import gamesnight from "../../images/upcoming-events/gamesnight.png";
import witcon from "../../images/upcoming-events/witcon.png";
import stemball from "../../images/upcoming-events/stemball.png";
import byo from "../../images/upcoming-events/byo.png";
import atlassian from "../../images/upcoming-events/atlassian.png";
import movienight from "../../images/upcoming-events/movienight.png";
import karaokebyo from "../../images/upcoming-events/karaokebyo.png";
import femquiz from "../../images/upcoming-events/feministquiz.jpg";
import aura from "../../images/upcoming-events/aura.png";
import xeroproductdesign from "../../images/upcoming-events/xeroproductdesign.png";
import xerodatascience from "../../images/upcoming-events/xerodatascience.png";
import agm from "../../images/upcoming-events/agm.png";
import projectx from "../../images/upcoming-events/projectx.png";
import vuwwib from "../../images/upcoming-events/vuwwib.png";
import nextsteps from "../../images/upcoming-events/nextsteps.png";
import WITCon2020 from "../../images/upcoming-events/1.png";
import KahootNight2020 from "../../images/upcoming-events/4.png";
import Hackathon2020 from "../../images/upcoming-events/2.png";
import TechdayforGirls2020 from "../../images/upcoming-events/3.png";
import BBQ2020 from "../../images/upcoming-events/5.png";
import Gamesnight2020 from "../../images/upcoming-events/6.png";
import STEMball2020 from "../../images/upcoming-events/7.png";
import MetaTags from 'react-meta-tags';

class UpcomingEvents extends Component {
  render() {
    return (
        <main className="UpcomingEvents">
          <MetaTags>
            <title>{strings.TITLE}</title>
          </MetaTags>
          {/* TODO have main div, speakers div, sponsors div be their own components */}
          <div className="UpcomingEvents__main">
            <h1>{strings.UPCOMING_EVENTS}</h1>
            <h2>{strings.CLICK_EVENTS}</h2>

            <div className="eventgrid">

              <div className="eventgrid-tile">
                <a href="https://tdfg.lilregie.com/">
                  <img src={TechdayforGirls2020} alt="TechdayforGirls2020-poster" className="eventgrid-tile-img" />
                </a>
              </div>
              <div className="eventgrid-tile">
                <img src={Hackathon2020} alt="Hackathon2020-poster" className="eventgrid-tile-img" />
              </div>
              <div className="eventgrid-tile">
                <a href="https://www.facebook.com/events/2574452326144463/">
                <img src={WITCon2020} alt="WITCon2020-poster" className="eventgrid-tile-img" />
                </a>
              </div>
              <div className="eventgrid-tile">

                  <img src={Gamesnight2020} alt="Gamesnight2020-poster" className="eventgrid-tile-img" />

              </div>
              <div className="eventgrid-tile">

                  <img src={STEMball2020} alt="STEMball2020-poster" className="eventgrid-tile-img" />

              </div>

              <div className={cn("eventgrid-tile", "eventgrid-tile-title")}>
                <h2>{strings.PAST}</h2>
              </div>
              <div className="eventgrid-tile">
                <a href="https://www.facebook.com/events/857679701385649/">
                  <img src={KahootNight2020} alt="KahootNight2020-poster" className="eventgrid-tile-img" />
                </a>
              </div>
              <div className="eventgrid-tile">
                <a href="https://www.facebook.com/events/197034091494732/">
                <img src={BBQ2020} alt="BBQ2020-poster" className="eventgrid-tile-img" />
                </a>
              </div>



              <div className="eventgrid-tile">
                <img src={bbq} alt="bbq-poster" className="eventgrid-tile-img" />
              </div>

              <div className="eventgrid-tile">
                <img src={sexweek} alt="sexweek-poster" className="eventgrid-tile-img" />
              </div>

              <div className="eventgrid-tile">
                <img src={tooling} alt="toolingworkshop-poster" className="eventgrid-tile-img" />
              </div>

              <div className="eventgrid-tile">
                <img src={byo} alt="byo-poster" className="eventgrid-tile-img" />
              </div>

              <div className="eventgrid-tile">
                <img src={igiictd} alt="igiictd-poster" className="eventgrid-tile-img" />
              </div>

              <div className="eventgrid-tile">
                <img src={atlassian} alt="atlassian-poster" className="eventgrid-tile-img" />
              </div>

              <div className="eventgrid-tile">
                <img src={movienight} alt="movienight-poster" className="eventgrid-tile-img" />
              </div>

              <div className="eventgrid-tile">
                <img src={techweek} alt="techweek-poster" className="eventgrid-tile-img" />
              </div>

              <div className="eventgrid-tile">
                <img src={femquiz} alt="femquiz-poster" className="eventgrid-tile-img" />
              </div>

              <div className="eventgrid-tile">
                <img src={hackathon} alt="hackathon-poster" className="eventgrid-tile-img" />
              </div>

              <div className="eventgrid-tile">
                <img src={techdayforgirls} alt="techdayforgirls-poster" className="eventgrid-tile-img" />
              </div>

              <div className="eventgrid-tile">
                <img src={xeroproductdesign} alt="xeroworkshop-poster" className="eventgrid-tile-img" />
              </div>

              <div className="eventgrid-tile">
                <img src={quiznight} alt="quiznight-poster" className="eventgrid-tile-img" />
              </div>

              <div className="eventgrid-tile">
                <img src={aura} alt="aura-poster" className="eventgrid-tile-img" />
              </div>

              <div className="eventgrid-tile">
                <img src={gamesnight} alt="gamesnight-poster" className="eventgrid-tile-img" />
              </div>

              <div className="eventgrid-tile">
                <img src={goalsetting} alt="goalsettingworkshop-poster" className="eventgrid-tile-img" />
              </div>

              <div className="eventgrid-tile">
                <img src={witcon} alt="witcon-poster" className="eventgrid-tile-img" />
              </div>

              <div className="eventgrid-tile">
                <img src={vuwwib} alt="vuwwib-poster" className="eventgrid-tile-img" />
              </div>

              <div className="eventgrid-tile">
                <img src={xerodatascience} alt="xerodatascience-poster" className="eventgrid-tile-img" />
              </div>

              <div className="eventgrid-tile">
                <img src={projectx} alt="projectx-poster" className="eventgrid-tile-img" />
              </div>

              <div className="eventgrid-tile">
                <img src={karaokebyo} alt="karaokebyo-poster" className="eventgrid-tile-img" />
              </div>

              <div className="eventgrid-tile">
                <img src={agm} alt="agm-poster" className="eventgrid-tile-img" />
              </div>

              <div className="eventgrid-tile">
                <img src={nextsteps} alt="nextstepsworkshop-poster" className="eventgrid-tile-img" />
              </div>

              <div className="eventgrid-tile">
                <img src={stemball} alt="stemball-poster" className="eventgrid-tile-img" />
              </div>
            </div>
          </div>
        </main>
    );
  }
}

export default UpcomingEvents;
