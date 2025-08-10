import Week1 from "../assets/Week1.png";
import Week2 from "../assets/Week2.png";
import Week3 from "../assets/Week3.png";
import Week4 from "../assets/Week4.png";
import Week5 from "../assets/Week5.png";
import Week6 from "../assets/Week6.png";
import Week7 from "../assets/Week7.png";
import Week8 from "../assets/Week8.png";

export default function Projects() {
  return (
    <div className="container">
      <h2 className="text-center mb-5 mt-5">My Projects</h2>
      <div className="row">
        <div className="col-md-3 col-sm-6 mb-5">
          <a
            href="https://portfolio-bootcamp-w1.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={Week1}
              alt="Week 1 Project - Portfolio"
              title="Week 1 Project - Portfolio"
              className="img-fluid rounded shadow-sm project-image"
            />
          </a>
        </div>
        <div className="col-md-3 col-sm-6 mb-5">
          <a
            href="https://csillacsejtei.github.io/week2-challenge/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={Week2}
              alt="Week 2 Project - Portfolio"
              title="Week 2 Project - Portfolio"
              className="img-fluid rounded shadow-sm project-image"
            />
          </a>
        </div>
        <div className="col-md-3 col-sm-6 mb-5">
          <a
            href="https://csillacsejtei.github.io/week3-challenge/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={Week3}
              alt="Week 3 Project - Hobby page"
              title="Week 3 Project - Hobby page"
              className="img-fluid rounded shadow-sm project-image"
            />
          </a>
        </div>
        <div className="col-md-3 col-sm-6 mb-5">
          <a
            href="https://csillacsejtei.github.io/week-4-challenge/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={Week4}
              alt="Week 4 Project - To do list"
              Title="Week 4 Project - To do list"
              className="img-fluid rounded shadow-sm project-image"
            />
          </a>
        </div>
        <div className="col-md-3 col-sm-6 mb-5">
          <a
            href="https://csillacsejtei.github.io/wizardsoftheapocalypse/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={Week5}
              alt="Week 5 Project - Weather Forecast"
              title="Week 5 Project - Weather Forecast"
              className="img-fluid rounded shadow-sm project-image"
            />
          </a>
        </div>
        <div className="col-md-3 col-sm-6 mb-5">
          <a
            href="https://app.screencastify.com/watch/CdmcKrrTCGnjyPlT3oap"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={Week6}
              alt="Week 6 Project - Readme.md generator"
              title="Week 6 Project - Readme.md generator"
              className="img-fluid rounded shadow-sm project-image"
            />
          </a>
        </div>
        <div className="col-md-3 col-sm-6 mb-5">
          <a
            href="https://note-taking-application-93q1.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={Week7}
              alt="Week 7 Project - Note taking app"
              title="Week 7 Project - Note taking app"
              className="img-fluid rounded shadow-sm project-image"
            />
          </a>
        </div>
        <div className="col-md-3 col-sm-6 mb-5">
          <a
            href="https://tech-blog-8ynl.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={Week8}
              alt="Week 8 Project - Tech-blog"
              title="Week 8 Project - Tech-blog"
              className="img-fluid rounded shadow-sm project-image"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
