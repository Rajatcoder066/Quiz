import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import axios from 'axios';

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState('');
  const [name, setname] = useState('');
  const [feedback1, setFeedback1] = useState(false);
  const [name1, setname1] = useState(false);


  function handleName(e) {
    const nameVar = e.nativeEvent.text;
    setname(nameVar);
    setname1(false);

    if (nameVar.length > 1) {
      setname1(true);
    }
  }
  function handlefeedback(e) {
    const nameVar = e.nativeEvent.text;
    setFeedback(nameVar);
    setFeedback1(false);

    if (nameVar.length > 1) {
      setFeedback1(true);
    }
  }
  const handleFeedbackSubmit = () => {
    // Validate if feedback is empty
  
    const userData = {
      name,
      feedback
    };
    
    if (setname1 && setFeedback1) {
      axios
        .post('http://192.168.0.105:5001/feedback', userData)
        .then(res => {
          console.log(res.data);
          if (res.data.status == 'ok') {
            Alert.alert('submited Successfull!!');
            
          } else {
            Alert.alert(JSON.stringify(res.data));
          }
        })
        .catch(e => console.log(e));
    } else {
      Alert.alert('Fill mandatory details');
    }
    if (err) {
      console.log(err);
      res.sendStatus(500);
      return;
  }
    setname('')
    setFeedback('')

    
  };

  return (
    <View style={styles.container}>
       <Text style={styles.label1}>Name</Text>
      <TextInput
        style={styles.input1}
        multiline
        numberOfLines={1}
        onChange={e => handleName(e)}
       
        placeholder="Enter your Name"
      />
      <Text style={styles.label}>Feedback:</Text>
      <TextInput
        style={styles.input}
        multiline
        numberOfLines={4}
    
        onChange={e => handlefeedback(e)}

        
        placeholder="Type your feedback here..."
      />
      <Button
        title="Submit Feedback"
        onPress={handleFeedbackSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor:'white'
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    color:'black'
  },
  input: {
    width: '100%',
    height: 120,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  label1: {
    fontSize: 18,
    marginBottom: 10,
    color:'black'
  },
  input1: {
    width: '100%',
    
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
});

export default FeedbackForm;
