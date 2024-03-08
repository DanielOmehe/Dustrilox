import "./index.css"
import ServiceCard from "../../../components/shared/service/service";
import { useDustriloxContext } from "../../../context";

const MyServices = () => {
	const { data } = useDustriloxContext();

	return (
		<section className="my-services">
			{data.map(({ title, icon, desc }, indx) => (
				<ServiceCard key={title} title={title} desc={desc} icon={icon} />
			))}
		</section>
	);
};

export default MyServices;
