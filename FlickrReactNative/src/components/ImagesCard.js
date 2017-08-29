import React from 'react';
import { View, Image, Text, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const ImagesCard = ({ photo }) => {
  const { id, farm, secret, server, title } = photo;

  return (
    <View style={styles.containerStyle} >
      <Image
        style={styles.imageStyle}
        source={{ uri: `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg` }}
      />
      <Text>{title}</Text>
      {console.log(screenWidth)}
    </View>
  );
};

const aspectRatioForHeight = screenWidth * (9 / 16) ;

const styles = {
  containerStyle: {
    justifyContent: 'flex-start',
    flexDirection: 'column'
  },
  imageStyle: {
    justifyContent: 'center',
    height: aspectRatioForHeight - 20,
    margin: 10
  }
};


export default ImagesCard;
