import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

//for toast messages
import { useContext } from 'react';
import ToastContext from '../context/ToastContext';
/**
 * Author: Joe Woods
 * This component handles the sign up verification form, it uses Yup to verify that passwords match
 * and also that they are 6 characters long. Also uses useForm to hook the form
 */

export const SignUpForm = ({ closeModal }) => {

    // form validation setup
    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .required('Password is required'),
        password: Yup.string()
            .required('Password is required')
            .min(6, 'Password must be at least 6 characters'),
        confirmPassword: Yup.string()
            .required('Confirm Password is required')
            .oneOf([Yup.ref('password')], 'Passwords must match'),
        userName: Yup.string(),
        addressOne: Yup.string(),
        addressTwo: Yup.string(),
        city: Yup.string(),
        state: Yup.string(),
        zip: Yup.string()
    });
    //Setup resolver
    const formOptions = { resolver: yupResolver(validationSchema) };

    

    // get functions to build form with hook-form
    const { register, handleSubmit, reset, formState } = useForm(formOptions);
    const { errors } = formState;

    //for toast message when closing the form
    const { 
      setIsToastDisplayed, 
      setToastSummary, 
      setToastDetail, 
      setToastSeverity } 
    = useContext(ToastContext);

    const displayToastMessage = (username) => {
      setToastSummary(`Welcome ${username}!`);
      setToastDetail('You have sucessfully registered.  Now please login.');
      setToastSeverity('info');
      setIsToastDisplayed(true);
    }

    //Handle data submit
    function onSubmit(data) {
        fetch("https://damp-fjord-26738.herokuapp.com/api/users/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: data.username,
                password: data.password,
                email: data.email,
                shippingAddressLine1: data.addressOne,
                shippingAddressLine2: data.addressTwo,
                city: data.city,
                state: data.state,
                zip: data.zip
            })
        })
            .then((response) => response.json())
            .then((responseData) => {
                console.log(responseData);
            })

            closeModal();
            displayToastMessage(data.username);
    }
    return (
        <form className="formFormat" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                    type="email"
                    {...register('email')}
                    className="form-control"
                    id="email"
                    placeholder="name@example.com"
                />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password (6 characters minimum):</label>
                {/**Register password to Yup */}
                <input
                    name="password"
                    type="password"
                    {...register('password')}
                    className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                />
                <div className="invalid-feedback">{errors.password?.message}</div>
            </div>
            <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password (passwords must match):</label>
                <input
                    name="confirmPassword"
                    type="password"
                    {...register('confirmPassword')}
                    className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                />
                <div className="invalid-feedback">{errors.confirmPassword?.message}</div>
            </div>
            <div className="form-group">
                <label htmlFor="text">Username:</label>
                <input
                    name="username"
                    type="text"
                    {...register('username')}
                    className='form-control'
                />
            </div>
            <div className="form-group">
                <label htmlFor="text">Shipping address line 1</label>
                <input
                    name="shippingLineOne"
                    type="text"
                    {...register('addressOne')}
                    className='form-control'
                />
            </div>
            <div className="form-group">
                <label htmlFor="text">Shipping address line 2</label>
                <input
                    name="shippingLineTwo"
                    type="text"
                    {...register('addressTwo')}
                    className='form-control'
                />
            </div>
            <div className="flex-container">
                <div className="flex-child1">
                    <div className="form-group">
                        <label htmlFor="text">City</label>
                        <input
                            name="city"
                            type="text"
                            {...register('city')}
                            className='form-control form-control-sm'
                        />
                    </div>
                </div>
                <div className="flex-child2">
                    <div className="form-group">
                        <label htmlFor="state">State</label>
                        <select className="form-control form-control-sm stateBut" id="state" name="state" {...register('state')}><option value="---">---</option><option value="Alabama">Alabama</option><option value="Alaska">Alaska</option><option value="Arizona">Arizona</option>
                            <option value="Arkansas">Arkansas</option><option value="California">California</option><option value="Colorado">Colorado</option><option value="Connecticut">Connecticut</option>
                            <option value="Delaware">Delaware</option><option value="District of Columbia">District of Columbia</option><option value="Florida">Florida</option><option value="Georgia">Georgia</option>
                            <option value="Guam">Guam</option><option value="Hawaii">Hawaii</option><option value="Idaho">Idaho</option><option value="Illinois">Illinois</option><option value="Indiana">Indiana</option>
                            <option value="Iowa">Iowa</option><option value="Kansas">Kansas</option><option value="Kentucky">Kentucky</option><option value="Louisiana">Louisiana</option><option value="Maine">Maine</option>
                            <option value="Maryland">Maryland</option><option value="Massachusetts">Massachusetts</option><option value="Michigan">Michigan</option><option value="Minnesota">Minnesota</option>
                            <option value="Mississippi">Mississippi</option><option value="Missouri">Missouri</option><option value="Montana">Montana</option><option value="Nebraska">Nebraska</option><option value="Nevada">Nevada</option>
                            <option value="New Hampshire">New Hampshire</option><option value="New Jersey">New Jersey</option><option value="New Mexico">New Mexico</option><option value="New York">New York</option>
                            <option value="North Carolina">North Carolina</option><option value="North Dakota">North Dakota</option><option value="Northern Marianas Islands">Northern Marianas Islands</option>
                            <option value="Ohio">Ohio</option><option value="Oklahoma">Oklahoma</option><option value="Oregon">Oregon</option><option value="Pennsylvania">Pennsylvania</option>
                            <option value="Puerto Rico">Puerto Rico</option><option value="Rhode Island">Rhode Island</option><option value="South Carolina">South Carolina</option><option value="South Dakota">South Dakota</option>
                            <option value="Tennessee">Tennessee</option><option value="Texas">Texas</option><option value="Utah">Utah</option><option value="Vermont">Vermont</option><option value="Virginia">Virginia</option>
                            <option value="Virgin Islands">Virgin Islands</option><option value="Washington">Washington</option><option value="West Virginia">West Virginia</option><option value="Wisconsin">Wisconsin</option>
                            <option value="Wyoming">Wyoming</option></select>
                    </div>
                </div>
                <div className="flex-child3">
                    <div className="form-group">
                        <label htmlFor="text">Zip</label>
                        <input
                            name="city"
                            type="text"
                            {...register('zip')}
                            maxLength="5"
                            minLength="5"
                            className='form-control form-control-sm'
                        />
                    </div>
                </div>
            </div>
            <div className="form-group">
                <button id="signUp" className="form-control btn btn-primary signupfrmbtn" type="submit">
                    Sign Up
                </button>
            </div>
        </form>
    );
};
export default SignUpForm;
