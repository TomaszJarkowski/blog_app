import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

import useTheme from '../hooks/useTheme';

import styles from '../styles/Menu.module.scss';

export const Navbar = () => {
	const [active, setActive] = useState(false);
	const { changeTheme } = useTheme();
	const handleClick = () => {
		setActive((prev) => {
			return !prev;
		});
	};

	return (
		<nav className={styles.navbar}>
			<Link href="/">
				<div className={styles.logo} onClick={() => setActive(false)}>
					<Image src="/images/logo.png" alt="logo image" width={45} height={45} />
					<h1>TenchHunter</h1>
				</div>
			</Link>
			<div className={`${styles.burger}`} onClick={handleClick}>
				<div className={`${active ? styles.line1 : null}`}></div>
				<div className={`${active ? styles.line2 : null}`}></div>
				<div className={`${active ? styles.line3 : null}`}></div>
			</div>
			<div className={`${active ? styles.menuActive : styles.menu}`}>
				<Link href="/">
					<a onClick={() => setActive(false)}>Strona główna</a>
				</Link>
				<Link href="/articles">
					<a onClick={() => setActive(false)}>Artykuły</a>
				</Link>
				<Link href="https://www.instagram.com/tench_hunter/">
					<a target="_blank" rel="noopener" rel="noreferrer" onClick={() => setActive(false)}>
						Instagram
					</a>
				</Link>
				<img
					className={styles.toggle}
					onClick={changeTheme}
					alt="toggle sun image"
					src="/svg/sun.svg"
				/>
			</div>
		</nav>
	);
};
