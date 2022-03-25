/*
Login Page,
Shows the login page, where user can login
Here, once they are logged in, we sent them to home page
Once they are logged in, we store the user's information inside the context
This user information that we stored in context, can be then used in any other page as per our need
Only when the setLoggedIn from context is TRUE that means the user is currently logged in,
*/

import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../../../contexts/UserContext";
import "./LogIn.css";
import profile from "./image/a.png";
import emailSign from "./image/email.jpg";
import pass from "./image/pass.png";

// This will be the LogIn Page,
// User will be able to LogIn from this page, if they have an account

const API_BASE = "http://localhost:5000";

function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  // const[successMessage, setSuccessMessage] = useState(null);
  const history = useHistory();

  // Using context to get the setLoggedIn and setUser
  const { setLoggedIn, setUser } = useContext(UserContext);

  /*
    This removes the underline and makes the text blue from the links
    Used below in Forgot Password? and Need an Account?
  */
  const navStyle = {
    color: "blue",
    textDecoration: "none", // Removing the text-decoration(underline) from the links
    // In Javascript while writing CSS we need to change text-decoration to textDecoration
  };

  /*
  Checks wheather the user credential is correct or not
  Checks database - handled by backend
*/
  const handleSubmitLogIn = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${API_BASE}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      // console.log(res);   // this prints out the response object
      const data = await res.json();
      //  console.log(data);   // this prints the data/error from the server
      if (!res.ok) {
        setError(data.error); // in backend we set, {'error' : "Email already exists"}
        // so, we are doing data.error
        // setSuccessMessage(null);   //need to set this to null so, that both error and success message
      } // won't show up together

      if (res.ok) {
        // setSuccessMessage("User Successfull LoggedIn");
        // NO need to set successMessage as we are directly redirecting to the user page once loggedin

        // console.log(data.authToken);  // This will give us the auth tokrn of the user that we created
        // in backend we set, res.header('authToken',token).send({'authToken' : token, 'user_info_backend' : user});
        // so, to set userID we can do, data.user here similar to data.error
        setError(null); //need to set this to null so, that both error and success message
        //  won't show up together
        // console.log(data.user_info_backend); // This will give us the user info that we creatd in backend

        // Using ComtextAPI to store the user info that is just signed up,
        setLoggedIn(true); //Setting true for user is logged in
        setUser(data.user); //Setting the user information
        console.log(data.user._id);

        // Must use return here, to prevent memory leakage
        return history.push("/dashboard");
      }
    } catch (err) {
      //This is to handle network/connection errors
      setError(err.message);
      // setSuccessMessage(null);
    }
  };

  return (
    <>
      <div className="main">
        {" "}
        {/* Start of the main div */}
        <div className="sub-main">
          <div>
            {/* <h1> 
            <Link to='/' >
              PHONEBOOK
            </Link> 
            </h1> */}
            {error && <div className="error-message">{error}</div>}
            {/* { successMessage && <div className = "success-message">{successMessage}</div> } */}
            {/* Only load this if error or successMessage is present */}
            <div className="imgs">
              <div className="container-image">
                <img src={profile} alt="profile" className="profile" />
              </div>
            </div>

            <h1>User Login</h1>

            <div>
              <img src={emailSign} alt="email" className="email" />
              <input
                type="email"
                placeholder="Enter email"
                required
                className="name"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="second-input">
              <img src={pass} alt="pass" className="email" />
              <input
                type="password"
                placeholder="Enter Password"
                required
                className="name"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="login-button">
              <button onClick={handleSubmitLogIn}> Log In </button>
            </div>

            {/* ** Forgot Password? ** */}
            {/* <div className="fotgot-password-text">
              <Link style={navStyle} to="/forgotpassword">
                Forgot Password?
              </Link>
            </div> */}

            {/* ** Need an Account? SignUp  ** */}
            <div className="link">
              Need an Account?
              <Link style={navStyle} to="/signup">
                SignUp
              </Link>
            </div>

            {/* end of div className= login */}
            {/* ** Need an Account? SignUp  ** */}
            {/* <div className='need-account-text'>
             Need an Account?  
             <Link style = {navStyle} to = "/signup">
             SignUp
            </Link>
            </div> */}
          </div>
        </div>
      </div>
    </> //End of the main div
  );
}

export default LogIn;
