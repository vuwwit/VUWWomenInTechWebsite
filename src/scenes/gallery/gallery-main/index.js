import React, { Component } from "react";
import strings from "./en-NZ";
import "./index.scss";
import gn18 from "../../../images/gallery/gamenight18/gn18-1.jpg";
import ball18 from "../../../images/gallery/ball18/ball18-2.jpg";
import igictd18 from "../../../images/gallery/igictd18/igictd18-1.jpg";
import physhack18 from "../../../images/gallery/physhack18/physhack18-1.jpg";
import quiz18 from "../../../images/gallery/quiznight18/quiz18-1.jpg";
import tdfg18 from "../../../images/gallery/tdfg18/tdfg18-1.jpg";
import witcon18 from "../../../images/gallery/witcon18/witcon18-1compressed.jpg";
import bbq19 from "../../../images/gallery/bbq19/bbq19-1compressed.jpg";
import igictd19 from "../../../images/gallery/igictd19/igictd19-1compressed.jpg";
import techweek19 from "../../../images/gallery/techweek19/techweek19-1compressed.jpg";
import witcon19 from "../../../images/gallery/witcon19/witcon19-1.JPG";
import tdfg19 from "../../../images/gallery/tdfg19/tdfg19-1.JPG";
import hackathon19 from "../../../images/gallery/hackathon19/hackathon19-1.jpg";
import ball19photobooth from "../../../images/gallery/ball19/ball19photobooth-cover.JPG";
import ball19 from "../../../images/gallery/ball19/ball19-160.jpg";
import MetaTags from 'react-meta-tags';

class Gallery extends Component {
  render() {
    return (
      <main className="Gallery">
      <MetaTags>
        <title>Gallery - VUW Women in Tech</title>
      </MetaTags>
          <div className="Gallery__main">
            <h1>{strings.GALLERY_TITLE}</h1>
            <div className="covergrid">

                <div className="covergrid-tile">
                    <a href="/ball19"><img src={ball19} alt="ball 2019" className="covergrid-tile-img" /></a>
                    <h3>STEM Ball 2019</h3>
                </div>

                <div className="covergrid-tile">
                    <a href="http://wellingtonphotos.photoshelter.com/gallery/Photos/G0000SEYUhivwzmI/C0000piTGauBpYpA"><img src={ball19photobooth} alt="STEM Ball Photobooth 2019" className="covergrid-tile-img" /></a>
                    <h3>STEM Ball 2019 - Photobooth</h3>
                </div>
                <div className="covergrid-tile">
                    <a href="/witcon19"><img src={witcon19} alt="WITcon 2019" className="covergrid-tile-img" /></a>
                    <h3>WITcon 2019</h3>
                </div>
                <div className="covergrid-tile">
                    <a href="/hackathon19"><img src={hackathon19} alt="Intro to Hackathons 2019" className="covergrid-tile-img" /></a>
                    <h3>Intro to: Hackathons 2019</h3>
                </div>
                <div className="covergrid-tile">
                    <a href="/tdfg19"><img src={tdfg19} alt="Tech Day for Girls 2019" className="covergrid-tile-img" /></a>
                    <h3>Tech Day for Girls 2019</h3>
                </div>
                <div className="covergrid-tile">
                    <a href="/techweek19"><img src={techweek19} alt="Tech Week 2019" className="covergrid-tile-img" /></a>
                    <h3>Byte-Sized Breakfast - Tech Week 2019</h3>
                </div>
                <div className="covergrid-tile">
                    <a href="/igictd19"><img src={igictd19} alt="International Girls in ICT Day Dinner 2019" className="covergrid-tile-img" /></a>
                    <h3>International Girls in ICT Day Dinner 2019</h3>
                </div>
                <div className="covergrid-tile">
                    <a href="/bbq19"><img src={bbq19} alt="Welcome Back BBQ 2019" className="covergrid-tile-img" /></a>
                    <h3>Welcome Back BBQ 2019</h3>
                </div>
                <div className="covergrid-tile">
                    <a href="/ball18"><img src={ball18} alt="STEM Ball 2018" className="covergrid-tile-img" /></a>
                    <h3>STEM Ball 2018</h3>
                </div>
                <div className="covergrid-tile">
                    <a href="/witcon18"><img src={witcon18} alt="WITcon 2018" className="covergrid-tile-img" /></a>
                    <h3>WITcon 2018</h3>
                </div>
                <div className="covergrid-tile">
                    <a href="/physhack18"><img src={physhack18} alt="PhysHack 2018" className="covergrid-tile-img" /></a>
                    <h3>PhysHack 2018</h3>
                </div>
                <div className="covergrid-tile">
                    <a href="/tdfg18"><img src={tdfg18} alt="Tech Day for Girls 2018" className="covergrid-tile-img" /></a>
                    <h3>Tech Day for Girls 2018</h3>
                </div>
                <div className="covergrid-tile">
                    <a href="/gn18"><img src={gn18} alt="Game Night 2018" className="covergrid-tile-img" /></a>
                    <h3>Games Night 2018</h3>
                </div>
                <div className="covergrid-tile">
                    <a href="/quiz18"><img src={quiz18} alt="Quiz Night 2018" className="covergrid-tile-img" /></a>
                    <h3>Quiz Night 2018</h3>
                </div>
                <div className="covergrid-tile">
                    <a href="/igictd18"><img src={igictd18} alt="International Girls in ICT Day Dinner 2018" className="covergrid-tile-img" /></a>
                    <h3>International Girls in ICT Day Dinner 2018</h3>
                </div>
            </div>
          </div>
      </main>
    );
  }
}

export default Gallery;
