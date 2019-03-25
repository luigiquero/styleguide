/* eslint-disable no-unused-vars */
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Pro Solid
import { faAnalytics as fasAnalytics } from '@fortawesome/pro-solid-svg-icons/faAnalytics';
import { faCheckCircle as fasCheckCircle } from '@fortawesome/pro-solid-svg-icons/faCheckCircle';
import { faComment as fasComment } from '@fortawesome/pro-solid-svg-icons/faComment';
import { faFilter as fasFilter } from '@fortawesome/pro-solid-svg-icons/faFilter';
import { faFolderOpen as fasFolderOpen } from '@fortawesome/pro-solid-svg-icons/faFolderOpen';
import { faLightbulb as fasLightbulb } from '@fortawesome/pro-solid-svg-icons/faLightbulb';
import { faRetweet as fasRetweet } from '@fortawesome/pro-solid-svg-icons/faRetweet';
import { faStore as fasStore } from '@fortawesome/pro-solid-svg-icons/faStore';
import { faTrophy as fasTrophy } from '@fortawesome/pro-solid-svg-icons/faTrophy';

// Pro Regular
import { faCheck as farCheck } from '@fortawesome/pro-regular-svg-icons/faCheck';
import { faCheckCircle as farCheckCircle } from '@fortawesome/pro-regular-svg-icons/faCheckCircle';
import { faExclamationTriangle as farExclamationTriangle } from '@fortawesome/pro-regular-svg-icons/faExclamationTriangle';
import { faTimes as farTimes } from '@fortawesome/pro-regular-svg-icons/faTimes';
import { faTimesCircle as farTimesCircle } from '@fortawesome/pro-regular-svg-icons/faTimesCircle';
import { faPen as farPen } from '@fortawesome/pro-regular-svg-icons/faPen';
import { faSignOutAlt as farSignOutAlt } from '@fortawesome/pro-regular-svg-icons/faSignOutAlt';

// Pro Light
import { faIgloo as falIgloo } from '@fortawesome/pro-light-svg-icons/faIgloo';

library.add(
  fasAnalytics,
  fasCheckCircle,
  fasComment,
  fasFilter,
  fasFolderOpen,
  fasLightbulb,
  fasRetweet,
  fasStore,
  fasTrophy,
  farCheck,
  farCheckCircle,
  farExclamationTriangle,
  farTimes,
  farPen,
  farSignOutAlt,
  farTimesCircle,
  falIgloo,
);

export default FontAwesomeIcon;
