import "./index.css"
import { useLocation } from "react-router";

const PageHero = ({ pageTitle, classname }) => {
	const { pathname } = useLocation();

	return (
		<section className={`${classname} page-hero`}>
			<div className="hero-text">
				<p>
					Home | {" "}
					<span>
						{pathname.replace("/", "") === "about" ? "about us" : pathname.replace("/", "")}
					</span>
				</p>
				<h1>{pageTitle}</h1>
			</div>
		</section>
	);
};

export default PageHero;
