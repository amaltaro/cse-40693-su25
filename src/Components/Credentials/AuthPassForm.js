import React from "react";
import "./AuthForm.css";

const AuthForm = ({ user, onChange, onSubmit, error }) => {

    return (
        <div className="auth-form-container">
            <div className="auth-form-card">
                <div className="auth-form-header">
                    <h2 className="auth-form-title">
                        Reset Your Password
                    </h2>
                    <p className="auth-form-subtitle">
                        Please fill in your details to change your password
                    </p>
                </div>

                <form onSubmit={onSubmit} autoComplete="off" className="auth-form">
                    {error && (
                        <div className="alert alert-danger" role="alert">
                            <i className="bi bi-exclamation-triangle me-2"></i>
                            {error}
                        </div>
                    )}
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

                    <button type="submit" className="auth-form-btn">
                        <i className="bi bi-check-circle me-2"></i>
                        Update Password
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AuthForm;