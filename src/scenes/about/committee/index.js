import React, { Component } from "react";
import lang from "./en-NZ";
import "./index.scss";
import OutlineButton from "../../../components/buttons/outlined-button";
import CommitteeModal from "../components/committee-modal";
import OutlineLink from "../../../components/links/outlined-link";
import aleisha from "../../../images/committee/aleisha.jpg";
import laurie from "../../../images/committee/laurie.png";
import lavanya from "../../../images/committee/lavanya.jpg";
import rachel from "../../../images/committee/rachel.jpg";
import wainui from "../../../images/committee/wainui.jpg";
import angitha from "../../../images/committee/angitha.jpg";
import support from "../../../images/committee/support.jpg";
import terahui from "../../../images/committee/terahui.png";
import maisie from "../../../images/committee/maisie.png";
import steph from "../../../images/committee/steph.jpg";
import MetaTags from 'react-meta-tags';

const strings = lang;

class Committee extends Component {
  state = {
    showModal: false,
    name: "",
    role: "",
    description: "",
    quoteone: "",
    quotetwo: "",
    image: ""
  };

  handleOnClick(name, role, description, quoteone, quotetwo, image) {
    this.toggleModal();
    this.setModalContent(name, role, description, quoteone, quotetwo, image);
  }

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  setModalContent(name, role, description, quoteone, quotetwo, image) {
    this.setState({
      name: name,
      role: role,
      description: description,
      quoteone: quoteone,
      quotetwo: quotetwo,
      image: image
    });
  }
  render() {
    return (
      <main className="Committee">
      <MetaTags>
        <title>{strings.TITLE}</title>
      </MetaTags>
        {/* TODO have main div, speakers div, sponsors div be their own components */}
        <div className="Committee__main" id="committee">
          <div className="Committee__main-gallery">
            <div className="Committee__main-gallery-heading">
              <h1>{strings.MEET_THE_2019_COMMITTEE}</h1>
            </div>

            <div className="Committee__main-gallery-group">
              {/* ALEISHA  */}
              <div className="committee-tile">
                <div>
                  <img src={aleisha} alt="aleisha" className="img" />
                </div>
                <div className="committee-tile-name">
                  <div>
                    <h3>{strings.ALEISHA_AMOHIA}</h3>
                    <h4>{strings.PRESIDENT}</h4>
                  </div>
                  <div>
                    <OutlineButton
                      onClick={() =>
                        this.handleOnClick(
                          strings.ALEISHA_AMOHIA,
                          strings.PRESIDENT,
                          strings.ALEISHAS_JOB,
                          strings.IM_SO_EXCITED,
                          strings.I_JOINED_THE_COMMITTEE,
                          ""
                        )
                      }
                      label={strings.MORE_ABOUT_ALEISHA}
                    />
                  </div>
                </div>
              </div>

              {/*   ANGITHA  */}
              <div className="committee-tile">
                <div>
                  <img src={angitha} alt="Angitha" className="img"/>
                </div>
                <div className="committee-tile-name">
                  <div>
                    <h3>{strings.ANGITHA_RAMESH}</h3>
                    <h4>{strings.SECRETARY}</h4>
                  </div>
                  <div>
                    <OutlineButton
                      onClick={() =>
                        this.handleOnClick(
                          strings.ANGITHA_RAMESH,
                          strings.SECRETARY,
                          strings.ANGITHA_TAKES_CARE,
                          strings.HEY_IM_A_THIRD,
                          strings.WE_HAVE_AN_EXCITING,
                          angitha
                        )
                      }
                      label={strings.MORE_ABOUT_ANGITHA}
                    />
                  </div>
                </div>
              </div>
              {/* STEPHANIE  */}
              <div className="committee-tile">
                <div>
                  <img src={steph} alt="Stephanie" className="img" />
                </div>
                <div className="committee-tile-name">
                  <div>
                    <h3>{strings.STEPHANIE_HEMA}</h3>
                    <h4>{strings.TREASURER}</h4>
                  </div>
                  <div>
                    <OutlineButton
                      onClick={() =>
                        this.handleOnClick(
                          strings.STEPHANIE_HEMA,
                          strings.TREASURER,
                          strings.STEPHANIES_JOB,
                          strings.CURRENTLY_THIRD_YEAR,
                          strings.STEPHANIE_JOINED_VUWWIT
                        )
                      }
                      label={strings.MORE_ABOUT_STEPHANIE}
                    />
                  </div>
                </div>
              </div>
              {/* MAISIE  */}
              <div className="committee-tile">
                <div>
                  <img src={maisie} alt="maisie" className="img" />
                </div>
                <div className="committee-tile-name">
                  <div>
                    <h3>{strings.MAISIE_EMBLETON}</h3>
                    <h4>{strings.EVENTS_COORDINATOR}</h4>
                  </div>
                  <div>
                    <OutlineButton
                      onClick={() =>
                        this.handleOnClick(
                          strings.MAISIE_EMBLETON,
                          strings.EVENTS_COORDINATOR,
                          strings.MAISIE_IS_THE,
                          strings.CURRENTLY_ENTERING,
                          strings.IM_SUPER
                        )
                      }
                      label={strings.MORE_ABOUT_MAISIE}
                    />
                  </div>
                </div>
              </div>
              {/* RACHEL  */}
              <div className="committee-tile">
                <div>
                  <img src={rachel} alt="rachel" className="img" />
                </div>
                <div className="committee-tile-name">
                  <div>
                    <h3>{strings.RACHEL_CROSLAND}</h3>
                    <h4>{strings.SPONSORSHIP_FUNDRAISING_OFFICER}</h4>
                  </div>
                  <div>
                    <OutlineButton
                      onClick={() =>
                        this.handleOnClick(
                          strings.RACHEL_CROSLAND,
                          strings.SPONSORSHIP_FUNDRAISING_OFFICER,
                          strings.RACHEL_IS_IN,
                          strings.RACHEL_THIRD_YEAR,
                          strings.RACHEL_JOINED_VUWWIT
                        )
                      }
                      label={strings.MORE_ABOUT_RACHEL}
                    />
                  </div>
                </div>
              </div>
              {/* LAVANYA  */}
              <div className="committee-tile">
                <div>
                  <img src={lavanya} alt="lavanya" className="img" />
                </div>
                <div className="committee-tile-name">
                  <div>
                    <h3>{strings.LAVANYA_SAJWAN}</h3>
                    <h4>{strings.NETWORKING_LIAISON}</h4>
                  </div>
                  <div>
                    <OutlineButton
                      onClick={() =>
                        this.handleOnClick(
                          strings.LAVANYA_SAJWAN,
                          strings.NETWORKING_LIAISON,
                          strings.LAVANYA_ORGANISES,
                          strings.HI_IM_LAVANYA,
                          strings.I_REALLY_WANTED_TO_BE_INVOLVED
                        )
                      }
                      label={strings.MORE_ABOUT_LAVANYA}
                    />
                  </div>
                </div>
              </div>
              {/* LAURIE  */}
              <div className="committee-tile">
                <div>
                  <img src={laurie} alt="laurie" className="img" />
                </div>
                <div className="committee-tile-name">
                  <div>
                    <h3>{strings.LAURIE_HYDE}</h3>
                    <h4>{strings.OUTREACH_LIAISON}</h4>
                  </div>
                  <div>
                    <OutlineButton
                      onClick={() =>
                        this.handleOnClick(
                          strings.LAURIE_HYDE,
                          strings.OUTREACH_LIAISON,
                          strings.LAURIE_ORGANISES,
                          strings.HIYA_IM_LAURIE,
                          strings.I_JOINED_VUWWIT
                        )
                      }
                      label={strings.MORE_ABOUT_LAURIE}
                    />
                  </div>
                </div>
              </div>
              {/* TE RAHUI  */}
              <div className="committee-tile">
                <div>
                  <img src={terahui} alt="terahui" className="img" />
                </div>
                <div className="committee-tile-name">
                  <div>
                    <h3>{strings.TE_RAHUI_TUNUA}</h3>
                    <h4>{strings.WORKSHOPS_LIAISON}</h4>
                  </div>
                  <div>
                    <OutlineButton
                      onClick={() =>
                        this.handleOnClick(
                          strings.TE_RAHUI_TUNUA,
                          strings.WORKSHOPS_LIAISON,
                          strings.TE_RAHUI_ORGANISES,
                            strings.TE_RAHUI_INTRO,
                          ""
                        )
                      }
                      label={strings.MORE_ABOUT_TE_RAHUI}
                    />
                  </div>
                </div>
              </div>
              {/* WAINUI  */}
              <div className="committee-tile">
                <div>
                  <img src={wainui} alt="wainui" className="img" />
                </div>
                <div className="committee-tile-name">
                  <div>
                    <h3>{strings.WAINUI_WITIKA_PARK}</h3>
                    <h4>{strings.SOCIAL_OFFICER}</h4>
                  </div>
                  <div>
                    <OutlineButton
                      onClick={() =>
                        this.handleOnClick(
                          strings.WAINUI_WITIKA_PARK,
                          strings.SOCIAL_OFFICER,
                          strings.WAINUI_ORGANISES,
                          strings.WAINUI_THIRD_YEAR,
                          strings.WAINUI_JOINED_VUWWIT
                        )
                      }
                      label={strings.MORE_ABOUT_WAINUI}
                    />
                  </div>
                </div>
              </div>

              {/* SUPPORT  */}
              <div className="committee-tile">
                <div>
                  <img src={support} alt="support" className="img" />
                </div>
                <div className="committee-tile-name">
                  <div>
                    <h3>{strings.YOU}</h3>
                    <h4>{strings.SUPPORT_VOLUNTEER}</h4>
                  </div>
                  <div>
                    <OutlineButton
                      onClick={() =>
                        this.handleOnClick(
                          strings.YOU,
                          strings.SUPPORT_VOLUNTEER,
                          strings.ANYONE_IS_WELCOME,
                          "",
                          ""
                        )
                      }
                      label={strings.MORE_ABOUT_SUPPORT}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="Committee__main-findoutmore">
              <h3>{strings.FIND_OUT_MORE}</h3>
              <OutlineLink
                link={strings.COMMITTEE_STRUCTURE_LINK}
                label={strings.COMMITTEE_STRUCTURE}
              />
            </div>
            <CommitteeModal
              showModal={this.state.showModal}
              toggleModal={() => this.toggleModal()}
              name={this.state.name}
              role={this.state.role}
              description={this.state.description}
              quoteone={this.state.quoteone}
              quotetwo={this.state.quotetwo}
            />
          </div>
        </div>
      </main>
    );
  }
}

export default Committee;
