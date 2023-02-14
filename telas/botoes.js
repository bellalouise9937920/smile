import React from 'react'
import {View,
TouchableOpacity,
Text,
StyleSheet,} from 'react-native'
import {Component} from 'react'
import {NavigationContainer} from '@react-navigation/native' 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import Pesquisa from './teladepesquisa.js'
import Transacao from'./teladetransacao.js'

const Tab = createBottomTabNavigator () 
export default class Button extends Component {
    render () {
        return (
            <SafeAreaProvider>
                <NavigationContainer>
                    <Tab.Navigator>
                  <Tab.Screen name= "Transacao" component = {Transacao}>
                  </Tab.Screen>
                  <Tab.Screen name= "Pesquisa" component = {Pesquisa}>
                  </Tab.Screen>
                  </Tab.Navigator>
                </NavigationContainer>
            </SafeAreaProvider>
        )
    }
}

