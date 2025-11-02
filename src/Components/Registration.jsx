import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Registration = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [notRobot, setNotRobot] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username && password && agreeTerms && notRobot) {
      navigate("/chat", { state: { username } });
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow-lg" style={{ width: "350px" }}>
        <h3 className="text-center text-success mb-3">Register</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-semibold">Username</label>
            <input
              type="text"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
            />
          </div>

          <div className="form-check mb-2">
            <input
              className="form-check-input"
              type="checkbox"
              checked={agreeTerms}
              onChange={() => setAgreeTerms(!agreeTerms)}
              id="terms"
            />
            <label className="form-check-label small" htmlFor="terms">
              I agree to the Terms & Conditions
            </label>
          </div>

          <div className="form-check mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              checked={notRobot}
              onChange={() => setNotRobot(!notRobot)}
              id="robot"
            />
            <label className="form-check-label small" htmlFor="robot">
              I'm not a robot
            </label>
          </div>

          <button
            type="submit"
            className="btn btn-success w-100"
            disabled={!username || !password || !agreeTerms || !notRobot}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
