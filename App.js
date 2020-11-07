import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
// Fonts
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// Components
// Get datas
import {getUsers, getPosts} from './src/Services/GetData';
// Screens
import {PostsList} from './src/Screens/Posts';
import MainPage from './src/Screens/MainPageComponent';

const Stack = createStackNavigator();

export default function App() {
  // Load fonts 
  const [loaded] = Font.useFonts({
    'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
    'roboto-italic': require('./assets/fonts/Roboto-Italic.ttf'),
    'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'roboto-black': require('./assets/fonts/Roboto-Black.ttf'),
  });
  // States
  const [usersData, setUsersData] = useState();
  const [postsData, setPostsData] = useState();
  // Get data from API
  useEffect(() => {
    getUsers().then((res) => setUsersData(res.data));
    getPosts().then((res) => setPostsData(res.data));
  }, [])
  if (!loaded) {
    return null;
  } else {
    return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" >
        <Stack.Screen name="Main" > 
          {
            (props) => <MainPage usersData={usersData} props={props}/> 
          }
        </Stack.Screen>
        <Stack.Screen name="Posts"> 
          {
            (props) => <PostsList usersData={usersData} props={props} postsData={postsData}/> 
          }
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
  }
}

const styles = StyleSheet.create({
 
});
