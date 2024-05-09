import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Onboarding = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.onboardImg}>



                <Image source={require('../../assets/images/onboard1.png')} style={styles.image2} />

            </View>
            <View style={styles.getStart}>
                <View style={styles.content}>
                    <View>

                        <Text>Welcome To</Text>
                        <Text style={styles.bigText}>A DRIVE APP</Text>
                    </View>
                    <Text style={styles.text}>Welcome to the ultimate driving theory test preparation app. Let's get you ready for success!"</Text>
                    <TouchableOpacity onPress={()=>navigation.navigate('Home')} style={styles.button}><Text style={{ color: 'white' }}>Get Started</Text></TouchableOpacity>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FF9F00',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: 4,

        alignItems: 'center',
    },
    onboardImg: {
        display: 'flex',
        flexDirection: 'row',
        gap: 20
    },
    image2: {
        width: "100%",
        height: 600,
        top: 0,
        objectFit: 'contain'
    },

    getStart: {
        padding: 40,
        backgroundColor: 'white',
        bottom: 0,
        position: 'absolute',
        width: '100%',
        borderTopEndRadius: 24,
        borderTopStartRadius: 24,
        height: 350,
        zIndex: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'end',
        gap: 10,
        justifyContent: "flex-end"
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        bottom: '0',
        gap: 20,
    },
    text: {
        fontSize: 16

    },
    bigText: {
        fontSize: 20,
        color: 'black',
        fontWeight: '700',

    },
    button: {
        backgroundColor: '#F7B733',
        borderRadius: 12,
        padding: 16,
        display: 'flex',
        alignItems: 'center'
    }

})

export default Onboarding