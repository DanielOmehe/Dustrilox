import { createContext, useContext, useState, useEffect } from "react";
import Sales from "../images/sales.png"
import Install from "../images/install.png"
import Supply from "../images/supply.png"
import Repair from "../images/repair.svg"
import Cleaner from "../images/Cleaner.jpg";
import Catering from "../images/catering.jpg";
import Kitchen from "../images/kitchen.jpeg";

const DustriloxContext = createContext();

export const useDustriloxContext = () => useContext(DustriloxContext);

const DustriloxProvider = ({ children }) => {
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
    const [currentItemIndx, setCurrentItemIndx] = useState(0);

    useEffect(()=>{
        const changeSlide = setInterval(() => {
            if(currentItemIndx < carouselItms.length - 1) setCurrentItemIndx(currentItemIndx + 1);
            else setCurrentItemIndx(0);
        }, 5000);

        return () => clearInterval(changeSlide)
    }, [currentItemIndx, carouselItms.length])

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
			title: "Sales",
			desc: "Discover top-of-the-line industrial dry cleaning and laundry machines for sale, designed to enhance efficiency and productivity.",
			details: "",
		},
		{
            icon: Supply,
			title: "Supplies",
			desc: "Explore our selection of high-quality parts and supplies tailored to keep your industrial machines running smoothly and effectively.",
			details: "",
		},
		{
            icon: Install,
			title: "Installation",
			desc: "Trust our team of experts for seamless installation services, ensuring your industrial dry cleaning and laundry machines are set up for optimal performance from day one.",
			details: "",
		},
		{
            icon: Repair,
			title: "Repair & Servicing",
			desc: "Discover top-of-the-line industrial dry cleaning and laundry machines for sale, designed to enhance efficiency and productivity.",
			details: "",
		},
	];
	return <DustriloxContext.Provider value={{ data, currentItemIndx, prevItemIndx, nextItemIndx, carouselItms }}>{children}</DustriloxContext.Provider>;
};

export default DustriloxProvider;
