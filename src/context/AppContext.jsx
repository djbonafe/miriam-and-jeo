// AppContext.js
import { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [editingInvited, setEditingInvited] = useState(null);

  const [allInvited, setAllInvited] = useState([]);
  const [openRSVPForm, setOpenRSVPForm] = useState(false);
  const [openEditForm, setOpenEditForm] = useState(false);
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const [user, setUser] = useState(null);
  // Add more shared state as needed...

  const handleOpenRSVPForm = () => {
    setOpenRSVPForm(!openRSVPForm); 
  }

    const handleOpenEditForm = () => {
    setOpenEditForm(!openEditForm); 
    console.log('opened edit form'); 

    //ifOpenEditForm => change the display in the rsvp to the edit and then save the form inputs into the req
  }

  return (
    <AppContext.Provider value={{
      allInvited, setAllInvited, openRSVPForm, handleOpenRSVPForm, handleOpenEditForm, openEditForm, editingInvited, setEditingInvited
      // isAuthenticated, setIsAuthenticated,
      // user, setUser
    }}>
      {children}
    </AppContext.Provider>
  );
};
