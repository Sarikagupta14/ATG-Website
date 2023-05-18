import React from 'react'
import './Middle.css'
import {MdOutlineVisibility} from 'react-icons/md'

const Middle = (props) => {
  return (
    <div>
      
      <img src={props.img} alt='' className='img1'/>
      <div className='card'>
      <p className='heading'>{props.heading}</p>
      <p className='title'>
      {props.title}
      </p>
      <p className='subtitle'>{props.subtitle}</p>

      <div className='flex '>
      <img src={props.testimonial} alt='' className='testimonial'/>
      <p className='name'>{props.name}</p>
      <p className='views'><MdOutlineVisibility/>{props.views}</p>
      </div>
     
      </div>
     
      </div>
  )
}

export default Middle
