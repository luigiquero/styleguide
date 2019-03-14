/* eslint-disable no-unused-vars */
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Pro Solid
import fasAnalytics from '@fortawesome/pro-solid-svg-icons/faAnalytics';
import fasCheckCircle from '@fortawesome/pro-solid-svg-icons/faCheckCircle';
import fasStore from '@fortawesome/pro-solid-svg-icons/faStore';
import fasTrophy from '@fortawesome/pro-solid-svg-icons/faTrophy';

// Pro Regular
import farCheck from '@fortawesome/pro-regular-svg-icons/faCheck';
import farCheckCircle from '@fortawesome/pro-regular-svg-icons/faCheckCircle';
import farExclamationTriangle from '@fortawesome/pro-regular-svg-icons/faExclamationTriangle';
import farTimes from '@fortawesome/pro-regular-svg-icons/faTimes';
import farTimesCircle from '@fortawesome/pro-regular-svg-icons/faTimesCircle';

// Pro Light
import falIgloo from '@fortawesome/pro-light-svg-icons/faIgloo';

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
