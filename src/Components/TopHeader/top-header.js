import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
// Icons
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const TopHeader = () => {
    return(
        <View style={{flexDirection: 'row', alignItems: 'center',
            justifyContent:'flex-end', marginRight: 10}}>
            <Ionicons style={{opacity: 0.4}} name="ios-square" size={15} color="black" />
            <MaterialCommunityIcons style={{marginLeft: 5, opacity: 0.4}} name="checkbox-blank-circle" size={13} color="black" />
            <FontAwesome style={{marginLeft: 5, opacity: 0.4}} name="caret-down" size={24} color="black" />
        </View>
    );
};

const styles = StyleSheet.create({

});
