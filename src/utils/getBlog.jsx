import contract from '../assets/contract.pdf';

const data = [
	{
		_id: 1,
		title: 'Hợp đồng thành lập nhóm',
		desc: 'Gồm thông tin thành viên, các quy định, điều khoản, và luật nhóm',
		file: contract,
	},
	{
		_id: 2,
		title: 'Hợp đồng thành lập nhóm',
		desc: 'Gồm thông tin thành viên, các quy định, điều khoản, và luật nhóm',
	},
];

export const getAllBlogs = () => {
	return data;
};

export const getBlogById = (id) => {
	return data.filter((el) => {
		return el._id === id;
	});
};
