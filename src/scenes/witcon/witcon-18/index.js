import React, { Component } from "react";
import lang from "./en-NZ";
import "./index.scss";
import vuwsa from "../../../images/witconlogos/vuwsa-logo.png";
import fnz from "../../../images/witconlogos/FNZ-logo.png";
import flux from "../../../images/witconlogos/flux-logo.png";
import pikpok from "../../../images/witconlogos/pikpok-logo.png";
import catalyst from "../../../images/witconlogos/catalyst-logo.png";
import xero from "../../../images/witconlogos/xero-logo.png";
import pwc from "../../../images/witconlogos/pwc-logo.png";
import witconaudience from "../../../images/witcon18.jpg";
import OutlineLink from "../../../components/links/outlined-link";
import diana from "../../../images/gallery/witcon18/witcon18-7.jpg";
import chris from "../../../images/gallery/witcon18/witcon18-1compressed.jpg";
import karen from "../../../images/gallery/witcon18/witcon18-18.jpg";
import grant from "../../../images/gallery/witcon18/witcon18-10.jpg";
import kate from "../../../images/gallery/witcon18/witcon18-22.jpg";
import ruth from "../../../images/gallery/witcon18/witcon18-24.jpg";
import valerie from "../../../images/gallery/witcon18/witcon18-35.jpg";
import lena from "../../../images/lena.png";
import ruthpanel from "../../../images/witcon-18/ruth.png";
import valeriepanel from "../../../images/witcon-18/valerie.png";
import elliepanel from "../../../images/witcon-18/ellie.png";
import emmapanel from "../../../images/witcon-18/emma.png";
import colbypanel from "../../../images/witcon-18/colby.png";
import juliannpanel from "../../../images/witcon-18/juliann.png";
import MetaTags from 'react-meta-tags';

const strings = lang;

class Witcon18 extends Component {
  render() {
    return (
      <main className="Witcon18">
      <MetaTags>
        <title>{strings.TITLE}</title>
      </MetaTags>
        {/* TODO have main div, sponsors div, images div, speakers div, panel div be their own components */}
        <div className="Witcon18__landing">
          <div className="Witcon18__landing-main">
            <img
              src={witconaudience}
              alt="witcon-captive-audience"
              className="Witcon18__landing-main-img"
            />
            <div className="Witcon18__landing-main-heading">
              <h1>{strings.WITCON18}</h1>
            </div>
          </div>
        </div>
        <div id="speakers" className="Witcon18__sponsors">
          <div className="Witcon18__sponsors-heading">
            <p>{strings.THE_FIRST_WITCON}</p>
          </div>
          <div className="Witcon18__sponsors">
            <h4>{strings.GOLD_SPONSORS}</h4>
            <div className="Witcon18__sponsors-gold">
              <div>
                <img
                  src={flux}
                  alt="flux"
                  className="Witcon18__sponsors-gold-sponsor"
                />
              </div>
              <div>
                <img
                  src={vuwsa}
                  alt="VUWSA"
                  className="Witcon18__sponsors-gold-sponsor"
                />
              </div>
              <div>
                <img
                  src={fnz}
                  alt="FNZ"
                  className="Witcon18__sponsors-gold-sponsor"
                />
              </div>
            </div>
            <h4>{strings.SILVER_SPONSORS}</h4>
            <div className="Witcon18__sponsors-silver">
              <div>
                <img
                  src={pikpok}
                  alt="FNZ"
                  className="Witcon18__sponsors-silver-sponsor"
                />
              </div>
              <div>
                <img
                  src={catalyst}
                  alt="FNZ"
                  className="Witcon18__sponsors-silver-sponsor"
                />
              </div>
              <div>
                <img
                  src={xero}
                  alt="FNZ"
                  className="Witcon18__sponsors-silver-sponsor"
                />
              </div>
              <div>
                <img
                  src={pwc}
                  alt="FNZ"
                  className="Witcon18__sponsors-silver-sponsor"
                />
              </div>
            </div>
            <h4>{strings.WITH_SUPPORT_FROM}</h4>
          </div>

          {/* TODO: put in a small witcon image gallery here */}
          <div className="Witcon18__images">
            <h3>{strings.FIND_MORE_WITCON_IMAGES}</h3>
            <OutlineLink
              link={strings.WITCON_FB_LINK}
              label={strings.WITCON_2018_GALLERY}
            />
          </div>

          <div className="Witcon18__eventhost">
            <h1>{strings.EVENT_HOST}</h1>
            <div className="Witcon18__eventhost-tile">
              <div className="Witcon18__eventhost-tile-left">
                <div>
                  <img src={ruth} alt="Ruth" className="img" />
                </div>
              </div>
              <div className="Witcon18__eventhost-tile-right">
                <p>{strings.RUTH_IS_INTIMATELY}</p>
                <p className="sub">{strings.SUMMER_0F_TECH_HANDLE}</p>
              </div>
            </div>
          </div>

          <div className="Witcon18__speakers">
            <h1>{strings.SPEAKERS}</h1>
            <div className="Witcon18__speakers-group">
              {/* Valerie Chan */}
              <h2>{strings.KEYNOTE_SPEAKER}</h2>
              <div className="Witcon18__speakers-group-handles">
                <div>
                  <p className="sub">{strings.MASTERS_OF_COMP}</p>
                </div>
                <div>
                  <p className="sub">{strings.PRODUCT_OWNER}</p>
                </div>
                <div>
                  <p className="sub">{strings.VALERIE_CHAN_HANDLE}</p>
                </div>
              </div>
              <div className="Witcon18__speakers-group-tile">
                <div className="Witcon18__speakers-group-tile-left">
                  <div>
                    <img src={valerie} alt="Valerie" className="img" />
                  </div>
                </div>
                <div className="Witcon18__speakers-group-tile-right">
                  <h3>{strings.EXPLORING_THE_ENVIRONMENT}</h3>
                  <p>{strings.VALERIE_WAS_CURIOUS}</p>
                </div>
              </div>
              <hr />

              {/* Diana Siwiak */}

              <h2>{strings.DIANA_SIWIAK}</h2>
              <div className="Witcon18__speakers-group-handles">
                <div>
                  <p className="sub">{strings.GRADUATE_AND_EQUITY}</p>
                </div>
                <div>
                  <p className="sub">{strings.DIANA_SIWIAK_HANDLE}</p>
                </div>
              </div>
              <div className="Witcon18__speakers-group-tile">
                <div className="Witcon18__speakers-group-tile-left">
                  <div>
                    <img src={diana} alt="Diana" className="img" />
                  </div>
                </div>
                <div className="Witcon18__speakers-group-tile-right">
                  <h3>{strings.MUSIC_ENGINEERING_TECHNOLOGY}</h3>
                  <p>{strings.DIANAS_DOCTORAL}</p>
                  <OutlineLink link={strings.DIANA_LINK} label={strings.WATCH}/>
                </div>
              </div>

              {/* Chris Cormack */}
              <h2>{strings.CHRIS_CORMACK}</h2>
              <div className="Witcon18__speakers-group-handles">
                <div>
                  <p className="sub">{strings.CATALYSTIT_TECH}</p>
                </div>
                <div>
                  <p className="sub">{strings.CHRIS_CORMACK_HANDLE}</p>
                </div>
              </div>
              <div className="Witcon18__speakers-group-tile">
                <div className="Witcon18__speakers-group-tile-left">
                  <div>
                    <img src={chris} alt="Chris" className="img" />
                  </div>
                </div>
                <div className="Witcon18__speakers-group-tile-right">
                  <h3>{strings.HE_WAKA}</h3>
                  <p>{strings.FROM_THE_GROWTH}</p>
                  <OutlineLink link={strings.CHRIS_LINK} label={strings.WATCH}/>
                </div>
              </div>
              {/* Lena Plaksina */}
              <h2>{strings.LENA_PLAKSINA}</h2>
              <div className="Witcon18__speakers-group-handles">
                <div>
                  <p className="sub">{strings.SOFTWARE_DEVELOPER_FLUX}</p>
                </div>
                <div>
                  <p className="sub">{strings.LENA_PLAKSINA_HANDLE}</p>
                </div>
              </div>
              <div className="Witcon18__speakers-group-tile">
                <div className="Witcon18__speakers-group-tile-left">
                  <div>
                    <img src={lena} alt="Lena" className="img" />
                  </div>
                </div>
                <div className="Witcon18__speakers-group-tile-right">
                  <h3>{strings.FROM_MENTEE}</h3>
                  <p>{strings.LENA_KNOWS_THAT}</p>
                </div>
              </div>

              {/* Grant McLean */}
              <h2>{strings.GRANT_MCLEAN}</h2>
              <div className="Witcon18__speakers-group-handles">
                <div>
                  <p className="sub">{strings.SENIOR_DEVELOPER_CATALYST}</p>
                </div>
                <div>
                  <p className="sub">{strings.GRANT_MCLEAN_HANDLE}</p>
                </div>
              </div>
              <div className="Witcon18__speakers-group-tile">
                <div className="Witcon18__speakers-group-tile-left">
                  <div>
                    <img src={grant} alt="Grant" className="img" />
                  </div>
                </div>
                <div className="Witcon18__speakers-group-tile-right">
                  <h3>{strings.SO_YOU_WANT}</h3>
                  <p>{strings.AFTER_30_YEARS}</p>
                  <OutlineLink link={strings.GRANT_LINK} label={strings.WATCH}/>
                </div>
              </div>

              {/* Karen Pratt */}

              <h2>{strings.KAREN_PRATT}</h2>
              <div className="Witcon18__speakers-group-handles">
                <div>
                  <p className="sub">{strings.PROJECT_REEF_LIFE}</p>
                </div>
                <div>
                  <p className="sub">{strings.KAREN_PRATT_HANDLE}</p>
                </div>
              </div>
              <div className="Witcon18__speakers-group-tile">
                <div className="Witcon18__speakers-group-tile-left">
                  <div>
                    <img src={karen} alt="Karen" className="img" />
                  </div>
                </div>
                <div className="Witcon18__speakers-group-tile-right">
                  <h3>{strings.TECH_AT_23M}</h3>
                  <p>{strings.PROJECT_REEF_LIFE_IS_A}</p>
                  <OutlineLink link={strings.KAREN_LINK} label={strings.WATCH}/>
                </div>
              </div>

              {/* Kate Pearce */}

              <h2>{strings.KATE_PEARCE}</h2>
              <div className="Witcon18__speakers-group-handles">
                <div>
                  <p className="sub">{strings.SENIOR_SECURITY_CONSULTANT}</p>
                </div>
                <div>
                  <p className="sub">{strings.KATE_PEARCE_HANDLE}</p>
                </div>
              </div>
              <div className="Witcon18__speakers-group-tile">
                <div className="Witcon18__speakers-group-tile-left">
                  <div>
                    <img src={kate} alt="Kate" className="img" />
                  </div>
                </div>
                <div className="Witcon18__speakers-group-tile-right">
                  <h3>{strings.ADVERSARIAL_ENGINEERING}</h3>
                  <p>{strings.KATE_WILL_SHARE}</p>
                  <OutlineLink link={strings.KATE_LINK} label={strings.WATCH}/>
                </div>
              </div>
            </div>
          </div>

          <div className="Witcon18__panel">
            <h1>{strings.PANEL}</h1>

            <div className="Witcon18__panel-group">
              <div className="Witcon18__panel-group-tile">
                <div>
                  <h3>{strings.MODERATOR_RUTH}</h3>
                </div>

                <div>
                  <img
                    src={ruthpanel}
                    alt="Ruth-panel"
                    className="Witcon18__panel-group-tile-img"
                  />
                </div>
                <div className="Witcon18__panel-group-tile-descrip">
                  <p className="sub">{strings.SUMMER_0F_TECH}</p>
                  <p className="sub">{strings.RUTH_MCDAVITT_HANDLE}</p>
                </div>
              </div>
              <div className="Witcon18__panel-group-tile">
                <div>
                  <h3>{strings.VALERIE_CHAN}</h3>
                </div>
                <div>
                  <img
                    src={valeriepanel}
                    alt="Valerie-panel"
                    className="Witcon18__panel-group-tile-img"
                  />
                </div>
                <div className="Witcon18__panel-group-tile-descrip">
                  <p className="sub">{strings.PRODUCT_OWNER}</p>
                  <p className="sub">{strings.MASTERS_OF_COMP}</p>
                  <p className="sub">{strings.VALERIE_CHAN_HANDLE}</p>
                </div>
              </div>
              <div className="Witcon18__panel-group-tile">
                <div>
                  <h3>{strings.JULIANN_LUM}</h3>
                </div>
                <div>
                  <img
                    src={juliannpanel}
                    alt="Juliann-panel"
                    className="Witcon18__panel-group-tile-img"
                  />
                </div>
                <div className="Witcon18__panel-group-tile-descrip">
                  <p className="sub">{strings.PRODUCT_MANAGER}</p>
                  <p className="sub">{strings.JULIANN_LUM_HANDLE}</p>
                </div>
              </div>
              <div className="Witcon18__panel-group-tile">
                <div>
                  <h3>{strings.COLBY_RALEY}</h3>
                </div>
                <div>
                  <img
                    src={colbypanel}
                    alt="Colby-panel"
                    className="Witcon18__panel-group-tile-img"
                  />
                </div>
                <div className="Witcon18__panel-group-tile-descrip">
                  <p className="sub">{strings.DIRECTOR_IN_TECHNOLOGY}</p>
                  <p className="sub">{strings.COLBY_RALEY_HANDLE}</p>
                </div>
              </div>
              <div className="Witcon18__panel-group-tile">
                <div>
                  <h3>{strings.EMMA_BARNES}</h3>
                </div>
                <div>
                  <img
                    src={emmapanel}
                    alt="Emma-panel"
                    className="Witcon18__panel-group-tile-img"
                  />
                </div>
                <div className="Witcon18__panel-group-tile-descrip">
                  <p className="sub">{strings.CREW_CHAMPION}</p>
                </div>
              </div>
              <div className="Witcon18__panel-group-tile">
                <div>
                  <h3>{strings.ELLIE_COYLE}</h3>
                </div>
                <div>
                  <img
                    src={elliepanel}
                    alt="Ellie-panel"
                    className="Witcon18__panel-group-tile-img"
                  />
                </div>
                <div className="Witcon18__panel-group-tile-descrip">
                  <p className="sub">{strings.SOFTWARE_DEVELOPER}</p>
                  <p className="sub">{strings.ELLIE_COYLE_HANDLE}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Witcon18;
