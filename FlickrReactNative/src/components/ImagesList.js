import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import axios from 'axios';
import ImagesCard from './ImagesCard';

class ImagesList extends Component {
  state = { imageList: [] };

  componentWillMount() {
      axios.get('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=489386ece92b660c8eef44bf589ed379&text=Scenic+Nature&per_page=20&format=json&nojsoncallback=1')
      .then(response => this.setState({ imageList: response.data.photos.photo }));
    }
    
  render() {
    return (
      <View style={styles.containerStyle}>
        <FlatList
          data={this.state.imageList}
          renderItem={({ item }) => <ImagesCard key={item.id} photo={item} />}
          keyExtractor={(item) => item.id}
        />
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
