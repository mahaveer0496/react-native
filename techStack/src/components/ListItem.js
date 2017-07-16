import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectLibrary } from './../redux/actions/index.action';
import { Platform, UIManager, LayoutAnimation, Text, View, TouchableWithoutFeedback } from 'react-native';
import { CardSection } from './../common/index.common';

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.renderDesc = this.renderDesc.bind(this);
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }
  renderDesc() {
    const { library, selectedId } = this.props
    if (library.id === selectedId)
      return (
        <CardSection>
          <Text style={{ flex: 1 }}>{library.description}</Text>
        </CardSection>
      )
  }

  componentWillUpdate(nextProps, nextState) {
    LayoutAnimation.spring()
  }
  render() {
    const { titleStyle } = styles;
    const { selectLibrary, library, selectedId } = this.props;
    return (
      <TouchableWithoutFeedback
        onPress={() => { selectLibrary(library.id) }}>
        <View>
          <CardSection>
            <Text style={titleStyle}>
              {library.title}
            </Text>
          </CardSection>
          {this.renderDesc()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 5,
  }
}

const mapStateToProps = ({ selectedId }) => ({ selectedId })
const mapDispatchToProps = dispatch => (
  {
    selectLibrary: id => dispatch(selectLibrary(id))
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);