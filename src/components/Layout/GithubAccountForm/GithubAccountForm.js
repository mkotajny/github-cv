import React, { Component } from 'react';
import classes from './GithubAccountForm.css';
import {Redirect} from 'react-router-dom';

class GithubAccountForm extends Component {
  constructor() {
    super();
    this.state = {
      githubAccountName: "",
      submitted: false
    }
  }

  updateInput(key, value) {
    this.setState({ [key]: value });
  }

  submitForm(githubAccountName) {
    if (githubAccountName !== "") {
      this.updateInput("submitted", true)
    }
  }

  redirect()
  {
    let redirect  = null;
    let redirectLink = "/cv" + this.state.githubAccountName;
    if (this.state.submitted) {
      redirect = <Redirect to={redirectLink}/>;
    }
    return redirect;
  }

  render() {
    return (
      <React.Fragment>
        {this.redirect()}
        <input type="text" 
          className={classes.FormInput} 
          placeholder="Github account name" 
          value={this.state.githubAccountName}
          onChange={e => this.updateInput("githubAccountName", e.target.value)}
          id="name" required />
        <button className={classes.FormButton} 
          onClick={() => this.submitForm(this.state.githubAccountName)}>Generate CV..</button>
      </React.Fragment>
    );
  }
}

export default GithubAccountForm;