import React from 'react';
import { AuthContext } from '../App';

/**
 * Author: Joe Woods
 * This handles the login form and authentication verification
 */

export const LoginForm = () => {
    //Bring in dispatch from AuthContext
    const { dispatch } = React.useContext(AuthContext);

    //Setup of initial state and variable for email and password
    const initialState = {
        email: "",
        password: "",
        isSubmitting: false,
        errorMessage: null
    };
    //Grab state from app for authentication
    const [data, setData] = React.useState(initialState);

    //Function to handle setting the data for submission
    const handleInputChange = event => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        });
    };

    //Set data and fetch from API
    const handleFormSubmit = event => {
        event.preventDefault();
        setData({
            ...data,
            isSubmitting: true,
            errorMessage: null
        });
        //Fetching login data
        fetch("https://hookedbe.herokuapp.com/api/login", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: data.email,
                password: data.password
            })
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                throw res;
            })
            //Attempt to dispatch login
            .then(resJson => {
                dispatch({
                    type: "LOGIN",
                    payload: resJson
                })
            })
            //Handle ereror
            .catch(error => {
                setData({
                    ...data,
                    isSubmitting: false,
                    errorMessage: error.message || error.statusText
                });
            });
    };
    return (
        //Form for login
        <form onSubmit={handleFormSubmit}>
            <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                    type="text"
                    className="form-control"
                    value={data.email}
                    onChange={handleInputChange}
                    id="email"
                    name="email"
                    placeholder="name@example.com"
                />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password (6 characters minimum):</label>
                <input
                    name="password"
                    type="password"
                    id="password"
                    value={data.password}
                    onChange={handleInputChange}
                    className='form-control'
                />
            </div>
            <div className="form-group">
                <button disabled={data.isSubmitting} id="signUp" className="form-control btn btn-primary" type="submit">
                    {data.isSubmitting ? (
                        "Loading..."
                    ) : (
                        "Login"
                    )}
                </button>
            </div>
        </form>
    );
};
export default LoginForm;
