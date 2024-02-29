import NavBar from "./navbar";
import Content from "./content";
import Footer from "./footer";

const Layout = ({ children }) => {
	return (
		<>
			<NavBar />
            <Content>{children}</Content>
            <Footer />
		</>
	);
};

export default Layout;
