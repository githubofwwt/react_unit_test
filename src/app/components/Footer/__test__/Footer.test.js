import React from 'react'
import { shallow } from 'enzyme'
import Footer from '../index'

describe('Footer', () => {
	it('should render Footer', () => {
		const wrapper = shallow(<Footer />)
		expect(wrapper.exists()).toBeTruthy()
	})
})
