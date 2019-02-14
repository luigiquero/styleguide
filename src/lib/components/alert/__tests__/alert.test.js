import React from 'react';
import renderer from 'react-test-renderer';
import Alert from '..';

describe('Alert', () => {
  describe('snapshot tests', () => {
    const defaultProps = {
      visible: true,
      onCloseClick: () => {},
      type: 'success',
    };

    it('should render danger alert properly', () => {
      const component = renderer.create(<Alert {...defaultProps} type="danger">Test</Alert>);
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('should render warning alert properly', () => {
      const component = renderer.create(<Alert {...defaultProps} type="warning">Test</Alert>);
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('should render success alert properly', () => {
      const component = renderer.create(<Alert {...defaultProps} type="success">Test</Alert>);
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('should render success alert properly', () => {
      const component = renderer.create(<Alert {...defaultProps} type="success">Test</Alert>);
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('should render null when visible is false', () => {
      const component = renderer.create(<Alert {...defaultProps} visible={false}>Test</Alert>);
      const tree = component.toJSON();
      expect(tree).toBeNull();
    });
  });
});
