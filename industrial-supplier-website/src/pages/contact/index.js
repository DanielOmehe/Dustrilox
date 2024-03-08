import Layout from "../../components/layout";
import HeroContent from "../../components/shared/hero";
import ContactUs from "./contact";
import ContactInfo from "./info";
import PageHero from "../../components/shared/pageHero";

const ContactPage = () => {
	return (
		<Layout>
			<HeroContent>
				<PageHero classname={"contact-hero"} pageTitle={"Get In Touch"} />
			</HeroContent>
            <ContactInfo />
            <ContactUs />
		</Layout>
	);
};

export default ContactPage;