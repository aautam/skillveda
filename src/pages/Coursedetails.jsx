import React from 'react'
import { useParams } from 'react-router-dom'
import "../style/Coursesdetails.css"
import { Courses } from "../data/Courses.js"
import {Button} from "../components/common/Button.jsx"

export const Coursedetails = () => {
  const { id } = useParams();
  const course = Courses.find(c => String(c.id) === String(id));

  if (!course) {
    return <div style={{ padding: "2rem" }}>Course not found.</div>;
  }

  return (
    <> 
      <div className="course-page">
        <div className="left-section">
          <img src={course.image} alt="" />
          <h1>{course.title || "Course Title"}</h1>
          <p>{course.description || "No description available."}</p>
          
          {course.rating && course.reviews && course.students && course.duration && (
            <div className="course-meta">
              ⭐ {course.rating} ({course.reviews} reviews) | 👨‍🎓 {course.students} students | ⏱️ {course.duration}
            </div>
          )}

          <div className="tab-buttons">
            <button className="active">Curriculum</button>
            <button>Instructor</button>
            <button>Reviews</button>
            <button>Details</button>
          </div>

          {course.curriculum && (
            <>
              <h2>Course Curriculum</h2>
              {course.curriculum.map((module, idx) => (
                <div className="module" key={idx}>
                  <h3>{module.title}</h3>
                  <p>{module.lessons} lessons • {module.hours} hours</p>
                </div>
              ))}
            </>
          )}
        </div>

        <div className="right-section">
          <div className="price-card">
            <h2>
              {course.price ? `$${course.price}` : "Price not available"}
              {course.originalPrice && (
                <span className="original-price">${course.originalPrice}</span>
              )}
            </h2>
            {/* <button className="enroll-btn">Enroll Now</button> */}
              <Button  label="Enroll Now" variant='secondary' fullWidth />

            <p className="guarantee">30-day money-back guarantee</p>

            <hr />

            <h4>Course includes:</h4>
            <ul>
              {course.duration && <li>⏱️ {course.duration} on-demand video</li>}
              {course.curriculum && <li>📘 {course.curriculum.length} modules</li>}
              <li>🎓 Certificate of completion</li>
              <li>🌐 Lifetime access</li>
            </ul>

            <hr />

            <h4>Share this course</h4>
            <div className="share-buttons">
              {/* <button>Share</button> */}
              <Button label="Share" variant='outline'/>
              <Button label="Gift" variant='outline'/>
              {/* <button>Gift</button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}