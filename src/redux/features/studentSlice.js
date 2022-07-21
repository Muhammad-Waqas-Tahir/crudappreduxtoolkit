import { createSlice } from "@reduxjs/toolkit";

export const studentSlice = createSlice({
  name: "Student",
  initialState: {
    Students: [
      {
        id: 1,
        name: "waqas",
        email: "waqas@gmail.com",
        phone: "0485928549",
        address: "Lahore Punjab",
      },
      {
        id: 2,
        name: "zeeshan",
        email: "zee@gmail.com",
        phone: "254524545",
        address: "Lahore Punjab",
      },
      {
        id: 3,
        name: "shoaib",
        email: "shoaib@gmail.com",
        phone: "0485444549",
        address: "Lahore Punjab",
      },
      {
        id: 4,
        name: "usman",
        email: "usman@gmail.com",
        phone: "0545428549",
        address: "Lahore Punjab",
      },
    ],
  },
  reducers: {
    addStudent: (state, action) => {
      state.Students = [...state.Students, action.payload];
    },
    updateStudent: (state, action) => {
      state.Students = state.Students.map((student) =>
        student.id == action.payload.id ? action.payload : student
      );
    },
    deleteStudent: (state, action) => {
      state.Students = state.Students.filter(
        (student) => student.id !== action.payload
      );
    },
  },
});

export const { addStudent, deleteStudent, updateStudent } =
  studentSlice.actions;
export default studentSlice.reducer;
