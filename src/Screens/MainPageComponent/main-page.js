import React, {useState} from 'react';
import {Text, View, StyleSheet, Dimensions, TextInput, ScrollView} from 'react-native';
// Icons
import { FontAwesome } from '@expo/vector-icons';
// Components
import ListOfUsers from '../../Components/ListOfUsersComponent';
import TopHeader from '../../Components/TopHeader';

const {width, height} = Dimensions.get('window');

export const MainPage = ({usersData, props}) => {
    const [inpValue, setInpValue] = useState('');
    const [filtered, setFiltered] = useState(false);
    const [userDataFiltered, setUserDataFiltered] = useState();
    const onChangeInputHandler = (text) => {
        setInpValue('');
        setInpValue(text);
        const filtereds = usersData.filter((e) => {
            if (e.name.includes(inpValue)) {
                return e.name.includes(inpValue)
            }  
            if (e.email.includes(inpValue)) {
                return e.email.includes(inpValue)
            }
        });
        setUserDataFiltered(filtereds);
        if (filtereds.length) {
         setFiltered(true);     
        } else {
        //    Need to fix problem with this part, to show all data if not filtered
        setFiltered(false)
        }
    }
    return(
        <ScrollView style={{backgroundColor: '#FFFFFF'}}>
            <View style={styles.maincontainer}>
                <View>
                    <TopHeader />
                </View>
                <View style={styles.text}>
                    <Text style={{lineHeight: 24, fontSize: 16}}>Authors</Text>
                </View>
                <View style={styles.inputContainer}>
                    <FontAwesome style={styles.icon} name="search" size={19} color="black" />
                    <TextInput
                        defaultValue='Search'
                        clearTextOnFocus={true}
                        style={styles.input} 
                        onChangeText={(text) => {
                            onChangeInputHandler(text)
                        }}
                        onSubmitEditing={() => setFiltered(false)}>
                    </TextInput>
                </View>
                <View style={styles.listConteiner}>
                    <ListOfUsers usersData={(filtered) ? userDataFiltered : usersData} props={props}/>
                </View>
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
        flex: 1,
        borderColor: '#382A2C',
        borderWidth: 1,
        borderRadius: 4,
        marginLeft: 16,
        marginRight: 16,
        height: 40,
        justifyContent: 'center',
        marginTop: 12,
        opacity: 0.4,
        backgroundColor: '#382A2C'
    },
    input: {
        width: 350,
        height: 38,
        lineHeight: 20,
        marginLeft: 40,
        position:'absolute',
        bottom: 0.5,
    },
    icon: {
        marginLeft: 8
    },
    text: {
        marginLeft: 16,
        height: 40,
        width: 280,
        justifyContent: 'center',
        fontFamily: 'roboto-italic'
    },
    listConteiner: {
        flex: 1
    },
});