import Layout from "../../components/layout";
import HeroContent from "../../components/shared/hero";
import PageHero from "../../components/shared/pageHero";
import AboutCompany from "./about";
import CompanyInfo from "./company";

const AboutUsPage = () => {
	return (
		<Layout>
			<HeroContent>
				<PageHero classname={"about-hero"} pageTitle={"About Company"} />
			</HeroContent>
			<AboutCompany />
			<CompanyInfo />
		</Layout>
	);
};

export default AboutUsPage;
