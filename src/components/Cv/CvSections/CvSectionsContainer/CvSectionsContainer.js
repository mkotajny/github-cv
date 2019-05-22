import React from 'react';
import classes from './CvSectionsContainer.css';
import CvSectionContent from '../CvSectionTemplates/CvSectionContent/CvSectionContent';
import CvHeadlineSection from '../CvSectionInstances/CvHeadlineSection/CvHeadlineSection';
import CvLanguagesSection from '../CvSectionInstances/CvLanguagesSection/CvLanguagesSection';

const CvSectionsContainer = (props) => {
  return (
    <div className={classes.CvContainer}>            
      <CvHeadlineSection name={props.data.user.name}
        avatarUrl={props.data.user.avatar_url}
        webPageUrl={props.data.user.blog}/>
      
      <div className={classes.mainArea}>
        <CvSectionContent title="Overview">
          {props.data.user.name} ({props.data.user.login}) is a developer with <strong>{props.data.user.public_repos}</strong> public repositories and <strong>{props.data.user.followers}</strong> followers.
        </CvSectionContent>

        <CvLanguagesSection repositories={props.data.repositories}/>

        <CvSectionContent title="About this resume">
          This résumé is generated automatically using public information from the developer's GitHub account. Do not hesitate to visit <a href={"https://github.com/"+props.data.user.login}>{props.data.user.name} ({props.data.user.login}) GitHub page</a> for a complete work history.
        </CvSectionContent>
      </div>
    </div>
);
};

export default CvSectionsContainer;