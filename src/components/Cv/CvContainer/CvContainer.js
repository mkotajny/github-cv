import React, { Component } from 'react';
import classes from './CvContainer.css';
import CvDataCollector, {} from '../CvDataCollector/CvDataCollector';
import CvHeadlineSection from '../CvSectionInstances/CvHeadlineSection/CvHeadlineSection';
import CvReposQtySection from '../CvSectionInstances/CvReposQtySection/CvReposQtySection';
import CvLanguagesSection from '../CvSectionInstances/CvLanguagesSection/CvLanguagesSection';


class CvContainer extends Component {

  constructor() {
    super();
    this.state = {
      data: null,
      error: false
    }
  }

  handleCvData = (response) => {
    if (response.error) {
      this.setState({error: true});
    } else {
      this.setState({data: response.data});
    }
  }

  render() {
    if (!this.state.data) {
        return (
          <CvDataCollector OnResponse={this.handleCvData} 
            login={this.props.match.params.login}/>
        )
    } else {
      return (
        <div className={classes.CvContainer}>            
          <CvHeadlineSection name={this.state.data.user.name}
            avatarUrl={this.state.data.user.avatar_url}
            webPageUrl={this.state.data.user.blog}/>
          
          <div className={classes.mainArea}>
            <CvReposQtySection reposQty={this.state.data.user.public_repos}
              followersQty={this.state.data.user.followers}/>              
            <CvLanguagesSection repositories={this.state.data.repositories}/>}
          </div>
        </div>
      )
    }
  }
}

export default CvContainer;