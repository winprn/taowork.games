import React, {
	Fragment,
	useEffect,
	useRef,
	useState,
	useContext,
} from 'react';
import chevronURL from '../assets/chevron-down.svg';
import { ScrollContext } from '../utils/scroll-observer';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const Header = () => {
	const [imageLoaded, setImageLoaded] = useState(false);
	const refContainer = useRef(null);
	const { scrollY } = useContext(ScrollContext);

	let progress = 0;
	const { current: elContainer } = refContainer;
	if (elContainer) {
		progress = Math.min(1, scrollY / elContainer.clientHeight);
	}

	const handleImageLoaded = () => {
		setImageLoaded(true);
	};

	return (
		<header
			ref={refContainer}
			className="flex flex-col items-center justify-center w-full min-h-[90vh] bg-[url('/src/assets/hero-lg.jpeg')] lg:bg-[url('/src/assets/hero.jpeg')] bg-contain md:bg-cover bg-no-repeat sticky top-0 -z-10"
			style={{ transform: `translateY(-${progress * 20}vh)` }}
		>
			<div className='bg-white opacity-70 w-full h-full absolute'></div>
			<div className='text-center z-10 flex-1 p-0 lg:p-[10rem] xl:mt-[-12rem] xl:p-[10rem] flex flex-col items-center justify-center drop-shadow-md'>
				<h1 className='text-5xl lg:text-6xl font-bold'>TAOwork</h1>
				<p className='font-thin text-xl lg:text-3xl'>life is harsh without C</p>
			</div>
			<div
				className={`flex-grow-0 z-10 pb-5 md:pb-3 transition-all duration-1000 ${
					imageLoaded ? 'opacity-100' : 'opacity-0 -translate-y-10'
				}`}
			>
				<img
					src={chevronURL}
					alt=''
					className='w-[70px] h-auto'
					onLoad={handleImageLoaded}
				/>
			</div>
		</header>
	);
};

function EditInactiveIcon(props) {
	return (
		<svg
			{...props}
			viewBox='0 0 20 20'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M4 13V16H7L16 7L13 4L4 13Z'
				fill='#EDE9FE'
				stroke='#A78BFA'
				strokeWidth='2'
			/>
		</svg>
	);
}

function EditActiveIcon(props) {
	return (
		<svg
			{...props}
			viewBox='0 0 20 20'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M4 13V16H7L16 7L13 4L4 13Z'
				fill='#8B5CF6'
				stroke='#C4B5FD'
				strokeWidth='2'
			/>
		</svg>
	);
}

function DuplicateInactiveIcon(props) {
	return (
		<svg
			{...props}
			viewBox='0 0 20 20'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M4 4H12V12H4V4Z'
				fill='#EDE9FE'
				stroke='#A78BFA'
				strokeWidth='2'
			/>
			<path
				d='M8 8H16V16H8V8Z'
				fill='#EDE9FE'
				stroke='#A78BFA'
				strokeWidth='2'
			/>
		</svg>
	);
}

function DuplicateActiveIcon(props) {
	return (
		<svg
			{...props}
			viewBox='0 0 20 20'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M4 4H12V12H4V4Z'
				fill='#8B5CF6'
				stroke='#C4B5FD'
				strokeWidth='2'
			/>
			<path
				d='M8 8H16V16H8V8Z'
				fill='#8B5CF6'
				stroke='#C4B5FD'
				strokeWidth='2'
			/>
		</svg>
	);
}

function ArchiveInactiveIcon(props) {
	return (
		<svg
			{...props}
			viewBox='0 0 20 20'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<rect
				x='5'
				y='8'
				width='10'
				height='8'
				fill='#EDE9FE'
				stroke='#A78BFA'
				strokeWidth='2'
			/>
			<rect
				x='4'
				y='4'
				width='12'
				height='4'
				fill='#EDE9FE'
				stroke='#A78BFA'
				strokeWidth='2'
			/>
			<path d='M8 12H12' stroke='#A78BFA' strokeWidth='2' />
		</svg>
	);
}

function ArchiveActiveIcon(props) {
	return (
		<svg
			{...props}
			viewBox='0 0 20 20'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<rect
				x='5'
				y='8'
				width='10'
				height='8'
				fill='#8B5CF6'
				stroke='#C4B5FD'
				strokeWidth='2'
			/>
			<rect
				x='4'
				y='4'
				width='12'
				height='4'
				fill='#8B5CF6'
				stroke='#C4B5FD'
				strokeWidth='2'
			/>
			<path d='M8 12H12' stroke='#A78BFA' strokeWidth='2' />
		</svg>
	);
}

function MoveInactiveIcon(props) {
	return (
		<svg
			{...props}
			viewBox='0 0 20 20'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path d='M10 4H16V10' stroke='#A78BFA' strokeWidth='2' />
			<path d='M16 4L8 12' stroke='#A78BFA' strokeWidth='2' />
			<path d='M8 6H4V16H14V12' stroke='#A78BFA' strokeWidth='2' />
		</svg>
	);
}

function MoveActiveIcon(props) {
	return (
		<svg
			{...props}
			viewBox='0 0 20 20'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path d='M10 4H16V10' stroke='#C4B5FD' strokeWidth='2' />
			<path d='M16 4L8 12' stroke='#C4B5FD' strokeWidth='2' />
			<path d='M8 6H4V16H14V12' stroke='#C4B5FD' strokeWidth='2' />
		</svg>
	);
}

function DeleteInactiveIcon(props) {
	return (
		<svg
			{...props}
			viewBox='0 0 20 20'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<rect
				x='5'
				y='6'
				width='10'
				height='10'
				fill='#EDE9FE'
				stroke='#A78BFA'
				strokeWidth='2'
			/>
			<path d='M3 6H17' stroke='#A78BFA' strokeWidth='2' />
			<path d='M8 6V4H12V6' stroke='#A78BFA' strokeWidth='2' />
		</svg>
	);
}

function DeleteActiveIcon(props) {
	return (
		<svg
			{...props}
			viewBox='0 0 20 20'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<rect
				x='5'
				y='6'
				width='10'
				height='10'
				fill='#8B5CF6'
				stroke='#C4B5FD'
				strokeWidth='2'
			/>
			<path d='M3 6H17' stroke='#C4B5FD' strokeWidth='2' />
			<path d='M8 6V4H12V6' stroke='#C4B5FD' strokeWidth='2' />
		</svg>
	);
}

export default Header;
