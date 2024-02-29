import * as React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/home";
import "./index.css";
import ContactPage from "./pages/contact"
import ServicesPage from "./pages/services"
import AboutUsPage from "./pages/about"
import DustriloxProvider from "./context";

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomePage />,
	},
	{
		path: "/about",
		element: <AboutUsPage />,
	},
	{
		path: "/contact",
		element: <ContactPage />,
	},
	{
		path: "/services",
		element: <ServicesPage />,
	},
]);

createRoot(document.getElementById("root")).render(
	<DustriloxProvider>
		<RouterProvider router={router} />
	</DustriloxProvider>
);

