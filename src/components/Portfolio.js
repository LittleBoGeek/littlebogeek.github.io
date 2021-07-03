import React from "react";
import Carousel from "react-material-ui-carousel";
import FiberManualRecordSharpIcon from "@material-ui/icons/FiberManualRecordSharp";

const imgs = [
  {
    description:
      "Essentialism is a simple to-do app that aims to help users to simplify their lives by allowing them to organize and prioritize their most meaningful goals.",
    jsf: "//jsfiddle.net/nadiachilds/dv1m0b2g/2/embedded/js/",
    github: "https://github.com/Buildweek-Essentialism/Frontend",
    sources: [
      "/assets/html5-plaincopy.svg",
      "/assets/javascript-plaincopy.svg",
      "/assets/react-originalcopy.svg",
      "/assets/redux-originalcopy.svg",
      "/assets/css3-plaincopy.svg",
    ],
  },
  {
    description:
      "MedCabinet is a web app designed to empower medical marijuana users by allowing them to research and access personalized strain recommendations based on their symptoms and needs.",
    github:
      "https://github.com/LittleBoGeek/Back-end?organization=LittleBoGeek&organization=LittleBoGeek",
    jsf: "//jsfiddle.net/nadiachilds/dv1m0b2g/4/embedded/js/",
    sources: [
      "/assets/javascript-plaincopy.svg",
      "/assets/nodejs-plaincopy.svg",
    ],
  },
  {
    description:
      "Village Book Builders accelerates learners globally through virtual mentoring, learning libraries, and special educational community-wide interventions. Village Portal helps schedule hundreds of virtual volunteer mentors in global time zones.",
    github: "https://github.com/LittleBoGeek/frontend-vbb-portal",
    jsf: "//jsfiddle.net/nadiachilds/dv1m0b2g/embedded/js/",
    sources: [
      "/assets/html5-plaincopy.svg",
      "/assets/javascript-plaincopy.svg",
      "/assets/react-originalcopy.svg",
      "/assets/redux-originalcopy.svg",
    ],
  },
  {
    description:
      "This website was built by me primarily to share and display some of the projects I've had the pleasure of creating or collaborating on. But by itself it's also one of my favorite projects :D",
    github: "https://github.com/LittleBoGeek/littlebogeek.github.io",
    jsf: "//jsfiddle.net/nadiachilds/dv1m0b2g/6/embedded/js/",
    sources: [
      "/assets/html5-plaincopy.svg",
      "/assets/javascript-plaincopy.svg",
      "/assets/react-originalcopy.svg",
      "/assets/css3-plaincopy.svg",
    ],
  },
];

function Portfolio() {
  return (
    <Carousel
      IndicatorIcon={<FiberManualRecordSharpIcon />}
      indicatorIconButtonProps={{
        style: {
          padding: "1px",
          cursor: "pointer",
        },
      }}
      activeIndicatorIconButtonProps={{
        style: {
          backgroundColor: "#282c34",
        },
      }}
      indicatorContainerProps={{
        style: {
          margin: "5px",
          textAlign: "center",
        },
      }}
    >
      {imgs.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <div id="portfolio" className="flex-grid">
      <div className="col description-styles">
        <div className="row">{props.item.description}</div>

        <div className="row">
          {" "}
          <hr className="hr"></hr>
          <h3> Built with:</h3>
          {props.item.sources.map((e) => (
            <img className="stack-icons" src={e} alt="warning" />
          ))}
        </div>
        <hr className="hr"></hr>
        <div className="row">
          <a id="ghicon" href={props.item.github}>
            GitHub
          </a>
        </div>
      </div>
      <div className="col">
        <iframe
          title="jsfiddle"
          width="100%"
          height="500px"
          src={props.item.jsf}
          allowFullScreen="allowfullscreen"
          frameBorder="0"
          className="jsfiddle"
        ></iframe>
      </div>
    </div>
  );
}
export default Portfolio;
