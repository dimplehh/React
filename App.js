/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';
import {StyleSheet,Text,View,Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

function HomeScreen({navigation}){
  return(
    <View style = {{flex : 1, alignItems : 'center', justifyContent : 'center',}}>
      <Text>Home Screen입니다.</Text>
      <Button title="버튼" onPress={()=> navigation.navigate('Profile')}/>
    </View>
  );
}

function ProfileScreen(){
  return(
    <View style = {{flex : 1, alignItems : 'center', justifyContent : 'center',}}>
      <Text>ProfileScreen입니다.</Text>
    </View>
  );
}

const App: () => Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Welcome' }}/>
        <Stack.Screen name="Profile" component={ProfileScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
});

export default App;