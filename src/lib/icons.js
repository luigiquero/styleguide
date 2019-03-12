/* eslint-disable no-unused-vars */
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas as fasFree } from '@fortawesome/free-solid-svg-icons';
import { fas as fasPro } from '@fortawesome/pro-solid-svg-icons';
import { fal as falPro } from '@fortawesome/pro-light-svg-icons';
import { far as farPro } from '@fortawesome/pro-regular-svg-icons';

library.add(
  fasFree,
  fasPro,
  falPro,
  farPro,
);

export default FontAwesomeIcon;
