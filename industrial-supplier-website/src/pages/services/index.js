import Layout from "../../components/layout";
import HeroContent from "../../components/shared/hero/index";
import MyServices from "./myServices";
import PageHero from "../../components/shared/pageHero";

const ServicesPage = () => {
	return (
		<Layout>
			<HeroContent>
				<PageHero pageTitle={"What we do"} classname={"services-hero"} />
			</HeroContent>
            <MyServices />
		</Layout>
	);
};

export default ServicesPage;