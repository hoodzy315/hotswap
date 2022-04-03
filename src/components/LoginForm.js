import React from 'react';
import { AuthContext } from '../App';

/**
 * Author: Joe Woods
 * This handles the login form and authentication verification
 */

export const LoginForm = () => {
    //Bring in dispatch from AuthContext
    const { dispatch } = React.useContext(AuthContext);

    //Setup of initial state and variable for username and password
    const initialState = {
        username: "",
        password: "",
        isSubmitting: false,
        errorMessage: null
    };
    //Grab state from app for authentication
    const [data, setData] = React.useState(initialState);
    //Error displays if error in logging in
    const [isError, setIsError] = React.useState(false);

    //Function to handle setting the data for submission
    const handleInputChange = event => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        });
        setIsError(false);
    };


    //Set data and fetch from API
    const handleFormSubmit = async event => {
        event.preventDefault();
        setData({
            ...data,
            isSubmitting: true,
            errorMessage: null
        });
        //Fetching login data
        await fetch("https://damp-fjord-26738.herokuapp.com/api/users/login", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: data.username,
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
                alert('Username or password was incorrect!');
                setIsError(true);
            });
    };
    return (
        //Form for login
        <form onSubmit={handleFormSubmit}>
           {isError && <p className="errorParagraph">There was an error logging in</p>}
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    className="form-control"
                    value={data.username}
                    onChange={handleInputChange}
                    id="username"
                    name="username"
                    required
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
                    required
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
