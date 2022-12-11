import contract from '../assets/contract.pdf';
import minutes_01 from '../assets/content/minutes_01.pdf';
import minutes_02 from '../assets/content/minutes_02.pdf';
import minutes_03 from '../assets/content/minutes_03.pdf';
import contractImg from '../assets/contract.png';
import minutes_1 from '../assets/minutes_1.png';
import minutes_2 from '../assets/minutes_2.png';
import minutes_3 from '../assets/minutes_3.png';

const data = [
	{
		_id: 1,
		title: 'Hợp đồng thành lập nhóm',
		desc: 'Gồm thông tin thành viên, các quy định, điều khoản, và luật nhóm',
		file: contract,
		blogImg: contractImg,
	},
	{
		_id: 2,
		title: 'Biên bản họp nhóm tuần 1',
		desc: 'Gồm nội dung buổi họp, tổng kết công việc đã giao, phân công nhiệm vụ cho tuần mới',
		file: minutes_01,
		blogImg: minutes_1,
	},
	{
		_id: 3,
		title: 'Biên bản họp nhóm tuần 2',
		desc: 'Gồm nội dung buổi họp, tổng kết công việc đã giao, phân công nhiệm vụ cho tuần mới',
		file: minutes_02,
		blogImg: minutes_2,
	},
	{
		_id: 4,
		title: 'Biên bản họp nhóm tuần 3',
		desc: 'Gồm nội dung buổi họp, tổng kết công việc đã giao, phân công nhiệm vụ cho tuần mới',
		file: minutes_03,
		blogImg: minutes_3,
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
