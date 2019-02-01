import React from 'react'
import { shallow } from 'enzyme'
import Header from '../index'

describe('Header', () => {
	it('should redner Header', () => {
		const wrapper = shallow(<Header />)
		expect(wrapper.exists()).toBeTruthy()
	})
})
