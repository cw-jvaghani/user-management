import classes from "./UserSelect.module.css";
import { FaAngleLeft,FaAnglesLeft,FaAngleRight,FaAnglesRight } from "react-icons/fa6";
import UserList from "./UserList";
import {useState, useEffect,memo} from 'react';


const UserSelect= memo(function UserSelect({userList,setUserList}){
  const [userStatus, setUserStatus] = useState(userList);

  useEffect(()=>{
    setUserStatus(userList);
  },[userList]);


  const moveToRightHandler= ()=>{
    
    const updatedUserList = [...userList];   
    const pickedUsers = userStatus.filter(user=> user.isPicked ===true);
    
    pickedUsers.forEach(user=>{
      user.isSelected = true; 
      user.isPicked = false;  
      const updatedUserIndex = updatedUserList.findIndex(userData=> userData.username === user.username);
      updatedUserList.splice(updatedUserIndex,1);
      updatedUserList.push(user);
    })
    setUserStatus(updatedUserList); 
    setUserList(updatedUserList);
  }

  const moveToLeftHandler = () =>{
    const updatedUserList = [...userList];    
    const pickedUsers = userStatus.filter(user=> user.isPicked ===true);
    pickedUsers.forEach(user=>{
      user.isSelected = false; 
      user.isPicked = false; 
      const updatedUserIndex = updatedUserList.findIndex(userData=> userData.username === user.username);
      updatedUserList.splice(updatedUserIndex,1);
      updatedUserList.push(user);
    })
    setUserStatus(updatedUserList);
    setUserList(updatedUserList);
  }

  const moveAllToRightHandler=()=>{
    const updatedUserList = [...userList];    
    const pickedUsers = updatedUserList.filter(user=> !user.hasOwnProperty('isSelected') || user.isSelected ===false);
    pickedUsers.forEach(user=>{
      user.isSelected = true; 
      user.isPicked = false; 
      const updatedUserIndex = updatedUserList.findIndex(userData=> userData.username === user.username);
      updatedUserList.splice(updatedUserIndex,1);
      updatedUserList.push(user);
    })
    setUserStatus(updatedUserList);
    setUserList(updatedUserList);
  
   }

  const moveAllToLeftHandler = ()=>{
    const updatedUserList = [...userList];    
    const pickedUsers = updatedUserList.filter(user=> user.isSelected ===true);
    pickedUsers.forEach(user=>{
      user.isSelected = false; 
      user.isPicked = false; 
      const updatedUserIndex = updatedUserList.findIndex(userData=> userData.username === user.username);
      updatedUserList.splice(updatedUserIndex,1);
      updatedUserList.push(user);
    })
    setUserStatus(updatedUserList);
    setUserList(updatedUserList);
  }


 
    return<div className={classes["select-user"]}>
    <h2>Users</h2>
    <div className={classes["wrapper"]}>
      
      <UserList userStatus={userStatus} setUserStatus={setUserStatus}/>
      <div className={classes["action-btn"]}>
        <button className="btn move-right" onClick={moveToRightHandler}><FaAngleRight className={classes.btn}/></button>
        <button className="btn move-all-right" onClick={moveAllToRightHandler}><FaAnglesRight className={classes.btn} /></button>
        <button className="btn move-left" onClick={moveToLeftHandler}><FaAngleLeft className={classes.btn}/></button>
        <button className="btn move-all-left" onClick={moveAllToLeftHandler}><FaAnglesLeft className={classes.btn}/></button>
      </div>

      <UserList userStatus={userStatus} setUserStatus={setUserStatus} selectedList/>
    </div>
  </div>

});


export default UserSelect;