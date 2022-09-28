import React from 'react'
import Card from '../UI/Card'
// import classes from './AddUser.module.css';
// import classes from "../Users/AddUser.module.css";
import classes from './UsersList.module.css';


function UsersList(props) {
    console.log('props', props);
    return (
        <Card className={classes.users}>
        <ul>
            
          {props.users.map((user) => (
            <li key={user.id}>
              {user.name} {user.age} years old
            </li>
          ))}
        </ul>
      </Card>
    );
}

export default UsersList
