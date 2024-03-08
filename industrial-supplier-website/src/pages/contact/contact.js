import "./contact.css";
import SectionHeader from "../../components/shared/section-header";
import ContactForm from "./contactForm";

const ContactUs = () => {
	return (
		<section className="contact-us">
			<div className="contact-container">
				<SectionHeader name={"Contact"} />
				<h1>We can take your business to the next level.</h1>
				<ContactForm />
			</div>
		</section>
	);
};

export default ContactUs;
