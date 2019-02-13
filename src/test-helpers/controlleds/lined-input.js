import React, { Component } from 'react';
import LinedInputGroup from '../../lib/components/form/lined-input-group';

class SimpleForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value,
    };
  }

  onChangeName = e => this.setState({ value: e.target.value });

  render() {
    const { value } = this.state;
    const {
      id, name, label, errorMessage, type,
    } = this.props;

    return (
      <LinedInputGroup
        id={id}
        name={name}
        label={label}
        value={value}
        type={type}
        errorMessage={errorMessage}
        onChange={this.onChangeName}
      />
    );
  }
}

export default SimpleForm;
