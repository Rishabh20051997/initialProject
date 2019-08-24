import { splashScreen ,SignUpPage , LoginPage } from '../Screens'
import {createStackNavigator, createAppContainer} from 'react-navigation'
    
const splashpage = {
    screen: splashScreen,
    navigationOptions: () => ({
      header : null
      // headerBackTitle: null
    }),
  }

const MainNavigator = createStackNavigator({
   splashScreen: splashpage,
    LoginPage: {screen: LoginPage},
  });

export const Navigator = createAppContainer(MainNavigator);

