import React from 'react';
import hoang from '../assets/hoang.svg';
import huy from '../assets/huy.svg';
import man from '../assets/man.svg';
import quynh from '../assets/quynh.svg';
import minh from '../assets/minh.svg';
import hoangP from '../assets/hoangP.webp';
import huyP from '../assets/huyP.jpeg';
import manP from '../assets/manP.jpeg';
import quynhP from '../assets/quynhP.jpeg';
import minhP from '../assets/sealP.jpeg';
import Member from './Member';

const data = [
	{
		imgSrc: hoang,
		portrait: hoangP,
		fullname: 'Đào Việt Hoàng',
		name: 'ddafo',
		id: '22127121',
		desc: [
			'Đào Việt Hoàng',
			'Ngày sinh: 14/02/2004',
			'Cung hoàng đạo: Bảo Bình',
			'Nhóm tính cách: D',
			'Đặc điểm nhận dạng: tóc xù, mặc đồ giống trap boy, dạo này ít thấy tại trường vì nó hay cúp học',
			'Vai trò trong nhóm: Thành viên (làm hề zui zẻ đồ đó, lấy người khác ra làm trò đùa đồ đó)',
		],
		title: 'ddafo 🍑',
	},
	{
		imgSrc: huy,
		portrait: huyP,
		fullname: 'Nguyễn Gia Huy',
		name: 'h.zeroxium',
		id: '22127154',
		desc: [
			'Nguyễn Gia Huy',
			'Ngày sinh: 28/08/2004',
			'Cung hoàng đạo: Xử Nữ',
			'Nhóm tính cách: S',
			'Đặc điểm nhận dạng: Đô con, hay mặc đồ đen, thủ khoa A1 Bình Định, có thể tìm thấy vào giờ nghỉ trưa tại I35 hoặc I23',
			'Vai trò trong nhóm: Thành viên (hoàn thành deadline đúng hạn và gánh môn Toán rời rạc cho mấy đứa khác)',
		],
		title: 'Pháp sư toán rời rạc 🧑‍🏫',
	},
	{
		imgSrc: man,
		portrait: manP,
		fullname: 'Lý Đình Minh Mẫn',
		name: 'winprn',
		id: '22127255',
		desc: [
			'Lý Đình Minh Mẫn',
			'Ngày sinh: 22/03/2004',
			'Cung hoàng đạo: Bạch Dương',
			'Nhóm tính cách: D',
			'Đặc điểm nhận dạng: Cao, ốm, mặt mụn, dễ tìm thấy tại thư viện tầng 10 tòa I, HCMUS 🙂',
			'Vai trò trong nhóm: Trưởng nhóm (hay nói đúng hơn là kẻ đi dọa nạt trừ % của người khác)',
		],
		title: 'Nhóm trưởng 🌟',
	},
	{
		imgSrc: minh,
		portrait: minhP,
		fullname: 'Phan Hải Minh',
		name: 'hydroshiba',
		id: '22127273',
		desc: [
			'Phan Hải Minh',
			'Ngày sinh: 31/12/2004',
			'Cung hoàng đạo: Ma Kết',
			'Nhóm tính cách: S',
			'Đặc điểm nhận dạng: Đô con, nhìn hiền hiền, sáng sủa đẹp trai, hay được người khác ORZ, luôn luôn có thể tìm thấy 🦭 tại Selab',
			'Vai trò trong nhóm: Thành viên (bị mọi người dí deadline)',
		],
		title: 'Ngài SEALLL 🙇‍♂️',
	},
	{
		imgSrc: quynh,
		portrait: quynhP,
		fullname: 'Võ Nguyễn Phương Quỳnh',
		name: 'slyth',
		id: '22127360',
		desc: [
			'Võ Nguyễn Phương Quỳnh',
			'Ngày sinh: 22/08/2004',
			'Cung hoàng đạo: Sư Tử',
			'Nhóm tính cách: I, D',
			'Đặc điểm nhận dạng: tóc ngắn, hay mặc váy đi học, nhìn ngáo ngáo, hay đấm (iu) linh tinh, gọi là Sún vì bị sún thật',
			'Vai trò trong nhóm: Timekeeper, thư kí (nhắc deadline, có khi quên nhắc, làm đẹp cho đời và mục tiêu bị chọc)',
		],
		title: 'Sún 🦷',
	},
];

const About = () => {
	return (
		<section className='flex flex-col bg-white py-20 text-3xl md:text-4xl'>
			<div className='container mx-auto px-11 text-center mt-15'>
				<h2 className='font-bold'>Our Team</h2>
				<div className='mt-10 grid grid-cols-1 md:grid-cols-3 gap-24 items-center justify-center'>
					{data.map((el) => {
						return (
							<Member
								imgSrc={el.imgSrc}
								portrait={el.portrait}
								fullName={el.fullname}
								name={el.name}
								id={el.id}
								desc={el.desc}
								title={el.title}
							/>
						);
					})}
					{/* <Member
						imgSrc={hoang}
						portrait={hoang}
						fullName='Đào Việt Hoàng'
						name='ddafo'
						desc={[
							'Họ và tên: Lý Đình Minh Mẫn',
							'MSSV: 22127255',
							'Lớp: 22CLC06',
							'Cung hoàng đạo: Bạch Dương',
							'Nhóm tính cách: I',
							'Sở thích: ngủ',
						]}
						id='22127121'
					/>
					<Member
						imgSrc={huy}
						name='h.zeroxium'
						id='22127154'
						desc={[
							'Họ và tên: Lý Đình Minh Mẫn',
							'MSSV: 22127255',
							'Lớp: 22CLC06',
							'Cung hoàng đạo: Bạch Dương',
							'Nhóm tính cách: I',
							'Sở thích: ngủ',
						]}
					/>
					<Member
						imgSrc={man}
						name='winprn'
						id='22127255'
						desc={[
							'Họ và tên: Lý Đình Minh Mẫn',
							'MSSV: 22127255',
							'Lớp: 22CLC06',
							'Cung hoàng đạo: Bạch Dương',
							'Nhóm tính cách: I',
							'Sở thích: ngủ',
						]}
					/>
					<Member
						imgSrc={minh}
						name='hydroshiba'
						id='22127273'
						desc={[
							'Họ và tên: Lý Đình Minh Mẫn',
							'MSSV: 22127255',
							'Lớp: 22CLC06',
							'Cung hoàng đạo: Bạch Dương',
							'Nhóm tính cách: I',
							'Sở thích: ngủ',
						]}
					/>
					<Member
						imgSrc={quynh}
						name='slyth'
						id='22127360'
						desc={[
							'Họ và tên: Lý Đình Minh Mẫn',
							'MSSV: 22127255',
							'Lớp: 22CLC06',
							'Cung hoàng đạo: Bạch Dương',
							'Nhóm tính cách: I',
							'Sở thích: ngủ',
						]}
					/> */}
				</div>
			</div>
		</section>
	);
};

export default About;
