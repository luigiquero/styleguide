/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import SimpleSwitch from 'lib/components/form/switch';

export default class Switch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: props.checked || false,
    };
  }

  onChange = () => {
    const { checked } = this.state;

    this.setState({ checked: !checked });
  }

  render() {
    const { checked } = this.state;

    return (
      <SimpleSwitch
        {...this.props}
        checked={checked}
        onChange={this.onChange}
      />
    );
  }
}
