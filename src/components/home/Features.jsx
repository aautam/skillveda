import React from "react";
import "../../style/Features.css";
import { BigCard } from "../common/BigCard";
import { Card } from "../common/Card";
import python from "../../assets/python.avif";
import js from "../../assets/js.jpg";
import css from "../../assets/css.jpg";
import { Courses } from "../../data/Courses.js";
import { useNavigate } from 'react-router-dom';
import { Button } from "../common/Button.jsx";


export const Features = () => {

const navigate = useNavigate();
const handleCourses = () => {
    navigate("/courses")}

  return (
    <>

    

          <BigCard
            title="Expert instructors."
            description="Courses taught by industry professionals covering top topics."
            src={python}
            side="left"
          />
          <BigCard
            title="Expert instructors."
            description="Courses taught by industry <br /> professionals covering top topics."
            src={js}
          />
  
          <BigCard
            title="Expert instructors."
            description="Courses taught by industry professionals covering top topics."
            src={css}
            side="left"
          />
  
          <BigCard title="Expert Instructors" src={js}>
            Courses taught by <strong>industry professionals</strong> <br />
            covering topics like <em>JavaScript</em>, React, and more.
          </BigCard>
<div className="card-container">
         {Courses.slice(0, 3).map((courses) => (
           <Card key={courses.id} course={courses} />
         ))}
       </div>
       <div className="allCourses">
       <Button label="All Courses" onClick={handleCourses}/>
       </div>
 <div className="bigcard-container">
        </div>
    </>
  );
};
