import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, Image, ShoppingBasket, Wrapper } from './styles';

export default function Header({ navigation }) {
    return (
        <Wrapper>
            <Container>
                <Image />
                <ShoppingBasket onPress={() => navigation.navigate('Cart')}>
                    <Icon name="shopping-basket" color="#FFF" size={24} />
                </ShoppingBasket>
            </Container>
        </Wrapper>
    );
}
