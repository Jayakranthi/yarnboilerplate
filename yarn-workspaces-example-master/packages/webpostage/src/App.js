import React, { Component } from 'react';

import CommonApp from 'common/src/CommonApp'

export default class App extends Component {

	render() {


		return (
		  <div className="App">
			<header className="App-header">
			  <h1 className="App-title">CRA-App 1</h1>
			</header>
			<p className="App-intro">
			  To get started, edit <code>src/App.js</code> and save to reload.
			</p>

			<CommonApp/>

		  </div>
		);
	}
}