import React from 'react';
import { View } from 'react-native';
import Header from './assets/Components/header';
import AlbumList from './assets/Components/AlbumList';

export default class App extends React.Component {
  render() {
    return (

      <View style={{ flex: 1 }}>
          <Header headerText={'Albums'}/>
          <AlbumList />
      </View>
    );
  }
}

