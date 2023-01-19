import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/app/app'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<StrictMode>
		<div className="wrapper">
			<App />
		</div>
	</StrictMode>
)
