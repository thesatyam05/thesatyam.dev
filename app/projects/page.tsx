'use client';

import React from 'react';

type Props = {};

const Page = (props: Props) => {
	return (
		<>
			<div className=' flex flex-col'>
				<span className=' animate-in'>Projects</span>
				<span style={{ '--index': 2 } as React.CSSProperties} className=' animate-in'>
					Projects
				</span>
				<span style={{ '--index': 3 } as React.CSSProperties} className=' animate-in'>
					Mentor
				</span>
				<span style={{ '--index': 4 } as React.CSSProperties} className=' animate-in'>
					there
				</span>
			</div>
		</>
	);
};

export default Page;
