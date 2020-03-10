import React, { Component } from "react";
import lang from "./en-NZ";
import "./index.scss";

//sponsor logos
import fnz from "../../../images/witconlogos/FNZ-logo.png";
import flux from "../../../images/witconlogos/flux-logo.png";
import pikpok from "../../../images/witconlogos/pikpok-logo.png";
import catalyst from "../../../images/witconlogos/catalyst-logo.png";
import xero from "../../../images/witconlogos/xero-logo.png";
import zx from "../../../images/witconlogos/zx-logo.png";
import iw from "../../../images/witconlogos/integrationworks-logo.png";
import inz from "../../../images/witconlogos/inz-logo.png";
import typ from "../../../images/witconlogos/typayroll-logo.png";
import atu from "../../../images/witconlogos/atu-logo.png";
import bnz from "../../../images/witconlogos/bnz-logo.png";
import ey from "../../../images/witconlogos/ey-logo.png";
import fixfogg from "../../../images/witconlogos/fix-fogg-logo.png";
import gradnz from "../../../images/witconlogos/gradnz-logo.png";
import hij from "../../../images/witconlogos/hij-logo.png";

import witconaudience from "../../../images/gallery/witcon19/witcon19-39.JPG";
import OutlineLink from "../../../components/links/outlined-link";
import sonja from "../../../images/witcon-19/sonja.jpeg";
import siva from "../../../images/witcon-19/siva.jpg";
import ian from "../../../images/witcon-19/ian.jpg";
import hayley from "../../../images/witcon-19/hayley.jpg";
import kate from "../../../images/witcon-19/kate.jpg";
import philippa from "../../../images/witcon-19/philippa.jpg";
import MetaTags from 'react-meta-tags';

const strings = lang;

class Witcon19 extends Component {
  render() {
    return (
      <main className="Witcon19">
      <MetaTags>
        <title>{strings.TITLE}</title>
      </MetaTags>
        {/* TODO have main div, sponsors div, images div, speakers div, panel div be their own components */}
        <div className="Witcon19__landing">
          <div className="Witcon19__landing-main">
            <img src={witconaudience} alt="witcon-captive-audience" className="Witcon19__landing-main-img" />
            <div className="Witcon19__landing-main-heading">
              <h1>{strings.WITCON19}</h1>
            </div>
          </div>
        </div>

        <div className="Witcon19__sponsors">
          <div className="Witcon19__sponsors-top">
            <p>{strings.THANKS}</p>
          </div>

          <h4>{strings.GOLD}</h4>
          <div className="Witcon19__sponsors-logos">
            <a href="https://www.catalyst.net.nz"><img src={catalyst} alt="Catalyst IT" /></a>
            <a href="https://www.fnz.com"><img src={fnz} alt="FNZ" /></a>
            <a href="https://fluxfederation.com"><img src={flux} alt="Flux Federation" /></a>
            <a href="https://zxsecurity.co.nz"><img src={zx} alt="ZX Security" /></a>
            <a href="https://www.integration.works"><img src={iw} alt="Integration Works" className="wide" /></a>
          </div>

          <h4>{strings.SILVER}</h4>
          <div className="Witcon19__sponsors-logos">
            <a href="http://pikpok.com"><img src={pikpok} alt="PikPok" /></a>
            <a href="https://www.xero.com/nz/"><img src={xero} alt="Xero" /></a>
          </div>
          
          <h4>{strings.BRONZE}</h4>
          <div className="Witcon19__sponsors-logos">
            <a href="https://thankyoupayroll.co.nz"><img src={typ} alt="Thankyou Payroll" /></a>
            <a href="https://internetnz.nz"><img src={inz} alt="InternetNZ" /></a>
          </div>
          
          <h4>{strings.MERCHANDISE}</h4>
          <div className="Witcon19__sponsors-logos">
            <a href="https://www.atu.org.nz"><img src={atu} alt="Aotearoa Tech Union" /></a>
            <a href="https://www.bnz.co.nz"><img src={bnz} alt="BNZ" /></a>
            <a href="https://www.ey.com/nz/en/home"><img src={ey} alt="EY" /></a>
            <a href="https://www.fixandfogg.com"><img src={fixfogg} alt="Fix & Fogg" /></a>
            <a href="https://gradnewzealand.nz"><img src={gradnz} alt="Grad New Zealand" /></a>
            <a href="https://www.hijewellery.nz"><img src={hij} alt="Human Interface Jewellery" /></a>
          </div>
        </div>

        {/* TODO: put in a small witcon image gallery here */}
        <div className="Witcon19__images">
          <h3>{strings.FIND_MORE_WITCON_IMAGES}</h3>
          <OutlineLink
            link="/witcon19"
            label={strings.WITCON_2019_GALLERY}
          />
        </div>

        <div className="Witcon19__eventhost">
          <h1>{strings.EVENT_HOST}</h1>
          <div className="Witcon19__eventhost-tile">
            <div className="Witcon19__eventhost-tile-left">
              <iframe title="sonja" src="https://vstream.hosted.panopto.com/Panopto/Pages/Embed.aspx?id=848bfb74-4fa5-464e-a9b9-aab100358bfe&v=1" width="500" height="281" frameborder="0" allowfullscreen allow="autoplay" className="Witcon19__iframe-small"></iframe>
            </div>
            <div className="Witcon19__eventhost-tile-right">
              <p>{strings.SONJA_INFO}</p>
              <p className="sub"><a href="https://twitter.com/NCWWLG">@NCWWLG</a></p>
            </div>
          </div>
        </div>

        <div className="Witcon19__speakers">
          <h1>{strings.SPEAKERS}</h1>
          <div className="Witcon19__speakers-group">

            {/* Chansocheata Poum */}
            <h2>{strings.KEYNOTE_SPEAKER}</h2>
            <div className="Witcon19__speakers-group-handles">
              <div>
                <p className="sub">{strings.KEYNOTE_JOB}</p>
              </div>
              <div>
                <p className="sub"><a href="https://twitter.com/socheatapoum">@socheatapoum</a></p>
              </div>
            </div>
            <div className="Witcon19__speakers-group-tile">
              <div className="Witcon19__speakers-group-tile-left">
                <iframe title="socheata" src="https://vstream.hosted.panopto.com/Panopto/Pages/Embed.aspx?id=fef376f2-b169-47a4-8d15-aab10048343f&v=1" width="500" height="281" frameborder="0" allowfullscreen allow="autoplay" className="Witcon19__iframe-small"></iframe>
              </div>
              <div className="Witcon19__speakers-group-tile-right">
                <h3>{strings.KEYNOTE_TITLE}</h3>
                <p>{strings.KEYNOTE_DESC}</p>
              </div>
            </div>
            <hr />

            {/* Alix Klingenberg */}
            <h2>{strings.ALIX}</h2>
            <div className="Witcon19__speakers-group-handles">
              <div>
                <p className="sub">{strings.ALIX_JOB}</p>
              </div>
              <div>
                <p className="sub"><a href="https://twitter.com/evolutionises">@evolutionises</a></p>
              </div>
            </div>
            <div className="Witcon19__speakers-group-tile">
              <div className="Witcon19__speakers-group-tile-left">
                <iframe title="alix" src="https://vstream.hosted.panopto.com/Panopto/Pages/Embed.aspx?id=d3b9d077-ea0b-4a59-9802-aab100482a46&v=1" width="500" height="281" frameborder="0" allowfullscreen allow="autoplay" className="Witcon19__iframe-small"></iframe>
              </div>
              <div className="Witcon19__speakers-group-tile-right">
                <h3>{strings.ALIX_TITLE}</h3>
                <p>{strings.ALIX_DESC}</p>
              </div>
            </div>

            {/* Kirita Escott */}
            <h2>{strings.KIRITA}</h2>
            <div className="Witcon19__speakers-group-handles">
              <div>
                <p className="sub">{strings.KIRITA_JOB}</p>
              </div>
              <div>
                <p className="sub"><a href="https://twitter.com/kiritaescott">@kiritaescott</a></p>
              </div>
            </div>
            <div className="Witcon19__speakers-group-tile">
              <div className="Witcon19__speakers-group-tile-left">
                <iframe title="kirita" src="https://vstream.hosted.panopto.com/Panopto/Pages/Embed.aspx?id=97cfe19f-5565-47ec-a305-aab10047e7d8&v=1" width="500" height="281" frameborder="0" allowfullscreen allow="autoplay" className="Witcon19__iframe-small"></iframe>
              </div>
              <div className="Witcon19__speakers-group-tile-right">
                <h3>{strings.KIRITA_TITLE}</h3>
                <p>{strings.KIRITA_DESC}</p>
              </div>
            </div>

            {/* Nadine Finlay */}
            <h2>{strings.NADINE}</h2>
            <div className="Witcon19__speakers-group-handles">
              <div>
                <p className="sub">{strings.NADINE_JOB}</p>
              </div>
              <div>
                <p className="sub"><a href="https://twitter.com/finlay_nadine">@finlay_nadine</a></p>
              </div>
            </div>
            <div className="Witcon19__speakers-group-tile">
              <div className="Witcon19__speakers-group-tile-left">
                <iframe title="nadine" src="https://vstream.hosted.panopto.com/Panopto/Pages/Embed.aspx?id=aab9834e-8db9-49e6-ba0c-aab100481d9a&v=1" width="500" height="281" frameborder="0" allowfullscreen allow="autoplay" className="Witcon19__iframe-small"></iframe>
              </div>
              <div className="Witcon19__speakers-group-tile-right">
                <h3>{strings.NADINE_TITLE}</h3>
                <p>{strings.NADINE_DESC}</p>
              </div>
            </div>

            {/* Karah Sutton */}
            <h2>{strings.KARAH}</h2>
            <div className="Witcon19__speakers-group-handles">
              <div>
                <p className="sub">{strings.KARAH_JOB}</p>
              </div>
              <div>
                <p className="sub"><a href="https://twitter.com/Karahdactyl">@Karahdactyl</a></p>
              </div>
            </div>
            <div className="Witcon19__speakers-group-tile">
              <div className="Witcon19__speakers-group-tile-left">
                <iframe title="karah" src="https://vstream.hosted.panopto.com/Panopto/Pages/Embed.aspx?id=04d57a2d-3ce2-4f20-8794-aab001880f92&v=1" width="500" height="281" frameborder="0" allowfullscreen allow="autoplay" className="Witcon19__iframe-small"></iframe>
              </div>
              <div className="Witcon19__speakers-group-tile-right">
                <h3>{strings.KARAH_TITLE}</h3>
                <p>{strings.KARAH_DESC}</p>
              </div>
            </div>

            {/* Kai Yin Davidson-Khor */}
            <h2>{strings.KAIYIN}</h2>
            <div className="Witcon19__speakers-group-handles">
              <div>
                <p className="sub">{strings.KAIYIN_JOB}</p>
              </div>
              <div>
                <p className="sub"><a href="https://twitter.com/KY_can_fly">@KY_can_fly</a></p>
              </div>
            </div>
            <div className="Witcon19__speakers-group-tile">
              <div className="Witcon19__speakers-group-tile-left">
                <iframe title="kaiyin" src="https://vstream.hosted.panopto.com/Panopto/Pages/Embed.aspx?id=a6e2aaf3-5771-4dc3-abb5-aab100488149&v=1" width="500" height="281" frameborder="0" allowfullscreen allow="autoplay" className="Witcon19__iframe-small"></iframe>
              </div>
              <div className="Witcon19__speakers-group-tile-right">
                <h3>{strings.KAIYIN_TITLE}</h3>
                <p>{strings.KAIYIN_DESC}</p>
              </div>
            </div>

            {/* Amber Craig */}
            <h2>{strings.AMBER}</h2>
            <div className="Witcon19__speakers-group-handles">
              <div>
                <p className="sub">{strings.AMBER_JOB}</p>
              </div>
              <div>
                <p className="sub"><a href="https://twitter.com/amscraig">@amscraig</a></p>
              </div>
            </div>
            <div className="Witcon19__speakers-group-tile">
              <div className="Witcon19__speakers-group-tile-left">
                <iframe title="amber" src="https://vstream.hosted.panopto.com/Panopto/Pages/Embed.aspx?id=49c3424d-c125-4e3b-a6f0-aab10048656a&v=1" width="500" height="281" frameborder="0" allowfullscreen allow="autoplay" className="Witcon19__iframe-small"></iframe>
              </div>
              <div className="Witcon19__speakers-group-tile-right">
                <h3>{strings.AMBER_TITLE}</h3>
                <p>{strings.AMBER_DESC}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="Witcon19__panel">
          <h1>{strings.PANEL}</h1>

          <div className="Witcon19__panel-group">
            <div className="Witcon19__panel-group-tile">
              <div>
                <h3>{strings.MODERATOR}</h3>
              </div>

              <div>
                <img src={sonja} alt={strings.MODERATOR} className="Witcon19__panel-group-tile-img" />
              </div>
              <div className="Witcon19__panel-group-tile-descrip">
                <p className="sub">{strings.MODERATOR_JOB}</p>
              </div>
            </div>

            <div className="Witcon19__panel-group-tile">
              <div>
                <h3>{strings.SIVA}</h3>
              </div>
              <div>
                <img src={siva} alt={strings.SIVA} className="Witcon19__panel-group-tile-img" />
              </div>
              <div className="Witcon19__panel-group-tile-descrip">
                <p className="sub">{strings.SIVA_JOB}</p>
              </div>
            </div>

            <div className="Witcon19__panel-group-tile">
              <div>
                <h3>{strings.PHILIPPA}</h3>
              </div>
              <div>
                <img src={philippa} alt={strings.PHILIPPA} className="Witcon19__panel-group-tile-img" />
              </div>
              <div className="Witcon19__panel-group-tile-descrip">
                <p className="sub">{strings.PHILIPPA_JOB}</p>
              </div>
            </div>

            <div className="Witcon19__panel-group-tile">
              <div>
                <h3>{strings.IAN}</h3>
              </div>
              <div>
                <img src={ian} alt={strings.IAN} className="Witcon19__panel-group-tile-img" />
              </div>
              <div className="Witcon19__panel-group-tile-descrip">
                <p className="sub">{strings.IAN_JOB}</p>
              </div>
            </div>

            <div className="Witcon19__panel-group-tile">
              <div>
                <h3>{strings.HAYLEY}</h3>
              </div>
              <div>
                <img src={hayley} alt={strings.HAYLEY} className="Witcon19__panel-group-tile-img" />
              </div>
              <div className="Witcon19__panel-group-tile-descrip">
                <p className="sub">{strings.HAYLEY_JOB}</p>
                <p className="sub"><a href="https://twitter.com/hayleymapley">@hayleymapley</a></p>
              </div>
            </div>

            <div className="Witcon19__panel-group-tile">
              <div>
                <h3>{strings.KATE}</h3>
              </div>
              <div>
                <img src={kate} alt={strings.KATE} className="Witcon19__panel-group-tile-img" />
              </div>
              <div className="Witcon19__panel-group-tile-descrip">
                <p className="sub">{strings.KATE_JOB}</p>
              </div>
            </div>

            <iframe title="panel" src="https://vstream.hosted.panopto.com/Panopto/Pages/Embed.aspx?id=5863b20c-cc13-4b8e-98d7-aab1004851ee&v=1" width="720" height="405" frameborder="0" allowfullscreen allow="autoplay" className="Witcon19__iframe-big"></iframe>

          </div>
        </div>

        <div className="Witcon19__eventhost">
          <h1>{strings.TY}</h1>
          <div>
            <p className="sub">{strings.ANGITHA_JOB}</p>
          </div>
          <iframe title="angitha" src="https://vstream.hosted.panopto.com/Panopto/Pages/Embed.aspx?id=fb9d11db-e72b-4f6a-a2c7-aab100485b88&v=1" width="720" height="405" frameborder="0" allowfullscreen allow="autoplay" className="Witcon19__iframe-big"></iframe>
        </div>

        <div className="Witcon19__speakers">
          <h1>{strings.CLOSING_WORDS}</h1>
          <div>
            <p className="sub">{strings.ALEISHA_JOB}</p>
          </div>
          <div>
            <p className="sub"><a href="https://twitter.com/aleishaamohia">@aleishaamohia</a></p>
          </div>
          <iframe title="aleisha" src="https://vstream.hosted.panopto.com/Panopto/Pages/Embed.aspx?id=fabc0c41-e63f-45a2-bbf7-aab100487288&v=1" width="720" height="405" frameborder="0" allowfullscreen allow="autoplay" className="Witcon19__iframe-big"></iframe>        
        </div>

      </main>
    );
  }
}

export default Witcon19;