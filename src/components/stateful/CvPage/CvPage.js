import React, { Component } from 'react';
import classes from './CvPage.css';
import axios from 'axios';

class CvPage extends Component {
  constructor() {
    super();
    this.state = {
      data: {
        name: "",
        avatarUrl: "",
        webPage: ""
      },
      isLoading: false,
      error: null
    }
  }

  async getData() {
    this.setState({ isLoading: true });

    try {
      const result = await 
        axios.get('https://api.github.com/users/' + this.props.match.params.login);

      this.setState({
        data: {
          name: result.data.name,
          avatarUrl: result.data.avatar_url,
          webPage: result.data.blog
        },
        isLoading: false
      });
    } catch (error) {
      this.setState ({
        error: true,
        isLoading: false
      });
    }
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    console.log("render: " + this.state.data.name);        
    console.log(this.props);        
    return (
      <React.Fragment>
        <div className={classes.mainDetails}> 
          <div className={classes.headShot}>
            <img src={this.state.data.avatarUrl} alt={this.state.data.name} />
          </div>
          <div className={classes.name}>
            <h1>{this.state.data.name}</h1>
            <h2>Github Profile</h2>
          </div>
          <div className={classes.contactDetails}>
            <a href={this.state.data.webPage}>{this.state.data.webPage}</a>
          </div>
          <div className={classes.clear}></div>
        </div>
      </React.Fragment>
    );
  }
}

export default CvPage;