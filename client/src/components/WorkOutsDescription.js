import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";

function WorkOutsData() {
  const [description, setDescription] = useState([]);
  const { index } = useParams();

  useEffect(() => {
    const fetchDescription = async () => {
      let { data } = await axios.get(
        `http://localhost:1338/api/workouts/${index}`
      );
      setDescription(data);
    };
    fetchDescription();
  }, [index]);
  console.log(description);
  return (
    <div className="description">
      <h1 className="header">Workout Description</h1>
      <div className="body">
        <h5> {description.description}</h5>
      </div>
      <button>
        <NavLink to="/">Go Back</NavLink>
      </button>
    </div>
  );
}

export default WorkOutsData;
