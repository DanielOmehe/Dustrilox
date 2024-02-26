import NavBar from "./navbar";
import HeroContent from "./hero";
import Content from "./content";

const Layout = ({ children }) => {
	return (
		<>
			<NavBar />
			<HeroContent />
            <Content>{children}</Content>
		</>
	);
};

export default Layout;
