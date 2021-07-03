import React from "react";
import ArrowDownwardSharpIcon from "@material-ui/icons/ArrowDownwardSharp";

function Homepage() {
  return (
    <>
      <div>
        <div className="card">
          <h1 className="title">Welcome! </h1> <br />
          <hr />
          <p className="card-body">
            My name is Nadia and I am a coffee-fueled full-stack web developer
            based in Orlando.
          </p>
          <ArrowDownwardSharpIcon
            style={{
              height: "100px",
              width: "100px",
            }}
            className="welcome-arrow"
          />
        </div>
      </div>
    </>
  );
}

export default Homepage;
