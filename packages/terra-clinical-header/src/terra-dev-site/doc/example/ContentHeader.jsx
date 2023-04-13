import React from 'react';
import Button from 'terra-button';
import Header from 'terra-clinical-header';

const ContenteHeader = () => (
  <div>
    <Header
      startContent={<Button text="Back" />}
      text="Patient Information"
      endContent={<Button text="Prescription" />}
      level={3}
    />
  </div>
);

export default ContenteHeader;
