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
import NotFound from "./pages/NotFound";

import "./App.css";
import Navbar from "./components/Navbar/index.jsx";
import { ElementsProvider } from "./context/ElementsContext.jsx";

function App() {
  const appRoutes = [
    { path: "/", element: <Homepage />, exact: true },
    { path: "/team", element: <Team /> },
    { path: "/about", element: <About /> },
    { path: "/rentals", element: <Rentals /> },
    { path: "*", element: <NotFound /> },
    { path: "/filter/:city", element: <FilteredElements /> },
    { path: "/detail/:id", element: <DetailedPage /> },
    { path: "/edit/:id", element: <EditForm /> },
    { path: "/add", element: <AddForm /> },
  ];

  return (
    <>
      <div className="pages">
        <ElementsProvider>
          <Navbar />
          <Routes>
            {appRoutes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}
          </Routes>
          <Footer />
        </ElementsProvider>
      </div>
    </>
  );
}

export default App;
