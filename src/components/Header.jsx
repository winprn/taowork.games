import React, { useState } from 'react';
import logoURL from '../assets/logo.png';
import chevronURL from '../assets/chevron-down.svg';
import { useRef } from 'react';
import { useContext } from 'react';
import { ScrollContext } from '../utils/scroll-observer';

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
			className="flex flex-col items-center justify-center w-full min-h-screen bg-[url('/src/assets/hero.jpeg')] bg-contain md:bg-cover bg-no-repeat sticky top-0 -z-10"
			style={{ transform: `translateY(-${progress * 20}vh)` }}
		>
			<div className='bg-white opacity-70 w-full h-full absolute'></div>
			<div
				className={`z-10 flex-grow-0 transition-opacity duration-1000 ${
					imageLoaded ? 'opacity-100' : 'opacity-0'
				}`}
			>
				<img src={logoURL} alt='' className='h-[160px] w-auto' />
			</div>
			<div className='text-center z-10 flex-1 p-0 lg:p-[18rem] flex flex-col items-center justify-center drop-shadow-md'>
				<h1 className='text-2xl lg:text-6xl font-bold'>TAOwork</h1>
				<p className='font-thin text-lg lg:text-3xl'>life is harsh without C</p>
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

export default Header;
