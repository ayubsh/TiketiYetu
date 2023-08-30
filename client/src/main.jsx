import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'

import './index.css'

import App from './App.jsx'
import ErrorPage from './components/ErrorPage';
import Register from './components/Register'

const router = createBrowserRouter([
	{
		path: '/register',
		element: <Register />
	},
	{
		path: '/',
		element: <App />,
		errorElement: <ErrorPage />
	}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
		<RouterProvider router={router} />
  </React.StrictMode>,
)