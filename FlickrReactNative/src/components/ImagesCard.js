import React from 'react';
import { View, Image, Text } from 'react-native';

const ImagesCard = (props) => {
  return (
    <View>
      <Image />
      <Text>{props.description}</Text>
    </View>
  );
};

export default ImagesCard;
