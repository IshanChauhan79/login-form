import React, { useState, useEffect } from "react";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Users from "../Users/Users";
import classes from "./Auth.module.css";

const dummydata = [
  {
    name: "Ishan",
    email: "ishanhcl@gmail.com",
    password: "12345678",
    number: "9999999999",
  },
  {
    name: "Aniket",
    email: "aniketgalaxy@gmail.com",
    password: "12345678",
    number: "9999999999",
  }
];

function Auth() {
  const [option, setOption] = useState("login");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("users"));
    if (data === null || data.length === 0) {
      setUsers(dummydata);
    } else {
      setUsers(data);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const checkLoginValidity = (email, password) => {
    for (let user of users) {
      if (user.email === email) {
        if (user.password === password) {
          setOption("users");
          return true;
        }
      }
    }
    return false;
  };

  const createAccount = (data) => {
    for (let user of users) {
      if (user.email === data.email) {
        return false;
      }
    }
    setUsers((prev) => [...prev, data]);
    setOption("login");

    return true;
  };

  const optionChanged = (value) => {
    setOption(value);
  };
  var component = (
    <Login loginHandler={optionChanged} checkValidity={checkLoginValidity} />
  );
  if (option === "register") {
    component = (
      <Register
        registerHandler={optionChanged}
        registerSubmit={createAccount}
      />
    );
  } else if (option === "users") {
    component = <Users users={users} logoutHandler={optionChanged} />;
  }
  return <div className={classes.Auth}>{component}</div>;
}

export default Auth;
// useEffect(() => {
//   const data = JSON.parse(localStorage.getItem("todoData"));
//   if (data === null || data.length === 0) {
//     setList([
//       {
//         text: "Demo Task- Only appear when no task- Remove this and Add new Task",
//         id: "1",
//       },
//     ]);
//   } else {
//     setList(data);
//   }
// }, []);
// useEffect(() => {
//   localStorage.setItem("todoData", JSON.stringify(list));
// }, [list]);
