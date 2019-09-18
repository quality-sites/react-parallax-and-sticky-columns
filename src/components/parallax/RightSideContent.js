import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import './Parallax.scss';
import sideImage from '../../assets/images/w950_column_image.jpeg';

const RightSideContent = props => (
	<div className="qsparallax__right--content">
	    <Parallax y={[-20, 20]} tagInner="figure">
	        <img className="qsparallax__right--content-image" src={sideImage} alt={props.alt} />
	    </Parallax>
    </div>
);

export default RightSideContent;

