import React, {Component} from 'react'
import {Layout, Menu, Icon} from 'antd'
import { withRouter, Link } from 'react-router-dom'
import './style.css'

class Sider extends Component {
	state = {
    collapsed: false
	}
  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }
	render() {
		return (
			<Layout.Sider
				collapsible
				collapsed={this.state.collapsed}
				onCollapse={this.onCollapse}
			>
				<Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
					<Menu.Item key="1">
            <Link to={'/home'}>Home</Link>
					</Menu.Item>
					<Menu.Item key="2">
            <Link to={'/admin'}>Admin</Link>
					</Menu.Item>
				</Menu>
			</Layout.Sider>
		)
	}
}

export default withRouter(Sider)
