import "./App.css";
import Form from "./components/form/Form";
import FilterUser from "./components/filterUser/FilterUser";
import { useState, useMemo } from "react";
import USERS from "./data/userData";
import UserSelect from "./components/userSelection/UserSelect";

function App() {
  const [userList, setUserList] = useState(USERS);
  const [formData, setFormData] = useState(null);

  const selectedUsers = useMemo(()=>userList.filter((user) => user.isSelected === true),[userList]);

  return (
    <div className="container">
      <section className="user-section">
        <Form setUserList={setUserList} formData={formData} setFormData={setFormData}/>
        <UserSelect userList={userList} setUserList={setUserList} />
      </section>
      <FilterUser
        selectedUsers={selectedUsers}
        setUserList={setUserList}
        setFormData = {setFormData}
      />
    </div>
  );
}

export default App;
