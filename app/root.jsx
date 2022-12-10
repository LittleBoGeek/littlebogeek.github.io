import { Links } from "@remix-run/react";
import styles from "../src/App.css";
import Homepage from "../src/components/Homepage";
import Navbar from "../src/components/Navbar";
import UI from "../src/components/UI";
import Portfolio from "../src/components/Portfolio";
import Contact from "../src/components/Contact";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export default function Root() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
        <Links />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Lobster&family=Lobster+Two&family=Martian+Mono:wght@100&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
        />
        <title>React App</title>
      </head>

      <body style={{ backgroundImage: "url(/gary-scott.jpg)" }}>
        <div className="modal">
          <div id="root">
            <Navbar />
            <Homepage />
            <UI />
            <Contact />
          </div>
        </div>
      </body>
    </html>
  );
}
