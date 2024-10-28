import React from 'react';
import { View, Text, StyleSheet,Button,TouchableOpacity,Image } from 'react-native';


function MemberResult({route,props,navigation}){                     // Verileri çekeceğim için rote parametresini kullandık
                                                    // Son sayfam bu başka sayfaya yönlendirme yapmayacağım için navigation parametresini kullanmadım

        const {user} = route.params;                // User verilerini göstermek için parçalamış oluyorum getirmek için


    return(                                         
                                                          
        <View style={styles.container}>
            

            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.button}>
                <Image
                    source={require('../assets/arrow4.png')} 
                    style={styles.image}
                />
            </TouchableOpacity>

            <Text style={styles.message}>Registration completed</Text>
            <Text style={styles.label}>Member Name: {user.Username} </Text>
            <Text style={styles.label}>Member Surname: {user.UserSurname}</Text>
            <Text style={styles.label}>Member Email: {user.UserEmail}</Text>
            <Text style={styles.label}>Member Phone Number: {user.UserPhoneNumber}</Text>
            <Text style={styles.label}>Member Address: {user.UserAddress}</Text>


        </View>

    )
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#FFFFFF',

    },
    label:{
        fontWeight: 'bold',
        fontSize: 20,
        margin: 15,
    },
    message:{
        fontSize: 25,
        fontWeight: 'bold',
        margin: 60,
        textAlign: 'center',
        color: '#13a11a'
    },
    button: {
        position: 'absolute', 
        top: 20, 
        left: 20, 
    },
    image: {
        width: 30,  
        height: 30,
        resizeMode: 'contain',
    },
})

export default MemberResult;