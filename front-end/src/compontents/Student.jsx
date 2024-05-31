import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StudentForm from './StudentForm';
import StudentTable from './StudentTable';

function Student() {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async () => {
    try {
      const result = await axios.get("http://127.0.0.1:8000/student");
      setStudents(result.data);
    } catch (err) {
      console.error('Error fetching data:', err);
    }
  };

  const editStudent = (student) => {
    setSelectedStudent(student);
  };

  const deleteStudent = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/student/${id}`);
      // alert('Student deleted Successfully');
      loadStudents();
    } catch (err) {
      alert('Failed to delete student');
      console.error(err);
    }
  };

  const clearSelectedStudent = () => {
    setSelectedStudent(null);
  };

  return (
    <div>
      <h1>Student Details</h1>
      <StudentForm loadStudents={loadStudents} selectedStudent={selectedStudent} clearSelectedStudent={clearSelectedStudent} />
      <StudentTable students={students} editStudent={editStudent} deleteStudent={deleteStudent} />
    </div>
  );
}

export default Student;
