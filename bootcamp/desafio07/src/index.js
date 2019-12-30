import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import './config/ReactotronConfig';
import NavigationService from './services/navigation';
import Routes from './routes';

import store from './store';

export default function App() {
    return (
        <>
            <Provider store={store}>
                <StatusBar barStyle="light-content" />
                <Routes
                    ref={navigatorRef =>
                        NavigationService.setNavigator(navigatorRef)
                    }
                />
            </Provider>
        </>
    );
}
