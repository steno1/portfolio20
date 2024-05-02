import "./index.css"

import App from "./App";
import { ModalProvider } from "./context/modalContext";
import ReactDOM  from "react-dom/client";
import { ThemeProvider } from "./context/themeContext";

const root =ReactDOM.createRoot(document.querySelector("#root"))

root.render(<ThemeProvider>
        <ModalProvider>
            <App/>
        </ModalProvider>
        </ThemeProvider>

)
