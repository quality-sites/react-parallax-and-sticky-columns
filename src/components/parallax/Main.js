import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import './Parallax.scss';
import mainDesktopImage from '../../assets/images/w1900_parallax_mobile_image.jpeg';
import mainMobileImage from '../../assets/images/w600_parallax_mobile_image.jpeg';
import data from '../../data/home-data';

const Main = props => (
	<div className="qsparallax__main">
	    <Parallax y={[-20, 20]} tagInner="figure">
	        <img className="qsparallax__main--desktop-image" src={mainDesktopImage} alt={props.alt} />
	        <img className="qsparallax__main--mobile-image" src={mainMobileImage} alt={props.alt} />
	        <div className="qsparallax__main--content">{data.mainContent}</div>
	    </Parallax>
    </div>
);

export default Main;