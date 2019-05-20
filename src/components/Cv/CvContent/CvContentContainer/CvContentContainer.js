import React, { Component } from 'react';
import classes from './CvContentContainer.css';
import externalCssClasses from '../cvMainArea.css';
import CvDataCollector, {} from '../../CvDataCollector/CvDataCollector';
import CvHeadlineBlock from '../CvBlocks/CvHeadlineBlock/CvHeadlineBlock';
import CvReposQtyBlock from '../CvBlocks/CvReposQtyBlock/CvReposQtyBlock';

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
          <CvHeadlineBlock
            name={this.state.data.user.name}
            avatarUrl={this.state.data.user.avatar_url}
            webPageUrl={this.state.data.user.blog}/>
          
          <div className={externalCssClasses.mainArea}>
            <CvReposQtyBlock 
              reposQty={this.state.data.user.public_repos}
              followersQty={this.state.data.user.followers}/>
          </div>
        </div>
      )
    }
  }
}

export default CvContainer;