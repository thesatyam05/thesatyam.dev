import Image from 'next/image';
import { Links } from '@/components/Links';

import Avatar from '@/public/Avatar.png';
import Link from 'next/link';
import { ArrowUpRightIcon } from '@heroicons/react/20/solid';

export default function Home() {
	return (
		<>
			<div className='flex flex-col gap-16 md:gap-24'>
				<div className='flex animate-in flex-col gap-8'>
					<div>
						<h1 className='animate-in text-3xl font-bold tracking-tight text-primary'>
							Satyam Wakchaure
						</h1>
						<p
							className='animate-in text-secondary'
							style={{ '--index': 1 } as React.CSSProperties}>
							I write code for fun.
						</p>
					</div>
					<div
						className='flex animate-in flex-col gap-6 text-secondary md:flex-row md:items-center'
						style={{ '--index': 1 } as React.CSSProperties}>
						<Image
							src={Avatar}
							width={85}
							height={85}
							alt='avatar'
							className='rounded-full bg-secondary'
						/>
						<Links />
					</div>
					<p
						className='max-w-lg animate-in text-primary'
						style={{ '--index': 2 } as React.CSSProperties}>
						Hi, I&apos;m Satyam, a full stack developer on a mission to transform ideas into
						digital reality with clean code and pixel-perfect precision.
					</p>
					<ul
						className='animated-list flex animate-in flex-col gap-2 text-secondary md:flex-row md:gap-6'
						style={{ '--index': 2 } as React.CSSProperties}>
						<li className='transition-opacity'>
							<Link
								href='mailto:thesatyam05.dev@gmail.com'
								className='flex items-center gap-2 no-underline'>
								<ArrowUpRightIcon className='h-5 w-5' />
								<span>Email me</span>
							</Link>
						</li>
						<li className='transition-opacity'>
							<Link href='/links' className='flex items-center gap-2 no-underline'>
								<ArrowUpRightIcon className='h-5 w-5' />
								<span>More ways to connect</span>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
}
