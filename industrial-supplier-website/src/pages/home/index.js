import HeroContent from "../../components/shared/hero";
import HeroContentCarousel from "../../components/shared/hero/heroCarousel"
import HeroContentCarouselItem from "../../components/shared/hero/heroCarouselItem"
import Layout from "../../components/layout";
import AboutUs from "./about";
import OurServices from "./services";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import Button from "../../components/shared/button";
import ClientTestimonial from "./testimonial";
import { useDustriloxContext } from "../../context";
import DustriloxLead from "./lead";

const HomePage = () => {
	const { prevItemIndx, nextItemIndx, currentItemIndx, carouselItms } =
		useDustriloxContext();
	return (
		<Layout>
			<HeroContent>
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
			</HeroContent>
            <OurServices />
            <ClientTestimonial />
            <DustriloxLead />
            <AboutUs />
		</Layout>
	);
};

export default HomePage;
