import React, { Component } from 'react';
import lang from './en-NZ';
import './index.scss';
import logolongsleeve from '../../images/logolongsleeve.png';
import coffeecodingcrop from '../../images/coffeecodingcrop.jpg';
import waterbottle from '../../images/waterbottle.png';
import laptopbag from '../../images/laptopbag.png';
import totebag from '../../images/totebag.png';
import OutlineLink from '../../components/links/outlined-link';
import MetaTags from 'react-meta-tags';

const strings = lang;

class VuwwitShop extends Component {
  render() {
    return (
      <main className="VuwwitShop">
      <MetaTags>
        <title>{strings.TITLE}</title>
      </MetaTags>
        <div className="VuwwitShop__main">
            <div className="VuwwitShop__main-gallery">
                <div className="VuwwitShop__main-gallery-heading">
                    <h1>{strings.VUWWIT_SHOP}</h1>
                </div>
                <div className="VuwwitShop__main-gallery-group">
                    <div className="VuwwitShop__main-gallery-group-tile">
                        <div><img src={coffeecodingcrop} alt="coffee-coding-crop-top" className="img"/></div>
                        <h3>{strings.LIMITED_EDITION}</h3>
                        <p>{strings.WERE_TEAMING_UP}</p>
                        <p>{strings.YOU_CAN_ONLY}</p>
                        <OutlineLink link={strings.COFFEE_CODING_FORM} label={strings.COFFEE_CODING_LABEL} />
                    </div>
                    <div className="VuwwitShop__main-gallery-group-tile">
                        <div><img src={logolongsleeve} alt="long-sleeved-logo-top" className="img-soon" /></div>
                        <h3>{strings.LOGO_LONG_SLEEVE}</h3>
                        <p>{strings.YOU_CAN_PROUDLY}</p>
                    </div>
                    <div className="VuwwitShop__main-gallery-group-tile">
                        <div><img src={totebag} alt="tote-bag" className="img-soon"/></div>
                        <h3>{strings.TOTE_BAG}</h3>
                        <p>{strings.CARRY_THE_VUWWIT}</p>
                    </div>
                    <div className="VuwwitShop__main-gallery-group-tile">
                    <div><img src={waterbottle} alt="water-bottle" className="img-soon"/></div>
                        <h3>{strings.WATER_BOTTLE}</h3>
                        <p>{strings.THESE_WATER_BOTTLES}</p>
                        
                    </div>
                    <div className="VuwwitShop__main-gallery-group-tile">
                    <div><img src={laptopbag} alt="laptop-bag" className="img-soon"/></div>
                        <h3>{strings.LAPTOP_BAG}</h3>
                        <p>{strings.AVAILABLE_FOR}</p>
                    </div>
                </div>
            </div>
        </div>
      </main>
    );
  }
}

export default VuwwitShop;