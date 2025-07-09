import React from 'react'
import { Button } from './Button'
import "../../style/Card.css"
import { useNavigate } from 'react-router-dom';

export const Card = ({course}) => {

    const { title, description, price, image } = course;

   if (!course) return null; 

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/courses/${course.id}`)}
    

  return (
    <>
        <div className="card"  onClick={handleClick} >
            <img src={image}  alt="" />
            <div className="card-data">
            <h2 className="card-title">{title}</h2>
            <p className="card-content">{description}</p>
            <p className='card-price'>{price}</p>
            <Button className="card-button" label="Buy Now" variant='secondary'/>
            </div>
        </div>
    </>
  )
}
