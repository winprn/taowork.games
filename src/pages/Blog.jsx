import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getBlogById } from '../utils/getBlog';
import contract from '../assets/contract.pdf';
import { Document, Page } from 'react-pdf/dist/esm/entry.vite';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

export const loader = ({ params }) => {
	console.log(params);
	return getBlogById(parseInt(params.blogId));
};

const options = {
	cMapUrl: 'cmaps/',
	cMapPacked: true,
	standardFontDataUrl: 'standard_fonts/',
};

const Blog = () => {
	const [numPages, setNumPages] = useState(0);
	const [width, setWidth] = useState(0);
	function onDocumentLoadSuccess({ numPages }) {
		setNumPages(numPages);
	}
	const blog = useLoaderData();

	useEffect(() => {
		setWidth(window.innerWidth);
		console.log(blog);
	}, []);

	return (
		<main className='flex flex-col min-h-screen items-center'>
			<div className='container flex flex-col items-center justify-center mb-10'>
				<h1 className='text-2xl lg:text-3xl font-bold'>{blog[0].title}</h1>
			</div>
			<div className='Example'>
				<div className='Example__container flex items-center justify-center'>
					<div className='Example__container__document flex items-center justify-center'>
						<Document
							onLoadSuccess={onDocumentLoadSuccess}
							className='flex flex-col xl:flex-row'
							file={blog[0].file}
							options={options}
						>
							{Array.from(new Array(numPages), (el, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, translateX: -100 }}
									transition={{ duration: 0.5 }}
									whileInView={{ opacity: 1, translateX: 0 }}
									viewport={{ once: true }}
								>
									<Page
										width={width >= 1024 ? '480' : '350'}
										key={`page_${index + 1}`}
										pageNumber={index + 1}
									/>
								</motion.div>
							))}
						</Document>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Blog;
