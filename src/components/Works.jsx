import React from 'react';
import { Tile, TileBackground, TileContent, TileWrapper } from './Tile';
import { WorkBackground, WorkContainer, WorkLeft, WorkRight } from './Work';
import shopURL from '../assets/shop.png';

const Works = () => (
	<section className='bg-white pt-20'>
		<h2 className='text-center text-3xl md:text-4xl font-bold mb-14'>
			Our Projects
		</h2>
		<TileWrapper numOfPages={2}>
			<TileContent>
				<Tile
					page={0}
					renderContent={({ progress }) => {
						return (
							<WorkContainer page={0}>
								<WorkLeft progress={progress}>
									<h2>Get your dream shoes</h2>
									<p className='text-xl lg:text-2xl text-gray-400'>
										in just a few clicks
									</p>
								</WorkLeft>
								<WorkRight progress={progress}>
									<img src={shopURL} alt='' className='w-full h-auto' />
								</WorkRight>
							</WorkContainer>
						);
					}}
				></Tile>
			</TileContent>
			<TileContent>
				<Tile
					page={1}
					renderContent={({ progress }) => {
						return (
							<WorkContainer page={1}>
								<WorkLeft progress={progress}>
									<h2 className='leading-tight'>
										Be aware of <br></br> online criticism
									</h2>
									<p className='text-xl lg:text-2xl text-gray-400'>
										to protect yourselves
									</p>
								</WorkLeft>
								<WorkRight progress={progress}>
									<img src={shopURL} alt='' className='w-full h-auto' />
								</WorkRight>
							</WorkContainer>
						);
					}}
				></Tile>
			</TileContent>
		</TileWrapper>
	</section>
);

export default Works;
