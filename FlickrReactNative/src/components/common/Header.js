import React from 'react';
import { View, Text } from 'react-native';

const Header = (props) => {
  const { viewStyle, textStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.title}</Text>
      {props.children}
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
};

export { Header };
