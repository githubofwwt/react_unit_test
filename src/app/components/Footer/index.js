import React, {Component} from 'react'
import {Layout} from 'antd'
import './style.css'

export default class Footer extends Component {
	render() {
		return (
			<Layout.Footer className='footer'>
        Ant Design ©2018 Created by Ant UED
			</Layout.Footer>
		)
	}
}
