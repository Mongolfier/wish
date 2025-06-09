import { Provider } from 'react-redux';
import store from '../config/store';

export const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}