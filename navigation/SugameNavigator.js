import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

// screen imports
import HomeScreen from '../screens/HomeScreen'
import AboutScreen from '../screens/AboutScreen'
import BrowserScreen from '../screens/BrowserScreen'

const SugameNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            headerShown: false,
        }
    },
    About: AboutScreen,
    Browser: {
        screen: BrowserScreen
    }
})

export default createAppContainer(SugameNavigator); 