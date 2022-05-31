import React, { useEffect, useState } from 'react';
import { StyleSheet, Text } from 'react-native';

const App = () => {
  const [show, setShow] = useState('');

  useEffect(() => {
    setShow('This is a test message');
  }, []);

  return (
    <Text style={styles.text}>{show}</Text>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'red'
  },
});

export default App;