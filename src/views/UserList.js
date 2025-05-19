import React from 'react';
import {  View, FlatList,Alert } from 'react-native';
import User from '../data/User';
import { ListItem, Avatar, Button, Icon } from 'react-native-elements'

export default props => {

function deletion(user){

  Alert.alert('excluir usuario','deseja excluir o usuario?'),[
    {
      text:'sim', 
      onPress(){
         console.warn('delete'+ user.id);
      }
    },
    {
      text:'não'
    }
  ]

}

  function getActions(user) {
    return (
      <View style={{ flexDirection: 'row', gap: 10 }}>
        <Button
          icon={<Icon name='edit' size={20} color='orange' />}
          type='clear'
        />
        <Button 
        onPress={()=>deletion(user)}
          icon={<Icon name='delete' size={20} color='red' style={{}} />}
          type='clear'
        />
      </View>

    )
  }


  function getUserItem({ item: user }) {
    return (
      <ListItem bottomDivider onPress={() => props.navigation.navigate('UserForm')}>
        <Avatar size={55} rounded source={{ uri: user.avatarUrl }} />

        <ListItem.Content >
          <ListItem.Title size={1} >{user.name}</ListItem.Title>
          <ListItem.Subtitle size={0.5}>{user.email}</ListItem.Subtitle>
        </ListItem.Content>

        <ListItem.Content>{getActions(user)}</ListItem.Content>
      </ListItem>
    );
  }

  return (

    <FlatList
      keyExtractor={User => User.id.toString()}
      data={User}
      renderItem={getUserItem}
    />


  );
};

