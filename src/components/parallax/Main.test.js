import React from 'react';
import Main from './Main';
import { shallow } from 'enzyme';
import enzymeConfig from '../../../enzymeConfig';
import data from '../../data/home-data';

const renderComponent = () => {
	return shallow(<Main />);
};

describe('Main Component', () => {

	let component;
	beforeEach(() => {
		component = renderComponent();
	});

	it('Should render without errors', () => {
		const wrapper = component.find('.qsparallax__main');
		expect(wrapper.length).toBe(1);
	});

	it('Should contain desktop image', () => {
		const wrapper = component.find('.qsparallax__main--desktop-image');
		expect(wrapper.length).toBe(1);
	});

	it('Should contain mobile image', () => {
		const wrapper = component.find('.qsparallax__main--mobile-image');
		expect(wrapper.length).toBe(1);
	});

	it('Should render data', () => {
		const wrapper = component.find('.qsparallax__main--content');
		expect(wrapper.text()).toContain(data.mainContent);
	});

});