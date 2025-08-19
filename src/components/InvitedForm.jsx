import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { AuthContext } from '../shared/context/AuthProvider';
import { AppContext } from '../context/AppContext';
import { useQueryClient } from '@tanstack/react-query';


export default function InvitedForm() {
  const queryClient = useQueryClient();

  const { isLoggedIn, logout } = useContext(AuthContext);
  const { openRSVPForm, setOpenRSVPForm, handleOpenRSVPForm, editingInvited, setEditingInvited } = useContext(AppContext); // <-- assumes context handles edit state

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    coming: '',
    specialRequest: '',
  });

  const isEditMode = !!editingInvited;

  useEffect(() => {
    console.log(formData.specialRequest)
    console.log("specialRequest")
  }, [formData]);

  // Populate form when editing
  React.useEffect(() => {
    if (editingInvited) {
      setFormData({
        firstName: editingInvited.firstName || '',
        lastName: editingInvited.lastName || '',
        coming: String(editingInvited.coming),
        specialRequest: editingInvited.specialRequest || '',
      });
    }
  }, [editingInvited]);

  const handleChange = (e) => {
    const { id, value, type, name } = e.target;
    if (type === 'radio') {
      setFormData((prev) => ({ ...prev, coming: value }));
    } else {
      setFormData((prev) => ({ ...prev, [id]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstName, lastName, coming } = formData;

    if (!firstName.trim() || !lastName.trim() || coming === '') {
      alert('Please fill in all required fields.');
      return;
    }

    try {
      const payload = {
        ...formData,
        coming: formData.coming === 'true',
      };

      let response;

      if (isEditMode) {
        // PATCH for edit
        response = await axios.patch(
          `https://render-practice-7r0v.onrender.com/api/invited/${editingInvited._id}`,
          payload
        );
        alert('RSVP updated successfully!');
      } else {
        // POST for new
        response = await axios.post(
          'https://render-practice-7r0v.onrender.com/api/invited',
          payload
        );
        alert('RSVP submitted successfully!');
      }

      console.log('Response:', response.data);
       queryClient.invalidateQueries(['invited']);
      setFormData({
        firstName: '',
        lastName: '',
        coming: '',
        specialRequest: '',
      });

      setEditingInvited(null); // clear edit state
      handleOpenRSVPForm() // go back to table
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit. Try again.');
    }
  };

  return (
    <div>
      <h1 className="rsvp-header">{isEditMode ? 'Edit RSVP' : 'Attendance Form'}</h1>
      <form className="form-box" onSubmit={handleSubmit}>
        <div className="input-box sample">
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" value={formData.firstName} onChange={handleChange} required />
        </div>

        <div className="input-box">
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" value={formData.lastName} onChange={handleChange} required />
        </div>

        <div className="rsvp-choice">
          <p>Are you coming?</p>
          <div className="rsvp-choices">
            <div className="radio-box">
              <input type="radio" name="attendance" id="yes" value="true" checked={formData.coming === 'true'} onChange={handleChange} />
              <label htmlFor="yes">Yes</label>
            </div>
            <div className="radio-box">
              <input type="radio" name="attendance" id="no" value="false" checked={formData.coming === 'false'} onChange={handleChange} />
              <label htmlFor="no">No</label>
            </div>
          </div>
        </div>

        <div className="special-requests-box">
          <label htmlFor="specialRequests">Special Requests:</label>
          <textarea
            id="specialRequest"
            className="special-request-input"
            value={formData.specialRequest}
            onChange={handleChange}
          />
        </div>

        <div className='form-buttons-container'>
          {isLoggedIn && openRSVPForm && (
            <button type="button" className='back-button' onClick={handleOpenRSVPForm}>
              <ion-icon name="arrow-back-circle-outline"></ion-icon> Back to Table
            </button>
          )}
          <button type="submit">{isEditMode ? 'Update' : 'Submit'}</button>
        </div>
      </form>
    </div>
  );
}
