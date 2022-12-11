import { Menu, Transition } from '@headlessui/react';
import { Fragment, useEffect, useRef, useState } from 'react';
import {
	Bars3Icon,
	HomeModernIcon,
	DocumentTextIcon,
} from '@heroicons/react/24/outline';
import logoURL from '../assets/logo.png';
import { Outlet, Link, NavLink, useLocation } from 'react-router-dom';

const links = [
	{
		path: '/',
		text: 'Home',
		icon: HomeModernIcon,
	},
	{
		path: '/blog',
		text: 'Blog',
		icon: DocumentTextIcon,
	},
];

const ScrollToTop = () => {
	const { pathname } = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return null;
};

function Navbar() {
	return (
		<>
			<ScrollToTop />
			<nav className='bg-white flex justify-center sticky top-0 z-10 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900'>
				<div className='container flex flex-wrap items-center justify-between'>
					<a href='https://taowork.games/' className='flex items-center'>
						<img
							src={logoURL}
							className='h-20 mr-3 sm:h-24'
							alt='Taowork Logo'
						/>
						<span className='self-center text-xl font-semibold whitespace-nowrap dark:text-white'>
							TAOwork
						</span>
					</a>
					<div className='hidden w-full md:block md:w-auto' id='navbar-default'>
						<ul className='flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
							{links.map((el, i) => {
								return (
									<li key={i}>
										<NavLink
											key={i}
											to={el.path}
											className={({ isActive }) =>
												isActive ? 'font-semibold' : ''
											}
											aria-current='page'
										>
											{el.text}
										</NavLink>
									</li>
								);
							})}
						</ul>
					</div>
					<Menu as={Fragment}>
						<div className='md:hidden'>
							<Menu.Button className='inline-flex md:hidden w-12 justify-center rounded-md bg-black bg-opacity-80 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'>
								<Bars3Icon
									className='h-5 w-5 text-white fill-white stroke-white'
									aria-hidden='true'
								/>
							</Menu.Button>
						</div>
						<Transition
							as={Fragment}
							enter='transition ease-out duration-100'
							enterFrom='transform opacity-0 scale-95'
							enterTo='transform opacity-100 scale-100'
							leave='transition ease-in duration-75'
							leaveFrom='transform opacity-100 scale-100'
							leaveTo='transform opacity-0 scale-95'
						>
							<Menu.Items className='w-full md:hidden flex flex-col divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
								{links.map((el, i) => {
									return (
										<Menu.Item key={i}>
											{({ active }) => (
												<Link
													to={el.path}
													className={`${
														active ? 'bg-gray-800 text-white' : 'text-gray-900'
													} group flex w-full items-center rounded-md px-2 py-2 text-sm`}
												>
													{<el.icon className='w-[30px] opacity-70' />}
													<span className='text-xl'>{el.text}</span>
												</Link>
											)}
										</Menu.Item>
									);
								})}
							</Menu.Items>
						</Transition>
					</Menu>
				</div>
			</nav>
			{<Outlet />}
			<footer className='bg-black h-20 pt-4 text-white text-center'>
				<h4 className='text-xl'>Copyright 2022 | TAOwork</h4>
				<p className='text-lg'>
					Contact us at:{' '}
					<a href='mailto:taowork.hcmus@gmail.com'>taowork.hcmus@gmail.com</a>
				</p>
			</footer>
		</>
	);
}

export default Navbar;
