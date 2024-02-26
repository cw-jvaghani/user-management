import SortHandler from "./SortHandler";
import classes from "./UserTable.module.css";
import {useState , useEffect,memo} from "react";

 function UserTable({ filteredUsers, setUserList, setFormData }) {

  const [mappedUsers, setMappedUsers] = useState();

  useEffect(()=>{
    setMappedUsers(filteredUsers)
  },[filteredUsers]);

  const handleDelete = (userDelete) => {
    setUserList((users) => {
      const updatedUsers = [...users];
      const index = updatedUsers.findIndex(
        (user) => user.username === userDelete.username
      );
      updatedUsers.splice(index, 1);
      return updatedUsers;
    });

    setFormData(null);
  };

  return (
    <section className={classes["table-section"]}>
      <h2>User Details</h2>
      <table>
        <thead>
          <tr>
            <th>
              Username
              <SortHandler id="username" sortData = {setMappedUsers}/>
            </th>
            <th>
              Name
              <SortHandler id="name" sortData = {setMappedUsers}/>
            </th>
            <th>
              City
              <SortHandler id="city" sortData = {setMappedUsers}/>
            </th>
            <th>
              Age
              <SortHandler id="age" sortData = {setMappedUsers} numericField/>
            </th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {mappedUsers && mappedUsers.map((user) => (
            <tr key={user.username}>
              <td>{user.username}</td>
              <td>{user.name}</td>
              <td>{user.city}</td>
              <td>{user.age}</td>
              <td>
                <button
                  id="editbtn"
                  className="blue-btn"
                  onClick={() => setFormData(user)}
                >
                  Edit
                </button>
              </td>
              <td>
                <button
                  id="deleteBtn"
                  className="red-btn"
                  onClick={() => handleDelete(user)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default memo(UserTable);