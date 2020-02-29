import React from "react";

export default function About(props) {
  return (
    <div className="about-container center">
      <div className="about">
        <div className="photos">
          <img
            className="main-photo"
            src="images/about-self.jpeg"
            alt=""
          />
        </div>
        <div className="texts">
          <img
            className="author"
            src="/images/about-signature.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
