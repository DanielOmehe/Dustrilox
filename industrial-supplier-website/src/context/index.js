import { createContext, useContext, useState, useEffect } from "react";
import Sales from "../images/sales.png";
import Install from "../images/install.png";
import Supply from "../images/supply.png";
import Repair from "../images/repair.svg";
import Cleaner from "../images/Cleaner.jpg";
import Catering from "../images/catering.jpg";
import Kitchen from "../images/kitchen.jpeg";
import Alonso from "../images/alonso.jpg";
import Josep from "../images/josep.jpg";
import Maxson from "../images/maxson.jpg";
import Nico from "../images/nico.jpg";
import Upgrade from "../images/upgrade.svg";
import Consultation from "../images/consultation.svg";
import Training from "../images/training.svg";
import Maintenance from "../images/maintenance.svg";

const DustriloxContext = createContext();

export const useDustriloxContext = () => useContext(DustriloxContext);

const DustriloxProvider = ({ children }) => {
	const [currentTab, setCurrentTab] = useState(1);

	const switchTab = (indx) => setCurrentTab((currentTab) => indx);
	const carouselItms = [
		{
			url: Cleaner,
			title: "Installation and maintenance",
			subtitle: "Laundry Machines",
		},
		{
			url: Kitchen,
			title: "service and repair",
			subtitle: "commercial kitchen equipments",
		},
		{
			url: Catering,
			title: "Sales and supply",
			subtitle: "catering equipments",
		},
		{
			url: Catering,
			title: "Supply and servicing",
			subtitle: "Commercial Bakery equipments",
		},
	];

	const [currentTestimony, setCurrentTestimony] = useState(0);
	const [currentItemIndx, setCurrentItemIndx] = useState(0);

	const nextItemIndx = () => {
		if (currentItemIndx < carouselItms.length - 1)
			setCurrentItemIndx(currentItemIndx + 1);
		else setCurrentItemIndx(0);
	};
	const prevItemIndx = () => {
		if (currentItemIndx > 0) setCurrentItemIndx(currentItemIndx - 1);
		else setCurrentItemIndx(carouselItms.length - 1);
	};
	const data = [
		{
			icon: Sales,
			details: "",
			title: "Sales",
			desc: "Explore top-tier industrial machines for sale, designed for efficiency.",
		},

		{
			icon: Supply,
			title: "Supply",
			desc: "Find reliable parts and supplies for ongoing machine maintenance.",
		},

		{
			icon: Install,
			details: "",
			title: "Installation",
			desc: "Experience expert setup services ensuring optimal machine performance.",
		},

		{
			icon: Repair,
			details: "",
			title: "Repair & Servicing",
			desc: "Rely on prompt, reliable repair and maintenance solutions for machines.",
		},

		{
			icon: Maintenance,
			title: "Maintenance Contracts",
			desc: "Tailored contracts offer long-term care and upkeep for equipment.",
		},

		{
			icon: Upgrade,
			title: "Equipment Upgrades",
			desc: "Enhance machine capabilities and performance with specialized upgrade services.",
		},

		{
			icon: Consultation,
			title: "Consultation Services",
			desc: "Gain expert insights and recommendations to optimize industrial laundry operations.",
		},

		{
			icon: Training,
			title: "Training Programs",
			desc: "Empower staff with specialized training programs for effective machine operation.",
		},
	];

	const testimonials = [
		{
			url: Alonso,
			name: "Alonso D. Dawson",
			post: "Head Of Idea",
			testimony:
				"“ I think Dikons is the best theme I ever seen this year. Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance ”",
		},
		{
			url: Josep,
			name: "Josep Andrew",
			post: "Head Of Idea",
			testimony:
				"“ I think Dikons is the best theme I ever seen this year. Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance ”",
		},
		{
			url: Maxson,
			name: "Maxson Dowson",
			post: "Head Of Idea",
			testimony:
				"“ I think Dikons is the best theme I ever seen this year. Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance ”",
		},
		{
			url: Nico,
			name: "Nico Robin",
			post: "Head Of Idea",
			testimony:
				"“ I think Dikons is the best theme I ever seen this year. Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance ”",
		},
	];

	useEffect(() => {
		const changeSlide = setInterval(() => {
			if (currentItemIndx < carouselItms.length - 1)
				setCurrentItemIndx(currentItemIndx + 1);
			else setCurrentItemIndx(0);
		}, 5000);

		return () => clearInterval(changeSlide);
	}, [
		currentItemIndx,
		carouselItms.length,
		currentTestimony,
		testimonials.length,
	]);

	useEffect(() => {
		const newSlide = setInterval(() => {
			if (currentTestimony < testimonials.length - 1)
				setCurrentTestimony(currentTestimony + 1);
			else setCurrentTestimony(0);
		}, 10000);

		return () => clearInterval(newSlide);
	}, [currentTestimony, testimonials.length]);

	return (
		<DustriloxContext.Provider
			value={{
				data,
				currentItemIndx,
				prevItemIndx,
				nextItemIndx,
				carouselItms,
				testimonials,
				currentTestimony,
                currentTab,
                switchTab
			}}
		>
			{children}
		</DustriloxContext.Provider>
	);
};

export default DustriloxProvider;