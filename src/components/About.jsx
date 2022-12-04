import React from 'react';
import hoang from '../assets/hoang.svg';
import huy from '../assets/huy.svg';
import man from '../assets/man.svg';
import quynh from '../assets/quynh.svg';
import minh from '../assets/minh.svg';
import Member from './Member';

const About = () => {
	return (
		<section className='flex flex-col bg-white py-20 text-3xl md:text-4xl'>
			<div className='container mx-auto px-11 text-center mt-15'>
				<h2 className='font-bold'>Our Team</h2>
				<div className='mt-10 grid grid-cols-1 md:grid-cols-3 gap-24 items-center justify-center'>
					<Member
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
					/>
				</div>
			</div>
		</section>
	);
};

export default About;
