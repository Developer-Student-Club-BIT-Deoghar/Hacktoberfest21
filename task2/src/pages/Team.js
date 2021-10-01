import React from "react";
import TeamMember from "../components/TeamMember";
import "./Team.css";
import Data from "./data.json"

const Team = () => {

  return (
    <div className="container">
      <h1>Our Team</h1>
      <div className="row">
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
