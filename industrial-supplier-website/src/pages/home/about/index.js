import { Link } from "react-router-dom";
import Button from "../../../components/shared/button";
import "./index.css";
import SectionHeader from "../../../components/shared/section-header";

const AboutUs = () => {
	return (
		<section className="about-us">
			<SectionHeader name={'About Us'} />
			<div className="about-us-content">
				<div className="about-us-text">
					<h1 className="about-title">Welcome to Dustrilox</h1>
					<p>
						Discover top-quality industrial equipment solutions for laundry, dry
						cleaning, kitchen, bakery, and catering needs. With expertise in
						sales, installation, servicing, and repair, we're your trusted
						partner for reliable equipment and exceptional service.
					</p>
					<p>
						Explore our services and products. Contact us for inquiries or
						assistance. Let's elevate your business together.
					</p>
					<Link to={"/about"}>
						<Button classname={"learn-more"}>Learn More</Button>
					</Link>
				</div>
				<div className="about-images">
					<div className="about-image-one"></div>
					<div className="about-image-two">
						<div className="image-two"></div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutUs;
