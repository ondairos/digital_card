import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="main_container">
      <div className="main_card">
        <img
          className="main_image"
          src="/IconPhotoPX.jpg"
          alt="placeholder"
        />
        <div className="main_infoText">
          <h1 className="main_infoText-h1">Ioannis Kantiloros</h1>
          <h2 className="main_infoText-h2">Software Engineer</h2>
          <h5 className="main_infoText-h5">Chios, Greece</h5>
          <a href="mailto: jkantiloros@gmail.com" className="main_emailBtn">
            Email
          </a>
          <a
            type="button"
            className="main_LinkedIn"
            href="https://www.linkedin.com/in/ioannis-kantiloros-2438b6153/"
          >
            LinkedIn
          </a>

          <div className="main_aboutText">
            <h2>About</h2>
            <p>
              I have been working with Computers since the age of 13.
              <br />
              <br />
              I am a junior software developer with a strong foundation in JavaScript.
              <br />
              <br />
              The tools I use are: NodeJS, ExpressJS, MongoDB and ReactJS (Redux - GraphQL).
              <br />
              <br />
              I am proficient in HTML, CSS, Git, Bash, Linux and have basic knowledge of MySQL, AWS, Docker, Terraform, Jenkins.
              <br />
            </p>
          </div>

          <div className="main_interestText">
            <h2>Interests</h2>
            <p>
              Learning new technologies.
              <br />
              Building awesome stuff.
              <br />
              Getting better everyday.
              <br />
            </p>
          </div>
          <div className="main_socialIcons">
            <a href="https://github.com/ondairos">
              <img className="fb_class" src="/github.svg" alt="github" />
            </a>
            <a href="https://twitter.com/Ondairos">
              <img
                className="fb_class"
                src="/twitter.svg"
                alt="twitter"
              />
            </a>
            <a href="https://www.facebook.com/giannis.kanti">
              <img className="fb_class" src="/facebook.svg" alt="fb" />
            </a>

            <a href="https://www.instagram.com/giannis_kanti/">
              <img
                className="fb_class"
                src="/instagram.svg"
                alt="instagram"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
