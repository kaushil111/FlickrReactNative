import React from 'react';
import { View, Image, Text } from 'react-native';

const ImagesCard = ({ photo }) => {
  const { id, farm, secret, server, title } = photo;

  return (
    <View style={styles.containerStyle} >
      <Image
        style={styles.imageStyle}
        source={{ uri: `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg` }}
      />
      <Text>{title}</Text>
      {console.log(photo)}
    </View>
  );
};

const styles = {
  containerStyle: {
    justifyContent: 'flex-start',
    flexDirection: 'column'
  },
  imageStyle: {
    justifyContent: 'center',
    height: 150
  }
};

export default ImagesCard;
