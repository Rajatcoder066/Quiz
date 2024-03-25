import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet ,ImageBackground} from 'react-native';
import {playsound} from '../sound'

const LevelSelector = (props) => {
  const [selectedLevel, setSelectedLevel] = useState('');

  const handleLevelSelect = (level) => {
    setSelectedLevel(level);
    if (level =='Basic') {
      playsound();
      props.navigation.navigate("Science");
    }else if(level=='Medium'){
      
      playsound();
      props.navigation.navigate("Science1");
    }else{
      
      playsound();
      props.navigation.navigate("Science2");
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
          style={[styles.levelButton, selectedLevel === 'Basic' && styles.selectedLevel]}
          onPress={() => handleLevelSelect('Basic')}
        >
          <Text style={styles.levelText}>Basic</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.levelButton, selectedLevel === 'Medium' && styles.selectedLevel]}
          onPress={() => handleLevelSelect('Medium')}
        >
          <Text style={styles.levelText}>Medium</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.levelButton, selectedLevel === 'High' && styles.selectedLevel]}
          onPress={() => handleLevelSelect('High')}
        >
          <Text style={styles.levelText}>High</Text>
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
