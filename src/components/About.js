import React, { useEffect } from "react";
import ReactGA from "react-ga";

export default function About(props) {

  useEffect(()=> {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
  })

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
