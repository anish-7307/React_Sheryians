import { Bookmark } from "lucide-react";
import React from 'react'

const Cards = (props) => {
  return (
    <div className="card">
      <div className="top">
        <img src={props.img} alt="" />
        <button>Save <Bookmark size={18} /></button>
      </div>
      <div className='center'>
        <h3>{props.company}  <span>{props.days} Days ago</span> </h3>
        <h2>{props.designation}</h2>
        <div className="tag">
          <h4>{props.tag1}</h4>
          <h4>{props.type}</h4>
        </div>
      </div>
      <div className="bottom">
          <div>
            <h3>{props.salary}/hr</h3>
            <p>{props.location}</p>
          </div>
          <button>Apply Now</button>
      </div>
    </div>
  )
}

export default Cards