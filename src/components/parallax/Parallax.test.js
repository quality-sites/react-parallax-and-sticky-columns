import React from 'react';
import Parallax from './Parallax';
import { shallow } from 'enzyme';
import enzymeConfig from '../../../enzymeConfig';
import data from '../../data/home-data';

const renderComponent = () => {
	return shallow(<Parallax />);
};

describe('Parallax Component', () => {

	let component;
	beforeEach(() => {
		component = renderComponent();
	});

	it('Should render without errors', () => {
		const wrapper = component.find('.qsparallax');
		expect(wrapper.length).toBe(1);
	});

});
