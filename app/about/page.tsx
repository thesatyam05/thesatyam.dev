import Link from 'next/link';
import React from 'react';

type Props = {};

const Page = (props: Props) => {
	return (
		<div>
			<span>Hello World</span>
			<Link href={'/'}>Go to home</Link>
		</div>
	);
};

export default Page;
