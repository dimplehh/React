import React, { Component } from 'react';
import { Animated, StyleSheet, Text, View, Button} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

function HomeScreen({navigation}){
    return(
      <View style = {{flex : 1, alignItems : 'center', justifyContent : 'center',}}>
        <Text>Home Screen입니다.</Text>
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

export default class SwipeableRow extends Component {
    renderLeftActions = (progress, dragX) => {
        const trans = dragX.interpolate({
            inputRange: [0, 50, 100, 101],
            outputRange: [-20, 0, 0, 1],
        });
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Welcome' }}/>
                </Stack.Navigator>
            </NavigationContainer>
        );
    };

    render() {
        return (
                <Swipeable renderLeftActions={this.renderLeftActions}>
                    <RectButton style={styles.rectButton}>
                    </RectButton>
                </Swipeable>
        );
    }
}

const styles = StyleSheet.create({
    leftAction: {
    flex: 1,
    backgroundColor: 'cyan',
    justifyContent: 'center',
    },
    actionText: {
    color: 'black',
    fontSize: 16,
    },
    rectButton: {
    width:'100%',
    height: '100%',
    backgroundColor: 'blue',
    },
});