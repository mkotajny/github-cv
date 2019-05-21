import React from 'react';
import CvSectionContent from '../../CvSectionTemplates/CvSectionContent/CvSectionContent';

const CvReposQtySection = props => {
  return (
    <CvSectionContent title="Overview">
      Chris Wanstrath is a developer with <strong>{props.reposQty}</strong> public repositories and <strong>{props.followersQty}</strong> followers.
    </CvSectionContent>
  );
};

export default CvReposQtySection;