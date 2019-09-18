import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import Main from './Main';
import LeftSideContent from './LeftSideContent';
import RightSideContent from './RightSideContent';
import BottomContent from './BottomContent';
import './Parallax.scss';

const ParallaxComponent = (props) => {
  return (
    <ParallaxProvider>
    	<div className="qsparallax">
    		<Main/>
    		<LeftSideContent/>
			<RightSideContent/>
			<BottomContent/>
		</div>
    </ParallaxProvider>
  );
};

export default ParallaxComponent;

