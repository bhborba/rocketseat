import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
    Container,
    ProductTable,
    Order,
    EndOrderButton,
    Total,
    TotalText,
    TotalPrice,
    Product,
    ProductInfo,
    ProductImage,
    ProductTitle,
    ProductPrice,
    ProductDetails,
    ProductDelete,
    ProductControls,
    ProductControlButton,
    ProductAmount,
    ProductSubtotal,
    Final,
} from './styles';

export default function Cart() {
    return (
        <Container>
            <ProductTable>
                <Product>
                    <ProductInfo>
                        <ProductImage
                            source={{
                                uri:
                                    'https://static.netshoes.com.br/produtos/tenis-adidas-grand-court-base-feminino/05/COL-7145-205/COL-7145-205_zoom1.jpg',
                            }}
                        />
                        <ProductDetails>
                            <ProductTitle>Tenis daora</ProductTitle>
                            <ProductPrice>R$2000</ProductPrice>
                        </ProductDetails>
                        <ProductDelete>
                            <Icon
                                name="delete-forever"
                                size={24}
                                color="#7159c1"
                            />
                        </ProductDelete>
                    </ProductInfo>
                    <ProductControls>
                        <ProductControlButton>
                            <Icon
                                name="remove-circle-outline"
                                size={20}
                                color="#7159c1"
                            />
                        </ProductControlButton>
                        <ProductAmount>3</ProductAmount>
                        <ProductControlButton>
                            <Icon
                                name="add-circle-outline"
                                size={20}
                                color="#7159c1"
                            />
                        </ProductControlButton>
                        <ProductSubtotal>R$ 6000</ProductSubtotal>
                    </ProductControls>
                </Product>
            </ProductTable>

            <Final>
                <Total>
                    <TotalText>TOTAL</TotalText>
                    <TotalPrice>R$ 1200</TotalPrice>
                </Total>
                <Order>
                    <EndOrderButton>Finalizar Pedido</EndOrderButton>
                </Order>
            </Final>
        </Container>
    );
}
