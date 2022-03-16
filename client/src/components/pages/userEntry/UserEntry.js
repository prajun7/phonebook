import React, {useState, useContext, useEffect} from 'react'
import { UserContext } from '../../../contexts/UserContext';

const API_BASE = "http://localhost:5000";

function UserEntry() {

    const {loggedIn, user } = useContext(UserContext);

    const[userName, setUserName] = useState("");
    const[userProfession, setUserProfession] = useState("");

    const addContact = async () => {
        await fetch(
          `${API_BASE}/contact`,{
            method : "POST",
            headers : {
              "Content-Type" : "application/json"
            },
            body : JSON.stringify({
            "user_id" : `${user._id}`,
             "name" : userName, 
             "profession" : userProfession
            })
          }
        );
        setUserName("");
        setUserProfession("");
      }

  return (
      <>
    <div className = 'content'>
            <h3>UserEntry</h3>
    
              <label>Name </label>
              <input 
                    type ="text" 
                    className = "add-menu-text" 
                    onChange = {e => setUserName(e.target.value)}
                    value = {userName}/>

              <label>Unit Price</label>  
              <input 
                    type ="text" 
                    className = "add-price-text" 
                    onChange = {e => setUserProfession(e.target.value)}
                    value = {userProfession}/>

              <div className='add-menu-button' onClick = {addContact}> Save </div>
           </div>





    </>
  )
}

export default UserEntry