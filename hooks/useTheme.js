import { useEffect } from 'react';

const useTheme = () => {
	const getCurrentTheme = () => {
		let theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
		localStorage.getItem('canabrey.theme')
			? (theme = localStorage.getItem('canabrey.theme'))
			: null;
		return theme;
	};

	useEffect(() => {
		setTheme(getCurrentTheme());
	}, []);

	const setTheme = (theme) => {
		const root = document.querySelector(':root');
		root.setAttribute('color-scheme', `${theme}`);
	};

	const changeTheme = () => {
		let theme = getCurrentTheme();

		if (theme === 'dark') {
			theme = 'light';
		} else {
			theme = 'dark';
		}

		localStorage.setItem('canabrey.theme', `${theme}`);
		setTheme(theme);
	};

	return { changeTheme };
};

export default useTheme;
