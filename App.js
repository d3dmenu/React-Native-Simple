import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { creatStackNavigator, createStackNavigator } from "react-navigation-stack";
import LoadingScreen from "./screens/LoadingScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import HomeScreen from "./screens/HomeScreen";

import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAZNCGKq1aVkbzzEBG-iN2M-Pk747PO9Rg",
  authDomain: "imdee-6b24f.firebaseapp.com",
  databaseURL: "https://imdee-6b24f.firebaseio.com",
  projectId: "imdee-6b24f",
  storageBucket: "imdee-6b24f.appspot.com",
  messagingSenderId: "221477691962",
  appId: "1:221477691962:web:5c5158c711e999f23c8b03",
  measurementId: "G-HPF6KZZZCF"
};

firebase.initializeApp(firebaseConfig);

const AppStack = createStackNavigator({
    Home: HomeScreen
});

const AuthStack = createStackNavigator({
    Login: LoginScreen,
    Register: RegisterScreen
});

export default createAppContainer(
    createSwitchNavigator(
        {
            Loading: LoadingScreen,
            App: AppStack,
            Auth: AuthStack
        },
        {
            initialRouteName: "Loading"
        }
    )
);