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

import witconaudience from "../../../images/gallery/witcon20/witcon20-39.JPG";
import OutlineLink from "../../../components/links/outlined-link";
import sonja from "../../../images/witcon-20/sonja.jpeg";
import siva from "../../../images/witcon-20/siva.jpg";
import ian from "../../../images/witcon-20/ian.jpg";
import hayley from "../../../images/witcon-20/hayley.jpg";
import kate from "../../../images/witcon-20/kate.jpg";
import philippa from "../../../images/witcon-20/philippa.jpg";
import MetaTags from 'react-meta-tags';

const strings = lang;

class Witcon20 extends Component {
  render() {
    return (
      <main className="Witcon20">
      <MetaTags>
        <title>{strings.TITLE}</title>
      </MetaTags>
        {/* TODO have main div, sponsors div, images div, speakers div, panel div be their own components */}
        <div className="Witcon20__landing">
          <div className="Witcon20__landing-main">

            <div className="Witcon20__landing-main-heading">
              <h1>{strings.WITCON20}</h1>
          <h3>"Keep an eye out for 2020 witcon. All information will be updated here soon!"</h3>
            </div>
          </div>
        </div>



      </main>
    );
  }
}

export default Witcon20;