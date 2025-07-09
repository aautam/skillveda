import React from 'react'
import { Button } from '../common/Button'
import '../../style/Navbar.css'
import { useNavigate } from 'react-router-dom';


export const Navbar = () => {

  const navigate = useNavigate();
const handleClick = () => {
    navigate("/")}
const handleCourses = () => {
    navigate("/courses")}
const hendleAbout = () => {
    navigate("/about")}
const hendleContact = () => {
    navigate("/contact")}

  return (
    <nav className="navbar">
      <div className="navbar-logo" onClick={handleClick} >Skillveda</div>
      <ul className="navbar-links">
        <li><a href="#" onClick={handleClick}>Home</a></li>
        <li><a href="#" onClick={handleCourses} >Courses</a></li>
        <li><a href="#" onClick={hendleAbout}>About</a></li>
        <li><a href="#" onClick={hendleContact}>Contact Us</a></li>
      </ul>
      <div className="extra-space"></div>
      <Button  label="Learn More" variant='primary' onClick={hendleAbout}/>
    </nav>
  )
}
