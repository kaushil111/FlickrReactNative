import React from 'react';
import { View, Text, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const Header = ({ title, leftBarButtons, rightBarButtons }) => {
  const { viewStyle, textStyle, leftBarButtonsStyle, rightBarButtonsStyle } = styles;
  return (
    <View style={viewStyle}>
      <View style={leftBarButtonsStyle}>
        {leftBarButtons}
      </View>
      <Text numberOfLines={1} style={textStyle}>{title}</Text>
      <View style={rightBarButtonsStyle}>
        {rightBarButtons}
      </View>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#1f849f',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
    flexDirection: 'row'
  },
  textStyle: {
    fontFamily: 'Helvetica-Light',
    fontSize: 17,
    color: '#fff',
    maxWidth: screenWidth - 120,
    marginLeft: 10,
    marginRight: 10
  },
  leftBarButtonsStyle: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    minWidth: 40,
    marginLeft: 10
  },
  rightBarButtonsStyle: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    minWidth: 40,
    marginRight: 10
  }
};

export { Header };
