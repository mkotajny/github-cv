import React from 'react';
import classes from './GithubAccountForm.css';

const GithubAccountForm = () => {
  return (
    <React.Fragment>
      <input type="text" className={classes.FormInput} 
        placeholder="Github account name" id="name" required />
      <button className={classes.FormButton}>Generate CV</button>
    </React.Fragment>
  );

};

export default GithubAccountForm;