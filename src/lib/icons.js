/* eslint-disable no-unused-vars */
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faAnalytics as fasAnalytics,
  faCheckCircle as fasCheckCircle,
  faStore as fasStore,
  faTrophy as fasTrophy,
} from '@fortawesome/pro-solid-svg-icons';

import {
  faCheck as farCheck,
  faCheckCircle as farCheckCircle,
  faExclamationTriangle as farExclamationTriangle,
  faTimes as farTimes,
  faTimesCircle as farTimesCircle,
} from '@fortawesome/pro-regular-svg-icons';

import { faIgloo as falIgloo } from '@fortawesome/pro-light-svg-icons';

library.add(
  fasAnalytics,
  fasCheckCircle,
  fasStore,
  fasTrophy,
  farCheck,
  farCheckCircle,
  farExclamationTriangle,
  farTimes,
  farTimesCircle,
  falIgloo,
);

export default FontAwesomeIcon;
