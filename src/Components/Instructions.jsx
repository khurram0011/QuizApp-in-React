import React from "react";
import { Link } from "react-router-dom";
import "./Instructions.css"

function Instructions() {
  return (
    <>
      <section className=" container-fluid instructions-section py-5 bg-light">
        <div className="container">
          <h1 className="mb-4">Instructions for the Quiz</h1>
          <hr className="mb-4" />
          <div className="instructions-content text-start">
            <p className="fs-5">These are the instructions for taking the quiz:</p>
            <ul className="ms-3">
              <li className="mb-2">Read each question carefully.</li>
              <li className="mb-2">Choose the best answer from the options.</li>
              <li className="mb-2">Submit your answers before time runs out.</li>
            </ul>
          </div>
          <hr className="mb-4" />
          <div className="d-flex gap-3 justify-content-center">
            <Link className="btn btn-primary px-4 py-2" to="/Play">
              Let's Take the Quiz
            </Link>
            <Link className="btn btn-secondary px-4 py-2" to="/">
              Back to Home
            </Link>
          </div>
        </div>
      </section>

    </>
  );
}

export default Instructions;
