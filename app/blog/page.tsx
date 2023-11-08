import React from 'react';

type Props = {};

const Page = (props: Props) => {
	return (
		<div className='animate-in' style={{ '--index': 1 } as React.CSSProperties}>
			Blog
		</div>
	);
};

export default Page;
