import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

// screen imports
import HomeScreen from '../screens/HomeScreen'
import AboutScreen from '../screens/AboutScreen'
import BrowserScreen from '../screens/BrowserScreen'

import colors from '../constants/colors'

const SugameNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            headerShown: false,
        }
    },
    About: {
        screen: AboutScreen,
        navigationOptions: {
            headerStyle: {
                backgroundColor: colors.primaryContent
            },
            headerTitleStyle: {
                fontFamily: 'app-name',
                textTransform: 'uppercase',
                color: colors.background
            },
            headerTintColor: colors.background
        }
    },
    Browser: {
        screen: BrowserScreen,
        navigationOptions: {
            headerStyle: {
                backgroundColor: colors.primaryContent
            },
            headerTitleStyle: {
                fontFamily: 'app-name',
                textTransform: 'uppercase',
                color: colors.background
            },
            headerTintColor: colors.background
        }
    }
})

export default createAppContainer(SugameNavigator); 