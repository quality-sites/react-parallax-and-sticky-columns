import React from 'react';
import LeftSideContent from './LeftSideContent';
import { shallow } from 'enzyme';
import enzymeConfig from '../../../enzymeConfig';

const renderComponent = () => {
	return shallow(<LeftSideContent />);
};

describe('Left Side Content Component', () => {

	let component;
	beforeEach(() => {
		component = renderComponent();
	});

	it('Should render without errors', () => {
		const wrapper = component.find('.qsparallax__left--content');
		expect(wrapper.length).toBe(1);
	});

});