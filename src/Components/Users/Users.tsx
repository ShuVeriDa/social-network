
import userPhoto from "../../assets/images/user.png";
import classes from "./users.module.css";
import axios from "axios";
import {UserType} from "../../redux/userReducer";
import React from "react";


export class User extends React.Component<any, any> {
   componentDidMount() {
      axios.get("https://social-network.samuraijs.com/api/1.0/users")
         .then(response => {
            this.props.setUsers(response.data.items)
         })
   }

   render() {
      return (
         <div>
            {
               this.props.usersPage.users.map((u: UserType) => {
                  return (
                     <div key={u.id}>
                     <span>
                        <div><img src={u.photos.small !== null ? u.photos.small : userPhoto}
                                  className={classes.usersPhoto}/></div>
                        <div>
                           {u.followed
                              ? <button onClick={() => this.props.unfollow(u.id)}>UnFollow</button>
                              : <button onClick={() => this.props.follow(u.id)}>Follow</button>
                           }

                        </div>
                     </span>
                        <span>
                        <span>
                           <div>{u.fullName}</div>
                           <div>{u.status}</div>
                        </span>
                        <span>
                           <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>
                     </span>
                     </div>
                  )
               })
            }
         </div>
      );
   }
}