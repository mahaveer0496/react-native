import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Picker, Text } from 'react-native';

import { Card, CardSection, Input, Button } from './../common/index.common';
import { employeeUpdate } from './../redux/actions/index.action';

class EmployeeCreate extends Component {
  render() {
    const { name, phone, shift, employeeUpdate } = this.props;
    return (
      <Card>
        <CardSection>
          <Input
            label="Name"
            placeholder="John"
            value={name}
            onChangeText={text => employeeUpdate('name', text)}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Phone"
            placeholder="111-111-1111"
            value={phone}
            onChangeText={text => employeeUpdate('phone', text)}
          />
        </CardSection>
        <CardSection style={{ flexDirection: 'column' }}>
          <Text style={{ paddingLeft: 20 }}>Select Shift</Text>
          <Picker
            style={{ height: 100 }}
            selectedValue={shift}
            onValueChange={day => employeeUpdate('shift', day)}>
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thusrday" value="Thusrday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Sunday" value="Sunday" />
          </Picker>
        </CardSection>
        <CardSection>
          <Button>Create</Button>
        </CardSection>
      </Card>
    );
  }
}
const mapStateToProps = ({ employeeForm }) => ({
  name: employeeForm.name,
  phone: employeeForm.phone,
  shift: employeeForm.shift,
});

const mapDispatchToProps = dispatch => ({
  employeeUpdate: (prop, value) => dispatch(employeeUpdate(prop, value)),
});
export default connect(mapStateToProps, mapDispatchToProps)(EmployeeCreate);
