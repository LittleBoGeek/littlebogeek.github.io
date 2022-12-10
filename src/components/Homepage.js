import React from "react";

function Homepage() {
  return (
    <>
      <div>
        <div className="card">
          <h1
            className="title"
            style={{
              fontFamily: "Lobster, cursive;",
            }}
          >
            Welcome!
          </h1>
          <br />
          <hr />
          <p
            className="card-body"
            style={{
              fontFamily: "system-ui",
              fontWeight: "lighter",
            }}
          >
            My name is Nadia and I am a coffee-fueled full-stack web developer
            based in Orlando.
          </p>
          <span
            className="welcome-arrow material-symbols-outlined"
            style={{ fontSize: "50px" }}
          >
            arrow_drop_down
          </span>
        </div>
      </div>
    </>
  );
}

export default Homepage;
