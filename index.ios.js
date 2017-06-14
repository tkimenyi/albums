// place code for ios development


// import library to help create a component 
import React from 'react';
import { Text, AppRegistry } from 'react-native';

// create a component
const App = () => (
  <Text>Some Text</Text>
);


// render it to a device
// first string of registerComponent method must be same name as name 
// of the project
AppRegistry.registerComponent('albums', () => App);
