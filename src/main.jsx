import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import App from './App';
import './index.css';
import Blogs from './pages/Blogs';
import Blog from './pages/Blog';
import Navbar from './components/Navbar';
import { loader } from './pages/Blog';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Navbar />,
		children: [
			{
				path: '',
				element: <App />,
			},
			{
				path: '/blog',
				element: <Blogs />,
			},
			{
				path: '/blog/:blogId',
				element: <Blog />,
				loader: loader,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
