import React, { Component } from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { FlatList } from 'react-native-gesture-handler';
import formatPrice from '../../util/format';
import api from '../../services/api';

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

export default class Home extends Component {
    state = {
        products: [],
    };

    async componentDidMount() {
        const response = await api.get('products');

        const data = response.data.map(product => ({
            ...product,
        }));

        this.setState({ products: data });
    }

    renderProduct = ({ item }) => {
        const { amount } = this.props;

        return (
            <Product key={item.id}>
                <ProductImage
                    source={{
                        uri: item.image,
                    }}
                />
                <ProductTitle>{item.title}</ProductTitle>
                <ProductPrice>{item.price}</ProductPrice>
                <AddButton>
                    <ProductAmount>
                        <Icon name="add-shopping-cart" size={16} color="#FFF" />
                        <ProductAmountText>3</ProductAmountText>
                    </ProductAmount>
                    <AddButtonText>ADICIONAR</AddButtonText>
                </AddButton>
            </Product>
        );
    };

    render() {
        const { products } = this.state;
        return (
            <ProductList>
                <FlatList
                    horizontal
                    data={products}
                    extraData={this.props}
                    keyExtractor={item => String(item.id)}
                    renderItem={this.renderProduct}
                />
            </ProductList>
        );
    }
}
