import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import Spinner from './Spinner';

export default function InvitedList() {
  const queryClient = useQueryClient();
  const { handleOpenRSVPForm } = useContext(AppContext);
  const [editForm, setEditForm] = useState({});
  const [editingRowId, setEditingRowId] = useState(null);
  const {
  data: allInvitedFetched,
  isLoading,
  error,
  refetch
} = useQuery({
  queryKey: ['invited'],
  queryFn: () =>
  axios
    .get('https://render-practice-7r0v.onrender.com/api/invited')
    .then((res) => {
      const invited = res.data.allInvited;
      return Array.isArray(invited) ? invited : [invited];
    }),
  staleTime: 1000 * 60 * 5,
  retry: 3, // Retry up to 3 times
  retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 3000), // exponential backoff
});



  


  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://render-practice-7r0v.onrender.com/api/invited/${id}`);
      queryClient.invalidateQueries(['invited']);
    } catch (err) {
      console.error('Failed to delete:', err);
    }
  };

  const handleEditClick = (invited) => {
    //this handleEditClick is fired when edit is clicked and the user is passed in 
    //the id is being taken and set as the editId
    setEditingRowId(invited._id);

    setEditForm({
      firstName: invited.firstName,
      lastName: invited.lastName,
      coming: invited.coming,
      specialRequest: invited.specialRequest,
    });
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEditForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

const handleEnterPress = (event) => {
  if (event.key === 'Enter') {
    alert("enter pressed")
    handleSave();
  }
};



  const handleCancel = () => {
    setEditingRowId(null);
    setEditForm({});
  };

  const handleSave = async () => {
    console.log(allInvitedFetched)
  console.log("save clicked: just click level");
  try {
    console.log("save clicked: inside of query got in ");
    console.log("line test"); 
    await axios.patch(
  `https://render-practice-7r0v.onrender.com/api/invited/${editingRowId}/`,
  editForm,
  { timeout: 5000 } // 5 seconds max
);

    console.log("line test"); 

    try {
      // await queryClient.fetchQuery(['invited']);
      await queryClient.invalidateQueries(['invited']);

      console.log("fetchQuery success");
    } catch (fetchErr) {
      console.error("fetchQuery failed: ", fetchErr);
    }

    setEditingRowId(null);
    console.log("editingRowId after clear: ", editingRowId);
    setEditForm({});
  } catch (err) {
    console.error('Update failed:', err);
  }
};




  if (isLoading) return <Spinner/>
  if (error) return <p>Error fetching invited 😔</p>;

  return (
    <div className="invited-table" style={{ overflowX: 'auto' }}>
      <h1>Invited List</h1>
      <table  style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th style={thStyle}>First Name</th>
            <th style={thStyle}>Last Name</th>
            <th style={thStyle}>Coming</th>
            <th style={thStyle}>Special Request</th>
            <th style={thStyle}>Modify</th>
          </tr>
        </thead>
        <tbody>
          {allInvitedFetched.map((inv) => {
            //editId is the state taken from the handleEditClick function 
            //isEditing is derived from when the editId from the edit clicked is equal to the 
            // isEditing = editId === inv._id;
            const isEditingRow = editingRowId === inv._id;
            console.log(isEditingRow, 'isEditingRow');
              
            return (
              <tr
                key={inv._id}
                style={isEditingRow? { outline: '2px solid #f39c12', backgroundColor: '#fffbe6' } : {}}
              >
                <td style={tdStyle}>
                  {isEditingRow ? (
                    <input
                      type="text"
                      name="firstName"
                      value={editForm.firstName || ''}
                      onChange={handleInputChange}
                      onKeyDown={handleEnterPress }
                    />
                  ) : (
                    inv.firstName
                  )}
                </td>
                <td style={tdStyle}>
                  {isEditingRow ? (
                    <input
                      type="text"
                      name="lastName"
                      value={editForm.lastName || ''}
                      onChange={handleInputChange}
                    />
                  ) : (
                    inv.lastName
                  )}
                </td>
                <td style={tdStyle}>
                  {isEditingRow ? (
                    <input
                      type="checkbox"
                      name="coming"
                      checked={editForm.coming}
                      onChange={handleInputChange}
                    />
                  ) : (
                    inv.coming ? 'Yes' : 'No'
                  )}
                </td>
                <td style={tdStyle}>
                  {isEditingRow ? (
                    <input
                      
                      type="text"
                      name="specialRequest"
                      value={editForm.specialRequest || ''}
                      onChange={handleInputChange}
                    />
                  ) : (
                    inv.specialRequest || 'None'
                  )}
                </td>
                <td style={tdStyle}>
                  {isEditingRow ? (
                    <>
                      <button onClick={handleSave} className="save-btn">Save</button>
                      <button onClick={handleCancel} className="cancel-btn">Cancel</button>
                    </>
                  ) : (
                    <>
                      <button onClick={() => handleDelete(inv._id)} className="delete-btn">Delete</button>
                      {/* inv is taken from the fetched and mapped inv, now its an individual invitee */}
                      <button onClick={() => handleEditClick(inv)} className="edit-btn">Edit</button>
                    </>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div>
        <button onClick={handleOpenRSVPForm}>Add invited</button>
        <p>Total Coming: {allInvitedFetched.filter((inv) => inv.coming).length}</p>
      </div>
    </div>
  );
}

// Styles
const thStyle = {
  border: '1px solid #ccc',
  padding: '8px',
  backgroundColor: '#f0f0f0',
  
};

const tdStyle = {
  border: '1px solid #ddd',
  padding: '8px',
  verticalAlign: 'top',
};
