import "./index.css";
import SectionHeader from "../../../components/shared/section-header";
import ServiceCard from "../../../components/shared/service/service";
import { useDustriloxContext } from "../../../context";

const OurServices = () => {
    const { data } = useDustriloxContext();
	return (
		<section className="our-services">
			<SectionHeader name={"Our Services"} />
			<div className="services-container">
				<h1>We have highly-tailored industry solution.</h1>
				<div className="services">
					{data.slice(0, 4).map(({ icon, title, desc }) => (
						<ServiceCard key={title} title={title} desc={desc} icon={icon} />
					))}
				</div>
			</div>
		</section>
	);
};

export default OurServices;
