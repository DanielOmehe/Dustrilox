import "./info.css";
import { FiPhone } from "react-icons/fi";
import { IoMailOpenOutline } from "react-icons/io5";
import { GrMapLocation } from "react-icons/gr";
import { MdOutlineCastConnected } from "react-icons/md";
import Button from "../../components/shared/button";
import { Link } from "react-router-dom";
import {
	FaFacebook,
	FaXTwitter,
	FaArrowRight,
	FaBehance,
	FaYoutube,
} from "react-icons/fa6";

const ContactInfo = () => {
	return (
		<section className="contact-info">
			<ul className="contact-info-list">
				<li className="contact-item">
					<div className="contact-icon">
						<IoMailOpenOutline size={50} />
					</div>
					<h1>Email Address</h1>
					<Link to={"mailto:eddymooretech@gmail.com"}>eddymooretech@gmail.com</Link>
					<Link to={"jobs@websitehints.com"}>
						<Button classname="contact-btn">
							<p>Email us</p> <FaArrowRight size={20} />
						</Button>
					</Link>
				</li>
				<li className="contact-item">
					<div className="contact-icon">
						<FiPhone size={50} fill="#000" />
					</div>
					<h1>Phone Number</h1>
					<Link to={"/tel:+78923656825"}>08037175961</Link>
					<Link to={"/jobs@websitehints.com"}>
						<Button classname="contact-btn">
							<p>Call us</p> <FaArrowRight size={20} />
						</Button>
					</Link>
				</li>
				<li className="contact-item">
					<div className="contact-icon">
						<GrMapLocation size={50} />
					</div>
					<h1>Office Address</h1>
					<Link to={"https://goo.gl/maps/ZW5MZEgAG4zRJc6B7"}>
						PLOT 3734A New Site Suaka Kahuta, FHA, Lugbe
					</Link>
					<Link to={"jobs@websitehints.com"}>
						<Button classname="contact-btn">
							<p>Direction</p> <FaArrowRight size={20} />
						</Button>
					</Link>
				</li>
				<li className="contact-item">
					<div className="contact-icon">
						<MdOutlineCastConnected size={50} />
					</div>
					<h1>Social Connect</h1>
					<div className="social-contact">
						<Link to={"jobs@websitehints.com"}>
							<Button classname="social-btn">
								<FaFacebook size={20} />
							</Button>
						</Link>
						<Link to={"jobs@websitehints.com"}>
							<Button classname="social-btn">
								<FaXTwitter size={20} />
							</Button>
						</Link>
						<Link to={"jobs@websitehints.com"}>
							<Button classname="social-btn">
								<FaBehance size={20} />
							</Button>
						</Link>
						<Link to={"jobs@websitehints.com"}>
							<Button classname="social-btn">
								<FaYoutube size={20} />
							</Button>
						</Link>
					</div>
				</li>
			</ul>
		</section>
	);
};

export default ContactInfo;
