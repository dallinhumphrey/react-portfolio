import React from "react";
import profilePicture from "../../../static/assets/images/bio/unnamed.jpg";

export default function () {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + profilePicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="right-column">
        My Interests ● Exploring, adventuring, and people. ● Building Lego’s and
        Warhammer figures with my son. ● Cooking with my wife. ● Listening to
        music and dancing with my daughter. ● Landscaping and gardening
      </div>
    </div>
  );
}
