import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import { createNewUser, facebookLoginWithPopUp, googlePopUpSignIn, initializeApp, signInUser } from './LoginManageMent';
import './Login.css';
import { FaFacebook, FaGoogle } from 'react-icons/fa';

const Login = () => {
    initializeApp();
    const [newUser, setNewUser] = useState(true);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [user, setUser] = useState({
        name : '',
        isSignIn : false,
        success : false,
        error : '',
        email : '',
        password : ''
    })

    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSignIn = () => {
        googlePopUpSignIn()
        .then(result => {
            handleReplace(result, true);
        })
    }

    const handleFacebookLogin = () => {
        facebookLoginWithPopUp()
        .then(result => {
            handleReplace(result, true);
        })
    }

    const handleReplace = (res, isRedirect) => {
        const newUser = {...loggedInUser};
        const {email, success, error, isSignIn} = res;
        // newUser.name = name;
        newUser.email = email;
        newUser.success = success;
        newUser.error = error;
        newUser.isSignIn = isSignIn;
        setUser(newUser);
        setLoggedInUser(newUser);

        if(isRedirect){
            history.replace(from);
        }
    }

    const handleBlur = (event) => {
        let validForm = true;
        if(event.target.name === 'email'){
            validForm = /\S+@\S+\.\S+/.test(event.target.value);
        }
        else if(event.target.name === 'password'){
            const passwordLength = event.target.value.length > 5;
            const passwordHasNumber = /\D{1}/.test(event.target.value);
            validForm = passwordHasNumber && passwordLength;
        }
        if(validForm){
            const userInfo = {...user};
            userInfo[event.target.name] = event.target.value;
            setUser(userInfo);
        }
    }
    // console.log(user);
    // console.log(loggedInUser);

    const handleSubmit = (event) => {
        if(newUser && user.email && user.password){
            createNewUser(user.name, user.email, user.password)
            .then(result => {
                // console.log(result);
                handleReplace(result, true);
            })
        }
        else if(!newUser && user.email && user.password){
            signInUser(user.email, user.password)
            .then(result => {
                handleReplace(result, true);
            })
        }
        event.preventDefault();
    }

    return (
        <div align='center'>
            <div className='account-area'>
                <h3>
                    {
                        newUser ? 'Create An Account' : 'Login'
                    }
                </h3>
                {
                    newUser && <input type="text" name="name" id="" placeholder="Enter Your Full Name" required className="form-control" onBlur={handleBlur}/>
                }
                <br/>

                <input type="email" name="email" id="" placeholder="Enter Your Email" required className="form-control" onBlur={handleBlur}/> <br/>

                <input type="password" name="password" id="" placeholder="Enter Your Password" required className="form-control" onBlur={handleBlur}/> <br/>

                <Button className='mb-2' onClick={handleSubmit}>
                    {
                        newUser ? 'Create An Account' : 'Login'
                    }
                </Button>

                <p>
                    {
                        newUser ? 'Already Have An Account? ' : "Don't Have An Account "
                    } 
                    <span className="change-style" onClick={() => setNewUser(!newUser)}>
                        {
                            newUser ? 'Login' : 'Create An Account'
                        }
                    </span>
                </p>
            </div>
            <br/>  
            <Button variant="success" onClick={handleGoogleSignIn}>
                <FaGoogle></FaGoogle> &nbsp;
                Continue With Google
            </Button>
            <br/> <br/>
            <Button variant='success' onClick={handleFacebookLogin}>
                <FaFacebook></FaFacebook> &nbsp;
                Continue With Facebook
            </Button>
        </div>
    );
};

export default Login;