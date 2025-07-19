import React from "react";
import "./AuthForm.css";

const AuthForm = ({ user, isLogin, onChange, onSubmit, error }) => {

  return (
    <div className="auth-form-container">
      <div className="auth-form-card">
        <div className="auth-form-header">
          <h2 className="auth-form-title">
            {isLogin ? "Welcome Back!" : "Create Account"}
          </h2>
          <p className="auth-form-subtitle">
            {isLogin ? "Please sign in to continue" : "Please fill in your details to register"}
          </p>
        </div>

        <form onSubmit={onSubmit} autoComplete="off" className="auth-form">
          {error && (
            <div className="alert alert-danger" role="alert">
              <i className="bi bi-exclamation-triangle me-2"></i>
              {error}
            </div>
          )}
          {!isLogin ? (
            <div>
              <div className="form-group">
                <label>First Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="first-name-input"
                  value={user.firstName}
                  onChange={onChange}
                  name="firstName"
                  placeholder="Enter your first name"
                  required
                />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="last-name-input"
                  value={user.lastName}
                  onChange={onChange}
                  name="lastName"
                  placeholder="Enter your last name"
                  required
                />
              </div>
            </div>
          ) : null}

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              id="email-input"
              value={user.email}
              onChange={onChange}
              name="email"
              placeholder="Enter your email address"
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              id="password-input"
              value={user.password}
              onChange={onChange}
              name="password"
              placeholder="Enter your password"
              required
            />
          </div>

          <button type="submit" className="auth-form-btn">
            <i className="bi bi-check-circle me-2"></i>
            {isLogin ? "Sign In" : "Create Account"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;