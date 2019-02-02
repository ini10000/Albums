import React from 'react';
import { View } from 'react-native';
import Header from './assets/Components/header';
import AlbumList from './assets/Components/AlbumList';

export default class App extends React.Component {
  render() {
    return (
      <View>
          <Header headerText={'Albums'}/>
          <AlbumList />
      </View>
    );
  }
}

