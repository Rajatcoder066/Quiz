import React, { useState } from 'react';
import {playsound} from '../sound'

import { View, Text, TouchableOpacity, StyleSheet,ImageBackground} from 'react-native';
const LevelSelector = (props) => {
  const [selectedLevel, setSelectedLevel] = useState('');

  const handleLevelSelect = (level) => {
    setSelectedLevel(level);
    if (level =='Noun Quiz') {
      playsound();
      props.navigation.navigate("gram");
    }else if(level=='Pronoun Quiz'){
      playsound();
      props.navigation.navigate("gram1");
      
    }else if(level=='Verb Quiz'){
      playsound();
      props.navigation.navigate("gram2");
    }else if(level=='Adverb Quiz'){
      playsound();
      props.navigation.navigate("gram3");

    }else{
      playsound();
      props.navigation.navigate("gram4");

    }
    
   
  };

  return (
    <ImageBackground 
   
      
    source={require('../assets/bkc1.jpg')} // Provide the path to your image
    style={styles.image}>
    <View style={styles.container}>
      <View style={styles.levelContainer}>
      <Text style={styles.label}>Select Level:</Text>

        <TouchableOpacity
          style={[styles.levelButton, selectedLevel === 'Noun Quiz' && styles.selectedLevel]}
          onPress={() => handleLevelSelect('Noun Quiz')}
        >
          <Text style={styles.levelText}>Noun Quiz</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.levelButton, selectedLevel === 'Pronoun Quiz' && styles.selectedLevel]}
          onPress={() => handleLevelSelect('Pronoun Quiz')}
        >
          <Text style={styles.levelText}>Pronoun Quiz</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.levelButton, selectedLevel === 'Verb Quiz' && styles.selectedLevel]}
          onPress={() => handleLevelSelect('Verb Quiz')}
        >
          <Text style={styles.levelText}>Verb Quiz</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.levelButton, selectedLevel === 'Adverb Quiz' && styles.selectedLevel]}
          onPress={() => handleLevelSelect('Adverb Quiz')}
        >
          <Text style={styles.levelText}>Adverb Quiz</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.levelButton, selectedLevel === 'Tenses Quiz' && styles.selectedLevel]}
          onPress={() => handleLevelSelect('Tenses Quiz')}
        >
          <Text style={styles.levelText}>Tenses Quiz</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 30,
    marginBottom: 10,
    color:'black',
    fontWeight:'bold'
  },
  levelContainer: {
    alignItems: 'center',
    flex:1,
    width:300,
    height:100,
    justifyContent:"center",


  },
  levelButton: {
    
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 5,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#ccc',
    backgroundColor:"#420475",
    width:"100%",
    alignItems:"center",
   
  },
  levelText: {
    fontSize: 24,
    color:"white",

  },
  selectedLevel: {
    backgroundColor: 'blue',
  },
  selectedLevelText: {
    marginTop: 20,
    fontSize: 18,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    height:'100%',
    width:'100%'
  },
});

export default LevelSelector;
