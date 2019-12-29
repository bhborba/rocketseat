import styled from 'styled-components/native';

import logo from '../../assets/images/logo.png';

export const Wrapper = styled.SafeAreaView`
    flex: 1;
    padding: 30px;
    background: #191920;
`;

export const Container = styled.View`
    flex: 1;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    padding: 20px;
`;
export const Image = styled.Image.attrs({
    source: logo,
    resizeMode: 'cover',
})`
    width: 185px;
    height: 24px;
`;

export const ShoppingBasket = styled.TouchableOpacity`
    height: 24px;
    width: 24px;
    flex: 1;
    align-items: flex-end;
    justify-content: flex-end;
`;
