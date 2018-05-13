/* @flow */

import React, { Component } from 'react';

const styles ={
  container: {
    flex: 1,
  },
};

export default class ApplePayComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>I'm the MyComponent component</Text>
      </View>
    );
  }
}
