import './index.css'
import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<nav className="navbar">
			<section className='navbar-content'>
				<Link to={"/"} className="logo">
					<h1>Dustrilox</h1>
					<h2>Industry</h2>
				</Link>
				<ul className="nav-items">
					<li className="nav-itmem">
						<Link to={"/"}>Home</Link>
					</li>
					<li className="nav-itmem">
						<Link to={"/about"}>About us</Link>
					</li>
					<li className="nav-itmem">
						<Link to={"/services"}>Services</Link>
					</li>
					<li className="nav-itmem">
						<Link to={"/contact"}>Contact</Link>
					</li>
					<li className="nav-itmem">
						<Link to={"/gallery"}>Gallery</Link>
					</li>
				</ul>
			</section>
			<section className="contact-details">
				<Link to={"/"}>
					<h1>Phone number</h1>
					<h2>+234 907 730 4882</h2>
				</Link>
				<Link to={"/"}>
					<h1>Free consultancy</h1>
					<h2>info@consultancy.com</h2>
				</Link>
			</section>
		</nav>
	);
};

export default NavBar;
