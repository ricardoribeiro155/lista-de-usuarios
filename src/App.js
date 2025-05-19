import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, } from '@react-navigation/stack';
import UserList from './views/UserList';
import UserForm from './views/UserForm';
import { Header, Button, Icon } from 'react-native-elements';




const Stack = createStackNavigator()

export default props => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='UserList' screenOptions={screenOptions}>

                <Stack.Screen name='UserList' component={UserList}
                    options={({navigation}) => {
                        return {
                            title: "Lista de usuarios",
                            headerRight: () => (
                                <Button
                                    onPress={() => navigation.navigate("UserForm")}
                                    type='clear'
                                    icon={
                                        <Icon name='add' size={25} color='white' style={{
                                            backgroundColor: 'black', borderRadius: 20

                                        }} />}
                                />)
                        }
                    }}

                />


                <Stack.Screen name='UserForm' component={UserForm} options={{ title: 'Formulario de usuario' }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const screenOptions = {
    headerStyle: {
        backgroundColor: '#0000CD'
    }, HeaderTitleStyle: {
        fontWeight: 'bold'
    },
    headerTintColor: 'white'

}
