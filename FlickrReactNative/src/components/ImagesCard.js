import React from 'react';
import { View, Image, Text, Dimensions, TouchableOpacity } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const ImagesCard = ({ photo }) => {
  const { id, farm, secret, server, title } = photo;

  return (
    <View style={styles.containerStyle} >
      <TouchableOpacity onPress={() => console.log(id)}>
        <Text style={styles.textStyle} >{jsUcfirst(title)}</Text>
        <Image
          style={styles.imageStyle}
          source={{ uri: `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_z.jpg` }}
        />
        <View style={styles.separatorStyle} />
      </TouchableOpacity>
    </View>
  );
};

const aspectRatioForHeight = screenWidth * (9 / 16);

const styles = {
  containerStyle: {
    justifyContent: 'flex-start',
    flexDirection: 'column'
  },
  imageStyle: {
    justifyContent: 'center',
    height: aspectRatioForHeight - 4,
    marginLeft: 2,
    marginRight: 2
  },
  textStyle: {
    margin: 10,
    fontFamily: 'Helvetica-Light',
    fontSize: 15,
    color: '#37474f',
    textAlign: 'center'
  },
  separatorStyle: {
    backgroundColor: '#e0e0e0',
    height: 1,
    marginTop: 10
  }
};

function jsUcfirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export default ImagesCard;
