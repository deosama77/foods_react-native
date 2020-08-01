import React from 'react';
import {} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SearchScreen from './Screen/SearchScreen';
import ResultsScreen from './Screen/ResultsScreen';

function App(props) {
  const Stack=createStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{title:"Business App"}}>

              <Stack.Screen name="Search"
                            component={SearchScreen}
              ></Stack.Screen>
                    <Stack.Screen
                    name="ResultsShow"
                    component={ResultsScreen}></Stack.Screen>

                </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
