import React from 'react';
// import { Parallax } from 'react-scroll-parallax';
import { StickyContainer, Sticky } from 'react-sticky';
import data from '../../data/home-data';
import './Parallax.scss';

const LeftSideContent = () => (
	<div className="qsparallax__left--content">
    	<StickyContainer>
  			<Sticky topOffset={80}>
  				{() => 
			        <article className="qsparallax__left--content-text">
						{data.leftSideData}
					</article>
				}
			</Sticky>
		</StickyContainer>
    </div>
);
export default LeftSideContent;

