import * as React from "react";
import * as ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/home";
import './index.css'

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomePage />,
		errorElement: (
			<h1>404 Oop, Sorry the page you're looking for does not exist</h1>
		),
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<RouterProvider router={router} />
);
