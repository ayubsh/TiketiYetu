import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'

import './index.css'

import App from './App.jsx'
import ErrorPage from './components/ErrorPage';
import Register from './components/Register'
import Login from './components/Login'
import TicketsPage from './components/TicketsPage'
import Cart from './components/Cart'

const router = createBrowserRouter([
	{
		path: '/register',
		element: <Register />
	},
	{
		path: '/',
		element: <App />,
		errorElement: <ErrorPage />
	},
	{
		path: '/login',
		element: <Login />
	},
	{
		path: '/tickets',
		element: <TicketsPage />
	},
	{
		path: '/cart',
		element: <Cart />
	}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
		<RouterProvider router={router} />
  </React.StrictMode>,
)
