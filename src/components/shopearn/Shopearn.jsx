import React from "react";
import "./shopearn.scss";
import ReactPlayer from "react-player/youtube";
import shopearnphoto from "../../assets/shopearnlogo.png";

export default function Shopearn() {
  return (
    <div className="shopearn" id="shopearn">
      <div className="container">
        <div className="title">
          <h1>Order-Purchase Application ShopEarn</h1>
          <img src={shopearnphoto} alt="" className="projImg" />
        </div>

        <div className="mainContainer">
          <div className="player-wrapper">
            <ReactPlayer
              url="https://youtu.be/Jw-bcwk0ovQ"
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
                https://github.com/padoski/ShopearnApp I did clone of my project
                to secure API Keys :) <br />
                ShopEarn app is used to post announcements for making grocery
                shopping. The application has two interfaces, one for adding
                orders and next one for the driver. You can save a lot of daily
                time by ordering someone to make purchases!
              </p>
            </div>
            <div className="tematicSection">
              <h3> Main functionality</h3>
              <p>
                <span>Customer:</span>
                <br />
                -Maps, adding an advertisement / order <br />
                -Possibility to chat with people with whom we have
                interacted(they accepted our advertisement or we accepted them)
                <br />
                -Choosing the exact date for which we want to get our purchases
                <br />
                -Choosing the location where we want to get our order <br />
                -Ability to view our orders, delete them(up-to-date and
                completed orders) <br />
                <span>Customer:</span> <br />
                -Searching for orders based on distance, possibility of
                accepting and executing them <br />
                -Preview of ads on the map <br />
              </p>
            </div>
            <div className="tematicSection">
              <h3>What tech I used?</h3>
              <p>
                -React Native, <br />
                -AWS Amplify(Authentication, GraphQL API, Lambda Functions, Real
                time data for messages),
                <br />
                -Google Maps API(Maps, Geolocation, Places Autocomplete),
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
