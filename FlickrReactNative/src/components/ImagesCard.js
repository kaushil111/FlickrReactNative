import React, { Component } from 'react';
import { View, Image, Text, Dimensions, TouchableOpacity, Modal } from 'react-native';
import { jsUcfirst } from './common/StringHelper';
import ImageDetailView from './ImageDetailView';

const screenWidth = Dimensions.get('window').width;

class ImagesCard extends Component {

  state = {
    modalVisible: false,
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  aspectRatioForHeight = screenWidth * (9 / 16);

  styles = {
    containerStyle: {
      justifyContent: 'flex-start',
      flexDirection: 'column'
    },
    imageStyle: {
      justifyContent: 'center',
      height: this.aspectRatioForHeight - 4,
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

  render() {
    const { id, farm, secret, server, title } = this.props.photo;
    const { containerStyle, textStyle, imageStyle, separatorStyle } = this.styles;

    const imageSource = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_z.jpg`;

    return (
      <View style={containerStyle} >
          {console.log('id')}
        <TouchableOpacity onPress={() => this.setModalVisible(true)}>
          <Text style={textStyle} >{jsUcfirst(title)}</Text>
          <Image
            style={imageStyle}
            source={{ uri: imageSource }}
          />
          <View style={separatorStyle} />
        </TouchableOpacity>
        <Modal
          animationType={'fade'}
          visible={this.state.modalVisible}
          supportedOrientations={['portrait', 'landscape']}
          transparent
          onRequestClose={() => console.log('Modal has been closed.')}
        >
          <ImageDetailView
            photo={this.props.photo}
            imageSource={imageSource}
            onPress={() => this.setModalVisible(false)}
          />
        </Modal>
      </View>
    );
  }
}

export default ImagesCard;
