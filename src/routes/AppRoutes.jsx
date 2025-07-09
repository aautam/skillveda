import { Routes, Route  } from "react-router-dom";
import {Home} from "../pages/Home.jsx";
import {AllCourses} from "../pages/AllCourses.jsx";
import {About} from "../pages/About.jsx";
import {Contact} from "../pages/Contact.jsx";
import {NotFound} from "../pages/NotFound.jsx";
import {Ebook} from "../pages/Ebook.jsx";
import { Coursedetails } from "../pages/Coursedetails.jsx";


export default function AppRoutes() {

 

  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses" element={<AllCourses />} />
      <Route path="/ebooks" element={<Ebook />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/courses/:id" element={<Coursedetails />} />
      
    </Routes>
    
  );
}
// This file defines the main application routes using React Router.
// It includes routes for Home, Courses, About, Contact, and a NotFound page.
