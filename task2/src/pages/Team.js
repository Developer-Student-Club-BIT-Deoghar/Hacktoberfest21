import React from "react";
import TeamMember from "../components/TeamMember";
import "./Team.css";
import Data from "./data.json"

const Team = () => {

  return (
    <div className="container mt-3 mb-3">
      <h1 className="heading">Our Team</h1>
      <div className="flex-container">
      {Data.map(data => {
        return (
        <TeamMember name={data.name} img={data.img}/>
        );
      })
      }
    </div>
    </div>
  );
};

export default Team;
