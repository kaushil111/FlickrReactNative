import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import { Header } from './components/common';
import ImagesList from './components/ImagesList.js';


class FlickrApp extends Component {

  render() {
    return (

      <View style={styles.containerStyle}>
        <StatusBar
          barStyle="light-content"
        />

        <Header title='Photos' />
        <ImagesList style={styles.listStyle} />
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    flex: 1
  },
  listStyle: {
    marginTop: 100,
    flex: 1,
    alignSelf: 'flex-start'
  }
};

export default FlickrApp;
