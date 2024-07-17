import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Contact from "./pages/Contact";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Rentals from "./pages/Rentals";
import Footer from "./components/Footer/index.jsx";
import FilteredElements from "./pages/FilteredElements";
import DetailedPage from "./pages/DetailedPage";

import "./App.css";

function App() {
  const appRoutes = [
    { path: "/", element: <Homepage />, exact: true },
    { path: "/contact", element: <Contact /> },
    { path: "/about", element: <About /> },
    { path: "/rentals", element: <Rentals /> },
    { path: "*", element: <h1>Page not found</h1> },
    { path: "/filter/:city", element: <FilteredElements /> },
    { path: "/details/:id", element: <DetailedPage /> },
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
