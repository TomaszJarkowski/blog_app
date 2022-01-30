import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const NotFound = () => {
	const router = useRouter();

	useEffect(() => {
		setTimeout(() => {
			router.push('/');
		}, 4000);
	}, []);

	return (
		<>
			<Head>
				<title>TenchHunter | Not Found</title>
			</Head>
			<div className="not-found">
				<h1>Oooops...</h1>
				<h2>Strona nie znaleziona</h2>
				<p>
					Przejdź do
					<Link href="/">
						<a> Strona główna</a>
					</Link>
				</p>
			</div>
		</>
	);
};

export default NotFound;
