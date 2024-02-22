import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import Contact from "./pages/Contact.jsx";
import Press from "./pages/Press.jsx";
import About from "./pages/About.jsx";
/* import Navbar from "./components/Navbar.jsx"; */
import "./index.css";
import "../locales/i18n.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <App />
      </>
    ),
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/press",
        element: <Press />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
