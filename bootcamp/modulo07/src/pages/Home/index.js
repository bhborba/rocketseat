import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
    return (
        <ProductList>
            <li>
                <img
                    src="https://static.netshoes.com.br/produtos/tenis-adidas-grand-court-base-feminino/05/COL-7145-205/COL-7145-205_zoom1.jpg"
                    alt="Tênis"
                />
                <strong>Tênis</strong>
                <span>R$ 129,90</span>

                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#FFF" /> 3
                    </div>

                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>
            <li>
                <img
                    src="https://static.netshoes.com.br/produtos/tenis-adidas-grand-court-base-feminino/05/COL-7145-205/COL-7145-205_zoom1.jpg"
                    alt="Tênis"
                />
                <strong>Tênis</strong>
                <span>R$ 129,90</span>

                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#FFF" /> 3
                    </div>

                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>
            <li>
                <img
                    src="https://static.netshoes.com.br/produtos/tenis-adidas-grand-court-base-feminino/05/COL-7145-205/COL-7145-205_zoom1.jpg"
                    alt="Tênis"
                />
                <strong>Tênis</strong>
                <span>R$ 129,90</span>

                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#FFF" /> 3
                    </div>

                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>
            <li>
                <img
                    src="https://static.netshoes.com.br/produtos/tenis-adidas-grand-court-base-feminino/05/COL-7145-205/COL-7145-205_zoom1.jpg"
                    alt="Tênis"
                />
                <strong>Tênis</strong>
                <span>R$ 129,90</span>

                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#FFF" /> 3
                    </div>

                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>
            <li>
                <img
                    src="https://static.netshoes.com.br/produtos/tenis-adidas-grand-court-base-feminino/05/COL-7145-205/COL-7145-205_zoom1.jpg"
                    alt="Tênis"
                />
                <strong>Tênis</strong>
                <span>R$ 129,90</span>

                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#FFF" /> 3
                    </div>

                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>
            <li>
                <img
                    src="https://static.netshoes.com.br/produtos/tenis-adidas-grand-court-base-feminino/05/COL-7145-205/COL-7145-205_zoom1.jpg"
                    alt="Tênis"
                />
                <strong>Tênis</strong>
                <span>R$ 129,90</span>

                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#FFF" /> 3
                    </div>

                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>
        </ProductList>
    );
}
