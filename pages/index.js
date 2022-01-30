import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';

import styles from '../styles/Home.module.scss';

const Home = () => {
	return (
		<>
			<Head>
				<title>TenchHunter | Strona główna</title>
			</Head>
			<div>
				<h1 className={styles.title}>Strona główna</h1>
				<div className={styles.image}>
					<Image width={600} height={400} src="/images/home_page.jpg" alt="home image" />
				</div>
				<p className={styles.text}>
					Witam wszystkich na stronie poświęconej wędkarstwu feederowego. Jestem pasjonatem
					wędkarstwa odkąd pamiętam i zawsze sprawiało mi to wiele satysfakcji. Kilka lat temu
					postanowiłem uwieczniać swoje zdobycze i relacje z moich wypraw na instagramie, w tym celu
					utworzyłem profil wędkarski na instagramie na który Cię serdecznie zapraszam. Hobbystyczne
					prowadzenie instagrama przerosło moje oczekiwania, a zbyt długie stories, które większość
					ludzi przeklikuje znikają w otłchani internetu i nigdzie nie można ich już znaleźć. Ciągła
					chęć poszerzania wiedzy i poznawania nowych rzeczy, przerodziła się także w chęć dzielenia
					się nowinkami i swoimi przemyśleniami z innymi.
				</p>
				<p className={styles.text}>
					<b>
						Masz jakieś pytanie? Śmiało, odwiedź{' '}
						<a
							href="https://www.instagram.com/tench_hunter/"
							rel="noopener"
							rel="noreferrer"
							target="_blank">
							instagram
						</a>{' '}
						lub napisz <a href="mailto:tomaszjarkowski1998@gmail.com">maila</a>✨
					</b>
				</p>
				<Link href="/articles">
					<a className={styles.btn}>Artykuły</a>
				</Link>
			</div>
		</>
	);
};

export default Home;
