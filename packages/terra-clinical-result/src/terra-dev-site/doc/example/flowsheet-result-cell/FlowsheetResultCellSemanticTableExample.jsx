import React from 'react';
import { FlowsheetResultCell, ResultNameHeaderCell } from 'terra-clinical-result/lib/index';
import Table, {
  Header,
  Row,
  Body,
} from 'terra-html-table';

const defaultBloodPressureResult = [
  {
    id: '1',
    systolic: {
      eventId: '2',
      result: {
        value: '130',
        unit: 'mmHg',
      },
      interpretation: 'high',
    },
    diastolic: {
      eventId: '3',
      result: {
        value: '80',
        unit: 'mmHg',
      },
    },
  },
];

const multipleResults = [
  {
    id: '4',
    systolic: {
      eventId: '5',
      result: {
        value: '140',
        unit: 'mmHg',
      },
      interpretation: 'high',
    },
    diastolic: {
      eventId: '6',
      result: {
        value: '77',
        unit: 'mmHg',
      },
      interpretation: 'critical',
    },
  },
  {
    id: '7',
    systolic: {
      eventId: '8',
      result: {
        value: '140',
        unit: 'mmHg',
      },
      interpretation: 'high',
    },
    diastolic: {
      eventId: '9',
      result: {
        value: '77',
        unit: 'mmHg',
      },
      interpretation: 'critical',
    },
  },
];

const multipleOverflowResults1 = [
  {
    eventId: '1602328271',
    result: {
      value: '101',
      unit: 'degC',
    },
    isNumeric: true,
    isModified: true,
    hasComment: true,
  },
  {
    eventId: '1602328282',
    result: {
      value: '101.2',
      unit: 'degC',
    },
    isNumeric: true,
    isModified: false,
    hasComment: false,
  },
  {
    eventId: '1602328293',
    result: {
      value: '101.3',
      unit: 'degC',
    },
    isNumeric: true,
    isModified: false,
    hasComment: false,
  },
];

const multipleOverflowResults2 = [
  {
    eventId: '1602328271',
    result: {
      value: '10111011101110111011101110111011101110111011101110111011101110111011101110111011101110111011101110111011101110111011101110111011101110111011101110111011101110111011101110111011101110111011101110111011101110111011',
      unit: 'degC',
    },
    isNumeric: true,
    isModified: true,
    hasComment: true,
  },
  {
    eventId: '1602328282',
    result: {
      value: '101.2',
      unit: 'degC',
    },
    isNumeric: true,
    isModified: false,
    hasComment: false,
  },
  {
    eventId: '1602328293',
    result: {
      value: '101.3',
      unit: 'degC',
    },
    isNumeric: true,
    isModified: false,
    hasComment: false,
  },
];

const multipleDecoratedResults = [
  {
    id: '10',
    systolic: {
      eventId: '11',
      result: {
        value: '140',
        unit: 'mmHg',
      },
      interpretation: 'high',
    },
    diastolic: {
      eventId: '12',
      result: {
        value: '77',
        unit: 'mmHg',
      },
      interpretation: 'critical',
      isUnverified: false,
      isModified: true,
      hasComment: true,
    },
  },
  {
    id: '13',
    systolic: {
      eventId: '14',
      result: {
        value: '140',
        unit: 'mmHg',
      },
      interpretation: 'high',
    },
    diastolic: {
      eventId: '15',
      result: {
        value: '77',
        unit: 'mmHg',
      },
      interpretation: 'critical',
      isUnverified: true,
    },
  },
];

const decoratedResult = [
  {
    id: '16',
    systolic: {
      eventId: '17',
      result: {
        value: '85',
        unit: 'mmHg',
      },
      interpretation: 'low',
    },
    diastolic: {
      eventId: '18',
      result: {
        value: '77',
        unit: 'mmHg',
      },
      isUnverified: false,
      isModified: true,
      hasComment: true,
    },
  },
];

const partialResultWithNoDataPropSystolic = [
  {
    id: '19',
    systolic: {
      eventId: '20',
      resultNoData: true,
    },
    diastolic: {
      eventId: '21',
      result: {
        value: '85',
        unit: 'mmHg',
      },
    },
  },
];

const partialResultWithNoDataPropDiastolic = [
  {
    id: '22',
    systolic: {
      eventId: '23',
      result: {
        value: '170',
        unit: 'mmHg',
      },
      interpretation: 'critical',
    },
    diastolic: {
      eventId: '24',
      resultNoData: true,
    },
  },
];

const unverifiedResult = [
  {
    id: '25',
    systolic: {
      eventId: '26',
      result: {
        value: '140',
        unit: 'mmHg',
      },
      interpretation: 'high',
      isUnverified: true,
    },
    diastolic: {
      eventId: '27',
      result: {
        value: '77',
        unit: 'mmHg',
      },
      interpretation: 'critical',
      isUnverified: true,
    },
  },
];
const partialStandardResult = {
  result: {
    value: '12345.678',
    unit: 'mL',
  },
};

const enteredInError = [
  {
    id: '1577836800',
    ...partialStandardResult,
    status: 'entered-in-error',
  },
  {
    id: '1577836911',
    ...partialStandardResult,
  },
];

export default () => (
  <Table>
    <Header>
      <ResultNameHeaderCell key="notes" resultName="Notes" />
      <ResultNameHeaderCell key="bp" resultName="Blood Pressure" />
      <ResultNameHeaderCell key="date" resultName="Date" />
    </Header>
    <Body>
      <Row>
        {/* This example cell shows a standard result */}
        <FlowsheetResultCell key="notes" resultDataSet={[{ id: 1, result: { value: 'Standard Result (With Unit)' } }]} />
        <FlowsheetResultCell key="bp" resultDataSet={defaultBloodPressureResult} />
        <FlowsheetResultCell key="date" resultDataSet={[{ id: 2, result: { value: 'May 12th' } }]} />
      </Row>
      <Row>
        {/* This example cell shows mulitple results */}
        <FlowsheetResultCell key="notes" resultDataSet={[{ id: 3, result: { value: 'Multiple Results' } }]} />
        <FlowsheetResultCell key="bp" resultDataSet={multipleResults} hideUnit />
        <FlowsheetResultCell key="date" resultDataSet={[{ id: 4, result: { value: 'May 12th' } }]} />
      </Row>
      <Row>
        {/* This example cell shows mulitple overflow results without overflow */}
        <FlowsheetResultCell key="notes" resultDataSet={[{ id: 3, result: { value: 'Numeric Overflow Multiple Results (no overflow)' } }]} />
        <FlowsheetResultCell key="bp" resultDataSet={multipleOverflowResults1} hideUnit />
        <FlowsheetResultCell key="date" resultDataSet={[{ id: 4, result: { value: 'May 12th' } }]} />
      </Row>
      <Row>
        {/* This example cell shows mulitple overflow results with overflow */}
        <FlowsheetResultCell key="notes" resultDataSet={[{ id: 3, result: { value: 'Numeric Overflow Multiple Results (has overflow)' } }]} />
        <FlowsheetResultCell key="bp" resultDataSet={multipleOverflowResults2} hideUnit />
        <FlowsheetResultCell key="date" resultDataSet={[{ id: 4, result: { value: 'May 12th' } }]} />
      </Row>
      <Row>
        {/* This example cell shows an multiple decorated results */}
        <FlowsheetResultCell key="notes" resultDataSet={[{ id: 5, result: { value: 'Multiple Decorated Results' } }]} />
        <FlowsheetResultCell key="bp" resultDataSet={multipleDecoratedResults} hideUnit />
        <FlowsheetResultCell key="date" resultDataSet={[{ id: 6, result: { value: 'May 12th' } }]} />
      </Row>
      <Row>
        {/* This example cell shows a decorated result */}
        <FlowsheetResultCell key="notes" resultDataSet={[{ id: 7, result: { value: 'Decorated Result' } }]} />
        <FlowsheetResultCell key="bp" resultDataSet={decoratedResult} hideUnit />
        <FlowsheetResultCell key="date" resultDataSet={[{ id: 8, result: { value: 'May 12th' } }]} />
      </Row>
      <Row>
        {/* This example cell shows a partial Blood Pressure no data display using the `resultNoData` property name for the Diastolic result */}
        <FlowsheetResultCell key="notes" resultDataSet={[{ id: 9, result: { value: 'Partial Result, Diastolic' } }]} />
        <FlowsheetResultCell key="bp" resultDataSet={partialResultWithNoDataPropDiastolic} hideUnit />
        <FlowsheetResultCell key="date" resultDataSet={[{ id: 10, result: { value: 'May 12th' } }]} />
      </Row>
      <Row>
        {/* This example cell shows a partial Blood Pressure no data display using the `resultNoData` property name for the Systolic result */}
        <FlowsheetResultCell key="notes" resultDataSet={[{ id: 11, result: { value: 'Partial Result, Systolic' } }]} />
        <FlowsheetResultCell key="bp" resultDataSet={partialResultWithNoDataPropSystolic} hideUnit />
        <FlowsheetResultCell key="date" resultDataSet={[{ id: 12, result: { value: 'May 12th' } }]} />
      </Row>
      <Row>
        {/* This example cell shows an unverified result */}
        <FlowsheetResultCell key="notes" resultDataSet={[{ id: 13, result: { value: 'Unverified Result' } }]} />
        <FlowsheetResultCell key="bp" resultDataSet={unverifiedResult} hideUnit />
        <FlowsheetResultCell key="date" resultDataSet={[{ id: 14, result: { value: 'May 12th' } }]} />
      </Row>
      <Row>
        {/* This example cell shows a standard result with the `hasResultNoData` prop */}
        <FlowsheetResultCell key="notes" resultDataSet={[{ id: 15, result: { value: 'No Data Result' } }]} />
        <FlowsheetResultCell key="bp" hasResultNoData />
        <FlowsheetResultCell key="date" resultDataSet={[{ id: 16, result: { value: 'May 12th' } }]} />
      </Row>
      <Row>
        {/* This example cell shows a result with an error */}
        <FlowsheetResultCell key="notes" resultDataSet={[{ id: 17, result: { value: 'Error Result' } }]} />
        <FlowsheetResultCell key="bp" hasResultError />
        <FlowsheetResultCell key="date" resultDataSet={[{ id: 18, result: { value: 'May 12th' } }]} />
      </Row>
      <Row>
        {/* This example cell shows a result with a status of  entered-in-error */}
        <FlowsheetResultCell key="notes" resultDataSet={[{ id: 17, result: { value: 'Entered-in-error Result' } }]} />
        <FlowsheetResultCell key="bp" resultDataSet={enteredInError} />
        <FlowsheetResultCell key="date" resultDataSet={[{ id: 18, result: { value: 'May 12th' } }]} />
      </Row>
    </Body>
  </Table>
);
