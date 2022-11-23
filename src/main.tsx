import "tailwindcss/tailwind.css"
import "./style.css"
import React from "react"
import ReactDOM from "react-dom/client"
import { RouterProvider } from "react-router-dom";
import { router } from "./routers";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
    .render(<RouterProvider router={ router }/>)
