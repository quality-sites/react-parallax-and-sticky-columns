import React from 'react';
import RightSideContent from './RightSideContent';
import { shallow } from 'enzyme';
import enzymeConfig from '../../../enzymeConfig';
import data from '../../data/home-data';

const renderComponent = () => {
	return shallow(<RightSideContent />);
};

describe('Right Side Content Component', () => {

	let component;
	beforeEach(() => {
		component = renderComponent();
	});

	it('Should render without errors', () => {
		const wrapper = component.find('.qsparallax__right--content');
		expect(wrapper.length).toBe(1);
	});

	it('Should render image', () => {
		const wrapper = component.find('.qsparallax__right--content-image');
		expect(wrapper.length).toBe(1);
	});

});
