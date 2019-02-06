import React, { Component } from 'react';
import LinedInputGroup from '../../../src/lib/components/lined_input_group';

class SimpleForm extends Component {
  state = {
    name: '',
    name2: 'Wrong',
  };

  onChangeName = e => this.setState({ name: e.target.value });

  onChangeName2 = e => this.setState({ name2: e.target.value });

  render() {
    const { name, name2 } = this.state;

    return (
      <form>
        <LinedInputGroup
          id="name1"
          label="Name 1"
          value={name}
          onChange={this.onChangeName}
        />
        <LinedInputGroup
          id="name2"
          label="Name 2"
          value={name2}
          onChange={this.onChangeName2}
          errorMessage="Wrong!"
        />
      </form>
    );
  }
}

export default SimpleForm;
