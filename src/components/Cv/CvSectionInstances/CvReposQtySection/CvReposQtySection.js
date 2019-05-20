import React from 'react';
import CvSection from '../../CvSectionTemplates/CvSection/CvSection';
import CvSectionContentStandard from '../../CvSectionTemplates/CvSectionContentStandard/CvSectionContentStandard';

const CvReposQtySection = props => {
  return (
    <CvSection title="Overview">
      <CvSectionContentStandard>
        Chris Wanstrath is a developer with <strong>{props.reposQty}</strong> public repositories and <strong>{props.followersQty}</strong> followers.
      </CvSectionContentStandard>
    </CvSection>
  );
};

export default CvReposQtySection;