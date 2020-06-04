import React, { Component } from "react";
import lang from "./en-NZ";
import "./index.scss";
import gold from "../../../images/sponsor-gold.png";
import silver from "../../../images/sponsor-silver.png";
import bronze from "../../../images/sponsor-bronze.png";
import merch from "../../../images/sponsor-merchandise.png";
 import banner from "../../../images/WITCon 2020.png";

import OutlineLinkInternal from "../../../components/links/outlined-link-internal";
import LighterBlockLink from "../../../components/links/lightblock-link";
import cn from "classnames";
import MetaTags from 'react-meta-tags';

const strings = lang;

class Witcon extends Component {
  render() {
    return (
      <main className="Witcon">
      <MetaTags>
        <title>{strings.TITLE}</title>
      </MetaTags>
        {/* TODO have main div, speakers div, sponsors div be their own components */}
        <div className="Witcon__landing">
          <div className="Witcon__landing-main">
            { <div className="Witcon__banner">
              <img src={banner} alt="silver-sponsor" className="medal-img" />
            </div> }

            <div className="Witcon__landing-main-paragraph">
              <p>{strings.WITCON_IS_A_ONE_DAY}</p>
              <p>{strings.THIS_CONFERENCE_WAS_DESIGNED}</p>
              <p>{strings.WITCON_IS_A_GREAT_OPPORTUNITY}</p>
              <p>{strings.TIP}</p>
              <p><b> <a href={"/witcon-2019"}>{strings.WITCON19_MORE}</a></b></p>
            </div>
          </div>
        </div>
        {/* <div id="tickets" className="Witcon__tickets">
          <div className="Witcon__tickets-paragraph">
            <h1>{strings.TICKETS}</h1>
            <p><b>{strings.TICKETS_ON_SALE}</b> {strings.TICKETS_INFO}</p>
            <LighterBlockLink link="https://witcon19.lilregie.com" label={strings.BUY_TICKET}/>
          </div>
        </div> */}
        {/* <div id="programme" className="Witcon__programme">
          <div className="Witcon__programme-paragraph">
            <h1>{strings.PROGRAMME}</h1>
            <table>
              <tr>
                <td>{strings.CHECKIN_TIME}</td>
                <td>{strings.CHECKIN}</td>
              </tr>
              <tr>
                <td>{strings.WELCOME_TIME}</td>
                <td>{strings.WELCOME}</td>
              </tr>
              <tr>
                <td>{strings.KEYNOTE_TIME}</td>
                <td>{strings.KEYNOTE} <a href="https://twitter.com/socheatapoum">@socheatapoum</a> </td>
              </tr>
              <tr>
                <td>{strings.SPEAKER1_TIME}</td>
                <td>{strings.SPEAKER1} <a href="https://twitter.com/evolutionises">@evolutionises</a></td>
              </tr>
              <tr>
                <td>{strings.SPEAKER2_TIME}</td>
                <td>{strings.SPEAKER2} <a href="https://twitter.com/kiritaescott">@kiritaescott</a></td>
              </tr>
              <tr>
                <td>{strings.SPEAKER3_TIME}</td>
                <td>{strings.SPEAKER3} <a href="https://twitter.com/finlay_nadine">@finlay_nadine</a></td>
              </tr>
              <tr>
                <td>{strings.PLUGS_TIME}</td>
                <td>{strings.PLUGS}</td>
              </tr>
              <tr>
                <td>{strings.LUNCH_TIME}</td>
                <td>{strings.LUNCH}</td>
              </tr>
              <tr>
                <td>{strings.SPEAKER4_TIME}</td>
                <td>{strings.SPEAKER4} <a href="https://twitter.com/Karahdactyl">@Karahdactyl</a></td>
              </tr>
              <tr>
                <td>{strings.SPEAKER5_TIME}</td>
                <td>{strings.SPEAKER5} <a href="https://twitter.com/KY_can_fly">@KY_can_fly</a></td>
              </tr>
              <tr>
                <td>{strings.SPEAKER6_TIME}</td>
                <td>{strings.SPEAKER6} <a href="https://twitter.com/amscraig">@amscraig</a></td>
              </tr>
              <tr>
                <td>{strings.PANEL_TIME}</td>
                <td>{strings.PANEL}</td>
              </tr>
              <tr>
                <td>{strings.CLOSING_TIME}</td>
                <td>{strings.CLOSING} <a href="https://twitter.com/aleishaamohia">@aleishaamohia</a></td>
              </tr>
              <tr>
                <td>{strings.DRINKS_TIME}</td>
                <td>{strings.DRINKS}</td>
              </tr>
            </table>
          </div>
        </div> */}
        <div id="speakers" className="Witcon__speakers">
          <div className="Witcon__speakers-top">
            <h1>{strings.SPEAKERS}</h1>
            <div className="Witcon__speakers-top-paragraph">
              <p>{strings.WE_INVITE_TALKS}</p>
            </div>
          </div>
          <div className="Witcon__speakers-bottom">
            {/* TODO: create title-block-group and title-block components  */}
            {/* TODO: separate theme title from theme */}
            <div className="title-block-group">
              <div className={cn("title-block", "title-block-accent")}>
                <h3>{strings.THEME_1}</h3>
                <p>{strings.DIVERSITY_IN}</p>
              </div>
              <div className="title-block">
                <h3>{strings.THEME_2}</h3>
                <p>{strings.PREPARING_FOR}</p>
              </div>
              <div className={cn("title-block", "title-block-accent")}>
                <h3>{strings.THEME_3}</h3>
                <p>{strings.TECHNOLOGY_AND_THE}</p>
              </div>
              <div className="title-block">
                <h3>{strings.THEME_4}</h3>
                <p>{strings.ENGINEERING_IN_THE}</p>
              </div>
              <div className={cn("title-block", "title-block-accent")}>
                <h3>{strings.THEME_5}</h3>
                <p>{strings.SOCIAL_MEDIA}</p>
              </div>
              <div className="title-block">
                <h3>{strings.THEME_6}</h3>
                <p>{strings.DISCUSSION_AND_DISCOVERY}</p>
              </div>
            </div>
          </div>
          { <div className="Witcon__speakers-submit">
            <h3>{strings.SPEAKER_SUBMISSIONS_TITLE}</h3>
            <p>{strings.SPEAKER_SUBMISSIONS_ARE_OPEN}<b>{strings.SPEAKER_DATES}</b>{strings.WE_WANT_TO_HEAR}</p>
            <LighterBlockLink link={strings.SPEAKER_SUBMIT_LINK} label={strings.SUBMIT_A_TALK}/>
          </div> }
        </div>

        <div id="sponsors" className="Witcon__sponsors">
          <div className="Witcon__sponsors-top">
            <div className="Witcon__sponsors-top-heading">
              <h1>{strings.SPONSORSHIP}</h1>
              {/* <p>{strings.SPONSORS_THANKYOU}</p> */}
            </div>
            <div className="Witcon__sponsors-top-paragraph">
              <p>{strings.SPONSOR_INFO}</p>
            </div>
          </div>

          {/* TODO: have a tick image beside each benefit */}
          <div id="witcon-sponsor-benefits" className="Witcon__sponsors-bottom">
            <div className="sponsor-tile-group">
              <div className="sponsor-tile">
                <div>
                  <img src={gold} alt="gold-sponsor" className="medal-img" />
                </div>
                <div className="medal-description">
                  <p>{strings.GOLD_BENEFITS}</p>
                  <div className="medal-description-point">
                    {strings.GOLD_YOUR_COMPANYS_LOGO}
                  </div>
                  <div className="medal-description-point">
                    {strings.GOLD_COMPANY_BANNER}
                  </div>
                  <div className="medal-description-point">
                    {strings.GOLD_10_TICKETS}
                  </div>
                  <div className="medal-description-point">
                    {strings.GOLD_A_REPRESENTATIVE}
                  </div>
                </div>
              </div>

              <div className="sponsor-tile">
                <div>
                  <img src={silver} alt="silver-sponsor" className="medal-img" />
                </div>
                <div className="medal-description">
                  <p>{strings.SILVER_BENEFITS}</p>
                  <div className="medal-description-point">
                    {strings.SILVER_YOUR_COMPANYS_LOGO}
                  </div>
                  <div className="medal-description-point">
                    {strings.SILVER_5_TICKETS}
                  </div>
                  <div className="medal-description-point">
                    {strings.SILVER_30_SEC}
                  </div>
                </div>
              </div>

              <div className="sponsor-tile">
                <div>
                  <img src={bronze} alt="bronze-sponsor" className="medal-img" />
                </div>
                <div className="medal-description">
                  <p>{strings.BRONZE_BENEFITS}</p>
                  <div className="medal-description-point">
                    {strings.BRONZE_YOUR_COMPANYS_LOGO}
                  </div>
                  <div className="medal-description-point">
                    {strings.BRONZE_2_TICKETS}
                  </div>
                </div>
              </div>

              <div className="sponsor-tile">
                <div>
                  <img src={merch} alt="merchandise-sponsor" className="medal-img" />
                </div>
                <div className="medal-description">
                  <p>{strings.MERCHANDISE_BENEFITS}</p>
                  <div className="medal-description-point">
                    {strings.MERCHANDISE_DISTRIBUTION_OF_YOUR}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="Witcon__witconpast">
            <h3>{strings.FIND_MORE_WITCON}</h3>

          <OutlineLinkInternal
      link={"/witcon-2020"}
      label={strings.WITCON_2020}
      /> <br></br>
            <OutlineLinkInternal
              link={"/witcon-2019"}
              label={strings.WITCON_2019}
            />
            <br></br>
            <OutlineLinkInternal
              link={"/witcon-2018"}
              label={strings.WITCON_2018}
            />

          </div>
        </div>
      </main>
    );
  }
}

export default Witcon;
