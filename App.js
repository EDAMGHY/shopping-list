import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Alert } from 'react-native';

import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {
  const [items, setItems] = useState([
    {
      id: uuidv4(),
      text: 'Milk',
    },
    {
      id: uuidv4(),
      text: 'Eggs',
    },
    {
      id: uuidv4(),
      text: 'Bread',
    },
    {
      id: uuidv4(),
      text: 'Juice',
    },
  ]);

  const deleteItem = (id) => {
    setItems((prevItem) => {
      return prevItem.filter((item) => item.id !== id);
    });
  };
  const addItem = (text) => {
    if (!text) {
      Alert.alert('Error', 'Please enter a text', [{ text: 'OK' }]);
    } else {
      setItems((prevItem) => {
        return [{ id: uuidv4(), text }, ...prevItem];
      });
    }
  };
  return (
    <View style={styles.container}>
      <Header />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <ListItem deleteItem={deleteItem} item={item} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
});
export default App;
