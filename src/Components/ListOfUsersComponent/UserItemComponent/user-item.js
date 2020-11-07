import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
// Icons
import { FontAwesome } from '@expo/vector-icons';

export const  UserListItem = ({item, props, id}) => {
    return(
        <View style={styles.container}>
            <View style={styles.circle}>
                <Text style={{color: 'black'}}>JS</Text>
            </View>
            <View style={styles.nameEmail}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.email}>{item.email}</Text>
            </View>
            <TouchableOpacity 
                style={styles.numberOfPosts}
                onPress={() => props.navigation.navigate('Posts', {
                    itemId: id,
                    itemName: item.name
                 })}
                >
                <Text style={{fontFamily: 'roboto-italic'}}>5 posts</Text>
                <FontAwesome name="angle-right" size={24} color="black" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    nameEmail: {
        width: 190,
        marginTop: 30,
    },
    numberOfPosts: {
        flex: 0.4,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 20
    },
    circle: {
        width: 40,
        height: 40,
        borderRadius: 50,
        borderColor: '#6FCF97',
        backgroundColor: '#6FCF97',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 33
    },
    name: {
        fontSize: 16, 
        lineHeight: 24, 
        letterSpacing: 0.44, 
        fontFamily: 'roboto-italic'
    },
    email: {
        opacity: 0.5, 
        fontFamily: 'roboto-italic'
    }
});