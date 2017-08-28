import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import ImagesCard from './ImagesCard';

class ImagesList extends Component {
  state = { imagelist: [] };

  componentWillMount() {
      axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
    }

  render() {
    return (
      <View style={styles.containerStyle}>
        <ImagesCard />
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    justifyContent: 'flex-start',
    flexDirection: 'column',
    // backgroundColor: '#0ff',
    flex: 1
  }
};
export default ImagesList;
