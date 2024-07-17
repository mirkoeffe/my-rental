import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Team from "./pages/Team.jsx";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Rentals from "./pages/Rentals";
import Footer from "./components/Footer/index.jsx";
import FilteredElements from "./pages/FilteredElements";
import DetailedPage from "./pages/DetailedPage";
import EditForm from "./pages/EditForm";
import AddForm from "./pages/AddForm";

import "./App.css";
import Navbar from "./components/Navbar/index.jsx";

function App() {
  const appRoutes = [
    { path: "/", element: <Homepage />, exact: true },
    { path: "/team", element: <Team /> },
    { path: "/about", element: <About /> },
    { path: "/rentals", element: <Rentals /> },
    { path: "*", element: <h1>Page not found</h1> },
    { path: "/filter/:city", element: <FilteredElements /> },
    { path: "/detail/:id", element: <DetailedPage /> },
    { path: "/edit/:id", element: <EditForm /> },
    { path: "/add", element: <AddForm /> },
  ];

  return (
    <>
      <div className="pages">
        <Navbar />
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
