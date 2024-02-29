import { Link } from "react-router-dom";
import "./service.css";

const ServiceCard = ({ icon, title, desc }) => {
	return (
		<div className="service-card">
        <img src={icon} alt="service icon" className="service-icon"/>
			<div className="service-card-content">
				<h1>{title}</h1>
				<p>{desc}</p>
				<Link to={"/"}>Read more...</Link>
			</div>
            <div className="animation-down"></div>
		</div>
	);
};

export default ServiceCard;