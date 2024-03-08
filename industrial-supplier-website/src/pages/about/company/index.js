import "./index.css";
import { useDustriloxContext } from "../../../context"
import { IoIosArrowRoundDown } from "react-icons/io";
import CompanyInfoTabs from "./tabs";
import CompanyInfoTab from "./tab";

const tabs = [
	{
		key: "vision",
		tab: "company vision",
	},
	{
		key: "values",
		tab: "company values",
	},
	{
		key: "misson",
		tab: "company mission",
	},
];

const CompanyInfo = () => {
    const { currentTab, switchTab } = useDustriloxContext()

	return (
		<section className="company-info">
			<ul className="company-tabs">
				{tabs.map(({ key, tab }, indx) => (
					<li
						className={
							indx === currentTab ? "company-tab active-tab" : "company-tab"
						}
						key={key}
                        onClick={()=>{switchTab(indx)}}
					>
						{tab}
						<>
							{indx === currentTab ? <IoIosArrowRoundDown size={30} /> : null}
						</>
					</li>
				))}
			</ul>
            <CompanyInfoTabs>
				<CompanyInfoTab
					subtitle={
						"At Dustrilox, our vision is to revolutionize the industrial equipment industry by providing innovative solutions that enhance efficiency, sustainability, and profitability for our clients. We aspire to be a trusted partner, driving progress and success in every endeavor we undertake."
					}
				/>
				<CompanyInfoTab
					subtitle={
						"At Dustrilox, our values guide everything we do. We uphold integrity, excellence, and customer-centricity as the cornerstones of our business. We prioritize honesty, transparency, and ethical practices in all our dealings, striving for excellence in every aspect of our operations. Our unwavering commitment to understanding and exceeding customer expectations drives us to deliver reliable, high-quality solutions. We value teamwork, respect, and inclusivity, fostering a culture of collaboration and mutual respect among our diverse team members."
					}
				/>
				<CompanyInfoTab
					subtitle={
						"Our mission at Dustrilox is to empower businesses with top-tier industrial equipment solutions, including sales, installation, repair, and servicing. We are committed to providing superior products, exceptional service, and valuable expertise to help our clients optimize their operations, achieve their goals, and drive sustainable growth."
					}
				/>
			</CompanyInfoTabs>
		</section>
	);
};

export default CompanyInfo;
