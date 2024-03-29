import { SocialIcon } from "react-social-icons";

function Contact() {
  return (
    <>
      <section>
        <div
          id="contact"
          style={{ display: "flex", alignItems: "center" }}
          className="card"
        >
          <div className="card-content">
            <img
              className="contact-photo"
              src={"/assets/profile.jpeg"}
              alt="clearwarning"
            />
            <hr id="contact-hr hr" />
            <p
              className="contact-card-body card-body"
              style={{ fontFamily: "system-ui", fontWeight: "lighter" }}
            >
              To get in touch or view more of my work, please visit any of the
              links below:
            </p>
            <span className="links-container">
              <span className="link-item">
                <SocialIcon
                  style={{ height: 60, width: 60 }}
                  bgColor="#138cad"
                  url="https://www.linkedin.com/in/nadia-childs/"
                />
              </span>
              <span className="link-item">
                <SocialIcon
                  style={{ height: 60, width: 60 }}
                  fgColor="#282c34"
                  bgColor="#138cad"
                  url="https://github.com/LittleBoGeek"
                />
              </span>
              <span className="link-item">
                <SocialIcon
                  style={{ height: 60, width: 60 }}
                  bgColor="#138cad"
                  url="mailto:nadiadchilds@gmail.com"
                  target="_blanket"
                />
              </span>
            </span>
          </div>
        </div>
        <div className="wrapper">
          <footer
            style={{ position: "absolute", width: "100%", display: "inline" }}
          >
            <h4 style={{ fontFamily: "system-ui", fontWeight: "lighter" }}>
              Photo by{" "}
              <a href="https://unsplash.com/@garyscott_?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                Gary Scott
              </a>{" "}
              on{" "}
              <a href="https://unsplash.com/s/photos/nebula?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                Unsplash
              </a>
            </h4>
          </footer>
        </div>
      </section>
    </>
  );
}
export default Contact;
