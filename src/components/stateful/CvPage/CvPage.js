import React, { Component } from 'react';
import classes from './CvPage.css';

class CvPage extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      avatarUrl: "",
      email: "",
      webPage: ""
    }
  }

  componentDidMount() {
    fetch('https://api.github.com/users/' + this.props.match.params.login)
    .then(results => {
      return results.json();
    }).then(data => {
      this.setState({
        name: data.name,
        avatarUrl: data.avatar_url,
        webPage: data.blog
      });
    })
  }

  render() {
    console.log("render: " + this.state.name);        
    console.log(this.props);        
    return (
      <React.Fragment>
        <div className={classes.mainDetails}> 
          <div className={classes.headShot}>
            <img src={this.state.avatarUrl} alt={this.state.name} />
          </div>
          <div className={classes.name}>
            <h1>{this.state.name}</h1>
            <h2>Github Profile</h2>
          </div>
          <div className={classes.contactDetails}>
            <a href={this.state.webPage}>{this.state.webPage}</a>
          </div>
          <div className={classes.clear}></div>
        </div>
      </React.Fragment>
    );
  }
}

export default CvPage;