import React from "react";
import "../style/AllCourses.css";
import { Card } from "../components/common/Card";
import python from "../assets/python.avif";
import js from "../assets/js.jpg";
import css from "../assets/css.jpg";
import { CoursesIdea } from "../components/home/CoursesIdea.jsx";
import { Courses } from "../data/Courses.js";
import { Button } from "../components/common/Button.jsx";

export const AllCourses = () => {
  

  return (
    <>

      <div className="all-courses">
        <CoursesIdea />
        <div className="card-container">
          {Courses.map((course) => (
            <Card key={course.id} course={course} />
          ))}
        </div>
      </div>
    </>
  );
};
