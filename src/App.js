import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import { Container, Logo, Title, Input, CenterView, Btn, BtnText, List } from './styles';
import Books from './components/Books';

export default function App(){
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [books, setBooks] = useState([]);
  function addBook(){
    alert("Clicou")
  }
  return(
    <Container>
      <Logo>Books Wishlist</Logo>

      <Title>Name</Title>
      <Input autoCapitalize="none" autoCorrect={false} 
        value={name}
        onChangeText={ (text) => setName(text)}
      />

      <Title>Price</Title>
      <Input autoCapitalize="none" autoCorrect={false} 
        value={price}
        onChangeText={ (text) => setPrice(text)}
      />

      <CenterView>
        <Btn onPress={ addBook}>
            <BtnText>Add</BtnText>
        </Btn>

        <Btn>
            <BtnText>Edit</BtnText>
        </Btn>
      </CenterView>
      <List 
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        data={books}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => (<Books data={item} />)}
      />
    </Container>
  )
}