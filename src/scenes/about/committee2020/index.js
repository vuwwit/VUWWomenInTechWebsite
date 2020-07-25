import React, { Component } from "react";
import lang from "./en-NZ";
import "./index.scss";
import OutlineButton from "../../../components/buttons/outlined-button";
import CommitteeModal from "../components/committee-modal";
import OutlineLink from "../../../components/links/outlined-link";
import Samantha from "../../../images/committee/all2020.jpg";
import lavanya from "../../../images/committee/lavanya.jpg";
import rachel from "../../../images/committee/rachel.jpg";
import jasna from "../../../images/committee/jasna.jpg";
import angitha from "../../../images/committee/angitha.jpg";
import support from "../../../images/committee/support.jpg";
import Stephanie from "../../../images/committee/steph.jpg";
import Sanjana from "../../../images/committee/all2020.jpg";
import MALINA from "../../../images/committee/all2020.jpg";

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
                <h1>{strings.MEET_THE_2020_COMMITTEE}</h1>
              </div>

              <div className="Committee__main-gallery-group">

                <div className="committee-tile">
                  <div>
                    <img src={angitha} alt="angitha" className="img" />
                  </div>
                  <div className="committee-tile-name">
                    <div>
                      <h3>{strings.ANGITHA_RAMESH}</h3>
                      <h4>{strings.PRESIDENT}</h4>
                    </div>
                    <div>
                      <OutlineButton
                          onClick={() =>
                              this.handleOnClick(
                                  strings.ANGITHA_RAMESH,
                                  strings.PRESIDENT,
                                  strings.MORE_ABOUT_ANGITHA,
                                  strings.PRESIDENT_About,
                                  ""
                              )
                          }
                          label={strings.MORE_ABOUT_ANGITHA}
                      />
                    </div>
                  </div>
                </div>

                <div className="committee-tile">
                  <div>
                    <img src={lavanya} alt="lavanya" className="img" />
                  </div>
                  <div className="committee-tile-name">
                    <div>
                      <h3>{strings.LAVANYA_SAJWAN}</h3>
                      <h4>{strings.SECRETARY}</h4>
                    </div>
                    <div>
                      <OutlineButton
                          onClick={() =>
                              this.handleOnClick(
                                  strings.LAVANYA_SAJWAN,
                                  strings.SECRETARY,
                                  strings.MORE_ABOUT_LAVANYA,
                                  strings.SECRETARY_About,
                                  ""
                              )
                          }
                          label={strings.MORE_ABOUT_LAVANYA}
                      />
                    </div>
                  </div>
                </div>

                <div className="committee-tile">
                  <div>
                    <img src={rachel} alt="rachel" className="img" />
                  </div>
                  <div className="committee-tile-name">
                    <div>
                      <h3>{strings.RACHEL_CROSLAND}</h3>
                      <h4>{strings.TREASURER}</h4>
                    </div>
                    <div>
                      <OutlineButton
                          onClick={() =>
                              this.handleOnClick(
                                  strings.RACHEL_CROSLAND,
                                  strings.TREASURER,
                                  strings.MORE_ABOUT_RACHEL,
                                  strings.TREASURER_About,
                                  ""
                              )
                          }
                          label={strings.MORE_ABOUT_RACHEL}
                      />
                    </div>
                  </div>
                </div>

                <div className="committee-tile">
                  <div>

                  </div>
                  <div className="committee-tile-name">
                    <div>
                      <h3>{strings.MALINA}</h3>
                      <h4>{strings.MEDIA_LIAISON}</h4>
                    </div>
                    <div>
                      <OutlineButton
                          onClick={() =>
                              this.handleOnClick(
                                  strings.MALINA,
                                  strings.MEDIA_LIAISON,
                                  strings.MORE_ABOUT_Malina,
                                  strings.MEDIA_LIAISON_About,
                                  ""
                              )
                          }
                          label={strings.MORE_ABOUT_Malina}
                      />
                    </div>
                  </div>
                </div>

                <div className="committee-tile">
                  <div>

                  </div>
                  <div className="committee-tile-name">
                    <div>
                      <h3>{strings.Sanjana}</h3>
                      <h4>{strings.Campaigns_Liaison}</h4>
                    </div>
                    <div>
                      <OutlineButton
                          onClick={() =>
                              this.handleOnClick(
                                  strings.Sanjana,
                                  strings.Campaigns_Liaison,
                                  strings.MORE_ABOUT_Sanjana,
                                  strings.Campaigns_Liaison_About,
                                  ""
                              )
                          }
                          label={strings.MORE_ABOUT_Sanjana}
                      />
                    </div>
                  </div>
                </div>


                <div className="committee-tile">
                  <div>

                  </div>
                  <div className="committee-tile-name">
                    <div>
                      <h3>{strings.Heenal}</h3>
                      <h4>{strings.Events_Coordinator}</h4>
                    </div>
                    <div>
                      <OutlineButton
                          onClick={() =>
                              this.handleOnClick(
                                  strings.Heenal,
                                  strings.Events_Coordinator,
                                  strings.MORE_ABOUT_Heenal,
                                  strings.Events_Coordinator_About,
                                  ""
                              )
                          }
                          label={strings.MORE_ABOUT_Heenal}
                      />
                    </div>
                  </div>
                </div>

                <div className="committee-tile">
                  <div>

                  </div>
                  <div className="committee-tile-name">
                    <div>
                      <h3>{strings.Samantha}</h3>
                      <h4>{strings.Outreach_Officer}</h4>
                    </div>
                    <div>
                      <OutlineButton
                          onClick={() =>
                              this.handleOnClick(
                                  strings.Samantha,
                                  strings.Outreach_Officer,
                                  strings.MORE_ABOUT_Samantha,
                                  strings.Outreach_Officer_About,
                                  ""
                              )
                          }
                          label={strings.MORE_ABOUT_Samantha}
                      />
                    </div>
                  </div>
                </div>

                <div className="committee-tile">
                  <div>

                  </div>
                  <div className="committee-tile-name">
                    <div>
                      <h3>{strings.Meg}</h3>
                      <h4>{strings.Workshops_Officer}</h4>
                    </div>
                    <div>
                      <OutlineButton
                          onClick={() =>
                              this.handleOnClick(
                                  strings.Meg,
                                  strings.Workshops_Officer,
                                  strings.MORE_ABOUT_Meg,
                                  strings.Workshops_Officer_About,
                                  ""
                              )
                          }
                          label={strings.MORE_ABOUT_Meg}
                      />
                    </div>
                  </div>
                </div>

                <div className="committee-tile">
                  <div>

                  </div>
                  <div className="committee-tile-name">
                    <div>
                      <h3>{strings.Henry}</h3>
                      <h4>{strings.Networking_officer}</h4>
                    </div>
                    <div>
                      <OutlineButton
                          onClick={() =>
                              this.handleOnClick(
                                  strings.Henry,
                                  strings.Networking_officer,
                                  strings.MORE_ABOUT_Henry,
                                  strings.Networking_officer_About,
                                  ""
                              )
                          }
                          label={strings.MORE_ABOUT_Henry}
                      />
                    </div>
                  </div>
                </div>


                <div className="committee-tile">
                  <div>
                    <img src={Stephanie} alt="Stephanie" className="img" />
                  </div>
                  <div className="committee-tile-name">
                    <div>
                      <h3>{strings.Stephanie}</h3>
                      <h4>{strings.Social_Officer}</h4>
                    </div>
                    <div>
                      <OutlineButton
                          onClick={() =>
                              this.handleOnClick(
                                  strings.Stephanie,
                                  strings.Social_Officer,
                                  strings.MORE_ABOUT_Stephanie,
                                  strings.Social_Officer_About,
                                  ""
                              )
                          }
                          label={strings.MORE_ABOUT_Stephanie}
                      />
                    </div>
                  </div>
                </div>

                <div className="committee-tile">
                  <div>
                    <img src={jasna} alt="jasna" className="img" />
                  </div>
                  <div className="committee-tile-name">
                    <div>
                      <h3>{strings.Jasna}</h3>
                      <h4>{strings.web_developer}</h4>
                    </div>
                    <div>
                      <OutlineButton
                          onClick={() =>
                              this.handleOnClick(
                                  strings.Jasna,
                                  strings.web_developer,
                                  strings.MORE_ABOUT_Jasna,
                                  strings.web_developer_About,
                                  ""
                              )
                          }
                          label={strings.MORE_ABOUT_Jasna}
                      />
                    </div>
                  </div>
                </div>
                {/* <div className="committee-tile">
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
                </div>  */}
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
