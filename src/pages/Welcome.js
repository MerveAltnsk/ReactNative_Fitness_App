import React from 'react';
import { SafeAreaView,View,Text,StyleSheet,ImageBackground  } from 'react-native';
import Button from '../components/Button';


function Welcome({navigation}){                      // burdan başka sayfaya yönlendirme yapacağım için navigation parametresini kullandım

    function goToMemberSign(){
        navigation.navigate('MemberSignScreen');
    }

    return (
        <ImageBackground
            source={require('../assets/img10.jpg')} 
            style={styles.background}
            resizeMode="cover"
        >
             <SafeAreaView style={styles.container}>
            <View style={styles.innerContainer}> 
                <Text style={styles.header}>Dumbledore Gym</Text>
                <Text style={styles.header2}>Welcome</Text>
                <Button text="Create a membership registration" onPress={goToMemberSign} />
            </View>
            </SafeAreaView>


        </ImageBackground>
       
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    innerContainer: {
        alignItems: 'center', // İçindeki tüm metinleri ve butonu ortala
    },
    header: {
        fontSize: 30,
        margin: 10,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
    },
    header2: {
        fontSize: 20,
        margin: 10,
        color: '#333',
        textAlign: 'center',
    }
});

export default Welcome;