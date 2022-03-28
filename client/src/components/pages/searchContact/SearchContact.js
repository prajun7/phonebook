import React, {useState, useContext} from 'react';
import { UserContext } from '../../../contexts/UserContext';
import { Link } from "react-router-dom";

const API_BASE = "http://localhost:5000";

function SearchContact() {
    const { user } = useContext(UserContext);

    const [contactName, setContactName] = useState("");
    const [searchData, setSearchData] = useState([]);
    const [error, setError] = useState('');

    const findContact = async() => {
        const data = await fetch(
            `${API_BASE}/search?name=${contactName}`,{
              method : "POST",
              headers : {
                "Content-Type" : "application/json"
              },
              body : JSON.stringify({
                    "user_id" : `${user._id}`,
              })
            }
          );
          const items = await data.json();
           //console.log(items);

          if (Array.isArray(items.message)){
            setSearchData(items.message);
            setError("");
          }else{
            setError(items.message);
            setSearchData([]);
          }
    }

  return (
    <>

        <h1> 
       <Link to='/' >
            PHONEBOOK
        </Link> 
      </h1>

        <h1>Search Contact</h1>

        <label>Name </label>
              <input 
                    type ="text" 
                    onChange = {e => setContactName(e.target.value)}
                    value = {contactName}/>
        
        <button onClick = {findContact}> Search </button>

        <div>------------------------------------------------------------------------------------------------------------- </div>

        <div>{error}</div>

        <div >
          {searchData.map(searchDataItem => (
            <div key = {searchDataItem._id} >
              <div >
                Name : {searchDataItem.name}
              </div>
              <div >
              Profession: {searchDataItem.profession}
              <div>----------------------------------------- </div>
              </div>
            </div>
          ))}
      </div>

    </>
  )
}

export default SearchContact