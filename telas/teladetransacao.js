import React from 'react'
import {View,
TouchableOpacity,
Text,
StyleSheet,} from 'react-native'
import {Component} from 'react'
import {BarCodeScanner} from 'expo-barcode-scanner'
import  Permission  from 'expo-permissions'

export default class Transacao extends Component {
    constructor (props) {
        super (props) 
            this.state= {
                domstate:  'normal',
                hascamerapermissions: null,
                scanned: 'false',
                scanneddata: ''
            }
    }
    obterPermissaoDeCamera = async(domState)=> {
        const {status}= await Permissions.askAsync (Permissions.CAMERA)
        this.setState ({hascamerapermissions: status == "granted",
    domState: domState, scanned: false}) 
    }
    handleBarCodeScanned = async({type, data})=> {
        this.setState ({scanneddata: data, domState: "normal", scanned: true})
    }
    render () {
        const {domState, scanned, scanneddata, hascamerapermission}= this.state
        if (domState == "scanner") {
            return (
                <BarCodeScanner onBarCodeScanned= {scanned? undefined: this.handleBarCodeScanned} 
                style= {StyleSheet.absoluteFillObject}>
                </BarCodeScanner>
            )
        }
        return (
            <View style = {styles.OrganizationStyle}>
                <Text style= {styles.TextStyle}>
                        {hascamerapermission ? scanneddata: "Solicitar Permissão de Camera"}
                    </Text>
                <TouchableOpacity style = {styles.ButtonStyle}onPress= {()=> this.obterPermissaoDeCamera ("scanner")}>
                    <Text style= {styles.TextStyle}>
                        qr code
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create ({
    OrganizationStyle: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "blue"
    },
    TextStyle: {
        fontSize: 30,
        color: "white",
    },
    ButtonStyle: {
        width: '43%',
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        borderRadius: 15,
    }
})