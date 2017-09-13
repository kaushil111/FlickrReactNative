import React, { Component } from 'react';
import { View, Image, TouchableOpacity, Text, Dimensions } from 'react-native';
import { jsUcfirst } from './common/StringHelper';
import { Header } from './common';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

class ImageDetailView extends Component {

  aspectRatioForHeight = screenWidth * (9 / 16);

  styles = {
    backButtonTextStyle: {
      color: 'white',
      fontFamily: 'Helvetica',
      fontSize: 14
    },
    overlayStyle: {
      backgroundColor: 'rgba(0,0,0,0.82)',
      height: screenHeight,
      justifyContent: 'center',
    },
    imageStyle: {
      width: screenWidth,
      height: this.aspectRatioForHeight
    }
  }

  renderBackButton() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <Text style={this.styles.backButtonTextStyle}>Close</Text>
      </TouchableOpacity>
    );
  }

  render() {
    const { title } = this.props.photo;
    return (
      <View>
        {console.log(this.styles.imageStyle)}
        <Header title={jsUcfirst(title)} leftBarButtons={this.renderBackButton()}>
          <TouchableOpacity onPress={() => console.log('Close the Modal')}>
            <Text style={{ color: 'white' }}>Close</Text>
          </TouchableOpacity>
        </Header>
        <View style={this.styles.overlayStyle}>
          <Image source={{ uri: this.props.imageSource }} style={this.styles.imageStyle} />
        </View>
      </View>
    );
  }


}

export default ImageDetailView;
