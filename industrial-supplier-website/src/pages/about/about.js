import "./index.css";
import Button from "../../components/shared/button";
import AboutOne from "../../images/about-img-2.jpg";
import AboutTwo from "../../images/about-img-5.jpg";
import AboutThree from "../../images/about-img-4.jpg";
import SectionHeader from "../../components/shared/section-header";

const AboutCompany = () => {
	return (
		<section className="about-company">
			<div className="about-grid">
				<div className="grid-image-left">
					<div className="grid-image">
						<img src={AboutOne} alt="about" />
					</div>
					<div className="grid-image">
						<img src={AboutTwo} alt="about" />
					</div>
				</div>
				<div className="grid-image-right">
					<div className="grid-image">
						<img src={AboutThree} alt="about" />
					</div>
					<div className="grid-image">
						<div className="grid-text">
							<h1>
								15<span>+</span>
							</h1>
							<p>years of experience</p>
						</div>
						<img src={AboutThree} alt="about" />
					</div>
				</div>
			</div>
			<div className="about-info">
				<SectionHeader name={"About Us"} />
				<h1>We can your business to the next level</h1>
				<p className="subtitle">
					We is the partner of choice for many of the world’s leading
					enterprises, SMEs and technology challengers.
				</p>
				<p className="founder-name">
					Bhocherd Simon - <span>Founder</span>
				</p>
				<p className="about-desc">
					Our mission is to provide quality English language instruction a
					variety of courses to international and local students in a
					professional and supportive atmosphere .
				</p>
				<Button classname={"learn-more"}>Learn more</Button>
			</div>
		</section>
	);
};

export default AboutCompany;
