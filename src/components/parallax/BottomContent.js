import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import data from '../../data/home-data';
import './Parallax.scss';

const BottomContent = () => (
	<div className="qsparallax__bottom--content">
	    <Parallax y={[-20, 20]} tagInner="figure">
	        <article className="qsparallax__bottom--content-text">
				{data.bottomData}
			</article>
	    </Parallax>
	</div>
);
export default BottomContent;

