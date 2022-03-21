import React from 'react';

export const LoginForm = ({ onSubmit }) => {
    return (
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="name@example.com"
                />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password (6 characters minimum):</label>
                <input
                    name="password"
                    type="password"
                    className='form-control'
                />
            </div>
            <div className="form-group">
                <button id="signUp" className="form-control btn btn-primary" type="submit">
                    Sign Up
                </button>
            </div>
        </form>
    );
};
export default LoginForm;
