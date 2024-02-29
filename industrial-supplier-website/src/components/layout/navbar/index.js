import './index.css'
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const NavBar = () => {
    const [scrolled,setScrolled]= useState(false);
const handleScroll=() => {
    const offset=window.scrollY;
    if(offset > 200 ){
      setScrolled(true);
    }
    else{
      setScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll',handleScroll)
  })
let navbarClasses=['navbar'];
  if(scrolled){
    navbarClasses.push('scrolled');
  }
	return (
		<nav className={navbarClasses.join(" ")}>
			<section className='navbar-content'>
				<Link to={"/"} className="logo">
					<h1>Dustrilox</h1>
					<h2>Industry</h2>
				</Link>
				<ul className="nav-items">
					<li className="nav-itmem">
						<Link to={"/"}>Home</Link>
					</li>
					<li className="nav-itmem">
						<Link to={"/about"}>About us</Link>
					</li>
					<li className="nav-itmem">
						<Link to={"/services"}>Services</Link>
					</li>
					<li className="nav-itmem">
						<Link to={"/contact"}>Contact</Link>
					</li>
					<li className="nav-itmem">
						<Link to={"/gallery"}>Gallery</Link>
					</li>
				</ul>
			</section>
			<section className="contact-details">
				<Link to={"/"}>
					<h1>Phone number</h1>
					<h2>+234 907 730 4882</h2>
				</Link>
				<Link to={"/"}>
					<h1>Free consultancy</h1>
					<h2>info@consultancy.com</h2>
				</Link>
			</section>
		</nav>
	);
};

export default NavBar;
