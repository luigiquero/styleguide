import React, { Fragment } from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import Menu from '../..';
import Item from '..';

describe('Item', () => {
  const renderWithMenu = children => renderer.create(
    <Menu>
      {children}
    </Menu>,
  );

  const mountWithMenu = children => mount(
    <Menu>
      {children}
    </Menu>,
  );

  describe('without links', () => {
    it('without url should render properly', () => {
      const component = renderWithMenu(<Item title="Test" />);
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('with url should render properly', () => {
      const component = renderWithMenu(<Item title="Test" url="#" />);
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('with url and target should render properly', () => {
      const component = renderWithMenu(
        <Item title="Test" url="#" target="_blank" />,
      );
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('with active truthly should render properly', () => {
      const component = renderWithMenu(
        <Item title="Test" active />,
      );
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('with active truthly should render properly', () => {
      const component = renderWithMenu(
        <Item title="Test" active />,
      );
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('with icon should render with icon', () => {
      const component = renderWithMenu(
        <Item title="Test" icon={['fal', 'igloo']} />,
      );
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('with links', () => {
    const defaultProps = {
      title: 'Test',
      active: false,
      children: (
        <Fragment>
          <Menu.SubItem title="Test" />
          <Menu.SubItem title="Test2" active />
          <Menu.SubItem title="Test3" url="#" />
          <Menu.SubItem title="Test4" url="#" target="_blank" />
        </Fragment>
      ),
    };

    it('should render properly', () => {
      const component = renderWithMenu(
        <Item {...defaultProps} />,
      );
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    describe('when item is active', () => {
      it('should render properly', () => {
        const component = renderWithMenu(
          <Item {...defaultProps} active />,
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });

      it('should render dropdown with active modifier', () => {
        const wrapper = mountWithMenu(
          <Item {...defaultProps} active />,
        );
        const dropdown = wrapper.find('.menu__dropdown');
        expect(dropdown.hasClass('menu__dropdown--active')).toBeTruthy();
      });
    });

    describe('behavior tests', () => {
      describe('when item has active', () => {
        describe('when no have links', () => {
          it('has an .menu__dropdown rendered', () => {
            const wrapper = mountWithMenu(
              <Item
                title="test"
                active
              />,
            );

            expect(wrapper.exists('.menu__dropdown')).toBeFalsy();
          });
        });

        describe('when have links', () => {
          it('has an .menu__item--child rendered', () => {
            const wrapper = mountWithMenu(
              <Item title="test">
                <Menu.SubItem title="test" />
              </Item>,
            );

            expect(wrapper.exists('.menu__item--child')).toBeTruthy();
          });
        });
      });

      describe('when item has not active', () => {
        it('not has an .menu__dropdown rendered', () => {
          const wrapper = mountWithMenu(
            <Item title="test" />,
          );

          expect(wrapper.exists('.menu__dropdown')).toBeFalsy();
        });
      });

      describe('when the parent links has been clicked', () => {
        it('calls the toggle expanded state and calls callback functioon', () => {
          const onClickCallback = jest.fn();
          const wrapper = mountWithMenu(
            <Item
              title="test"
              onClick={onClickCallback}
              active
            >
              <Menu.SubItem title="test" />
            </Item>,
          );

          wrapper.find('.menu__link--active').last().simulate('click');

          expect(onClickCallback).toHaveBeenCalledTimes(1);
        });
      });
    });
  });
});
