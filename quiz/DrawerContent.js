import {React,useState,useEffect} from 'react';
import {View, StyleSheet, Text, Pressable, TouchableOpacity} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {useNavigation,StackActions} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Sound from 'react-native-sound';

function DrawerContent(props) {
  const Navtorank=()=>{
    props.navigation.navigate('rank');
  }
  const feetback=()=>{
    props.navigation.navigate('feedback');
  }
  const navigation = useNavigation();
  const [userData, setUserData] = useState(null);

  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Load the sound file when the component mounts
  const mySound = new Sound('music.mp3', Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log('Failed to load the sound', error);
        return;
      }
      
      setSound(mySound);
   
    });

    // Unload the sound file when the component unmounts
    return () => {
      if (sound) {
        sound.release();
      }
    };
  }, []);

  const toggleSound = () => {
    if (sound) {
      if (isPlaying) {
        sound.stop();
      } else {
        
        

         
        sound.play();
        sound.setNumberOfLoops(-1);
      }
      setIsPlaying(!isPlaying);
    }
  };
  const getUser = async () => {
    try {
      const userData = await AsyncStorage.getItem("name");
      console.log(userData);
      return userData;
    } catch (error) {
     console.log(error); 
    }
    
  };
  useEffect(() => {
    getUser().then((data) => setUserData(data));
  }, []);
 
function signOut(){
  sound.stop();
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

  
  navigation.navigate("LoginUser")

}
  return (
    <>
    <View>
        <Text style={styles.text}>Hello {userData}</Text>
    </View>
    <View style={{marginLeft:5,backgroundColor:'orange',borderRadius:15}}>
      <TouchableOpacity onPress={toggleSound} style={{ padding: 10,  borderRadius: 5, }}>
        <Text style={{ fontSize: 18 ,color:'black'}}>{isPlaying ? 'Stop Sound' : 'Play Sound'}</Text>
      </TouchableOpacity>
    </View>
    <View style={{marginLeft:5,backgroundColor:'orange',borderRadius:15,marginTop:10}}>
      <TouchableOpacity onPress={Navtorank} style={{ padding: 10,  borderRadius: 5, }}>
        <Text style={{ fontSize: 18 ,color:'black'}}>Leaderboard</Text>
      </TouchableOpacity>
    </View>
    <View style={{marginLeft:5,backgroundColor:'orange',borderRadius:15,marginTop:10}}>
      <TouchableOpacity onPress={feetback} style={{ padding: 10,  borderRadius: 5, }}>
        <Text style={{ fontSize: 18 ,color:'black'}}>Feedback form</Text>
      </TouchableOpacity>
    </View>
      <View style={styles.bottomDrawerSection}>
        <DrawerItem
         onPress={()=>signOut()}
          icon={({color, size}) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Log Out"
        />
      </View>
      </>
  );
}
export default DrawerContent;

const styles = StyleSheet.create({
  
  text:{
    margin:20,
    fontSize:20,
    color:'black',
    
    
},
  bottomDrawerSection: {
    flex:1,
    flexDirection:'column-reverse',
    marginBottom: 15,
    borderTopColor: '#dedede',
    borderTopWidth: 1,
    borderBottomColor: '#dedede',
    borderBottomWidth: 1,
  },
  
});
