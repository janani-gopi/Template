import {View, Text , StyleSheet} from 'react-native';
import React from 'react';

const Tab2 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tab2</Text>
    </View>
  );
};

export default Tab2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    marginBottom: 20,
    fontSize: 20,
  },
});
