import React, {useState} from 'react'
import { View, Text, Alert} from 'react-native'
import Input from '../components/Input';
import Button from '../components/Button';


function MemberSign({navigation}){              // burdan başka sayfaya yönlendirme yapacağım için navigation parametresini kullandım

    const [Username, setUserName] = useState(null);
    const [UserSurname, setUserSurname] = useState(null);
    const [UserEmail, setUserEmail] = useState(null);
    const [UserPhoneNumber, setUserPhoneNumber] = useState(null);
    const [UserAddress, setUserAddress] = useState(null);


    function handleSubmit() {

        if(                                             // bu ! ünlem işareti null olup olmadığını kontrol eder boşsa bilgi gilmediğine dair alert gönderir                                                    
            !Username,                  
            !UserSurname,   
            !UserEmail,
            !UserPhoneNumber,
            !UserAddress
        ) {
            Alert.alert("Dumbledore Gym", "Information cannot be left empty.");
            return;
        }
        
        const user = {           // Eğer istenilenler boş değilse user nasnesi oluşturur ve tüm bu değerleri MemberResultScreen sayfasına göndermiş olur 
            Username,
            UserSurname,
            UserEmail,
            UserPhoneNumber,
            UserAddress
        };

        navigation.navigate('MemberResultScreen', {user});
    }


    return(
        <View>
            <Input label="Member Name" placeholder="Please enter member's name" onChangeText={setUserName} />

            <Input label="Member Surname" placeholder="Please enter member's surname" onChangeText={setUserSurname} />

            <Input label="Email" placeholder="Please enter member's email" onChangeText={setUserEmail} />

            <Input label="Phone Number" placeholder="Please enter member's phone number" onChangeText={setUserPhoneNumber} />

            <Input label="Address" placeholder="Please enter member's address" onChangeText={setUserAddress} />

            <Button text="Complete Registration" onPress={handleSubmit}/>

        </View>
    )
}

export default MemberSign;