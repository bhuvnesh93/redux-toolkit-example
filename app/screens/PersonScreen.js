import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PersonScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Hi</Text>
    </View>
  );
};

export default PersonScreen;

const styles = StyleSheet.create({
  container: { flex: 1 },
});
