import {AppProps} from 'next/app';
import {Provider} from 'react-redux';
import {Store} from '@feature';

const App = ({Component, pageProps}: AppProps) => {
    return (
        <Provider store={Store.myAppStore}>
            <Component {...pageProps} />
        </Provider>
    );
};

export default App;
