import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

import { getListOfArticles } from '../../services/articles';

import styles from '../../styles/Articles.module.scss';

export const getStaticProps = () => {
	const articles = getListOfArticles();

	return {
		props: { articles },
	};
};

const removeDuplicates = (data) => {
	return data.filter((value, index) => data.indexOf(value) === index);
};

const Articles = ({ articles }) => {
	const [articlesToDisplay, setArticles] = useState(articles);
	const [filter, setFilter] = useState('wszystkie');
	const tags = articles.map((article) => article.tags).flat(Infinity);
	const tagsRemoveDuplicates = removeDuplicates(tags);
	tagsRemoveDuplicates.sort();
	tagsRemoveDuplicates.unshift('wszystkie');

	const handleClick = (tag) => {
		setFilter(tag);

		if (tag === 'wszystkie') {
			return setArticles(articles);
		}

		setArticles(articles.filter((el) => el.tags.includes(tag)));
	};

	return (
		<>
			<Head>
				<title>TenchHunter | Artykuły</title>
			</Head>
			<div>
				<h1 className={styles.title}>Artykuły</h1>
				<div className={styles.tags}>
					{tagsRemoveDuplicates.map((tag, id) => (
						<p key={id} onClick={() => handleClick(tag)}>
							{tag}
						</p>
					))}
				</div>
				<h2 className={styles.filter}>#{filter}</h2>
				{articlesToDisplay.map((article) => (
					<Link href={`/articles/${article.slug}`} key={article.id}>
						<a className={styles.single}>
							<div>
								{article.tags.map((el, id) => (
									<p key={id}>#{el}</p>
								))}
							</div>
							<h3>{article.title}</h3>
						</a>
					</Link>
				))}
			</div>
		</>
	);
};

export default Articles;
