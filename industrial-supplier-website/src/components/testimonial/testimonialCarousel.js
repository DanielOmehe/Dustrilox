import { Children } from "react";
import { useDustriloxContext } from "../../context";

const ClientTestimonialCarousel = ({ children }) => {
const { currentTestimony } =  useDustriloxContext()
	return <section className="client-testimonial-carousel">{Children.map(children, (child, indx)=> indx === currentTestimony ? child : null)}</section>;
};

export default ClientTestimonialCarousel;