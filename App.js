// import react Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// create the navigator
const Stack = createNativeStackNavigator();

import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  disableNetwork,
  enableNetwork,
} from 'firebase/firestore';

// import the screens
import ShoppingLists from './components/Lists';
import Welcome from './components/Welcome';
import { useNetInfo } from '@react-native-community/netinfo';
import { useEffect, useState } from 'react';

import { Alert, LogBox } from 'react-native';
LogBox.ignoreLogs(['AsyncStorage has been extracted from']);

import { FIREBASE_CONFIG } from '@env';

const App = () => {
  const connectionStatus = useNetInfo();

  // initialize Firebase, and get the configuration from .env
  const app = initializeApp(JSON.parse(FIREBASE_CONFIG));

  // initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app);

  useEffect(() => {
    if (connectionStatus.isConnected === false) {
      Alert.alert('Connection Lost!!');
      disableNetwork(db);
    } else if (connectionStatus.isConnected === true) {
      enableNetwork(db);
    }
  }, [connectionStatus.isConnected]);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Lists">
          {(props) => (
            <ShoppingLists
              isConnected={connectionStatus.isConnected}
              db={db}
              {...props}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
