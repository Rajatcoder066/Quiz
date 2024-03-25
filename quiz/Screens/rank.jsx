// Leaderboard.js
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const leaderboardData = [
  { rank: 1, username: 'Prachi', score: 100 },
  { rank: 2, username: 'Priya', score: 90 },
  { rank: 3, username: 'Rajat', score: 80 },
  { rank: 4, username: 'Niraj', score: 70 },
  { rank: 5, username: 'Neha', score: 60 },
];

const Leaderboard = () => {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.rank}>{item.rank}</Text>
      <Text style={styles.name}>{item.username}</Text>
      <Text style={styles.score}>Score: {item.score}</Text>
    </View>
  );

  return (

    <View style={styles.container}>
      <Text style={styles.title}>Leaderboard</Text>
      <FlatList
        data={leaderboardData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00FFFF',
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color:'black',
  },
  item: {
   
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    width:300,
    height:75,
    backgroundColor:'#FFAC1C',
    borderColor: '#420475',


  },
  rank: {
    fontWeight: 'bold',
    fontSize: 16,
    color:'white'
  },
  name: {
    flex: 1,
    marginLeft: 10,
    fontSize: 20,
    color:'white',
    fontWeight: 'bold',

  },
  score: {
    fontSize: 20,
    color:'white',
    fontWeight: 'bold',

  },


});

export default Leaderboard;
