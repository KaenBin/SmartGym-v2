import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'react-native-elements';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { assets } from './react-native.config'
import * as SecureStore from 'expo-secure-store';
import client from './src/api/client'
import axios from 'axios';

import {
  SignInScreen,
  SignUpScreen,
  SplashScreen,
  HomeScreen,
  HistoryScreen,
  ExercisesScreen,
  PersonalScreen,
  MuscleGroups,
  Chest,
  Back,
  Biceps,
  Triceps,
  Shoulders,
  Legs,
  Abs,
  FullBody,
  ExerciseDetail,
  CounterApp,
  Levels,
  Beginner,
  Amateur,
  Professional
} from './src/index';

import GymScreen from './src/screens/GymScreen'

import { AuthContext } from './src/screens/utils';
import { Alert } from 'react-native';

// import { SearchBar } from './src';


const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();
// const baseURrl = 'http://localhost:8000/'

function Exercises({ route }) {
  let userToken = route.params.userToken;
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ExercisesScreen"
        component={ExercisesScreen}
        options={{
          headerStyle: { backgroundColor: "#2F486D", },
          headerTintColor: 'white',
          headerTitle: 'MY EXERCISES',
          headerTitleAlign: 'center',
        }}
        initialParams={{ userToken: userToken }}
      />
      <Stack.Screen
        name="MuscleGroups"
        component={MuscleGroups}
        options={{
          headerStyle: { backgroundColor: "#2F486D", },
          headerTintColor: 'white',
          headerTitle: 'CHOOSE THE MUSCLE GROUP',
          headerTitleAlign: 'center',
          headerTitleStyle: { fontWeight: '200', fontSize: 20, }
        }}
      />
      <Stack.Screen
        name="CounterApp"
        component={CounterApp}
        options={{
          headerStyle: { backgroundColor: "#2F486D", },
          headerTintColor: 'white',
          headerTitle: 'TIME COUNTER',
          headerTitleAlign: 'center',
          headerTitleStyle: { fontWeight: '200', fontSize: 20, }
        }}
      />
      <Stack.Screen
        name="Chest"
        component={Chest}
        options={{
          headerStyle: { backgroundColor: "#2F486D", },
          headerTintColor: 'white',
          headerTitleAlign: 'center',
          headerTitleStyle: { fontWeight: '200', fontSize: 20, }
        }}
      />
      <Stack.Screen
        name="Back"
        component={Back}
        options={{
          headerStyle: { backgroundColor: "#2F486D", },
          headerTintColor: 'white',
          headerTitleAlign: 'center',
          headerTitleStyle: { fontWeight: '200', fontSize: 20, }
        }}
      />
      <Stack.Screen
        name="Biceps"
        component={Biceps}
        options={{
          headerStyle: { backgroundColor: "#2F486D", },
          headerTintColor: 'white',
          headerTitleAlign: 'center',
          headerTitleStyle: { fontWeight: '200', fontSize: 20, }
        }}
      />
      <Stack.Screen
        name="Triceps"
        component={Triceps}
        options={{
          headerStyle: { backgroundColor: "#2F486D", },
          headerTintColor: 'white',
          headerTitleAlign: 'center',
          headerTitleStyle: { fontWeight: '200', fontSize: 20, }
        }}
      />
      <Stack.Screen
        name="Shoulders"
        component={Shoulders}
        options={{
          headerStyle: { backgroundColor: "#2F486D", },
          headerTintColor: 'white',
          headerTitleAlign: 'center',
          headerTitleStyle: { fontWeight: '200', fontSize: 20, }
        }}
      />
      <Stack.Screen
        name="Legs"
        component={Legs}
        options={{
          headerStyle: { backgroundColor: "#2F486D", },
          headerTintColor: 'white',
          headerTitleAlign: 'center',
          headerTitleStyle: { fontWeight: '200', fontSize: 20, }
        }}
      />
      <Stack.Screen
        name="Abs"
        component={Abs}
        options={{
          headerStyle: { backgroundColor: "#2F486D", },
          headerTintColor: 'white',
          headerTitleAlign: 'center',
          headerTitleStyle: { fontWeight: '200', fontSize: 20, }
        }}
      />
      <Stack.Screen
        name="Full Body"
        component={FullBody}
        options={{
          headerStyle: { backgroundColor: "#2F486D", },
          headerTintColor: 'white',
          headerTitleAlign: 'center',
          headerTitleStyle: { fontWeight: '200', fontSize: 20, }
        }}
      />
      <Stack.Screen
        name="Exercise Detail"
        component={ExerciseDetail}
        options={{
          headerTintColor: 'white',
          headerStyle: { backgroundColor: "#2F486D", },
          headerTitleStyle: { color: '#2F486D' }
        }}
        initialParams={{ userToken: userToken }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  // const fetchAPI = async() => {
  //   try {
  // const res = await axios.get(baseURrl);
  // console.log(res.data);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // }

  // useEffect(() => {
  //   fetchAPI();
  // }, [])

  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          if (action.token) {
            SecureStore.setItemAsync('userToken', action.token);
          }
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          SecureStore.deleteItemAsync('userToken');
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );

  useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        // Restore token stored in `SecureStore` or any other encrypted storage
        userToken = await SecureStore.getItemAsync('userToken');
      } catch (error) {
        // Restoring token failed
        console.log(error.message);
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    // fetchAPI();
    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({

      signIn: async (data) => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `SecureStore` or any other encrypted storage
        // In the example, we'll use a dummy token
        userToken = null
        await client.post('/login', data)
          .then((res) => {
            userToken = res.data.token
          })
          .catch((err) => {
            Alert.alert(err.response.data.error)
          })
        dispatch({ type: 'SIGN_IN', token: userToken });
      },
      signOut: () => dispatch({ type: 'SIGN_OUT' }),
      signUp: async (data) => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `SecureStore` or any other encrypted storage
        // In the example, we'll use a dummy token
        await client.post('/signup', data)
          .then((res) => {
            userToken = res.data.token
          })
          .catch((err) => {
            Alert.alert(err.response.data.error)
          })
        dispatch({ type: 'SIGN_IN', token: userToken });

      },
    }), []);
  return (
    <SafeAreaProvider>
      <AuthContext.Provider value={authContext}>
        <ThemeProvider>
          <NavigationContainer>
            <Stack.Navigator>
              {state.isLoading ? (
                // We haven't finished checking for the token yet
                <Stack.Screen name="Splash" component={SplashScreen} />
              ) : state.userToken == null ? (
                <>
                  <Stack.Screen
                    name="SignInScreen"
                    component={SignInScreen}
                    options={{
                      title: 'Sign in',
                      headerShown: false,
                      // When logging out, a pop animation feels intuitive
                      animationTypeForReplace: state.isSignout ? 'pop' : 'push',
                    }}
                  />
                  <Stack.Screen
                    name="SignUpScreen"
                    component={SignUpScreen}
                    options={{
                      headerStyle: { backgroundColor: "#2F486D", },
                      headerTintColor: 'white',
                      headerTitle: 'SIGN UP',
                      headerTitleAlign: 'center',
                      headerBackVisible: false,
                    }}
                  />
                </>
              ) : (
                // User has signed in
                <Stack.Screen
                  name="HomeScreen"
                  component={HomeScreen}
                  options={{ headerShown: false }}
                />
              )}

              <Stack.Screen
                name="HistoryScreen"
                component={HistoryScreen}
                options={{
                  headerStyle: { backgroundColor: "#2F486D", },
                  headerTintColor: 'white',
                  headerTitle: 'TRAINING HISTORY',
                  headerTitleAlign: 'center',
                }}
              />
              <Stack.Screen
                name="Exercises"
                component={Exercises}
                options={{ headerShown: false }}
                initialParams={{ userToken: state.userToken }}
              />
              <Stack.Screen
                name="GymScreen"
                component={GymScreen}
                options={{
                  headerStyle: { backgroundColor: "#2F486D", },
                  headerTintColor: 'white',
                  headerTitle: 'GYM INFORMATION',
                  headerTitleAlign: 'center',
                }}
              />
              <Stack.Screen
                name="PersonalScreen"
                component={PersonalScreen}
                options={{
                  headerStyle: { backgroundColor: '#2F486D', },
                  headerTintColor: 'white',
                  headerTitle: 'PERSONAL INFORMATION',
                  headerTitleAlign: 'center',
                }}
              />
              <Stack.Screen
                name="LevelScreen"
                component={Levels}
                options={{
                  headerStyle: { backgroundColor: '#2F486D', },
                  headerTintColor: 'white',
                  headerTitle: 'LEVELS OF TRAINING',
                  headerTitleAlign: 'center',
                }}
              />
              <Stack.Screen
                name="Beginner"
                component={Beginner}
                options={{
                  headerStyle: { backgroundColor: '#2F486D', },
                  headerTintColor: 'white',
                  headerTitle: 'BEGINNER PHASE',
                  headerTitleAlign: 'center',
                  headerTitleStyle: { fontWeight: '200', fontSize: 20, }
                }}
                initialParams={{ userToken: state.userToken }}
              />
              <Stack.Screen
                name="Amateur"
                component={Amateur}
                options={{
                  headerStyle: { backgroundColor: '#2F486D', },
                  headerTintColor: 'white',
                  headerTitle: 'AMATEUR PHASE',
                  headerTitleAlign: 'center',
                  headerTitleStyle: { fontWeight: '200', fontSize: 20, }
                }}
                initialParams={{ userToken: state.userToken }}
              />
              <Stack.Screen
                name="Professional"
                component={Professional}
                options={{
                  headerStyle: { backgroundColor: '#2F486D', },
                  headerTintColor: 'white',
                  headerTitle: 'PROFESSIONAL PHASE',
                  headerTitleAlign: 'center',
                  headerTitleStyle: { fontWeight: '200', fontSize: 20, }
                }}
                initialParams={{ userToken: state.userToken }}
              />
            </Stack.Navigator>
            <StatusBar />
          </NavigationContainer>
        </ThemeProvider>
      </AuthContext.Provider>
    </SafeAreaProvider>
  )
}
