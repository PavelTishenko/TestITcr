import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, ScrollView, TextInput} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
// Component
import ListOfPosts from '../Components/ListOfPostsComponent';
import TopHeader from '../Components/TopHeader';

export const PostsList = ({postsData, props}) => {
    const {itemId, itemName} = props.route.params;
    const [inpValue, setInpValue] = useState('');
    const [filtered, setFiltered] = useState(false);
    const [postsDataFiltered, setPostsDataFiltered] = useState([]);
    const onChangeInputHandler = (text) => {
        setInpValue(text);
        const filtereds = postsData.filter((e) => {
            if (e.title.includes(inpValue.toLowerCase())) {
                return e.title.includes(inpValue.toLowerCase())
            }  
            if (e.body.includes(inpValue.toLowerCase())) {
                return e.body.includes(inpValue.toLowerCase())
            }
        });
        setPostsDataFiltered(filtereds);
        if (filtereds.length) {
         setFiltered(true);     
        } else {
        setFiltered(false)
        }
    };
    return(
        <ScrollView bounces={false}>
        <View style={styles.maincontainer}>
            <View>
                <TopHeader />
            </View>
            <View style={{marginTop: 12, marginLeft: 15}}>
                <Text style={{fontFamily: 'roboto-italic', fontSize: 15}}>{itemName}`s Posts</Text>
            </View>
            <View style={styles.inputContainer}>
                <FontAwesome style={styles.icon} name="search" size={19} color="black" />
                <TextInput
                    style={styles.input}
                    clearTextOnFocus={true}
                    defaultValue='Search'
                    onChangeText={(text) => {
                        onChangeInputHandler(text)
                    }}
                    onSubmitEditing={() => {
                        setFiltered(false)
                    }}
                >
                <Text style={styles.textInput}></Text>
                </TextInput>
            </View>
            {/* We can do this using two different things FlatList and just arr.map */}
            <ListOfPosts data={(filtered) ? postsDataFiltered : postsData} itemId={itemId} itemName={itemName}/>
        </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    maincontainer: { 
        flex: 1,
        backgroundColor: '#FFFFFF',
        marginTop: 50,
    },
    inputContainer: {
        borderColor: '#382A2C',
        borderWidth: 1,
        borderRadius: 4,
        marginLeft: 16,
        marginRight: 16,
        height: 40,
        justifyContent: 'center',
        marginTop: 12,
        opacity: 0.4,
        backgroundColor: '#382A2C',
    },
    input: {
        width: 350,
        height: 38,
        // opacity: 0.4,
        lineHeight: 20,
        marginLeft: 30,
        position:'absolute',
        // bottom: 0.5,
        backgroundColor: '#382A2C'
    },
    icon: {
        marginLeft: 8
    },
});