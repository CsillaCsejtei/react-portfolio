import React from 'react';

export default function Contact() {
  return (
    <section className="container my-5">
      <h2 className="text-center mb-5">Let's Get in Touch!</h2>

      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card p-4 shadow-sm">
            <p className="mb-5 mt-4 text-center">
              Feel free to reach out to me via any of the platforms below:
            </p>

            <div className="mb-5 text-center">
              <strong>📧 Email:</strong>
              <br />
              <a
                href="mailto:csillacsejtei@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                csillacsejtei@gmail.com
              </a>
            </div>

            <div className="mb-5 text-center">
              <strong>💼 LinkedIn:</strong>
              <br />

              <a
                href="https://www.linkedin.com/in/csilla-csejtei"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                @csilla-csejtei
              </a>
            </div>

            <div className="mb-5 text-center">
              <strong>📷 Instagram:</strong>
              <br />
              <a
                href="https://www.instagram.com/csilla.csejtei"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                @csilla.csejtei
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
