import "./index.css";
import SectionHeader from "../shared/section-header";
import Testimonial from "../../images/testimonial.jpg";
import ClientTestimonialCarousel from "./testimonialCarousel";
import { useDustriloxContext } from "../../context";
import ClientTestimonialCarouselItem from "./testimonialCarouselItems";

const ClientTestimonial = () => {
	const { testimonials } = useDustriloxContext();
	return (
		<section className="client-testimonial">
			<img src={Testimonial} alt="" className="testimonial-image" />
			<div className="testimonial-container">
				<SectionHeader name={"Client Testimony"} />
				<div className="client-testimony">
					<h1 className="testimony-title">Hear from trusted clients</h1>
					<ClientTestimonialCarousel>
						{testimonials.map(({ url, name, post, testimony }, indx) => (
							<ClientTestimonialCarouselItem
								url={url}
								name={name}
								post={post}
								testimony={testimony}
							/>
						))}
					</ClientTestimonialCarousel>
				</div>
			</div>
		</section>
	);
};

export default ClientTestimonial;
