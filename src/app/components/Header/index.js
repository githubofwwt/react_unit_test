import React, {Component} from 'react'
import logo from '../../../logo.svg'
import {Button} from 'antd'
import './style.css'

export default class Header extends Component {
	render() {
		return (
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
          Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
          Learn React
				</a>
				<Button>NEW BUTTON</Button>
			</header>
		)
	}
}
