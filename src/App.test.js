import React from 'react'
import { shallow } from ''
import App from './App'

describe('App', () => {
	it('renders without crashing', () => {
		shallow(<App />)
	})
})
