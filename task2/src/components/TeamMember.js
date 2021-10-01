import React from 'react'
import "../pages/Team.css";
import { Link } from "react-router-dom";
import {Card} from 'antd';
import { AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";

const {Meta} = Card;

function TeamMember({name, img}) {
    return (
        <div className="col-sm-3" style={{marginBottom : "15px"}}>
          <Card
            hoverable
            cover={<img src={img} alt="team" />}
          >
            <Meta
              title={name}
              description='Lead Developer at XYZ'
            />
            <br/>
            <div>
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
          </Card>          
        </div>
    )
}

export default TeamMember
