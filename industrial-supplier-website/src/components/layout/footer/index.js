import { Link } from "react-router-dom";
import "./index.css";
import { CiMail } from "react-icons/ci";

const Footer = () => {
	return (
		<footer className="footer">
			<Link className="footer-logo">
				<h1>Dustrilox</h1>
				<p>Industry</p>
			</Link>
			<section className="footer-content">
				<div className="other-pages">
					<h1>Other Pages</h1>
					<ul>
						<li>
							<Link to={"/"}>Home</Link>
						</li>
						<li>
							<Link to={"/about"}>About Us</Link>
						</li>
						<li>
							<Link to={"/services"}>Services</Link>
						</li>
						<li>
							<Link to={"/"}>Contact</Link>
						</li>
						<li>
							<Link to={"/"}>Projects</Link>
						</li>
					</ul>
				</div>
				<div className="footer-services">
					<h1>Our Services</h1>
					<ul>
						<li>
							<Link to={"/services"}>Sales</Link>
						</li>
						<li>
							<Link to={"/about"}>Supplies</Link>
						</li>
						<li>
							<Link to={"/services"}>Installation</Link>
						</li>
						<li>
							<Link to={"/"}>Repair & Servicing</Link>
						</li>
					</ul>
				</div>
				<div className="newsletter-form">
					<h1>Connect with us</h1>
					<p>
						Subscribe to out newsletter today to receive updates on the latest
						news, releases and special offers. We respect your privacy. Your
						information is safe.
					</p>
					<form className="newsletter">
						<CiMail size={20} fill="#000" />
						<input type="email" placeholder="Email address" />
						<button>Subscribe</button>
					</form>
				</div>
			</section>
		</footer>
	);
};

export default Footer;
