import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useRef,useState,useEffect } from 'react';
import { View, Text, Button, DrawerLayoutAndroid, StyleSheet, BackHandler,Alert,Dimensions,Image,Pressable,ScrollView,tou
} from 'react-native';
import { useNavigation,StackActions,useFocusEffect,DrawerActions} from '@react-navigation/native';
const {height, width} = Dimensions.get('window');
import axios from 'axios';
import Sound from 'react-native-sound';
import { playsound } from '../sound';


const HomeScreen = (props) => {


  const Imag=()=>{
    playsound();
    props.navigation.navigate("image");
}
const aptit=()=>{
  playsound();
  props.navigation.navigate("Level3");

}
 const Science=()=>{
  playsound();

        props.navigation.navigate("Level");

 }
 const Math1=()=>{
  playsound();

  props.navigation.navigate("Level1");

}
const Gram=()=>{
  playsound();

  props.navigation.navigate("Level2");

}
  const drawerRef = useRef(null);

  const openDrawer = () => {

    navigation.dispatch(DrawerActions.openDrawer());
  };

  const closeDrawer = () => {
    drawerRef.current.closeDrawer();
  };
  const navigation = useNavigation();

 function logout(){
  

  AsyncStorage.setItem('isLoggedIn','');
  AsyncStorage.setItem('token','');
  AsyncStorage.setItem('name','');

    navigation.reset({
    index: 0,
    routes: [{ name: 'LoginUser' }],
   });

  

     
      const removeUser = async () => {
        try {
          await AsyncStorage.removeItem('isLoggedIn');
          await AsyncStorage.removeItem('token');
          await AsyncStorage.removeItem('name');
        
        } catch (error) {
          console.log(error);
        }
      };
      removeUser();
      
     AsyncStorage.clear();
     navigation.dispatch(StackActions.popToTop()); // This removes all screens from the stack except the first one (Login)

     navigation.navigate("LoginUser");

  }



  const handleBackPress = () => {
    Alert.alert('Exit App', 'Are you sure you want to exit?', [
      {
        text: 'Cancel',
        onPress: () => null,
        style: 'cancel',
      },
      {
        text: 'Exit',
        onPress: () => BackHandler.exitApp(),
      },
    ]);
    return true;
  };

  useFocusEffect(
    React.useCallback(() => {
      
      BackHandler.addEventListener('hardwareBackPress', handleBackPress);

      return () => {
        BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
      };
    },[]),
  );

  
  return (
    <>
   
   
      <View style={styles.container}>
    <Pressable onPress={openDrawer} style={styles.menuContainer}>
      <Image style={styles.menuIcon} source={require('../images/menu.png')} />
    </Pressable>
    <Text style={styles.logoText}>Welcome to Kiddo App</Text>
  </View>

  <ScrollView vertical={true} >

  <View style={styles.container1}>
  <View style={styles.centeredContainer}>
    <View style={{borderRadius:30}}>
    <Image
        style={{width:320,height:250,borderRadius:30,marginTop:10}}
        source={require('../assets/science.png')}
      />
   </View>
    <Pressable onPress={Science} style={styles.pressable}>
      <Text style={styles.screenText}>Science</Text>
    </Pressable>
    
    <View>
    <Image
        style={{width:320,height:250,borderRadius:30}}
        source={require('../assets/math.png')}
      />
   </View>
    <Pressable onPress={Math1} style={styles.pressable}>
      <Text style={styles.screenText}>Maths</Text>
    </Pressable>
    <View>
    <Image
        style={{width:320,height:250,borderRadius:30}}
        source={require('../assets/imagebased.png')}
      />
   </View>
    <Pressable onPress={Imag} style={styles.pressable}>
      <Text style={styles.screenText}>Imaged-Based</Text>
    </Pressable>
    <View  source={require('../assets/grammar.png')}>
    <Image
        style={{width:320,height:250,borderRadius:30}}
        source={require('../assets/grammar.png')}
      />
   </View>
    <Pressable onPress={Gram} style={styles.pressable}>
      <Text style={styles.screenText}>Grammar</Text>
    </Pressable>
    <View>
    <Image
        style={{width:320,height:250,borderRadius:30}}
        source={require('../assets/aptitude.png')}
      />
   </View>
    <Pressable onPress={aptit} style={styles.pressable}>
      <Text style={styles.screenText}>Aptitude</Text>
    </Pressable>
  </View>
</View>
  
  </ScrollView>

   
  
   
    </>
  );  
};

const styles = StyleSheet.create({
 
  text:{
      margin:20,
      fontSize:20,
      color:'black'
  },
  
  drawerButtonContainer: {
    paddingTop: 20, // Adjust this value to create space between status bar and the button
    paddingHorizontal: 20,
  },

  mainContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  drawerContent: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    
  },
  
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#ffffff', // Adjust background color as needed
  },
  menuContainer: {
    marginRight: 10,
  },
  menuIcon: {
    width: 30,
    height: 30,
  },
  logoText: {
    flex:1,
    fontSize: 22,
    fontWeight: 'bold',
    color:'#353935',
    paddingLeft:25
   
  },
  container1: {

    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#00FFFF'
  },
  centeredContainer: {
    alignItems: 'center',
    backgroundColor:'#00FFFF',
  },
  pressable: {
    marginVertical: 10, // Adjust as needed
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    borderColor: '#420475',
    backgroundColor:"#FFAC1C",
    borderRadius: 10,
    elevation: 2, // for shadow (Android)
    height:50,
    width:324,
    
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    width: '70%',
    height:'20%',
    borderColor: '#420475',

    backgroundColor:"#420475",
    borderRadius: 10,
    elevation: 2, // for shadow (Android)
    shadowColor: '#000', // for shadow (iOS)
    shadowOpacity: 0.3, // for shadow (iOS)
    shadowOffset: { width: 0, height: 2 }, // for shadow (iOS)
  },
  screenText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    },
});


export default HomeScreen;
