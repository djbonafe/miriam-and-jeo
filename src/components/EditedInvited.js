import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';

export default function EditInvited() {
    const {handleOpenEditForm} = useContext(AppContext);
      const handleSaveEdit = () => {
    console.log('edit saved'); 
    handleOpenEditForm(); // Close the edit form
    // Here you would typically send the edited data to the server
  }
  return (
     <div>
        <form>
            <input type="text" id="firstName" placeholder="First Name" />
            <input type="text" id="lastName" placeholder="Last Name" />
            <input type="radio" id="coming" name="coming" value="true" /> Yes
            <input type="radio" id="coming" name="coming" value="false" /> No
        <button onClick={handleSaveEdit}>save</button>
        </form>
      
      </div>
  )
}
