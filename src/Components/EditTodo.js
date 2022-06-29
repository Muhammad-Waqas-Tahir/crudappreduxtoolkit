import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { updateStudent, editStudent } from "../redux/features/studentSlice";
const EditTodo = () => {
  const { id } = useParams();
  const [editStudents, setEditStudent] = useState({
    id: id,
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const navigate = useNavigate();
  const { name, email, phone, address } = editStudents;
  const student = useSelector((state) => state.Student.Students);
  console.log(student);

  const dispatch = useDispatch();
  const onChangeHandler = (e) => {
    setEditStudent({ ...editStudents, [e.target.name]: e.target.value });
  };
  console.log(id);
  const currentStud = student.find((stu) => stu.id == id);
  console.log(currentStud);
  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(updateStudent(editStudents));
    navigate("/");
  };

  useEffect(() => {
    if (currentStud) {
      setEditStudent(currentStud);
    }
  }, [currentStud]);
  return (
    <div>
      <div>
        <h4 className="my-3"> Edit Todo</h4>
        <div className="container-fluid">
          {" "}
          <div className="row">
            <div className="col-md-6 p-5 mx-auto shadow">
              <form onSubmit={onSubmitHandler}>
                <div className="form-group">
                  <input
                    className="form-control mb-3"
                    placeholder="Enter Name"
                    name="name"
                    value={name}
                    onChange={(e) => {
                      onChangeHandler(e);
                    }}
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control mb-3"
                    placeholder="Enter Email"
                    name="email"
                    value={email}
                    onChange={(e) => {
                      onChangeHandler(e);
                    }}
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control mb-3"
                    placeholder="Enter Phone"
                    name="phone"
                    value={phone}
                    onChange={(e) => {
                      onChangeHandler(e);
                    }}
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    placeholder="Enter Address"
                    name="address"
                    value={address}
                    onChange={(e) => {
                      onChangeHandler(e);
                    }}
                  />
                </div>
                <div className="form-group ">
                  <button type="submit" className="btn btn-block btn-dark mt-3">
                    Update Todo
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTodo;
