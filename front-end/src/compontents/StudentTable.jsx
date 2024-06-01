import React from 'react';

function StudentTable({ students, editStudent, deleteStudent }) {
  console.log("Students prop:", students);

  return (
    <>
      {/* <table className="table table-dark" align="center"> */}
      <table className="table table-primary table-striped" align="center">
        <thead>
          <tr class="table-primary">
            <th scope="col">Student Id</th>
            <th scope="col">Student Name</th>
            <th scope="col">Address</th>
            <th scope="col">Fees</th>
            <th scope="col">Option</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <th scope="row">{student.id}</th>
              <td>{student.name}</td>
              <td>{student.address}</td>
              <td>{student.fee}</td>
              <td>
                <button type="button" className="btn btn-warning" onClick={() => editStudent(student)}>Edit</button>
                <button type="button" className="btn btn-danger" onClick={() => deleteStudent(student.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </>


  );
}

export default StudentTable;
