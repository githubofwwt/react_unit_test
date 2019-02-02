import React from 'react'
import { shallow } from 'enzyme'
import Sider from '../index'

describe('Sider', () => {
	it('should render Sider', () => {
		const wrapper = shallow(<Sider />)
		expect(wrapper.exists()).toBeTruthy()
	})
})
