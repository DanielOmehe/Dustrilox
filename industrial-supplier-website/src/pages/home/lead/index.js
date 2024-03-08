import "./index.css"
import Button from "../../../components/shared/button";
import { Link } from "react-router-dom";

const DustriloxLead = () => {
	return (
		<section className="dustrilox-lead">
			<h1>Dustrilox</h1>
			<p>Industry</p>
			<h2>World’s Leading Contract Industrial Services Provider.</h2>
			<div className="cta-btns">
				<Link to={"/services"}>
					<Button classname={"service-btn"}>Our Services</Button>
				</Link>
				<Link to={"/about"}>
					<Button classname={"learn-more"}>Learn More</Button>
				</Link>
			</div>
		</section>
	);
};

export default DustriloxLead;
