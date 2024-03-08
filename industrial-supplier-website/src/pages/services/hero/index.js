import "./index.css";
import { useLocation } from "react-router";
import { useParams } from "react-router";

const ServicesHero = () => {
	const location = useLocation();

	return (
		<section className="services-hero">
			<div className="hero-text">
				<p>
					Home | <span>{location.pathname.replace("/", "")}</span>
				</p>
				<h1>What we do</h1>
			</div>
		</section>
	);
};

export default ServicesHero;
