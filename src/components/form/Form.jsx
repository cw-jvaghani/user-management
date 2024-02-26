import classes from "./Form.module.css";
import Input from "./Input";
import { useState, memo } from "react";
const initialUserData = {
  username: "",
  name: "",
  city: "",
  age: "",
};
 const Form = memo(function Form({ setUserList, formData, setFormData }) { 
  console.log(formData);

  const initialFormData = (formData && formData.isSelected) ? formData : {};

  const [_userData, setUserData] = useState({});

  const userData = {...initialFormData,..._userData};

  const handleChange = (e) => {
    setUserData((user) => ({
      ...user,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const userInputs = Object.fromEntries(fd.entries());
    if (!formData) {
      setUserList((prevList) => [...prevList, userInputs]);
    } else {
      setUserList((users) => {
        const updatedList = [...users];
        const index = updatedList.findIndex(
          (user) => user.username === formData.username
        );
        const updatedUser = {
          ...formData,
          ...userInputs,
        };
        updatedList.splice(index, 1, updatedUser);
        return updatedList;
      });

      setFormData(null);
    }
    setUserData({});
  };

  return (
    <div className={classes["user-info"]}>
      <h2>User Information</h2>
      <form
        id="userForm"
        className={classes["user-form"]}
        onSubmit={handleSubmit}
      >
        <Input
          label="Username"
          inputId="username"
          type="text"
          placeholder="Enter Username here"
          value={ userData.username}
          onChange={handleChange}
          required
        />
        <Input
          label="Name"
          inputId="name"
          type="text"
          placeholder="Enter name here"
          value={ userData.name}
          onChange={handleChange}
          required
        />
        <Input
          label="City"
          inputId="city"
          type="text"
          placeholder="Enter city here"
          value={userData.city }
          onChange={handleChange}
          required
        />
        <Input
          label="Age"
          inputId="age"
          type="number"
          placeholder="Enter age here"
          value={userData.age }
          onChange={handleChange}
          required
        />

        <div className="btn-wrapper">
          <button id="saveBtn" className="blue-btn submitBtn" type="submit">
            {formData ? "Save User" : "Add User"}
          </button>
        </div>
      </form>
    </div>
  );
});

export default Form