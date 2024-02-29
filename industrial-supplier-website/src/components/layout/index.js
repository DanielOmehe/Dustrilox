import NavBar from "./navbar";
import Content from "./content";

const Layout = ({ children }) => {
	return (
		<>
			<NavBar />
            <Content>{children}</Content>
		</>
	);
};

export default Layout;
