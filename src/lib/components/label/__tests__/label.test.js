import React from 'react';
import renderer from 'react-test-renderer';
import Label from '..';

describe('Label', () => {
  describe('with children', () => {
    it('render label properly', () => {
      const component = renderer.create(<Label>label</Label>);
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('with htmlFor', () => {
    it('render label properly', () => {
      const component = renderer.create(<Label htmlFor="name">label</Label>);
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('with custom class', () => {
    it('render label properly', () => {
      const component = renderer.create(<Label className="my class">label</Label>);
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('with modifier', () => {
    describe('small', () => {
      it('render label properly', () => {
        const component = renderer.create(<Label small>label</Label>);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });

    describe('disabled', () => {
      it('render label properly', () => {
        const component = renderer.create(<Label disabled>label</Label>);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });

    describe('featured', () => {
      it('render label properly', () => {
        const component = renderer.create(<Label featured>label</Label>);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });
});
