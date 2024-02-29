import { FaAngleRight } from "react-icons/fa6";
import Button from "../button/button";

const HeroContentCarouselItem = ({ url, title, subtitle }) => {
	return (
		<div
			className="hero-content-carousel-item"
			style={{
				background: `linear-gradient(to right, rgba(0,0,0,.78), rgba(0,0,0,.67)), url(${url})`,
				backgroundRepeat: "no-repeat",
				backgroundPosition: "center",
				backgroundSize: "cover",
			}}
		>
			<h1>{title}</h1>
			<h2>{subtitle}</h2>
			<Button classname={"learn-more"}>
				<p>Learn more</p>
                <FaAngleRight size={15} fill="#fff" />
			</Button>
		</div>
	);
};

export default HeroContentCarouselItem;
