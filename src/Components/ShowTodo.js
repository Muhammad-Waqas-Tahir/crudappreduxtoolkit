import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteStudent } from "../redux/features/studentSlice";

const ShowTodo = () => {
  const students = useSelector((state) => state.Student.Students);
  const dispatch = useDispatch();
  const onDeleteHandler = (id) => {
    dispatch(deleteStudent(id));
  };

  return (
    <div className="container">
      <h4 className="mt-2">CRUD App With React Rdux</h4>
      <div className="row d-flex flex-column">
        <div className="col-md-12   text-end">
          <Link to="/add" className="btn btn-dark my-3 ">
            {" "}
            Add Student
          </Link>
        </div>
        <div className="col-md-10 mx-auto my-5">
          <table className="table ">
            <thead className="table-header bg-dark text-white">
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Address</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => {
                return (
                  <tr key={student.id}>
                    <td>{student.name}</td>
                    <td>{student.email}</td>
                    <td>{student.phone}</td>
                    <td>{student.address}</td>
                    <td>
                      <Link
                        to={`edit/${student.id}`}
                        className="btn btn-sm btn-primary pr-2"
                      >
                        {" "}
                        Edit
                      </Link>
                      <button
                        type="button"
                        className="btn btn-sm btn-danger "
                        onClick={() => {
                          onDeleteHandler(student.id);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ShowTodo;
