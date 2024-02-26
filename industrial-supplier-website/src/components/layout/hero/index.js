import "./index.css";
import HeroContentCarousel from "./heroCarousel";
import HeroContentCarouselItem from "./heroCarouselItem";
import Cleaner from "../../../images/Cleaner.jpg";
import Catering from "../../../images/catering.jpg"
import Kitchen from "../../../images/kitchen.jpeg";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import Button from "../../shared/button/button";
import { useEffect, useState } from "react";

const carouselItms = [
	{
		url: Cleaner,
		title: "Installation and maintenance",
		subtitle: "Laundry Machines",
	},
	{
		url: Kitchen,
		title: "service and repair",
		subtitle: "commercial kitchen equipments",
	},
	{
		url: Catering,
		title: "Sales and supply",
		subtitle: "catering equipments",
	},
	{
		url: Catering,
		title: "Supply and servicing",
		subtitle: "Commercial Bakery equipments",
	},
];

const HeroContent = () => {
	const [currentItemIndx, setCurrentItemIndx] = useState(0);

    useEffect(()=>{
        const changeSlide = setInterval(() => {
            if(currentItemIndx < carouselItms.length - 1) setCurrentItemIndx(currentItemIndx + 1);
            else setCurrentItemIndx(0);
        }, 5000);

        return () => clearInterval(changeSlide)
    }, [currentItemIndx])

	const nextItemIndx = () => {
		if (currentItemIndx < carouselItms.length - 1)
			setCurrentItemIndx(currentItemIndx + 1);
		else setCurrentItemIndx(0);
	};
	const prevItemIndx = () => {
		if (currentItemIndx > 0) setCurrentItemIndx(currentItemIndx - 1);
		else setCurrentItemIndx(carouselItms.length - 1);
	};
	return (
		<section className="hero-content">
			<Button classname="arrow left" clickHandler={prevItemIndx}>
				<FaArrowLeftLong size={25} fill="#fff" />
			</Button>
			<HeroContentCarousel currentItem={currentItemIndx}>
				{carouselItms.map(({ url, title, subtitle }, indx) => (
					<HeroContentCarouselItem
						url={url}
						title={title}
						subtitle={subtitle}
					/>
				))}
			</HeroContentCarousel>
			<Button classname="arrow right" clickHandler={nextItemIndx}>
				<FaArrowRightLong size={25} fill="#fff" />
			</Button>
		</section>
	);
};

export default HeroContent;