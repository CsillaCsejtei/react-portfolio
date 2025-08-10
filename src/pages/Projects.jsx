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
      <h2 className="text-center mb-4 mt-4">My Projects</h2>
      <div className="row">
        <div className="col-md-3 col-sm-6 mb-4">
          <img
            src={Week1}
            alt="Week 1 Project"
            className="img-fluid rounded shadow-sm"
          />
        </div>
        <div className="col-md-3 col-sm-6 mb-4">
          <img
            src={Week2}
            alt="Week 2 Project"
            className="img-fluid rounded shadow-sm"
          />
        </div>
        <div className="col-md-3 col-sm-6 mb-4">
          <img
            src={Week3}
            alt="Week 3 Project"
            className="img-fluid rounded shadow-sm"
          />
        </div>
        <div className="col-md-3 col-sm-6 mb-4">
          <img
            src={Week4}
            alt="Week 4 Project"
            className="img-fluid rounded shadow-sm"
          />
        </div>
        <div className="col-md-3 col-sm-6 mb-4">
          <img
            src={Week5}
            alt="Week 5 Project"
            className="img-fluid rounded shadow-sm"
          />
        </div>
        <div className="col-md-3 col-sm-6 mb-4">
          <img
            src={Week6}
            alt="Week 6 Project"
            className="img-fluid rounded shadow-sm"
          />
        </div>
        <div className="col-md-3 col-sm-6 mb-4">
          <img
            src={Week7}
            alt="Week 7 Project"
            className="img-fluid rounded shadow-sm"
          />
        </div>
        <div className="col-md-3 col-sm-6 mb-4">
          <img
            src={Week8}
            alt="Week 8 Project"
            className="img-fluid rounded shadow-sm"
          />
        </div>
      </div>
    </div>
  );
}
