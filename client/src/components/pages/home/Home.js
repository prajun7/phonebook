import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../contexts/UserContext';

// This will be the Home Page,
// User will be able to SigUp and LogIn from this page, if they don't have an account

function Home() {

    // Getting user info from the context
    const {loggedIn, setLoggedIn, setUser,} = useContext(UserContext);

  // Calling this function, to logout the user
  // To logout the user we are setting LoggedIn to false and clearing the User data to null
  function LoggOutButton(){
    setLoggedIn(false);
    setUser(null);
}

  return (
  <div>
     <h1> 
       <Link to='/' >
            PHONEBOOK
        </Link> 
      </h1>

      
        {loggedIn?
      //True
        <ul>
           <li>
           <Link
                    to='/'
                    className='nav-links'
                    onClick={LoggOutButton}
                  >
                    LogOut
                    </Link>
              </li>
          </ul>

        :
        
        //False
      <ul>
        <li>
          <Link
              to='/login'>
                    LogIn
          </Link>
        </li>

        <li>
          <Link
              to='/signup'>
                    SignUp
          </Link>
        </li>
      </ul>
      }
  </div>
  );
}

export default Home;
