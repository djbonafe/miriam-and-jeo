import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AppContext, AppProvider } from '../context/AppContext';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import InvitedList from './InvitedList';
import EditInvitee from './EditedInvited';
import InvitedForm from './InvitedForm';


const InvitedTable = () => {
  // const [allInvited, setAllInvited] = useState([]);
  const {openEditForm} = useContext(AppContext); 

  return (
    openEditForm ? <InvitedForm />
     : <InvitedList/> 
  ); 

}

// 🎨 Inline styles
const thStyle = {
  border: '1px solid #ccc',
  padding: '8px',
  backgroundColor: '#f0f0f0',
  textAlign: 'left',
};

const tdStyle = {
  border: '1px solid #ddd',
  padding: '8px',
  verticalAlign: 'top',
};

const scrollBoxStyle = {
  maxHeight: '80px',
  overflowY: 'auto',
  padding: '4px',
  backgroundColor: '#fafafa',
  border: '1px solid #ddd',
  borderRadius: '4px',
};

export default InvitedTable;
