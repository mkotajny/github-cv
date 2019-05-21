import React from 'react';
import CvSectionContentStandard from '../../CvSectionTemplates/CvSectionContentStandard/CvSectionContentStandard';

const CvReposQtySection = props => {
  return (
    <CvSectionContentStandard title="Overview">
      Chris Wanstrath is a developer with <strong>{props.reposQty}</strong> public repositories and <strong>{props.followersQty}</strong> followers.
    </CvSectionContentStandard>
  );
};

export default CvReposQtySection;