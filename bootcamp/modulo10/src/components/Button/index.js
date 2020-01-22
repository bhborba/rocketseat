import React from 'react';
import {ActivityIndicator} from 'react-native';
import PropTypes from 'prop-types';

import {Container, Text} from './styles';

// propriedades
// children: todo conteúdo que está dentro da tag do botão
// loading: true or false
// ...rest: restante das propriedades
export default function Button({children, loading, ...rest}) {
    return (
        <Container {...rest}>
            {loading ? (
                <ActivityIndicator size="small" color="#FFF" />
            ) : (
                <Text>{children}</Text>
            )}
        </Container>
    );
}

Button.propTypes = {
    children: PropTypes.string.isRequired,
    loading: PropTypes.bool,
};

// faz o loading ser false por padrão
Button.defaultProps = {
    loading: false,
};
