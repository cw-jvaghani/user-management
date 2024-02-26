import { useState } from "react";


export default function ListItem({user, setUserStatus}){
    const [isActive, setIsActive] = useState(false);

    const handleSelectUser=()=>{
        setIsActive(prevVal => !prevVal);
        setUserStatus(users=>{
          const updatedUsers = [...users];
          const pickedIndex = updatedUsers.findIndex(userData => userData.username === user.username);
          user.isPicked = !isActive;
          updatedUsers.splice(pickedIndex,1,user);
          return updatedUsers;  
        })
    }

  return  <li onClick={handleSelectUser} className={isActive ? "selected" : null}>{user.name}</li> 
}