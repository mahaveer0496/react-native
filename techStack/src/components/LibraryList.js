import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, Text } from 'react-native';
import ListItem from './ListItem';

class LibraryList extends Component {
  constructor(props) {
    super(props);
    this.renderRow = this.renderRow.bind(this);
  }

  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })
    this.dataSource = ds.cloneWithRows(this.props.libraries)
  }

  renderRow(library) {
    return <ListItem library={library} />
  }
  render() {
    const { libraries } = this.props;
    return (
      <ListView
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const mapStateToProps = ({ libraries }) => ({ libraries })

export default connect(mapStateToProps, null)(LibraryList);