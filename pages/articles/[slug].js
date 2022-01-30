import Head from 'next/head';

import { getArticle, getListOfArticles } from '../../services/articles';

import styles from '../../styles/Article.module.scss';

export const getStaticPaths = async () => {
	const articles = getListOfArticles('_articles');

	return {
		paths: articles.map((art) => ({ params: { slug: art.slug } })),
		fallback: false,
	};
};

export const getStaticProps = async (req) => {
	const { slug } = req.params;
	const article = await getArticle(slug);

	return {
		props: { article },
	};
};

const Details = ({ article }) => {
	return (
		<>
			<Head>
				<title>TenchHunter | {article.title}</title>
			</Head>
			<article className={styles.article}>
				<header className={styles.header}>
					<div className={styles.hasztag}>
						{article.tags.map((el) => (
							<p key={el}>#{el}</p>
						))}
					</div>
					<h2>{article.title}</h2>
					<h3>
						{article.date} {article.author}
					</h3>
				</header>
				<div className={styles.content} dangerouslySetInnerHTML={{ __html: article.content }} />
			</article>
		</>
	);
};

export default Details;
