import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import './lib/icons';

Enzyme.configure({ adapter: new Adapter() });

window.matchMedia = window.matchMedia || (() => ({
  matches: true,
  addListener() {},
  removeListener() {},
}));
