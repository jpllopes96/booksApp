import React from 'react';
import { View, Text } from 'react-native';
import { Container, Name, Price, CenterView, Btn, BtnText } from './styles';

export default function Books({data}) {
 return (
   <Container>
        <Name>{data.name}</Name>
        <Price>R$ {data.price}</Price>

        <CenterView>
            <Btn>
              <BtnText>Edit</BtnText>
            </Btn>

            <Btn>
              <BtnText>Delete</BtnText>
            </Btn>
        </CenterView>
    </Container>
  );
}