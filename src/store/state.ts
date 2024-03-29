/* eslint-disable import/no-cycle */
import { RootState } from './RootState';

const state: RootState = {
  datasetName: '',
  eventData: null,
  eventTypeIconMapping: null,
  initialEventSequenceData: null,
  eventSequenceData: null,
  centralEventType: '',
  hoveredEventType: '',
  hoveredAttribute: '',
  hoveredSequence: '',
  nodeScale: null,
  comparisonVariable: null,
  comparisonVariableValues: [],
  colorScheme: null,
  numericalComparisonVariableThreshold: 0,
  numericalComparisonVariableMaximum: 0,
  variableCount: 0,
  doubleTreeSelection: {
    left: [],
    right: [],
  },
  absoluteTimeUsed: true,
};

export { state as default };
