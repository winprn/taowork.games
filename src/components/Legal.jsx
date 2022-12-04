import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.vite';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import contract from '../assets/contract.pdf';

const options = {
	cMapUrl: 'cmaps/',
	cMapPacked: true,
	standardFontDataUrl: 'standard_fonts/',
};

const Legal = () => {
	const [numPages, setNumPages] = useState(null);

	function onDocumentLoadSuccess({ numPages }) {
		setNumPages(numPages);
	}

	return (
		<section className='bg-white text-center pt-20 min-h-screen'>
			<h2 className='text-2xl lg:text-4xl'>Legals</h2>
			<div className='Example'>
				<div className='Example__container flex items-center justify-center'>
					<div className='Example__container__document flex items-center justify-center'>
						<Document
							className='flex '
							file={contract}
							onLoadSuccess={onDocumentLoadSuccess}
							options={options}
						>
							{Array.from(new Array(numPages), (el, index) => (
								<Page
									width='500'
									key={`page_${index + 1}`}
									pageNumber={index + 1}
								/>
							))}
						</Document>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Legal;
