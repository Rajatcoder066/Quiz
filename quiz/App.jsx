import 'react-native-gesture-handler';
import {
  NavigationContainer,
  useNavigation,
  DrawerActions,
} from '@react-navigation/native';
import HomeScreen from './Screens/HomeScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Entypo';
import DrawerContent from './DrawerContent';
import SplashScreen from 'react-native-splash-screen';
import {useEffect, useState} from 'react';
import LoginPage from './Screens/Login&Register/Login';
import RegisterPage from './Screens/Login&Register/Register';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Level from './Screens/LevelScreen';
import Level1 from './Screens/LevelScreen1';
import Level2 from './Screens/LevelScreen2';
import Level3 from './Screens/LevelScreen3';
import Science from './Screens/Sciennce';
import Science1 from './Screens/Science1';
import Science2 from './Screens/Science2';
import Math from './Screens/Math';
import Math1 from './Screens/Math1';
import Math2 from './Screens/Math2';
import gram from './Screens/Grambasic';
import gram1 from './Screens/Gram1';
import gram2 from './Screens/Gram2';
import gram3 from './Screens/Gram3';
import gram4 from './Screens/Gram4';
import imagebased from './Screens/imagebased';
import Apt from './Screens/Aptitude';
import Apt1 from './Screens/Aptitude1';
import Apt2 from './Screens/Aptitude2';
import Apt3 from './Screens/Aptitude3';
import Apt4 from './Screens/Aptitude4';
import Apt5 from './Screens/Aptitude5';
import rank from './Screens/rank';
import feedback from './Screens/feedback'
import {LogBox } from 'react-native';


const StackNav = () => {
LogBox.ignoreLogs(['Reanimated 2']);
LogBox.ignoreLogs(['']);
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      screenOptions={{
        statusBarColor: '#0163d2',
        headerShown: false,
        headerStyle: {
          backgroundColor: '#0163d2',
        },
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
      
      />
      <Stack.Screen
        name="Level"
        component={Level}
        />
         <Stack.Screen
        name="Level1"
        component={Level1}
        />
         <Stack.Screen
        name="Level2"
        component={Level2}
        />
        <Stack.Screen
        name="Level3"
        component={Level3}
        />
         <Stack.Screen
        name="Science"
        component={Science}
        />
          <Stack.Screen
        name="Science1"
        component={Science1}
        />
        <Stack.Screen
        name="Science2"
        component={Science2}
        />
          <Stack.Screen
        name="Math"
        component={Math}
        />
          <Stack.Screen
        name="Math1"
        component={Math1}
        />
         <Stack.Screen
        name="Math2"
        component={Math2}
        />
         <Stack.Screen
        name="gram"
        component={gram}
        />
          <Stack.Screen
        name="gram1"
        component={gram1}
        />
         <Stack.Screen
        name="gram2"
        component={gram2}
        />
          <Stack.Screen
        name="gram3"
        component={gram3}
        />
         <Stack.Screen
        name="gram4"
        component={gram4}
        />
         <Stack.Screen
        name="image"
        component={imagebased}
        />
         <Stack.Screen
        name="Apt"
        component={Apt}
        />
          <Stack.Screen
        name="Apt1"
        component={Apt1}
        />
          <Stack.Screen
        name="Apt2"
        component={Apt2}
        />
          <Stack.Screen
        name="Apt3"
        component={Apt3}
        />
          <Stack.Screen
        name="Apt4"
        component={Apt4}
        />
          <Stack.Screen
        name="Apt5"
        component={Apt5}
        />
         <Stack.Screen
        name="rank"
        component={rank}
        />
        <Stack.Screen
        name="feedback"
        component={feedback}
        />
      <Stack.Screen name="LoginUser" component={LoginNav}/>
    
    </Stack.Navigator>
  );
};

const DrawerNav = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
      }}>
      <Drawer.Screen name="Home1" component={StackNav} />
     
    </Drawer.Navigator>
  );
};

const LoginNav = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={LoginPage} />
      <Stack.Screen name="Register" component={RegisterPage} />
      <Stack.Screen name="Home" component={DrawerNav} />
    </Stack.Navigator>
  );
};

const HomeS = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  async function getData() {
    const data = await AsyncStorage.getItem('isLoggedIn');
    console.log(data, 'at app.jsx');
    setIsLoggedIn(data);
  }

  useEffect(() => {
    getData();
    setTimeout(() => {
      SplashScreen.hide();
    }, 900);
  }, [isLoggedIn]);

  return (
    <NavigationContainer>
      {isLoggedIn ? <DrawerNav /> : <LoginNav />}
    </NavigationContainer>
  );
}
export default App;
