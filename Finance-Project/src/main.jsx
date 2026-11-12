import { createRoot } from "react-dom/client";
import "./index.css";
import AppRoute from "./App/routes/AppRoute.jsx";
import { HelmetProvider } from "react-helmet-async";
createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <AppRoute />
  </HelmetProvider>,
);
