import "./App.css";
import { Home } from "./pages/Home";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import ScrollToTop from "./scrollTop";
import CourseFilter from "./components/common/CourseFilter";
function App() {
  return (
    <>
    <BrowserRouter>
      <ScrollToTop />
      <AppRoutes />
      <Navbar/>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
