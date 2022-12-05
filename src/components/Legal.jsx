import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.vite';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import contract from '../assets/contract.pdf';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

const options = {
	cMapUrl: 'cmaps/',
	cMapPacked: true,
	standardFontDataUrl: 'standard_fonts/',
};

const Legal = () => {
	const [numPages, setNumPages] = useState(0);
	const [width, setWidth] = useState(window.innerWidth);

	function onDocumentLoadSuccess({ numPages }) {
		setNumPages(numPages);
	}

	useEffect(() => {
		window.addEventListener('resize', setWidth(window.innerWidth));

		return () => window.removeEventListener('resize', setWidth);
	}, []);

	return (
		<section className='bg-white text-center pt-20 min-h-screen'>
			<h2 className='text-2xl lg:text-4xl'>Legals</h2>
			<div className='Example'>
				<div className='Example__container flex items-center justify-center'>
					<div className='Example__container__document flex items-center justify-center'>
						<Document
							className='flex flex-col xl:flex-row'
							file={contract}
							onLoadSuccess={onDocumentLoadSuccess}
							options={options}
						>
							{Array.from(new Array(numPages), (el, index) => (
								<motion.div
									initial={{ opacity: 0, translateX: -100 }}
									transition={{ duration: 0.5 }}
									whileInView={{ opacity: 1, translateX: 0 }}
									viewport={{ once: true }}
								>
									<Page
										width={width >= 1024 ? '500' : '350'}
										key={`page_${index + 1}`}
										pageNumber={index + 1}
									/>
								</motion.div>
							))}
						</Document>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Legal;
