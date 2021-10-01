import React from 'react'
import "../pages/Team.css";
import { Link } from "react-router-dom";
import { AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";

function TeamMember({name, img}) {
    return (
            <div className="flex">
        <div class="left">
        <img src={img} alt="team"/>
        </div>
        <div class="right">
        <h2>{name}</h2>
        <div className="">
                  <Link className="text-muted" href="#">
                    <AiOutlineInstagram className="icon icon1" size="" />
                  </Link>
                
                  <Link className="text-muted icon icon2" href="#">
                    <AiOutlineGithub />
                  </Link>

                  <Link className="text-muted icon" href="#">
                    <AiOutlineLinkedin />
                  </Link>
        </div>
      </div>
      </div>
    )
}

export default TeamMember
