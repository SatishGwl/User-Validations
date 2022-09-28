import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "../Users/AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal"

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [errorMessage, setErrorMessage] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setErrorMessage({
        title: 'Invalid Input',
        message: 'Please enter a valid name and age (non-empty values).'
      })
      return;
    }
    if (+enteredAge < 1) {
      setErrorMessage({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).'
      })
      return;
    }
    console.log(enteredUsername, enteredAge);
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = () =>{
    setErrorMessage(null)
  }

  return( 
  <>
  {errorMessage && <ErrorModal title={errorMessage.title} message={errorMessage.message} onConfirm={errorHandler}/>}
  
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={enteredUsername}
          onChange={usernameChangeHandler}
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          type="number"
          value={enteredAge}
          onChange={ageChangeHandler}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
    </>
  );
};
export default AddUser;
