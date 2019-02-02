import React, {Component} from 'react'
import {List} from 'antd'

export default class ListDemo extends Component {
	render() {
		const {Item} = List
		return (
			<List bordered={'true'}>
				<Item extra={'header'}></Item>
				<Item>Racing car sprays burning fuel into crowd.</Item>
				<Item>Japanese princess to wed commoner.</Item>
				<Item className={'test'}>Australian walks 100km after outback crash.</Item>
				<Item><span>Man charged over missing wedding girl.</span></Item>
			</List>
		)
	}
}
