import React from 'react';
import classNamesBind from 'classnames/bind';
import { Placeholder } from '@cerner/terra-docs';
import Button from 'terra-button';
import Header from 'terra-clinical-header';
import styles from './ClinicalHeaderDocCommon.scss';

const cx = classNamesBind.bind(styles);

const LongTextWithContent = () => (
  <div>
    <Header
      startContent={<Button text="Back" />}
      text="Patient Information for Individual Diagnosed with a Chronic Disease in the past or currently suffering: Comprehensive Medical History,Treatment Plan,and Prognosis Report"
      endContent={<Button text="print" />}
      level={3}
    >
      <Placeholder className={cx('placeholder-wrapper')} title="Collapsible Menu View" />
      <Button text="Medical History" />
    </Header>
  </div>
);

export default LongTextWithContent;
