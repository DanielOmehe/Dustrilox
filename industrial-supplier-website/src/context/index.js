import { createContext, useContext, useState, useEffect } from "react";
import Sales from "../images/sales.png"
import Install from "../images/install.png"
import Supply from "../images/supply.png"
import Repair from "../images/repair.svg"
import Cleaner from "../images/Cleaner.jpg";
import Catering from "../images/catering.jpg";
import Kitchen from "../images/kitchen.jpeg";
import Alonso from "../images/alonso.jpg"
import Josep from "../images/josep.jpg"
import Maxson from "../images/maxson.jpg"
import Nico from "../images/nico.jpg"

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

    const [ currentTestimony, setCurrentTestimony ] = useState(0)
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

    const testimonials = [
        {
            url: Alonso,
            name: "Alonso D. Dawson",
            post: 'Head Of Idea',
            testimony: '“ I think Dikons is the best theme I ever seen this year. Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance ”'
        },
        {
            url: Josep,
            name: "Josep Andrew",
            post: 'Head Of Idea',
            testimony: '“ I think Dikons is the best theme I ever seen this year. Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance ”'
        },
        {
            url: Maxson,
            name: "Maxson Dowson",
            post: 'Head Of Idea',
            testimony: '“ I think Dikons is the best theme I ever seen this year. Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance ”'
        },
        {
            url: Nico,
            name: "Nico Robin",
            post: 'Head Of Idea',
            testimony: '“ I think Dikons is the best theme I ever seen this year. Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance ”'
        },
    ]

    useEffect(()=>{
        const changeSlide = setInterval(() => {
            if(currentItemIndx < carouselItms.length - 1) setCurrentItemIndx(currentItemIndx + 1);
            else setCurrentItemIndx(0);
        }, 5000);

        return () => clearInterval(changeSlide)
    }, [currentItemIndx, carouselItms.length, currentTestimony, testimonials.length])

    useEffect(()=>{
        const newSlide = setInterval(() => {
            if(currentTestimony < testimonials.length - 1) setCurrentTestimony(currentTestimony + 1);
            else setCurrentTestimony(0);
        }, 10000);

        return () => clearInterval(newSlide)
    }, [currentTestimony, testimonials.length])
    
	return <DustriloxContext.Provider value={{ data, currentItemIndx, prevItemIndx, nextItemIndx, carouselItms, testimonials, currentTestimony }}>{children}</DustriloxContext.Provider>;
};

export default DustriloxProvider;