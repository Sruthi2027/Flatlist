import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';

const DATA = [
  {
    id: 'a',
    title: 'Flatlist demo 1',
  },
  {
    id: 'b',
    title: 'Flatlist demo 2',
  },
  {
    id: 'c',
    title: 'Flatlist demo 3',
  },
  {
    id: 'd',
    title: 'Flatlist demo 4'
  },
  {
    id: 'e',
    title: 'Flatlist demo 5',
  },
  {
    id: 'f',
    title: 'Flatlist demo 6',
  },
  {
    id: 'g',
    title: 'Flatlist demo 7',
  },
  {
    id: 'h',
    title: 'Flatlist demo 8',
  },
];


const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);


const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA} 
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 6,
  },
  item: {
    backgroundColor: '#66cdaa',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 22,
  },
});

export default App;