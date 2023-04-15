import { useState } from "react";
import "./App.css";
import "./assets/GTWalsheimProRegular.ttf";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="main_container">
      <div className="main_card">
        <img className="main_image" src="/IconPhotoPX.jpg" alt="placeholder" />
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
            <h1>About</h1>
            <p className="main_paragraph">
              I have been working with Computers since the age of 13.
            </p>
            <br />
            <p className="main_paragraph">
              Graduated with Computer's Science bachelors degree in 2016.
            </p>
            <br />
            <p className="main_paragraph">
              For the past 5 years I have been working in the IT and Retail
              field.
            </p>
            <br />
            <p className="main_paragraph">
              Working with the MERN stack and Python.
            </p>
            <br />
          </div>

          <div className="main_interestText">
            <h1>Interests</h1>
            <p className="main_paragraph">Learning new technologies.</p>
            <br />
            <p className="main_paragraph"> Building awesome stuff.</p>
            <br />
            <p className="main_paragraph">Getting better everyday.</p>
            <br />
          </div>
          <div className="main_socialIcons">
            <a href="https://github.com/ondairos">
              <img className="fb_class" src="/github.svg" alt="github" />
            </a>
            <a href="https://twitter.com/Ondairos">
              <img className="fb_class" src="/twitter.svg" alt="twitter" />
            </a>
            <a href="https://www.facebook.com/giannis.kanti">
              <img className="fb_class" src="/facebook.svg" alt="fb" />
            </a>

            <a href="https://www.instagram.com/giannis_kanti/">
              <img className="fb_class" src="/instagram.svg" alt="instagram" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
