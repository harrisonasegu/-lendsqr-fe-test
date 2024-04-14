import React from "react"
import "./User.scss"
import UserList from "./UserList"
import UserStatistics from "./UserStatistics"

const UserView: React.FC = () => {
    document.title = "Users | Lendsqr"
  return (
    <div className="users">
        <h1 className="users__heading">Users</h1> 
        <UserStatistics />
        <UserList />
    </div>
  )
}

const User = React.memo(UserView)
export default User