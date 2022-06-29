import React, { useState } from "react";
import { addStudent } from "../redux/features/studentSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const AddTodo = () => {
  const [data, setData] = useState({
    id: Math.random().toString(),
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const { name, email, phone, address } = data;
  const onChangeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const disptach = useDispatch();
  const navigate = useNavigate();
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(data);
    disptach(addStudent(data));
    navigate("/");
  };
  return (
    <div>
      <h4 className="my-3"> AddTodo</h4>
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
                  onChange={(e) => onChangeHandler(e)}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control mb-3"
                  placeholder="Enter Email"
                  name="email"
                  value={email}
                  onChange={(e) => onChangeHandler(e)}
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
                  className="form-control mb-3"
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
                  Add Todo
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
