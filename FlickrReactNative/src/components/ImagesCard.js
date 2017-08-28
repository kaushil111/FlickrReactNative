import React from 'react';
import { View, Image, Text } from 'react-native';

const ImagesCard = ({ photo }) => {
  const { id, farm, owner, secret, server, title } = photo
  return (
    <View>
      <Image />
      <Text>{title}</Text>
      {console.log(photo)}
    </View>
  );
};

export default ImagesCard;
