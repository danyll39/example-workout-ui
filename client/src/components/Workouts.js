import React from "react"
import { NavLink } from 'react-router-dom'

const Workouts = (props) => {
   const  { workout } = props
  return (
    <div> 
    <h2>Select a workout to get full description</h2>
    <div className="workoutNameList">
      {workout.map((work, i) => <ul  key={i}><NavLink to={`/workouts/${work.workoutName}`}>{work.workoutName}</NavLink></ul>)}
      </div>
    </div>
  )
};

export default Workouts;