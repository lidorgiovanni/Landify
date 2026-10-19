import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { initialiseAnalytics } from "./lib/analytics.ts";
import "./index.css";

initialiseAnalytics();

createRoot(document.getElementById("root")!).render(<App />);

