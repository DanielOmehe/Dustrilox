import "./index.css";
import SectionHeader from "../shared/section-header";
import ServiceCard from "./service";
import { useDustriloxContext } from "../../context";

const OurServices = () => {
    const { data } = useDustriloxContext();
	return (
		<section className="our-services">
			<SectionHeader name={"Our Services"} />
			<div className="services-container">
				<h1>We have highly-tailored industry solution.</h1>
				<div className="services">
					{data.map(({ icon, title, desc }) => (
						<ServiceCard key={title} title={title} desc={desc} icon={icon} />
					))}
				</div>
			</div>
		</section>
	);
};

export default OurServices;
