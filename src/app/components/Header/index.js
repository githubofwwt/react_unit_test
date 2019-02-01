import React, {Component} from 'react'
import {Layout} from 'antd'
import './style.css'

export default class Header extends Component {
	render() {
		return (
			<Layout.Header style={{ color: '#fff', padding: 0, 'text-align': 'center' }} >
				Header
			</Layout.Header>
		)
	}
}
