import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux' // Component that is the parent of every app

import store from './redux/store'

import './index.css'
import App from './App'

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<React.StrictMode>
				<App />
			</React.StrictMode>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
)
