import React, { useState } from "react"; // Import React and useState hook
import {Courses} from "../../data/Courses";    // Import your course data array

function CourseFilter() {
  // State to track which category is selected (default is "All")
  const [selectedCategory, setSelectedCategory] = useState("All");

  // State to track which level is selected (default is "All")
  const [selectedLevel, setSelectedLevel] = useState("All");

  // Filter Courses based on selected category and level
  const filteredCourses = Courses.filter(course => {
    // If "All" is selected, allow all categories, else match selected category
    const matchCategory = selectedCategory === "All" || course.category === selectedCategory;
    
    // Same logic for level
    const matchLevel = selectedLevel === "All" || course.level === selectedLevel;

    // Only return course if it matches both category and level
    return matchCategory && matchLevel;
  });

  return (
    <div className="course-filter">
      
      {/* Category Filter Buttons */}
      <h2>Category:</h2>
      <div className="btn-group">
        {/* Loop over all categories and render buttons */}
        {["All", "JavaScript", "Html", "Css", "Node", "Python", "C++"].map(cat => (
          <button
            key={cat} // Unique key for React rendering
            className={selectedCategory === cat ? "active" : ""} // Highlight if selected
            onClick={() => setSelectedCategory(cat)} // Change category on click
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Level Filter Buttons */}
      <h2>Level:</h2>
      <div className="btn-group">
        {/* Loop over all levels and render buttons */}
        {["All", "Beginner", "Intermediate", "Advanced"].map(level => (
          <button
            key={level} // Unique key for React rendering
            className={selectedLevel === level ? "active" : ""} // Highlight if selected
            onClick={() => setSelectedLevel(level)} // Change level on click
          >
            {level}
          </button>
        ))}
      </div>

      {/* Filtered Course List */}
      <div className="course-list">
        {/* Show message if no course matches the filter */}
        {filteredCourses.length === 0 ? (
          <p>No Courses found.</p>
        ) : (
          // Render each matched course card
          filteredCourses.map(course => (
            <div key={course.id} className="course-card">
              <img src={course.image} alt={course.title} />
              <h3>{course.title}</h3>
              <p>${course.price}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default CourseFilter;
