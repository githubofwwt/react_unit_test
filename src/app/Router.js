import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import {Layout} from 'antd'
import Header from './components/Header'
import Sider from './components/Sider'
import Footer from './components/Footer'
import Home from './pages/Home'

export default class Router extends React.Component {
	render () {
		return (
			<BrowserRouter>
				<Layout style={{ minHeight: '100vh' }}>
					<Header>HEADER</Header>
					<Layout>
						<Sider>SIDER</Sider>
						<Layout>
							<Layout.Content style={{ backgroundColor: '#eee' }}>
								<Switch>
									<Redirect from="/" exact to="/Home" />
									<Route path="*" component={Home} />
								</Switch>
							</Layout.Content>
							<Footer>FOOTER</Footer>
						</Layout>
					</Layout>
				</Layout>
			</BrowserRouter>
		)
	}
}
