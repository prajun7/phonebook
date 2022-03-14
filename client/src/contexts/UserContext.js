/*
Context to store user's information once they are logged in
*/

import React, { createContext, useState } from 'react';

export const UserContext = createContext(null);
//Initial value is null

const UserContextProvider = (props) => {
	// we can use 'useReducer' instead of 'useState'
	// Using reducer generates much cleaner and predictable code
	// Here, I am using useState
	const [loggedIn, setLoggedIn] = useState(false);

    // This will store the userID once the user is logged in
    const[user,setUser] = useState(null);

   const value = {
    setLoggedIn,
    loggedIn,
    user,
    setUser,
   }
	return (
		<UserContext.Provider value={value}>
			{props.children}
		</UserContext.Provider>
	);
};

 export default UserContextProvider;

