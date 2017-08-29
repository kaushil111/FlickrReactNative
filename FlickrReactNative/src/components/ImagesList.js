import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import axios from 'axios';
import ImagesCard from './ImagesCard';

class ImagesList extends Component {
  state = { imageList: [] };

  componentWillMount() {
      axios.get('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=489386ece92b660c8eef44bf589ed379&text=India+Divine&per_page=20&format=json&nojsoncallback=1')
      .then(response => this.setState({ imageList: response.data.photos.photo }));
    }

  renderImages() {
    return this.state.imageList.map(
      imageList => <ImagesCard key={imageList.id} photo={imageList} />
    );
  }

  render() {
    return (
      <View style={styles.containerStyle}>
        {/*console.log(this.state.imageList)*/}
        <ScrollView>
          {this.renderImages()}
        </ScrollView>
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
