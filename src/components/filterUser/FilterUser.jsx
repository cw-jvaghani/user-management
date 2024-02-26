import UserTable from "../userTable/UserTable";
import classes from "./FilterUser.module.css";
import { useState, memo } from "react";

const FilterUser = memo(function FilterUser({
  selectedUsers,
  setUserList,
  setFormData,
}) {
  const [selectedOption, setSelectedOption] = useState();
  const [selectedValue, setSelectedValue] = useState();
  const [isFiltered, setIsFiltered] = useState(false);
  //const [filteredUsers, setFilteredUsers] = useState(selectedUsers);

  let uniqueValues = [];
  if (selectedValue && isFiltered) {
    uniqueValues.push(selectedValue);
  } else if (selectedOption) {
    selectedUsers.forEach((user) => {
      uniqueValues.push(user[selectedOption]);
    });
    const set = new Set(uniqueValues);
    uniqueValues = Array.from(set);
  }

  let filteredUsers;
  if (isFiltered) {
    filteredUsers = selectedUsers.filter(
      (user) => user[selectedOption] === selectedValue
    );
  }
  else{
    filteredUsers = selectedUsers;
  }


  const handleFilter = () => {
    if (!selectedOption || !selectedValue) {
      alert("field or value is not selected!");
      return;
    }

    setIsFiltered(true);
  };

  const handleRemoveFilter = () => {
    setIsFiltered(false);
    setSelectedOption("");
    setSelectedValue("");
  };

  const handleSelectOption = (e) => {
    setIsFiltered(false);
    setSelectedOption(e.target.value);
    setSelectedValue("");
  };

  const handleSelectValue = (e) => {
    let selectedValue = e.target.value;
    if (!isNaN(selectedValue)) {
      selectedValue = +selectedValue;
    }
    setSelectedValue(selectedValue);
    setIsFiltered(false);
  };
  return (
    <>
      <section className={classes["filter-section"]}>
        <h2>Filter User Info</h2>
        <div className={classes["wrapper"]}>
          <select
            id="fieldSelect"
            className={`${classes.filter} ${classes.dropdown}`}
            value={selectedOption}
            onChange={handleSelectOption}
          >
            <option value="">Select field</option>
            <option value="username">Username</option>
            <option value="name">Name</option>
            <option value="city">City</option>
            <option value="age">Age</option>
          </select>

          <select
            id="uniqValSelect"
            className={`${classes.filter} ${classes.dropdown}`}
            value={selectedValue}
            onChange={handleSelectValue}
          >
            <option value="">Select unique value</option>
            {uniqueValues.length > 0 &&
              uniqueValues.map((val) => (
                <option value={val} key={val}>
                  {val}
                </option>
              ))}
          </select>

          <button
            type="button"
            id="filterBtn"
            className={`${classes.filter} blue-btn`}
            onClick={handleFilter}
          >
            Filter
          </button>

          <button
            type="button"
            id="allBtn"
            className={`${classes.filter} blue-btn`}
            onClick={handleRemoveFilter}
          >
            All
          </button>
        </div>
      </section>
      <UserTable
        filteredUsers={filteredUsers}
        setUserList={setUserList}
        setFormData={setFormData}
      />
    </>
  );
});

export default FilterUser;
