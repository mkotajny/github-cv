import React from 'react';
import classes from './CvReposQtyBlock.css';
import externalCssClasses from '../../cvSection.css';

const CvReposQtyBlock = props => {
  return (
    <div className={externalCssClasses.section}>
      <div className={externalCssClasses.sectionTitle}>
        <h1>Overview</h1>
      </div>        
      <div className={externalCssClasses.sectionContent}>
        <p>Chris Wanstrath is a developer with <strong>{props.reposQty}</strong> public repositories and <strong>{props.followersQty}</strong> followers.</p>
      </div>
      <div className={classes.clear}></div>
    </div>      
  );
};

export default CvReposQtyBlock;