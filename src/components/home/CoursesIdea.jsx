import React from "react";
import { Button } from "../common/Button";
import "../../style/CoursesIdea.css"
import { Courses } from "../../data/Courses";


export const CoursesIdea = () => {

  return (
    <>
      <div className="coursesidea">
        <div className="description">
        <Button label="Online Learning"/>
        <h1>Featured Courses</h1>
        <p >Discover our most popular courses and start learning today</p>
</div>

<div className="category-btn">
        <p>category:</p>
        <Button label="All" variant="outline" />
        <Button label="Java Script" variant="outline" />
        <Button label="Python" variant="outline" />
        <Button label="Html" variant="outline" />
        <Button label="Node" variant="outline" />
        <Button label="Express" variant="outline" />
        <Button label="React Js" variant="outline" />
        <Button label="Java" variant="outline" />
        <Button label="C++" variant="outline" />
        <Button label="Full Stack" variant="outline" />
      </div>
      <div className="category-btn">
      <span>Level:</span>
      <Button label="All" variant="outline" />
        <Button  label="Beginner" variant="outline" />
        <Button label="Intermediate" variant="outline" />
        <Button label="Advanced" variant="outline" />
      </div>
      </div>
    </>
  );
};



// import React, { useState } from "react";
// import { Button } from "../common/Button";
// import { Card } from "../common/Card";
// import { Courses } from "../../data/Courses";
// import "../../style/CoursesIdea.css";

// export const CoursesIdea = () => {
//   // 🔸 Track selected category & level
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [selectedLevel, setSelectedLevel] = useState("All");

//   // 🔸 Filter logic based on selection
//   const filteredCourses = Courses.filter(course => {
//     const categoryMatch = selectedCategory === "All" || course.category === selectedCategory;
//     const levelMatch = selectedLevel === "All" || course.level === selectedLevel;
//     return categoryMatch && levelMatch;
//   });

//   // 🔸 Filter buttons list
//   const categories = ["All", "React Js", "Java Script", "Python", "Html", "Node", "Express", "Java", "C++", "Full Stack"];
//   const levels = ["All", "Beginner", "Intermediate", "Advanced"];

//   return (
//     <div className="coursesidea">
//       {/* Description */}
//       <div className="description">
//         <Button label="Online Learning" />
//         <h1>Featured Courses</h1>
//         <p>Discover our most popular courses and start learning today</p>
//       </div>

//       {/* 🔸 Category Buttons */}
//       <div className="category-btn">
//         <p>Category:</p>
//         {categories.map(cat => (
//           <Button
//             key={cat}
//             label={cat}
//             variant="outline"
//             className={selectedCategory === cat ? "active" : ""}
//             onClick={() => setSelectedCategory(cat)}
//           />
//         ))}
//       </div>

//       {/* 🔸 Level Buttons */}
//       <div className="category-btn">
//         <span>Level:</span>
//         {levels.map(level => (
//           <Button
//             key={level}
//             label={level}
//             variant="outline"
//             className={selectedLevel === level ? "active" : ""}
//             onClick={() => setSelectedLevel(level)}
//           />
//         ))}
//       </div>

//       {/* 🔸 Filtered Course Cards */}
//       <div className="course-grid">
//         {filteredCourses.length === 0 ? (
//           <p>No matching courses found.</p>
//         ) : (
//           filteredCourses.map(course => (
//             <Card key={course.id} course={course} />
//           ))
//         )}
//       </div>
//     </div>
//   );
// };
