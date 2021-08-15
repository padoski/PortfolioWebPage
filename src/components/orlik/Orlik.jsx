import React from "react";
import "./orlik.scss";
import orlik1 from "../../assets/orlik/orlik1.png";
import orlik2 from "../../assets/orlik/orlik2.png";
import orlik3 from "../../assets/orlik/orlik3.png";
import orlik4 from "../../assets/orlik/orlik4.png";
import orlik5 from "../../assets/orlik/orlik5.png";
import orlik6 from "../../assets/orlik/orlik6.png";
import orlik7 from "../../assets/orlik/orlik7.png";
import orlik8 from "../../assets/orlik/orlik8.png";
import ReactPlayer from "react-player/youtube";
import orlikiphoto from "../../assets/orlikilogo.png";

export default function Orlik() {
  return (
    <div className="orlik" id="orlik">
      <div className="container">
        <div className="title">
          <h1>Managment System of "Orliks"</h1>
          <img src={orlikiphoto} alt="" className="projImg" />
        </div>

        <div className="mainContainer">
          <div className="player-wrapper">
            <ReactPlayer
              url="https://youtu.be/ut55CH_xYnY"
              width="100%"
              height="100%"
              controls
              className="react-player"
            />
          </div>
          <div className="desc">
            <div className="tematicSection">
              <h3>Goal of the project</h3>
              <p>
                https://github.com/padoski/OrlikiApp I did clone of my project
                to secure API Keys :) <br />
                The application goal is to facilitate the booking of sports
                fields.You can check if the pitch is free and make the
                reservation.
              </p>
            </div>
            <div className="tematicSection">
              <h3>Functionality</h3>
              <p>
                -Maps, possibility to book the pitch for the exact time, <br />
                -Payments for pitch reservations( Stripe ) <br />
                -Preview pitches which are displayed on the map, <br />
                -Opportunity to see photos of the pitches, <br />
                -Dimensions of the pitch, surface type, description <br />
                -Navigation to the location of the pitch <br />
                -Preview of my pitch bookings(up-to-date and completed) <br />
                -User profile, adding a photo, name, field position, sex, phone,
                and others <br />
                -Dark Mode (Recoil)
              </p>
            </div>
            <div className="tematicSection">
              <h3>What tech I used?</h3>
              <p>
                -React Native, <br />
                -AWS Amplify ( Authentication, Datastore, S3 Storage ) <br />
                -Recoil (in Dark mode) <br />
                -Google maps
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
