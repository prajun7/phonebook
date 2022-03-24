import React, {useState, useContext} from 'react';
import { UserContext } from '../../../contexts/UserContext';

const API_BASE = "http://localhost:5000";

function UserEntry() {

    const {user } = useContext(UserContext);

    const[userName, setUserName] = useState("");
    const[userProfession, setUserProfession] = useState("");
    const[userLocation, setUserLocation] = useState("");
    const[userBusiness, setUserBusiness] = useState("");
    const[userFinance, setUserFinance] = useState("");
    const[userInstitution, setUserInstitution] = useState("");
    const[userSkillset, setUserSkillset] = useState("");
    const[userMobile, setUserMobile] = useState("");
    const[userDateOfBirth, setUserDateOfBirth] = useState("");
    const[userLinkedIn, setUserLinkedIn] = useState("");
    const[userBloodGroup, setUserBloodGroup] = useState("");
    const[userFacebook, setUserFacebook] = useState("");
    const[userCanHelpMeAt, setUserCanHelpMeAt] = useState("");
    const[userPolitics, setUserPolitics] = useState("");

   
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
                  "profession" : userProfession,
                  "location" : userLocation,
                  "business" : userBusiness,
                  "finance" : userFinance,
                  "institution": userInstitution,
                  "skillset": userSkillset,
                  "mobile": userMobile,
                  "dateOfBirth": userDateOfBirth,
                  "linkedIn": userLinkedIn,
                  "bloodGroup": userBloodGroup,
                  "facebook": userFacebook
            })
          }
        );
        setUserName("");
        setUserProfession("");
        setUserLocation("");
        setUserBusiness("");
        setUserFinance("");
        setUserInstitution("");
        setUserSkillset("");
        setUserMobile("");
        setUserDateOfBirth("");
        setUserLinkedIn("");
        setUserBloodGroup("");
        setUserFacebook("");
        setUserCanHelpMeAt("");
        setUserPolitics("");
      }

  return (
      <>
    <div className = 'content'>
            <h3>UserEntry</h3>
    
              <label>Name </label>
              <input 
                    type ="text" 
                    onChange = {e => setUserName(e.target.value)}
                    value = {userName}/>

              <label>Profession</label>  
              <input 
                    type ="text" 
                    onChange = {e => setUserLocation(e.target.value)}
                    value = {userLocation}/>

              <label>User Location</label>
              <input 
                    type ="text" 
                    onChange = {e => setUserProfession(e.target.value)}
                    value = {userProfession}/>

              <label>Business</label>
              <input 
                    type ="text" 
                    onChange = {e => setUserBusiness(e.target.value)}
                    value = {userBusiness}/>

              <label>Finance</label>
              <input 
                    type ="text" 
                    onChange = {e => setUserFinance(e.target.value)}
                    value = {userFinance}/>

              <label>Institution</label>
              <input 
                    type ="text" 
                    onChange = {e => setUserInstitution(e.target.value)}
                    value = {userInstitution}/>

              <label>Skillset</label>
              <input 
                    type ="text" 
                    onChange = {e => setUserSkillset(e.target.value)}
                    value = {userSkillset}/>

              <label>Mobile</label>
              <input 
                    type ="tel" 
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    placeholder="999-999-9999"
                    onChange = {e => setUserMobile(e.target.value)}
                    value = {userMobile}/>

              <label>Date of Birth</label>
              <input 
                    type ="date" 
                    onChange = {e => setUserDateOfBirth(e.target.value)}
                    value = {userDateOfBirth}/>

              <label>LinkedIn</label>
              <input 
                    type ="text" 
                    onChange = {e => setUserLinkedIn(e.target.value)}
                    value = {userLinkedIn}/>

              <label>Blood Group</label>
              <input 
                    type ="text" 
                    onChange = {e => setUserBloodGroup(e.target.value)}
                    value = {userBloodGroup}/>

              <label>Facebook</label>
              <input 
                    type ="text" 
                    onChange = {e => setUserFacebook(e.target.value)}
                    value = {userFacebook}/>

              <label>Can Help Me At</label>
              <input 
                    type ="text" 
                    onChange = {e => setUserCanHelpMeAt(e.target.value)}
                    value = {userCanHelpMeAt}/>


              <label>Politics</label>
              <input 
                    type ="text" 
                    onChange = {e => setUserPolitics(e.target.value)}
                    value = {userPolitics}/>

              
              <button onClick = {addContact}> Save </button>
           </div>





    </>
  )
}

export default UserEntry;