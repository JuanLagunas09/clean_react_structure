import ReactDOM from "react-dom/client";
import App from "./components/App";

// root init
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<App />);
