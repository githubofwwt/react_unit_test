import React, {Component} from 'react'
import {Layout} from 'antd'
import './style.css'

export default class Footer extends Component {
	render() {
		return (
			<Layout.Footer style={{ textAlign: 'center', 'background-color': '#333', color: '#fff' }}>
        Ant Design ©2018 Created by Ant UED
			</Layout.Footer>
		)
	}
}
