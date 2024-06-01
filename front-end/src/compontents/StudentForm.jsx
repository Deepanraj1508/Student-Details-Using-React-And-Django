import React, { useState, useEffect } from 'react';
import axios from 'axios';

function StudentForm({ loadStudents, selectedStudent, clearSelectedStudent }) {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [fee, setFee] = useState('');

  useEffect(() => {
    if (selectedStudent) {
      setId(selectedStudent.id);
      setName(selectedStudent.name);
      setAddress(selectedStudent.address);
      setFee(selectedStudent.fee);
    } else {
      clearForm();
    }
  }, [selectedStudent]);

  const clearForm = () => {
    setId('');
    setName('');
    setAddress('');
    setFee('');
  };

  const save = async (event) => {
    event.preventDefault();
    try {
      if (id) {
        await axios.put(`http://127.0.0.1:8000/student/${id}`, { name, address, fee });
        // alert('Student Updated Successfully');
      } else {
        await axios.post('http://127.0.0.1:8000/student', { name, address, fee });
        // alert('Student Registration Successful');
      }
      clearForm();
      loadStudents();
      clearSelectedStudent();
    } catch (err) {
      // alert('Failed to save student');
      console.error(err);
    }
  };

  return (
    <div className="container mt-4">
      <form>
        <div className="form-group">
          <label>Student Name</label>
          <input type="text" className="form-control" id="name" value={name} onChange={(event) => setName(event.target.value)} />
        </div>

        <div className="form-group">
          <label>Address</label>
          <input type="text" className="form-control" id="address" value={address} onChange={(event) => setAddress(event.target.value)} />
        </div>

        <div className="form-group">
          <label>Fee</label>
          <input type="text" className="form-control" id="fee" value={fee} onChange={(event) => setFee(event.target.value)} />
        </div>
        <div>
          <button className="btn btn-primary mt-4" onClick={save}>{id ? 'Update' : 'Register'}</button>
        </div>
      </form>
      <br />
    </div>
  );
}

export default StudentForm;
