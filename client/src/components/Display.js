import React, { useEffect, useState } from "react";
import Workouts from "./Workouts";
import axios from "axios";


const Display = () => {
  const [workout, setWorkouts] = useState([]);
  const [filteredWorkouts, setFilteredWorkouts] = useState([])
 


  useEffect(() => {
    const fetchWorkout = async () => {
      //update the fetch request
      const { data } = await axios.get("http://localhost:1338/api/workouts");
      setWorkouts(data);
    };
    fetchWorkout();
  }, []);



  console.log(workout);
  useEffect(() => {
    setFilteredWorkouts(workout.filter((work) => work.workoutName.toUpperCase().includes(work.workoutName.toUpperCase())))

}, [ workout])
 

console.log(workout.map((work)=> work.workoutName))
  return (
    <div>
      <h1>Workout Names!</h1>
      <Workouts 
       workout={filteredWorkouts}/>
    </div>
  );
};

export default Display;
