import { Footer } from './Footer';
import { Navbar } from './Navbar';

export const Layout = ({ children }) => (
	<div className="content">
		<Navbar />
		{children}
		<Footer />
	</div>
);
