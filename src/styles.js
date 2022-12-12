import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: #373737;
    padding-top: 45px;
`;

export const Logo = styled.Text`
    font-size: 35px;
    text-align: center;
    color: #FFF;
    font-weight: bold;
`;

export const Title = styled.Text`
    font-size: 25px;
    margin-left: 15px;
    color: #FFF;
    margin-top: 10px;
    
`;

export const Input = styled.TextInput`
    height: 40px;
    margin-left: 15px;
    margin-bottom: 10px;
    margin-right: 15px;
    padding: 5px;
    border-radius: 5px;
    background-color: #FFF;
`;

export const CenterView = styled.View`
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
`;

export const Btn = styled.TouchableOpacity`
    background-color: #FFF;
    height: 40px;
    border-radius: 5px;
    padding: 5px;
    width: 100px;
    margin-top: 10px;
`;

export const BtnText = styled.Text`
    font-size: 17px;
    text-align: center;
    color: #000;

`;

export const List = styled.FlatList.attrs({
    contentContainerStyle: {paddingHorizontal: 20}
})`
    margin-top: 20px

`;