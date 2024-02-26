import classes from "./UserSelect.module.css";
import ListItem from "./UserListItem";
export default function UserList({ userStatus, setUserStatus, selectedList }) {
  return (
    <div className={classes["list-box"]}>
      <ul>
        {userStatus.map((user) =>
          selectedList ? (
            user.isSelected ? (
              <ListItem
                key={user.username}
                user={user}
                setUserStatus={setUserStatus}
              />
            ) : null
          ) : user.isSelected ? null : (
            <ListItem
              key={user.username}
              user={user}
              setUserStatus={setUserStatus}
            />
          )
        )}
      </ul>
    </div>
  );
}
