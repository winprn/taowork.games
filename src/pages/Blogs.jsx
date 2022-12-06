import React from 'react';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import contract from '../assets/contract.png';
import { getAllBlogs } from '../utils/getBlog';

const data = `### ✌🏻✌🏻✌🏻Xin chào mọi người!! Tụi mình là TAOwork

💪🏻Nhóm chúng mình đến từ lớp 22CLC06, gồm 5 thành viên:

- 👉🏻 Lý Đình Minh Mẫn - Nhóm trưởng 🌟
- 👉🏻 Nguyễn Gia Huy - Pháp sư toán rời rạc 🧑‍🏫
- 👉🏻 Phan Hải Minh - Ngài SEALLL 🦭 🙇
- 👉🏻 Đào Việt Hoàng - ddafo 🍑
- 👉🏻 Võ Nguyễn Phương Quỳnh - bông hoa duy nhất ✨

Hãy cùng nhau khám phá thêm về chúng mình ở blog nhé!
`;

const components = {
	h3: ({ children }) => (
		<h3 className='text-[1.5rem] font-semibold text-center'>{children}</h3>
	),
	ul: ({ children }) => <ul className='ml-4'>{children}</ul>,
	li: ({ children }) => <li className='mt-1'>{children}</li>,
};

const Blog = () => {
	const [blog, setBlog] = useState([]);
	useEffect(() => {
		setBlog(getAllBlogs);
	}, []);
	return (
		<main className='flex flex-col items-center mx-2'>
			<motion.div
				className='flex flex-col relative items-center justify-center mb-20'
				initial={{ opacity: 0, scale: 1 }}
				transition={{ duration: 1 }}
				viewport={{ once: true }}
				whileInView={{ opacity: 1, scale: 1 }}
			>
				<ReactMarkdown children={data} components={components} />
			</motion.div>
			<section className='flex flex-col lg:flex-row gap-10 mb-20'>
				{blog.map((el, i) => {
					return (
						<motion.div
							key={i}
							initial={{ scale: 0.7, opacity: 0 }}
							transition={{ duration: 0.5 }}
							viewport={{ once: true }}
							whileInView={{ scale: 1, opacity: 1 }}
							className='max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700'
						>
							<Link to={`/blog/${el._id}`}>
								<img className='rounded-t-lg' src={contract} alt='' />
							</Link>
							<div className='p-5'>
								<Link to={`/blog/${el._id}`}>
									<h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
										{el.title}
									</h5>
								</Link>
								<p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
									{el.desc}
								</p>
								<Link
									to={`/blog/${el._id}`}
									className='inline-flex items-center px-3 py-2 text-md font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
								>
									Đọc thêm
									<svg
										aria-hidden='true'
										className='w-4 h-4 ml-2 -mr-1'
										fill='currentColor'
										viewBox='0 0 20 20'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											fillRule='evenodd'
											d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
											clipRule='evenodd'
										></path>
									</svg>
								</Link>
							</div>
						</motion.div>
					);
				})}
			</section>
		</main>
	);
};

export default Blog;
