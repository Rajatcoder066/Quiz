import React, { useState } from 'react';
import {playsound} from '../sound'

import { View, Text, TouchableOpacity, StyleSheet,ImageBackground } from 'react-native';
const LevelSelector = (props) => {
  const [selectedLevel, setSelectedLevel] = useState('');

  const handleLevelSelect = (level) => {
    setSelectedLevel(level);
    if (level =='Arithmetic Quiz') {
      playsound();
      props.navigation.navigate("Apt");
    }else if(level=='Percentage Quiz'){
      playsound();
      props.navigation.navigate("Apt1");
    }else if(level=='Profit & Loss'){
      playsound();
      props.navigation.navigate("Apt2");
    }else if(level=='Average Aptitue Test'){
      playsound();
      props.navigation.navigate("Apt3");

    }else if(level=='Ratio & Proportion'){
      playsound();
      props.navigation.navigate("Apt4");

    }else{
      playsound();
      props.navigation.navigate("Apt5");
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
          style={[styles.levelButton, selectedLevel === 'Arithmetic Quiz' && styles.selectedLevel]}
          onPress={() => handleLevelSelect('Arithmetic Quiz')}
        >
          <Text style={styles.levelText}>Arithmetic Quiz</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.levelButton, selectedLevel === 'Percentage Quiz' && styles.selectedLevel]}
          onPress={() => handleLevelSelect('Percentage Quiz')}
        >
          <Text style={styles.levelText}>Percentage   Quiz</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.levelButton, selectedLevel === 'Profit & Loss' && styles.selectedLevel]}
          onPress={() => handleLevelSelect('Profit & Loss')}
        >
          <Text style={styles.levelText}>Profit & Loss</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.levelButton, selectedLevel === 'Average Aptitue Test' && styles.selectedLevel]}
          onPress={() => handleLevelSelect('Average Aptitue Test')}
        >
          <Text style={styles.levelText}>Average Aptitue Test</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.levelButton, selectedLevel === 'Ratio & Proportion' && styles.selectedLevel]}
          onPress={() => handleLevelSelect('Ratio & Proportion')}
        >
          <Text style={styles.levelText}>Ratio & Proportion </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.levelButton, selectedLevel === 'Time & Distance' && styles.selectedLevel]}
          onPress={() => handleLevelSelect('Time & Distance')}
        >
          <Text style={styles.levelText}>Time & Distance  </Text> 
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
