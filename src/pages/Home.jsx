
import me from "../assets/me.jpg";

export default function Home() {
  return (
    <div className="container text-center mt-5">
      <img
        src={me}
        alt="Csilla Csejtei"
        className="rounded-circle mb-4"
        style={{
          width: "180px",
          height: "180px",
          objectFit: "cover",
          border: "3px solid #ccc",
        }}
      />
      <h1>Welcome to My Portfolio</h1>
      <p className="lead mt-4" style={{ textAlign: "justify" }}>
        With a decorated background in professional sports—including five
        Hungarian Boxing Championship titles, two European Boxing Championship
        bronze medals, and a European Kickboxing Championship bronze—I bring
        focus, resilience, and a strong work ethic to my career in tech.
        <br />
        After transitioning from quality control in the vitamin manufacturing
        industry, I followed my long-standing passion for technology and
        graduated from SheCodes in May 2025 as a Front-End Developer. My studies
        have covered Python, AI, HTML, CSS, JavaScript, Bootstrap, GitHub,
        Netlify, React, Axios, responsive design, and more.
        <br />
        I’m currently deepening my knowledge of back-end technologies through a
        full-stack bootcamp, where I’m learning HTML, CSS, JavaScript, MySQL,
        Node, Python, React, and deploying projects with Render—working toward
        becoming a full-stack developer who builds thoughtful, user-focused
        digital experiences.
      </p>
      <a
        href="https://github.com/CsillaCsejtei"
        className="btn btn-primary mt-3 mb-4"
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit My GitHub
      </a>
    </div>
  );
}

