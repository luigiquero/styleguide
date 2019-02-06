/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Switch as SimpleSwitch } from '../../../lib';

export default class Switch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: props.checked,
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
