import styled from "styled-components/native";

export const Container = styled.View`
    padding: 20px;
    border-radius: 5px;
    background-color: #FFF;
    margin-bottom: 15px;

`;

export const Name = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: #000;
`;

export const Price = styled.Text `
    font-size: 17px;
    font-style: italic;
    color: #000;
`;

export const CenterView = styled.View`
    flex-direction: row;
    margin-top: 15px;
`;

export const Btn = styled.TouchableOpacity`
    background-color: #DDD;
    padding: 5px;
    margin-right: 15px;
    border-radius: 5px;
`;

export const BtnText = styled.Text`
    color: #000;
    font-size: 17px;

`;