import React, { Component } from 'react';
import lang from '../en-NZ';
import './index.scss';
import email from '../../images/footer/email.png';
import fb from '../../images/footer/fb.png';
import forum from '../../images/footer/forum.png';
import insta from '../../images/footer/insta.png';
import linkedin from '../../images/footer/linkedin.png';
import twitter from '../../images/footer/twitter.png';
import code from '../../images/footer/code.png';

const strings = lang;

class Footer extends Component {
    render() {
        return (
            <div className="Footer">
                <div className="Footer-link">
                    <a href="https://goo.gl/V1mRnR" className="Footer-links">
                        <img src={code} title={strings.CODE_OF_CONDUCT} alt={strings.CODE_OF_CONDUCT} className="Footer-link-icon"/>
                    </a>
                </div>
                <div className="Footer-link">
                    <a href="mailto:vuwwit@gmail.com" className="Footer-links">
                        <img src={email} title={strings.EMAIL} alt={strings.EMAIL} className="Footer-link-icon"/>
                    </a>
                </div>
                <div className="Footer-link">
                    <a href="http://instagram.com/vuwwit" className="Footer-links">
                        <img src={insta} title={strings.INSTAGRAM} alt={strings.INSTAGRAM} className="Footer-link-icon"/>
                    </a>
                </div>
                <div className="Footer-link">
                    <a href="http://www.facebook.com/vuwwit" className="Footer-links">
                        <img src={fb} title={strings.FACEBOOK} alt={strings.FACEBOOK} className="Footer-link-icon"/>
                    </a>
                </div>
                <div className="Footer-link">
                    <a href="https://www.linkedin.com/company/vuwwit/" className="Footer-links">
                        <img src={linkedin} title={strings.LINKEDIN} alt={strings.LINKEDIN} className="Footer-link-icon"/>
                    </a>
                </div>
                <div className="Footer-link">
                    <a href="https://twitter.com/vuwwit" className="Footer-links">
                        <img src={twitter} title={strings.TWITTER} alt={strings.TWITTER} className="Footer-link-icon"/>
                    </a>
                </div>
                <div className="Footer-link">
                    <a href="http://www.facebook.com/groups/vuwwit" className="Footer-links">
                        <img src={forum} title={strings.MEMBERS_FORUM} alt={strings.MEMBERS_FORUM} className="Footer-link-icon"/>
                    </a>
                </div>
            </div>
        );
    }
}

export default Footer;
