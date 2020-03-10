import React, { Component } from "react";
import lang from "./en-NZ";
import "./index.scss";
import MetaTags from 'react-meta-tags';

const strings = lang;

class Media extends Component {

  render() {
    return (
      <main className="Media">
      <MetaTags>
        <title>{strings.TITLE}</title>
      </MetaTags>
        <div className="Media__main">
          <h1>{strings.HEADING}</h1>
          <div id="content" className="Media__main-body">
            <h3 id="newsletter-anchor" className="anchor">{strings.NEWSLETTER_ARCHIVE}</h3>
              <div id="newsletters" className="Media__main-section">
              <a href="https://mailchi.mp/50473a9f33be/september-newsletter-vuwwit">{strings.SEP19}</a>
              <a href="https://mailchi.mp/b04852d92371/august-newsletter-vuwwit">{strings.AUG19}</a>
              <a href="https://mailchi.mp/9f41fa3fafee/june-newsletter-4661505">{strings.JUL19}</a>
              <a href="https://mailchi.mp/1a302746cf78/vuwwit-techweek19?e=8c33f5932a">{strings.TECHWEEK19}</a>
              <a href="https://mailchi.mp/dc4be2c2b92f/june-newsletter">{strings.JUN19}</a>
              <a href="https://mailchi.mp/9ee5eaf51342/we-have-a-website-1882705">{strings.MAY19}</a>
              <a href="https://mailchi.mp/fcd64830fd35/we-have-a-website-772221?e=[UNIQID]">{strings.APR19}</a>
              <a href="https://mailchi.mp/abdb75db8e9c/we-have-a-website-762649">{strings.MAR19}</a>
              <a href="https://mailchi.mp/f631e8314d7e/we-have-a-website">{strings.FEB19}</a>
              <a href="https://mailchi.mp/e1e24a39182c/vuwwitseptemberupdate-193845">{strings.OCT18}</a>
              <a href="https://mailchi.mp/d5b465f5524b/vuwwitseptemberupdate">{strings.SEP18}</a>
              <a href="https://mailchi.mp/88b7cc05aab4/coming-up-in-august-witcon-women-techmakers-instep">{strings.AUG18}</a>
            </div>
            <h3 id="blogs-anchor" className="anchor">{strings.BLOG_POSTS_MEDIA}</h3>
            <div id="blogs" className="Media__main-section">
              <a href="http://salient.org.nz/2019/03/stem-fields-continue-to-struggle-with-diversity/">{strings.STEM_FIELDS_CONTINUE_STRUGGLE_DIVERSITY}</a>
              <a href="https://www.myview.co.nz/running-a-diverse-tech-conference/">{strings.RUNNING_DIVERSE_TECH_CONF}</a>
              <a href="https://careerswithstem.com.au/victoria-university-of-wellington-women-in-tech/">{strings.SPOTLIGHT_ON_STRONG_WOMEN}</a>
              <a href="https://medium.com/@knfrances/witcon-2018-959c24699962">{strings.WITCON_RECAP_KNFRANCES}</a>
              <a href="https://www.linkedin.com/pulse/celebrating-international-girls-ict-day-aleisha-amohia/">{strings.CELEBRATING_IGICTD}</a>
              <a href="https://www.linkedin.com/pulse/techweek19-leaders-lightning-talks-lattés-aleisha-amohia/">{strings.TECHWEEK_RECAP}</a>
              <a href="https://www.linkedin.com/pulse/hackathon-intro-hackathons-aleisha-amohia/">{strings.HACKATHON_RECAP}</a>
              <a href="https://www.shecancode.nz/stories/2019/aleisha-amohia">{strings.SHECANCODE_ALEISHA}</a>
              <a href="https://accessgranted.nz/episodes/2019/4/16/aleisha-amohia-a-good-mix-of-tech-stuff-and-people-stuff">{strings.ACCESS_GRANTED}</a>
              <a href="https://careerswithstem.com.au/profiles/junior-developer-vuw/">{strings.CAREERS_WITH_STEM}</a>
              <a href="https://www.linkedin.com/pulse/tech-day-girls-2019-review-laurie-hyde/">{strings.TDFG_REVIEW}</a>
            </div>
            <h3 id="documents-anchor" className="anchor">{strings.DOCUMENTS}</h3>
            <div id="documents" className="Media__main-section">
              <a href="https://goo.gl/V1mRnR">{strings.CODE_OF_CONDUCT}</a>
              <a href="https://drive.google.com/open?id=1xIJ1hppSuwMam_El8LjoatiOFOUYCA5b">{strings.CONSTITUTION2020}</a>
              <a href="https://drive.google.com/open?id=1ZDfk3NV3w-N1gcLICOOQtUoqCvHRkS18">{strings.ROLES2020}</a>
              <a href="https://drive.google.com/open?id=11NII_5oKasWqjr_UdQxlln_ZH_Q8R1n4">{strings.AGM2019}</a>
              <a href="https://drive.google.com/file/d/1llI19btXm8HS0n_frAAi9_e_GBn2t0aQ/view?usp=sharing">{strings.PRESIDENTS_REPORT_18}</a>
              <a href="https://drive.google.com/file/d/1c_fTeVd1GipqBdChA_l3qV8nia8sT6xI/view?usp=sharing">{strings.AGM2018}</a>
              <a href="https://drive.google.com/file/d/17P0Sn3Evs_FiKsRmbsxewmB-oQGoQPDu/view?usp=sharing">{strings.IGM2018}</a>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Media;
