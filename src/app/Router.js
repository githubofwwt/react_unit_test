import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import {Layout} from 'antd'
import Header from './components/Header'
import Sider from './components/Sider'
import Footer from './components/Footer'
import Home from './pages/Home'
import Admin from './pages/Admin'
import './style.css'

export default class Router extends React.Component {
	render () {
		return (
			<BrowserRouter>
				<Layout style={{ minHeight: '100vh' }}>
					<Header />
					<Layout>
						<Sider />
						<Layout>
							<Layout.Content style={{ backgroundColor: '#eee' }}>
								<div className={'body'}>
									<Switch>
										<Route path="/home" component={Home} />
										<Route path="/admin" component={Admin} />
										<Route path="*" component={Home} />
									</Switch>
								</div>
							</Layout.Content>
							<Footer />
						</Layout>
					</Layout>
				</Layout>
			</BrowserRouter>
		)
	}
}
