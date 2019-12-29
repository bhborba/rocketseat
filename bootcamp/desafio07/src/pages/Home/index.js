import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
    ProductList,
    Product,
    ProductImage,
    ProductTitle,
    ProductPrice,
    ProductAmount,
    ProductAmountText,
    AddButtonText,
    AddButton,
} from './styles';

export default function Home() {
    return (
        <ProductList>
            <Product>
                <ProductImage
                    source={{
                        uri:
                            'https://static.netshoes.com.br/produtos/tenis-adidas-grand-court-base-feminino/05/COL-7145-205/COL-7145-205_zoom1.jpg',
                    }}
                />
                <ProductTitle>Tenis top</ProductTitle>
                <ProductPrice>R$ 200</ProductPrice>
                <AddButton>
                    <ProductAmount>
                        <Icon name="add-shopping-cart" size={16} color="#FFF" />
                        <ProductAmountText>3</ProductAmountText>
                    </ProductAmount>
                    <AddButtonText>ADICIONAR</AddButtonText>
                </AddButton>
            </Product>
            <Product>
                <ProductImage
                    source={{
                        uri:
                            'https://static.netshoes.com.br/produtos/tenis-adidas-grand-court-base-feminino/05/COL-7145-205/COL-7145-205_zoom1.jpg',
                    }}
                />
                <ProductTitle>Tenis top</ProductTitle>
                <ProductPrice>R$ 200</ProductPrice>
                <AddButton>
                    <ProductAmount>
                        <Icon name="add-shopping-cart" size={16} color="#FFF" />
                        <ProductAmountText>3</ProductAmountText>
                    </ProductAmount>
                    <AddButtonText>ADICIONAR</AddButtonText>
                </AddButton>
            </Product>
            <Product>
                <ProductImage
                    source={{
                        uri:
                            'https://static.netshoes.com.br/produtos/tenis-adidas-grand-court-base-feminino/05/COL-7145-205/COL-7145-205_zoom1.jpg',
                    }}
                />
                <ProductTitle>Tenis top</ProductTitle>
                <ProductPrice>R$ 200</ProductPrice>
                <AddButton>
                    <ProductAmount>
                        <Icon name="add-shopping-cart" size={16} color="#FFF" />
                        <ProductAmountText>3</ProductAmountText>
                    </ProductAmount>
                    <AddButtonText>ADICIONAR</AddButtonText>
                </AddButton>
            </Product>
            <Product>
                <ProductImage
                    source={{
                        uri:
                            'https://static.netshoes.com.br/produtos/tenis-adidas-grand-court-base-feminino/05/COL-7145-205/COL-7145-205_zoom1.jpg',
                    }}
                />
                <ProductTitle>Tenis top</ProductTitle>
                <ProductPrice>R$ 200</ProductPrice>
                <AddButton>
                    <ProductAmount>
                        <Icon name="add-shopping-cart" size={16} color="#FFF" />
                        <ProductAmountText>3</ProductAmountText>
                    </ProductAmount>
                    <AddButtonText>ADICIONAR</AddButtonText>
                </AddButton>
            </Product>
            <Product>
                <ProductImage
                    source={{
                        url:
                            'https://static.netshoes.com.br/produtos/tenis-adidas-grand-court-base-feminino/05/COL-7145-205/COL-7145-205_zoom1.jpg',
                    }}
                />
                <ProductTitle>Tenis top</ProductTitle>
                <ProductPrice>R$ 200</ProductPrice>
                <AddButton>
                    <ProductAmount>
                        <Icon name="add-shopping-cart" size={16} color="#FFF" />
                        <ProductAmountText>3</ProductAmountText>
                    </ProductAmount>
                    <AddButtonText>ADICIONAR</AddButtonText>
                </AddButton>
            </Product>
        </ProductList>
    );
}
