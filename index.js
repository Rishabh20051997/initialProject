import { Navigator } from './src/NavigationModule'
import React, { Component } from 'react'
import { AppRegistry, StatusBar, View } from 'react-native'
import { colors } from './src/Common';

export default class App extends Component {
    render() {

        return (
            <View style={{ flex: 1 }}>
                <StatusBar backgroundColor={colors.THEME_COLOR} barStyle="light-content" />
                <Navigator />
            </View>
        )
    }
}
AppRegistry.registerComponent('initialProject', () => App)