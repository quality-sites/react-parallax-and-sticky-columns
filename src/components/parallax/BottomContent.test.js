import React from 'react';
import BottomContent from './BottomContent';
import { shallow } from 'enzyme';
import enzymeConfig from '../../../enzymeConfig';
import data from '../../data/home-data';

const renderComponent = () => {
	return shallow(<BottomContent />);
};

describe('Bottom Content Component', () => {

	let component;
	beforeEach(() => {
		component = renderComponent();
	});

	it('Should render without errors', () => {
		const wrapper = component.find('.qsparallax__bottom--content');
		expect(wrapper.length).toBe(1);
	});

	it('Should render data', () => {
		const wrapper = component.find('.qsparallax__bottom--content-text');
		expect(wrapper.text()).toContain(data.bottomData);
	});

});
