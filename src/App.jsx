import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";

import rentalData from "./assets/project-data.json";

import Contact from "./pages/Contact";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Rentals from "./pages/Rentals";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  const appRoutes = [
    { path: "/", element: <Homepage /> },
    { path: "/contact", element: <Contact /> },
    { path: "/about", element: <About /> },
    { path: "/rentals", element: <Rentals /> },
    { path: "*", element: <h1>Page not found</h1> },
  ];

  return (
    <>
      <div className="pages">
        <Routes>
          {appRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
