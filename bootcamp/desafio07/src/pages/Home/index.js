import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { FlatList } from 'react-native-gesture-handler';
import * as CartActions from '../../store/modules/cart/actions';
import { formatPrice } from '../../util/format';
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

export default function Home() {
    const [products, setProducts] = useState([]);

    const amount = useSelector(state =>
        state.cart.reduce((amountN, product) => {
            amountN[product.id] = product.amount;
            return amountN;
        }, {})
    );

    const dispatch = useDispatch();

    useEffect(() => {
        async function loadProducts() {
            const response = await api.get('/products');

            const data = response.data.map(product => ({
                ...product,
                priceFormatted: formatPrice(product.price),
            }));

            setProducts(data);
        }
        loadProducts();
    }, [products]);

    function handleAddProduct(id) {
        dispatch(CartActions.addToCartRequest(id));
    }

    function renderProduct({ item }) {
        return (
            <Product key={item.id}>
                <ProductImage
                    source={{
                        uri: item.image,
                    }}
                />
                <ProductTitle>{item.title}</ProductTitle>
                <ProductPrice>{formatPrice(item.price)}</ProductPrice>
                <AddButton onPress={() => handleAddProduct(item.id)}>
                    <ProductAmount>
                        <Icon name="add-shopping-cart" size={16} color="#FFF" />
                        <ProductAmountText>
                            {amount[item.id] || 0}
                        </ProductAmountText>
                    </ProductAmount>
                    <AddButtonText>ADICIONAR</AddButtonText>
                </AddButton>
            </Product>
        );
    }
    return (
        <ProductList>
            <FlatList
                horizontal
                data={products}
                extraData={amount}
                keyExtractor={item => String(item.id)}
                renderItem={renderProduct}
            />
        </ProductList>
    );
}
