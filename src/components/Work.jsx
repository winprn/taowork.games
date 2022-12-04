import React from 'react';

export const WorkContainer = ({ children, page }) => {
	return (
		<div
			className={`flex flex-col lg:flex-row justify-evenly ${
				page % 2 == 1 ? 'lg:flex-row-reverse' : ''
			}`}
		>
			{children}
		</div>
	);
};

export const WorkBackground = () => {
	return (
		<div className='grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen top-0 sticky'>
			<div className='bg-black h-[30vh] lg:h-auto'></div>
			<div className='bg-white h-[70vh] lg:min-h-screen'></div>
		</div>
	);
};

export const WorkLeft = ({ children, progress }) => {
	let translateY = Math.max(0, 50 - progress * 150);
	if (progress > 0.85) translateY = Math.max(-50, -(progress - 0.85) * 100);
	return (
		<div
			className='flex flex-col items-center justify-center text-3xl lg:text-5xl h-[30vh] lg:h-auto lg:w-[50%]'
			style={{ transform: `translateY(${translateY}px)` }}
		>
			<div className='leading-10 text-center'>{children}</div>
		</div>
	);
};

export const WorkRight = ({ children, progress }) => {
	let translateY = Math.max(-50, -(progress - 0.5) * 50);
	return (
		<div
			className='flex flex-1 lg:items-center justify-center h-screen bg-white'
			style={{ transform: `translateY(${translateY}px)` }}
		>
			<div className='w-full max-w-md lg:pt-0 md:px-0'>{children}</div>
		</div>
	);
};
