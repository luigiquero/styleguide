/* eslint-disable no-unused-vars */
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStore as fasStore,
  faAnalytics as fasAnalytics,
  faTrophy as fasTrophy,
  faCheckCircle as fasCheckCircle,
} from '@fortawesome/pro-solid-svg-icons';
import { faCheck as farCheck } from '@fortawesome/pro-regular-svg-icons';

library.add(
  fasStore,
  fasAnalytics,
  fasTrophy,
  fasCheckCircle,
  farCheck,
);

export default FontAwesomeIcon;
