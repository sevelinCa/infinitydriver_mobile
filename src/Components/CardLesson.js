import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const CardLesson = ({ item }) => {
    return (
        <View style={styles.card}>
            {item.imageUrl}
            <View style={styles.cardContent}> 
                <View style={{display:'flex',flexDirection:'column',alignItems:'start'}}>

                <Text> {item.title}</Text>
                <Text> {item.description}</Text>

                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    card: {
        marginRight:8,
        backgroundColor: '#F8F8F8',
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        borderRadius:10,


    },
    cardContent:{
        padding:10,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        
    }
})

export default CardLesson