import React from 'react';
import {View, FlatList} from 'react-native';
// Components
import UserListItem from './UserItemComponent';

export const ListOfUsers = ({usersData, props}) => {
    return(
        <View>
            <FlatList 
                data={usersData}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => <UserListItem item={item} props={props} id={item.id}/>}
            />
        </View>
    );
};