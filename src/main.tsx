import "tailwindcss/tailwind.css"
import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"
import "./fonts/fonts.css"
import "./style.css"
import React from "react"
import ReactDOM from "react-dom/client"
import { RouterProvider } from "react-router-dom";
import { router } from "./routers";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
    .render(<RouterProvider router={ router }/>)
