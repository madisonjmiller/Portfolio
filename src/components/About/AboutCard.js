import React from "react";
import Card from "react-bootstrap/Card";
import { IoExtensionPuzzleOutline, IoAirplaneOutline } from "react-icons/io5";
import { GiBlackBook } from "react-icons/gi";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { TbMovie } from "react-icons/tb";
import { PiGolf } from "react-icons/pi";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi!! I am <span className="blue"><b>Madison Miller</b> </span>
            from <span className="blue"><b>East Lansing, MI</b>.</span>
            <br />
            I am currently looking for a job as a <span className="blue"><b>Software Developer</b>.</span>
            <br />
            I'm a senior at <span className="blue"><b>Michigan State University</b>,</span>
            <br />
            studying <span className="blue"><b>Computer Science</b></span> with minors in <span className="blue"><b>Business</b></span> and <span className="blue"><b>Graphic Design.</b></span>
            <br />
            <br />
            <b>Apart from coding, I also enjoy...</b>
          </p>
          <ul>
            <li className="about-activity">
              <IoExtensionPuzzleOutline /> Jigsaw Puzzles
            </li>
            <li className="about-activity">
              <GiBlackBook /> Reading
            </li>
            <li className="about-activity">
              <IoAirplaneOutline /> Traveling
            </li>
            <li className="about-activity">
              <TbMovie /> Going to the movies
            </li>
            <li className="about-activity">
              <LiaUserFriendsSolid /> Hanging out with friends
            </li>
            <li className="about-activity">
              <PiGolf /> Golfing
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;