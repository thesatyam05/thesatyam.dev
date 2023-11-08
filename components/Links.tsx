'use client';

import { useTheme } from 'next-themes';
import Link from 'next/link';
import clsx from 'clsx';

import { GitHubIcon, LinkedInIcon, MailIcon } from '@/components/Icons';

type Props = {};

export const Links = (props: Props) => {
	const { theme } = useTheme();
	const username = 'thesatyam05';

	return (
		<ul
			className={clsx(
				'space-y-2 animated-list',
				theme === 'terminal' ? 'font-mono tracking-tight' : ''
			)}>
			<li className='transition-opacity'>
				<Link
					target='_blank'
					className='flex gap-3 items-center no-underline'
					href={'https://www.linkedin.com/in/thesatyam05/'}>
					<LinkedInIcon />
					<div>
						<span> Linkedin</span>
					</div>
				</Link>
			</li>
			<li className='transition-opacity'>
				<Link
					target='_blank'
					className='flex gap-3 items-center'
					href='https://github.com/thesatyam05/'>
					<GitHubIcon />
					<div>
						<span> Github</span>
					</div>
				</Link>
			</li>
			<li className='transition-opacity'>
				<Link
					className='flex gap-3 items-center no-underline'
					target='_top'
					href={'mailto:thesatyam05.dev@gmail.com'}>
					<MailIcon />
					<div>
						<span> thesatyam05.dev@gmail.com</span>
					</div>
				</Link>
			</li>
		</ul>
	);
};
