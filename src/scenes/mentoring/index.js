import React, { Component } from "react";
import lang from "./en-NZ";
import "./index.scss";
import MetaTags from 'react-meta-tags';

const strings = lang;

class Mentoring extends Component {
  render() {
    return (
      <main className="Mentoring">
        <MetaTags>
          <title>{strings.TITLE}</title>
        </MetaTags>
        <h1>{strings.MENTORING_CIRCLES}</h1>
        <p>{strings.VUWWITS_GOAL}</p>
        <p>{strings.IN_ORDER_TO}</p>
        <p>{strings.WERE_AWARE_THAT}</p>

        <h2>{strings.KEY_DATES}</h2>
        <table>
          <thead>
            <tr>
              <th>{strings.DATE}</th>
              <th>{strings.TIME}</th>
              <th>{strings.VENUE}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b>{strings.FIRST_SESSION}</b><br />{strings.ONE}</td>
              <td>{strings.FIVE_THIRTY}</td>
              <td>{strings.AM103}</td>
            </tr>
            <tr>
              <td><b>{strings.SECOND_SESSION}</b><br />{strings.TWO}</td>
              <td>{strings.FIVE_THIRTY}</td>
              <td>{strings.AM103}</td>
            </tr>
            <tr>
              <td><b>{strings.THIRD_SESSION}</b><br />{strings.THREE}</td>
              <td>{strings.FIVE_THIRTY}</td>
              <td>{strings.AM103}</td>
            </tr>
            <tr>
              <td><b>{strings.FOURTH_SESSION}</b><br />{strings.FOUR}</td>
              <td>{strings.FIVE_THIRTY}</td>
              <td>{strings.AM103}</td>
            </tr>
          </tbody>
        </table>

        <p>{strings.ATTENDING_ALL}</p>

        <div className="Mentoring-column">
          <div className="Mentoring-column-item">
            <h2>{strings.WHAT_IT_IS}</h2>
            <ul>
              <li>{strings.IS_ONE}</li>
              <li>{strings.IS_TWO}</li>
              <li>{strings.IS_THREE}</li>
              <li>{strings.IS_FOUR}</li>
            </ul>
          </div>

          <div className="Mentoring-column-item">
            <h2>{strings.WHAT_IT_IS_NOT}</h2>
            <ul>
              <li>{strings.ISNT_ONE}</li>
              <li>{strings.ISNT_TWO}</li>
              <li>{strings.ISNT_THREE}</li>
              <li>{strings.ISNT_FOUR}</li>
            </ul>
          </div>
        </div>

        <h2>{strings.BENEFITS}</h2>
        <ul>
          <li>{strings.BENEFIT_ONE}</li>
          <li>{strings.BENEFIT_TWO}</li>
          <li>{strings.BENEFIT_THREE}</li>
          <li>{strings.BENEFIT_FOUR}</li>
          <li>{strings.BENEFIT_FIVE}</li>
          <li>{strings.BENEFIT_SIX}</li>
        </ul>

        <h2>{strings.HOW_TO_APPLY}</h2>
        <p>{strings.TO_REGISTER}</p>
      </main>
    );
  }
}

export default Mentoring;
