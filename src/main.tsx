import "tailwindcss/tailwind.css"
import "react-toastify/dist/ReactToastify.css"
import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"
import "./fonts/fonts.css"
import "./fonts/iconfont.css"
import "./style.css"
import React from "react"
import ReactDOM from "react-dom/client"
import { RouterProvider } from "react-router-dom";
import { router } from "./routers";
import Keyboard from "@/components/KeyboardUI/Keyboard";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
    .render(<RouterProvider router={ router }/>)
    // .render(
    //     <div>
    //         <div style={ { width: '600px', height: '250px' } }>
    //             <Keyboard/>
    //         </div>
    //     </div>
    // )
