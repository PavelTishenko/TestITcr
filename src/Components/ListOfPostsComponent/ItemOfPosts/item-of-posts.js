import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export const Post = ({item}) => {
    // const itemTitle =`${item.title.charAt(0).toUpperCase()}${item.title.slice(1)}`;
    // const itemBody = `${item.body.charAt(0).toUpperCase()}${item.body.slice(1)}`;
    return(
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.body}>{item.body}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5,
        marginTop: 15
    },
    textContainer: {
        flex: 1, 
        marginBottom: 10, 
        width: 380, 
        borderWidth: 1,
        borderColor: '#ddd',
        borderTopWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 1,
        marginTop: 10,
        paddingBottom: 10
    },
    title: {
        fontSize: 16, 
        paddingLeft: 16,  
        marginBottom: 15,
        fontFamily: 'roboto-black'
    },
    body: {
        lineHeight: 16, 
        fontSize: 12, 
        paddingLeft: 16,
        fontFamily: 'roboto-regular',
        opacity: 0.5,
        letterSpacing: 0.4
    }
});